import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    heading: {
        marginTop: 10,
        alignItems: 'center'
    },

    recipeHeading: {
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold'
    },

    body: {
        padding: 15
    },

    infoText: {
        fontSize: 15,
        color: '#d6d1d1'
    },

    description: {
        fontSize: 12,
        fontWeight: '500',
        marginBottom: 10
    },

    footer: {
        alignItems: 'center'
    },

    inputButton: {
        backgroundColor: "rgba(0, 0 , 0, 1)",
        width: 150,
        height: 40,
        borderRadius: 10,
        alignItems: 'center'
    },

    inputButtonText: {
        marginTop: 10,
        color: 'white',
        fontSize: 15
    }

})

export default styles