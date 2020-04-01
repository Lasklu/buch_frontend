import * as React from "react";
import HomeScreen from "./HomeScreen";

import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import {createAppContainer} from "react-navigation";
import BookDetailScreen from "./BookDetailScreen";

const stackNavigator =  createSharedElementStackNavigator(
    {
    Home: HomeScreen,
        Book: BookDetailScreen,
    },
{
    initialRouteName: 'Home',
    mode: "modal",
        headerMode: "none",
    defaultNavigationOptions: {
        cardStyle:{
            backgroundColor:'transparent'
        }
   }}

);

export default stackNavigator;
