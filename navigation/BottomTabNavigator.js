import * as React from 'react';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import {BlurView} from "expo-blur";
import Colors from '../components/carousel_small/styles/index.style'
const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });
    const TabBar = (props) => (
        <BlurView
            style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
            }}
            tint="default"
            intensity={100}
        >
            <BottomTabBar {...props} />
        </BlurView>
    );
  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}  tabBar={TabBar} tabBarOptions={{
        activeTintColor: Colors.tabIconSelected,
        inactiveTintColor: 'gray',
        style: {

            backgroundColor: Platform.OS === 'ios' ? 'transparent' : 'white'
        }
    }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Get Started',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
            headerOptions: {
                headerShown: false,
            },
          }}
      />
      <BottomTab.Screen
        name="Links"
        component={LinksScreen}

        options={{
          title: 'Resources',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'How to get started';
    case 'Links':
      return 'Links to learn more';
  }
}
