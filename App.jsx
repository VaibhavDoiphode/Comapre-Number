import React, { useState } from 'react'
import { View,Text, StyleSheet, Image, TextInput, Button } from 'react-native'

function App() {

const [first,setFirst] = useState(''); 
const [second,setSecond] =useState('');
const [output,setOutput]=useState('');

  function firstChange(first){
    setFirst(first);
  }

  function secondChange(second){
    setSecond(second);
  }
  
  function onButtonPressed(){
    if(isNaN(Number(first)) || isNaN(Number(second)) ){
      setOutput('not an number');
    }else if(first == '' || second =='' ){
      setOutput('output is null');
    }else if(Number(first) >= Number(second)){
      setOutput(`greater number is ${first}`);
    }else{
      setOutput(`greater number is ${second}`);
    }
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('./assets/images/ITWorks.png')}/>
      </View>
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}> Enter Value Here  </Text>
    </View>
    <View style={styles.textContainer}>

          <TextInput 
          style={styles.textInputContainer}
          placeholder='Enter First Number'
          onChangeText={firstChange}
          value={first}
          />

          <TextInput 
          style={styles.textInputContainer}
          placeholder='Enter Second Number'
          onChangeText={secondChange}
          value={second}
          />

          <Button 
          style={styles.buttonContainer}
          title='Submit'
          onPress={onButtonPressed}
          />
      </View>
      <View style={styles.mainOutputView}>
      <View style={styles.outputView}>
        <Text style={styles.outputTextView}>  {output} </Text>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
  },
  imageContainer:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
  },
  image:{
    marginTop:40,
    height:40,
    width:360,
    padding:40,
    
  },
  headerContainer:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
  },
  headerText:{
    marginTop:40,
    fontSize:25,
    fontStyle:'italic',
    fontWeight:'bold'
  },
  textContainer:{
    padding:50
  },
  textInputContainer:{
    marginTop:10,
    marginBottom:10,
    borderWidth:1,
    borderColor: '#e4d0ff',
    fontStyle:'italic',
    fontWeight:'bold',
    padding: 8,
    borderRadius:10
  },
  outputView:{
    display:'flex',
    justifyContent:'center',
    backgroundColor:'skyblue',
    alignItems:'center',
    width:'60%',
  },
  outputTextView:{
  fontSize:20,
  fontWeight:'bold'
  },
  mainOutputView:{
    alignItems:'center'
  }

}) 

export default App