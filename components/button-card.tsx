import {View, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProfileIcon } from './profile-icon';
import { ButtonIcon } from './button-icon';
import { Pressable } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome'
import { ReactNode } from 'react';

type Props = {
    title:string;
    onPress: () => void;
    children: ReactNode
}
export const ButtonCard =({title, onPress, children}:Props)=>{
    return (
        <Pressable onPress={onPress} className='px-4 py-6'>
            <View className='mb-4 flex-row justify-between items-center'>
                <Text className='text-2xl font-semibold'>{title}</Text>
                <View className='mr-3'>
                <Icon name='chevron-right' size={16} color="black"/>
                </View>
            </View>
            {children}
        </Pressable>
    )
}