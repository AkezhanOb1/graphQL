import React, {Component} from 'react'
import {View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert} from 'react-native'
import styles from './RegistrationStyle'
import {Mutation} from 'react-apollo'
import gql from "graphql-tag"

const CREATE_RECIPE = gql`
        mutation registration
        (
            $name: String!
            $email: String!
            $password: String!
            $age: Int!
        ) {
        createUser(
            name: $name
            email: $email
            password: $password
            age: $age
         ){
            id
            email
            name
            password
            age
           }}`;

class Registration extends Component{

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            name: '',
            password: '',
            age: 0
        }
    }

    registrationHandler = (createRecipe) => {
        if(this.state.password && this.state.email && this.state.name && this.state.age) {
            createRecipe({
                variables: {
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.password,
                    age: this.state.age,
                }
            })
            this.props.navigation.navigate("Login")
        }else {
            Alert.alert("All Fields Are Required")
        }

    }

    emailHandler = (event) => {
        const text = event.nativeEvent.text
        if(text) { this.setState({email: text}) }
    }

    nameHandler = (event) => {
        const name = event.nativeEvent.text
        if(name) { this.setState({name: name})}
    }

    passwordHandler = (event) => {
        const password = event.nativeEvent.text
        if(password) { this.setState({ password: password})}
    }

    ageHandler = (event) => {
        const age = parseInt(event.nativeEvent.text)
        if(age) { this.setState({ age: age })}
    }

    render() {
        return(
            <View style={styles.wrapper}>
                <Mutation mutation={CREATE_RECIPE}>
                    {(createRecipe, {data, loading}) => (
                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                    <TextInput
                        onEndEditing={(event) => this.emailHandler(event)}
                        style={styles.inputFields}
                        placeholder={"Email"}/>

                    <TextInput
                        onEndEditing={(event) => this.nameHandler(event)}
                        style={styles.inputFields}
                        placeholder={"Name"}/>

                    <TextInput
                        onEndEditing={(event) => this.passwordHandler(event)}
                        secureTextEntry={true}
                        style={styles.inputFields}
                        placeholder={"Password"}/>

                    <TextInput
                        onEndEditing={(event) => this.ageHandler(event)}
                        style={styles.inputFields}
                        placeholder={"Age"}/>

                    <TouchableOpacity style={styles.inputButton} onPress={() => this.registrationHandler(createRecipe)}>
                        <Text style={styles.inputButtonText}>CREATE ACCOUNT</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
                    )}
                </Mutation>
            </View>
        )
    }
}

export default Registration