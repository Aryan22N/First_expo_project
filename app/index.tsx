import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react'
import Colors from '../constants/Colors'
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { TASKS } from '@/constants/task';
import Header from '@/components/Header';
import DateSelector from '@/components/DateSelector';
import FilterTabs from '@/components/FilterTabs';



const Index = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container,{paddingTop: insets.top}]}>
      <StatusBar style="light" />
        <FlatList
          data={TASKS}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Text>{item.title}</Text>}
          style={styles.list}
          ListHeaderComponent={
            <>
              {/* Header */}
              <Header />
              {/* DataSelector */}
              <DateSelector />
              {/* FiltersTabs */}
              <FilterTabs />
            </>
          }
        />

    </View>
  )
}

export default Index;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:Colors.background,
  },

  list:{
    padding:24,
  }

})