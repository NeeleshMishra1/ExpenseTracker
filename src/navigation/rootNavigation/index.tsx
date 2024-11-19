import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splace from "../../screens/splaceScreen";
import Detail from "../../screens/detailScreen";
import Home from "../../screens/homeScreen";
import AddTransaction from "../../screens/addTransaction";


const Stack = createNativeStackNavigator();

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                 <Stack.Screen
                    name="Splace"
                    component={Splace}
                    options={{ headerShown: false }}
                />
                 <Stack.Screen
                    name="detailscreen"
                    component={Detail}
                    options={{ headerShown: false }}
                />
                 <Stack.Screen
                    name="home"
                    component={Home}
                    options={{ headerShown: false }}
                />
                 <Stack.Screen
                    name="add"
                    component={AddTransaction}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation;