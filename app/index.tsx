import { Text, View, Button, SafeAreaView,TextInput, ScrollView, Pressable } from 'react-native';
import { useColorScheme } from 'nativewind';
import FontAwesome from '@expo/vector-icons/FontAwesome'
import {Header} from '../components/header';
import { ButtonCard } from '../components/button-card';
import { ButtonAction } from '../components/button-action';
import { MyCard } from '../components/mycard';
import { ButtonBoxes } from '../components/button-cards';

export default function App() {

  return (
  <ScrollView className='h-screen bg-white'>
  <Header/>
  <ButtonCard title='Account' onPress={()=>{}}>
    <Text className='text-2xl font-medium'>$10.000</Text>
  </ButtonCard>
  <ScrollView horizontal className='pl-3' showsHorizontalScrollIndicator={false} >
<ButtonAction icon='money' label='PayID'  onPress={()=>{}}/>
<ButtonAction icon='barcode' label='Payment' onPress={()=>{}}/>
<ButtonAction icon='money' label='Loan' badge='$20.000' onPress={()=>{}}/>
<ButtonAction icon='money' label='Transfer' onPress={()=>{}}/>
<ButtonAction icon='money' label='Invest' onPress={()=>{}}/>
  </ScrollView>
<View>
 <MyCard icon='credit-card' text='My Card' onPress={()=>{}}>
 </MyCard>
</View>

<ScrollView horizontal className='pl-3' showsHorizontalScrollIndicator={false}>
<ButtonBoxes text='Keep track of your spending' subtext='and manage your finances easily.' onPress={()=>{}}/>
<ButtonBoxes text='Need help?' subtext='Our customer support is available 24/7.' onPress={()=>{}}/>
</ScrollView>
<View className='h-0.5 bg-gray-100 mt-8' ></View>
<ButtonCard title='Credit Card' onPress={()=>{}}>
    <Text className='text-xl text-gray-500'>Current Bills</Text>
    <Text className='font-semibold text-2xl'>$2.500</Text>
    <Text className='text-xl text-gray-500'>Available credit limit: 10.000</Text>
  </ButtonCard>
  </ScrollView>

  )
}

