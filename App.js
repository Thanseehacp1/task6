import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef,useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import ProgressCircle from 'react-native-progress-circle';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
const App = () => {
  const [count, setCount]=useState(60);
  const[pause,setPause]=useState(false);
  
  
 useEffect(()=>{
 const interval= setInterval(()=>{
  if(!pause) {
      if (count> 0) {
    setCount(count-1);
        } 
      }
  },1000);
 
 
return()=>clearInterval(interval);

},);
const handlePauseToggle = () => {
  setPause(!pause);
}

const cancel=()=>{
  clearInterval(setCount(60))
}
  return (
   
    
<LinearGradient colors={['blue', 'pink',]}>
  <View style={{
//flex:1,
  justifyContent:"center",
  alignSelf:"center",
  marginTop:150,
  alignContent:"center",
  
}}>
 
      <AnimatedCircularProgress
  size={190}
  width={8}
 fill={count}
  tintColor="green"
  rotation={360}
 
  backgroundColor="white">
  {
    (fill) => (
     
  
     
        <Text style={{
          fontSize:70,
          justifyContent:"center",
          alignSelf:"center",
          alignItems:"center",
          color:"white",
          marginTop:6,
        }}>{count}</Text>
    )
  }
        
        </AnimatedCircularProgress>
      
        <View style={{
        flex:1,
          flexDirection:"row",
         justifyContent:"space-between", 
               // marginHorizontal:90,
                marginTop:30,
               //alignContent:"center",
                //alignItems:"center",
        }}>
        <TouchableOpacity 
        onPress={
          ()=>{
            handlePauseToggle();
          }
        }
        style={{
          height:35,
          width:80,
          backgroundColor:"black",
          justifyContent:"center",
          
          alignItems:"center",
        }}>
        <Text style={{
          color:"white",
        }}>Pause</Text></TouchableOpacity>
        <TouchableOpacity 
        onPress={
          ()=>{
            cancel();
          }
        }
        style={{
          height:35,
          width:80,
          backgroundColor:"black",
          justifyContent:"center",
          alignItems:"center",
        }}>
        <Text style={{
          color:"white",
        }}>Cancel</Text></TouchableOpacity>
       
       </View>
       </View>
       
  </LinearGradient>

  )
     
     }    
     
export default App

const styles = StyleSheet.create({})