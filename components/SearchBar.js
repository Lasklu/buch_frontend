import * as React from 'react';
import Colors from "../constants/Colors";
import {SearchBar} from "react-native-elements";


export default () => {

    return (
        <SearchBar
            onClearText={''}
            searchIcon={{size: 24, color: Colors.tabIconSelected}}
            placeholderTextColor={'gray'}
            placeholder=" Was willst du lesen?"
            inputContainerStyle={{
                backgroundColor: 'white',
                borderRadius: 100,
            }}
            containerStyle={{

                borderWidth: 0, //no effect

                borderBottomColor: 'transparent',
                borderTopColor: 'transparent',
                backgroundColor: 'transparent',
                color: 'white',
                shadowColor: "#000",
                shadowOffset: {
                    width: 2,
                    height: 4,
                },
                shadowOpacity: 0.3,
                shadowRadius: 4,
                elevation: 18,
            }}
        />
    );
}
