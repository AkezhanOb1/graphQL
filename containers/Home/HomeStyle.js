import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },

    roundButton: {
        bottom: 10,
        right: 10,
        backgroundColor: "rgba(0, 0 , 0, 1)",
        width: 60,
        height: 60,
        borderRadius: 50,
        alignContent: 'center',
        position: 'absolute'
    },
    buttonText: {
        marginTop: 9,
        marginLeft: 20,
        color: 'white',
        fontSize: 30
    },

    newRecipe: {
        backgroundColor: '#efefef',
        borderWidth: 0.5,
        borderColor: '#000',
        padding: 15
    },
    recipe: {

    },
    recipeTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5

    },
    reciperDescription: {
        fontSize: 15
    }

})


export default styles