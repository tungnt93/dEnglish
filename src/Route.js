import React, { Component } from 'react';
import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import MenuWrap from "./component/MenuWrap";
import Conversation from "./component/conversation/Conversation";
import Communication from "./component/communication/Communication";
import Vocabulary from "./component/vocabulary/Vocabulary";


const ConversationStack = StackNavigator({
    Conversation: {
        screen: Conversation,
        navigationOptions:{
            title: 'Bài hội thoại'
        }
    }
});

const CommunicationStack = StackNavigator({
    Communication: {
        screen: Communication,
        navigationOptions:{
            title: 'Mẫu câu giao tiếp'
        }
    }
});

const VocabularyStack = StackNavigator({
    Vocabulary: {
        screen: Vocabulary ,
        navigationOptions:{
            title: 'Từ vựng thông dụng'
        }
    }
});

export const SideMenu = DrawerNavigator({
        ConversationMenu:{
            screen: ConversationStack
        },
        CommunicationMenu:{
            screen: CommunicationStack
        },
        VocabularyMenu:{
            screen: VocabularyStack
        },
    },
    {
        drawerWidth: 300,
        drawerPosition: 'left',
        contentComponent: props => <MenuWrap {...props} />
    }
);