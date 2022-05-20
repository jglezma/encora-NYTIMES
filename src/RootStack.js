import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import listMovies from './listMovies';
import detailMovie from './detailMovie';


const Stack = createNativeStackNavigator();


const RootStack = () => {
  
  return (
    <Stack.Navigator>
      <Stack.Screen
          name="Movies"
          component={listMovies}
          options={{
            // Hide header
            headerShown: false,
            contentStyle: {backgroundColor: '#fafafa'},
          }}
        />
      <Stack.Screen
        name="Detail"
        component={detailMovie}
        options={{
          contentStyle: {backgroundColor: '#fafafa'},
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;