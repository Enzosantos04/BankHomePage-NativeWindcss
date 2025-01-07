import {View, Text, SafeAreaView, Pressable } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome'
export const ProfileIcon =()=>{
    return (
        <Pressable onPress={()=>{}} className='size-14 bg-white/40 justify-center items-center rounded-full'>
            <Icon name='user-o' size={21} color='black'/>
        </Pressable>
    )
}