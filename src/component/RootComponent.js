import React, {Component} from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
// import Menu from './Menu';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default class RootComponent extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerLeft: <TouchableOpacity onPress={() => {
            navigation.navigate('DrawerOpen')
        }}>
            <Text style={{marginLeft: 10}}>
                <SimpleLineIcons name="menu" style={{color: 'red', fontSize: 30}}/>
            </Text>
        </TouchableOpacity>,
        headerTitleStyle: {textAlign: 'center', alignSelf: 'center', color: 'red'},
        headerStyle: {
            // backgroundColor: navigation.state.params.theme,
            backgroundColor: '#fff',
            height: 40,
            elevation: 0,       //remove shadow on Android
            shadowOpacity: 0,  //remove shadow ios
        }
    });

    constructor(props) {
        super(props);
    }
}