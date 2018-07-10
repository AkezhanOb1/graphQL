import React from 'react';
import Home from './containers/Home/Home'
import AddPage from './components/AddRecipe/AddRecipe'
import {createStackNavigator} from 'react-navigation'
import { ApolloProvider } from "react-apollo";
import ApolloClient from 'apollo-boost';
import DetailedInfo from './components/DetiledInfo/DetailedInfo'
import HelloPage from './components/HelloPage/HelloPage'
import Registration from './components/Authentication/Registration/Registration'
import Login from './components/Authentication/Login/Login'

const client = new ApolloClient({
    uri: 'https://api.graph.cool/simple/v1/cjj6ow3yz0ly30183facwp2eo'
});

export default class App extends React.Component {

    render() {
        return (
            <ApolloProvider client={client}>
                    <AppStackNavigator />
            </ApolloProvider>

        );
    }
}

const AppStackNavigator = createStackNavigator({
    MainPage: Home,
    HelloPage: HelloPage,
    Registration: Registration,
    Login: Login,
    AddPage: AddPage,
    InfoPage: DetailedInfo
})
HelloPage.navigationOptions = ({ navigation }) => ({
    header: null
});
Registration.navigationOptions = ({ navigation }) => ({
    title: "REGISTRATION",
    headerTitleStyle : {textAlign: 'center',alignSelf:'center'},
    headerStyle :{
        backgroundColor:'#FFFFFF',
    }
});
Login.navigationOptions = ({ navigation }) => ({
    title: "LOGIN",
    headerTitleStyle : {textAlign: 'center',alignSelf:'center'},
    headerStyle :{
        backgroundColor:'#FFFFFF',
    }
});