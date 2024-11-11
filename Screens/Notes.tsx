import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {addNote, Note, noteSelector} from '../redux/notesSlice';

const Notes = () => {
  const [title, setTitle] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  const dispatch = useAppDispatch();
  const notes = useAppSelector(noteSelector);

  console.log(notes);

  return (
    <View>
      <TextInput
        placeholder="Enter a note"
        style={{
          height: 50,
          width: '90%',
          marginTop: 20,
          borderWidth: 1,
          alignSelf: 'center',
          paddingLeft: 20,
        }}
        value={title}
        onChangeText={txt => setTitle(txt)}
      />
      <TextInput
        placeholder="Enter a description"
        style={{
          height: 50,
          width: '90%',
          marginTop: 20,
          borderWidth: 1,
          alignSelf: 'center',
          paddingLeft: 20,
        }}
        value={desc}
        onChangeText={txt => setDesc(txt)}
      />
      <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          alignSelf: 'center',
          marginTop: 20,
          backgroundColor: 'black',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => dispatch(addNote({title, desc}))}>
        <Text style={{color: 'white'}}>Add Note</Text>
      </TouchableOpacity>
      <FlatList
        data={notes}
        renderItem={({item}: {item: Note}) => {
          return (
            <View
              style={{
                height: 40,
                width: '90%',
                borderWidth: 1,
                alignSelf: 'center',
                marginTop: 10,
              }}>
              <Text style={{textAlign: 'center'}}>{item?.title}</Text>
              <Text style={{textAlign: 'center'}}>{item?.desc}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Notes;

const styles = StyleSheet.create({});
