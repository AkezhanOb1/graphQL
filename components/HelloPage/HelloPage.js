import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import styles from './HelloPageStyle'

const HelloPage = (props) => {

    registrationHandler = () => {props.navigation.navigate("Registration")}
    loginHangler = () => {props.navigation.navigate("Login")}

    return(
        <View style={styles.wrapper}>
            <TouchableOpacity style={styles.button} onPress={() => registrationHandler()}>
                <Text style={styles.textItem}>REGISTRATION</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => loginHangler()}>
                <Text style={styles.textItem}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HelloPage