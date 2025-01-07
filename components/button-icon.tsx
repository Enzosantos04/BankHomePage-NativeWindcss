import {View, Text, SafeAreaView,Pressable } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome'

type Props={
    icon: string,
    onPress: () => void
}
export const ButtonIcon =({icon, onPress}: Props)=>{
    return (
        <Pressable className='size-14 justify-center items-center rounded-full'>
            <Icon name={icon} size={22} color='black'/>
        </Pressable>
    )
}