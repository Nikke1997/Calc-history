import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useState } from 'react';

export default function App() {
const [result, setResult] = useState('');
const [input, setInput] = useState('');
const [input1, setInput1] = useState('');
const [data, setData] = useState([]);

const listHeader = () => {
return (
<View>
<Text style={{fontSize: 18, fontWeight: 'bold'}}>History</Text>
<View style={{ height:1, backgroundColor: 'blue'}} />
</View>


)

}


const add = () => {
  const final = parseInt(input) + parseInt(input1);
setResult(final);
setData([...data,  {key: input + ' + ' + input1 + ' = ' + final}]);
}

const subtract = () => {
  const final = parseInt(input) - parseInt(input1); 
setResult(final);
setData([...data, {key: input + ' - ' + input1 + ' = ' + final}]);
}

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <View style={styles.all}>
       <Text> Result: {result}</Text>
    <TextInput style={styles.textbox} keyboardType='number-pad'  onChangeText={setInput}></TextInput>
    <TextInput style={styles.textbox} keyboardType='number-pad' onChangeText={setInput1}></TextInput>
       <View style={styles.operators}>
        <View style={styles.buttons}>
    <Button onPress={add} title="+"/>
    </View>
    <View style={styles.buttons}>
        <Button onPress={subtract} title="-"/>
        </View>
        </View>
        </View>
        <StatusBar style='auto'/>
        <View style={styles.list}>
        
          <FlatList
          data={data}
          renderItem={({item}) => <Text>{item.key}</Text>}
          keyExtractor={(item, index) => index.toString()}
          ListHeaderComponent={listHeader}
          >
          </FlatList>
          </View>
    </View>
    </TouchableWithoutFeedback>  
     );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  all: {
flex: 2,
justifyContent: 'center',
alignItems: 'center'
  },

  textbox: {
borderColor: 'black',
borderWidth: 2,
padding: 8,
width: 150,
margin: 7
  },
  operators: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
marginTop: 10
  },
  buttons: {
width: '20%',
borderColor: 'black',
borderWidth: 2,
  },
  list: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
