import {View, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProfileIcon } from './profile-icon';
import { ButtonIcon } from './button-icon';
export const Header =()=>{
    return (
        <SafeAreaView className='bg-nubank text-black h-44'>
        <View className='flex-row justify-between px-4 mb-4'>
            <ProfileIcon/>
            <View className='flex-row'>
                <ButtonIcon icon='eye-slash' onPress={()=>{}}/>
                <ButtonIcon icon='question-circle-o' onPress={()=>{}}/>
                <ButtonIcon icon='envelope-o' onPress={()=>{}}/>
            </View>
        </View>
        <View className='px-4 '>
            <Text className='text-black font-semibold text-2xl' >Hi, Carlos Henrique</Text>
        </View>
        </SafeAreaView>
    )
}