import { View, Text, Button, TextInput } from 'react-native';
import React, { useRef, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../AppNavigation/AppNavigator';
import { useRoute } from '@react-navigation/native';

interface HomeProps {
    navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}
interface User{
    name:string,
    age:number
}
interface Item{
    name:string,
    age:number
}
const Home = ({ navigation }: HomeProps) => {
const [counter,setCounter]=useState<number>(0)
const [name,setName]=useState<string>('')
const [isLoad,setIsLoad]=useState<boolean>(false)
const [user,setUser]=useState<User>({
name:'',
age:0
})

const [items,setItems]=useState<Item[]>([])
const [details,setDetails]=useState<null>(null)

const ref=useRef<TextInput>(null)
   
    const handleNavigate = () => {
        navigation.navigate('Chats',{
            name:'nil',
            email:'hii@gmail.com'
        });
    };

    return (
        <View>
            <Text style={{ color: 'red' }}>Homes</Text>
            <Button title="Go to Chat Screen" onPress={handleNavigate} />
            <TextInput ref={ref} />
        </View>
    );
};

export default Home;
