import React, {Component} from 'react'
import {View, Text, KeyboardAvoidingView, TouchableOpacity, TextInput, Alert} from 'react-native'
import { Query } from 'react-apollo';
import {createApolloFetch} from 'apollo-fetch'
import gql from 'graphql-tag';
import styles from './LoginStyle'

console.disableYellowBox = true

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    fetch = createApolloFetch({
        uri: 'https://api.graph.cool/simple/v1/cjj6ow3yz0ly30183facwp2eo',
    });



    emailHandler = (event) => {
        const text = event.nativeEvent.text
        if(text){ this.setState({email: text})}
    }

    passwordHandler = (event) => {
        const passwd = event.nativeEvent.text
        if(passwd){ this.setState({password: passwd})}
    }

    loginHandler = () => {

        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
        });

        const email = this.state.email
        console.log(email)



        this.fetch({
            query: `  query getUser
        (
            $email: String!
           
        ) {
        allUsers(
           filter: { email: $email}
         ){
           password }}`,
            variables: { email:  email },

        }).then( res => {
           const passwd = res.data.allUsers[0].password
           if(passwd === this.state.password) {
               this.props.navigation.navigate("MainPage")
           }else {
               Alert.alert("Password is incorrect")
           }
        }).catch( () => {
                Alert.alert("Username does not exist")
        })
    }

    render() {
        return(
            <View style={styles.wrapper}>
                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                    <TextInput
                        onBlur={(event) => this.emailHandler(event)}
                        style={styles.inputFields}
                        placeholder={"Email"}/>

                    <TextInput
                        onBlur={(event) => this.passwordHandler(event)}
                        secureTextEntry={true}
                        style={styles.inputFields}
                        placeholder={"Password"}/>

                    <TouchableOpacity style={styles.inputButton} onPress={() => this.loginHandler()}>
                        <Text style={styles.inputButtonText}>LOG IN</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

export default Login