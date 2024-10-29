import { View, Text, Button } from 'react-native';
import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../AppNavigation/AppNavigator';
import { useRoute } from '@react-navigation/native';

interface HomeProps {
    navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}

const Home = ({ navigation }: HomeProps) => {
   
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
        </View>
    );
};

export default Home;
