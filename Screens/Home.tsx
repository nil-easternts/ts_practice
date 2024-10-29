import { View, Text, Button, TextInput } from 'react-native';
import React, { useReducer, useRef, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../AppNavigation/AppNavigator';
import { useRoute } from '@react-navigation/native';
import Comp from './Comp';
import { StyleProvider } from '../Component/StyleContext';
import Products from './Products';

interface HomeProps {
    navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}
interface User {
    name: string,
    age: number
}
interface Item {
    name: string,
    age: number
}


type Mystate = {
    count: number
}

const initialState: Mystate = {
    count: 0
}

type Action = {
    type: 'INCREMENT' | 'DECREMENT'
}

const reducer = (state: Mystate, action: Action): Mystate => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 }
        case 'DECREMENT':
            return { ...state, count: state.count - 1 }



        default:
            return state
    }

}
const Home = ({ navigation }: HomeProps) => {
    const [counter, setCounter] = useState<number>(0)
    const [name, setName] = useState<string>('')
    const [isLoad, setIsLoad] = useState<boolean>(false)
    const [user, setUser] = useState<User>({
        name: '',
        age: 0
    })

    const [items, setItems] = useState<Item[]>([])
    const [details, setDetails] = useState<null>(null)

    const ref = useRef<TextInput>(null)

    const [state,dispatch]=useReducer(reducer,initialState)

    const handleNavigate = () => {
        navigation.navigate('Chats', {
            name: 'nil',
            email: 'hii@gmail.com'
        });
    };

    const increase=()=>{
        dispatch({type:'INCREMENT'})
    }

    return (
       <StyleProvider>
         <View>
            {/* <Text style={{ color: 'red',textAlign:'center' }}>{state.count}</Text>
            <Button title="Go to Chat Screen" onPress={handleNavigate} />
            <Button title="increment" onPress={increase} />
            <Comp /> */}
            <Products />
            <TextInput ref={ref} />
        </View>
       </StyleProvider>
    );
};

export default Home;
