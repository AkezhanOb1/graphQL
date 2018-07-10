import React, {Component} from 'react'
import {ActivityIndicator, Alert, Text, TextInput, TouchableOpacity, View, Image, Button} from 'react-native'
import { ImagePicker, Permissions } from 'expo'
import Expo from 'expo'
import {Mutation} from 'react-apollo'
import gql from "graphql-tag"
import styles from './AddRecipeStyle'

const CREATE_RECIPE = gql`
        mutation addRecipe
        (
            $description: String!
            $ingredients: [String!]!
            $instructions: [String!]!
            $title: String!
        ) {
        createRecipe(
            description: $description
            ingredients: $ingredients
            instructions: $instructions
            title: $title 
         ){
            id
            title
            description
            ingredients
            instructions }}`;


class  AddRecipe extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "ADD RECIPE",
        headerTitleStyle : {textAlign: 'center',alignSelf:'center'},
        headerStyle:{
            backgroundColor:'#FFFFFF',
        }
    });

    state = {
        title: '',
        description: '',
        ingredients: [],
        instructions: [],
        imageURL: ''
    }

    titleHandler = (event) => {
        const title = event.nativeEvent.text
        this.setState({title: title})
    }
    descriptionHandler = (event) => {
        const description = event.nativeEvent.text
        this.setState({description: description})
    }
    ingredientsHandler = (event) => {
        const ingredientsList = event.nativeEvent.text.split(',')
        this.setState({ingredients: ingredientsList})
    }
    instructionsHandler = (event) => {
        const instructionsList = event.nativeEvent.text.split(',')
        this.setState({instructions: instructionsList})
    }

    stateChecker = (createRecipe) => {
        if(this.state.description && this.state.ingredients && this.state.instructions && this.state.title) {
            createRecipe({
                variables: {
                    title: this.state.title,
                    description: this.state.description,
                    instructions: this.state.instructions,
                    ingredients: this.state.ingredients,
                    image: this.state.imageURL
                }
            })
            this.props.navigation.navigate("MainPage")
        }else {
            Alert.alert("Fill every field")
        }

    }


    imageUpload = async() => {
        await Permissions.askAsync(Permissions.CAMERA_ROLL);
        const photo = await ImagePicker.launchImageLibraryAsync();

        console.log("ALOI")
        const data = new FormData();
        data.append('data', {
            uri: photo.uri,
            type: 'multipart/form-data', // or photo.type
            name: 'testPhotoName.png'
        });
        console.log(data)
        try{
            const res = await fetch("https://api.graph.cool/file/v1/cjj6ow3yz0ly30183facwp2eo", {
                method: 'post',
                body: data
            })

            const resJSON = await res.json()
            this.setState({
                imageURL: resJSON.url
            })
        }
        catch (e) {
            console.error(e);
        }
    }

        render() {
        let { image } = this.state;
        return (
            <View style={styles.wrapper}>
                    <Mutation mutation={CREATE_RECIPE}>
                        {(createRecipe, {data, loading}) => (
                            <View style={styles.innerWrapper}>
                                <TextInput
                                    onBlur={this.titleHandler}
                                    style={styles.inputFields}
                                    placeholder={"Title"}/>

                                <TextInput
                                    onBlur={this.descriptionHandler}
                                    style={styles.inputFields}
                                    placeholder={"Description"}/>

                                <TextInput
                                    onBlur={this.ingredientsHandler}
                                    style={styles.inputFields}
                                    placeholder={"Ingredients"}/>

                                <TextInput
                                    onBlur={this.instructionsHandler}
                                    style={styles.inputFields}
                                    placeholder={"Instructions"}/>

                                <TouchableOpacity
                                    style={styles.inputButton}
                                    onPress={() => this.stateChecker(createRecipe)}>
                                    { loading ? <ActivityIndicator /> : (<Text style={styles.inputButtonText}>Create Recipe</Text>)}
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.inputButton}
                                    onPress={() => this.imageUpload()}>
                                    <Text style={styles.inputButtonText}>Take a photo</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </Mutation>
            </View>
        )
    }
}
export default AddRecipe

