import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 35
    },

    inputFields: {
        marginTop: 15,
        borderRadius: 10,
        width: '80%',
        height: 40,
        borderColor: '#000000',
        borderWidth: 1,
        paddingHorizontal: 15
    },

    inputButton: {
        backgroundColor: "rgba(0, 0 , 0, 1)",
        marginTop: 15,
        marginBottom: 5,
        width: 200,
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