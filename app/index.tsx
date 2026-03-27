import DateSelector from '@/components/DateSelector';
import Header from '@/components/Header';
import { FilterOption, TASKS } from '@/constants/task';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FilterTabs from '../components/FilterTabs';
import TaskCard from '../components/TaskCard';
import Colors from '../constants/Colors';



const Index = () => {
  const insets = useSafeAreaInsets();

  const [activeFilter, setActiveFilter] = useState<FilterOption>("ALL");


  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar style="light" />
      <FlatList
        data={TASKS}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TaskCard task={item} />}
        ListHeaderComponent={
          <>
            {/* Header */}
            <Header />
            {/* DataSelector */}
            <DateSelector />
            {/* FiltersTabs */}
            <FilterTabs selected={activeFilter} onSelect={setActiveFilter} />

          </>
        }
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />

    </View>
  )
}

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  list: {
    padding: 10,
  }

})