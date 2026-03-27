import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors'


const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconButton}>
        <Ionicons name="chevron-back" size={22} color={Colors.textPrimary}/>
      </TouchableOpacity>
<Text style={styles.title}>Todays Task</Text>      <TouchableOpacity style={styles.iconButton}>
        <Ionicons name="notifications-outline" size={22} color={Colors.textPrimary}/>
      </TouchableOpacity>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:1,
    paddingTop:8,
    paddingBottom:12,
  },
  iconButton:{
    width:40,
    height:40,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:Colors.surface,
  },
  title:{
    fontSize:20,
    fontWeight:'700',
    color:Colors.textPrimary,
  
  }
})