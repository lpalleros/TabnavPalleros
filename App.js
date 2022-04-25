import {useState} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StyleSheet,View, Text } from 'react-native';
import {HOME, CART} from "./constants/routes";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { HomeScreen, CartScreen } from './screens';

export default function App() {
  const BottomTabs = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <BottomTabs.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
        }}
      >
        <BottomTabs.Screen 
          name={HOME} 
          component={HomeScreen} 
          options={
            {
              tabBarIcon: ({focused}) => (
                <View style={styles.items}>
                  <FontAwesome name='cart-plus' size={16} color="black" />
                  <Text>Buy</Text>
                </View>
              )
            }
          }
        />
        <BottomTabs.Screen
          name={CART} 
          component={CartScreen}
          options={
            {
              tabBarIcon: ({focused}) => (
                <View style={styles.items}>
                  <FontAwesome name='question' size={16} color="black" />
                  <Text>Help</Text>
                </View>
              )
            }
          }
        />
      </BottomTabs.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  items: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});
