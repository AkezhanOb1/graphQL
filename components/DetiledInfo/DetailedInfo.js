import React from 'react'
import {View, Text, ScrollView, Share, TouchableOpacity} from 'react-native'
import styles from './DetailedInfoStyle'

const DetailedInfo = (props) => {
    const recipe = props.navigation.getParam("recipes")
    shareItem = () => {
        Share.share({
            message: `Try to cook ${recipe.title} \n here description: \n ${recipe.description}`,
            url: 'https://n17r.com',
        }, {
            excludedActivityTypes: [
                'com.apple.UIKit.activity.PostToTwitter'
            ]
        })
    }
    return (
        <View style={styles.wrapper}>
            <ScrollView>
                <View style={styles.heading}>
                    <Text style={styles.recipeHeading}>{recipe.title}</Text>
                </View>
                <View style={styles.body}>
                        <Text style={styles.infoText}>Description:</Text>
                        <Text style={styles.description}>{recipe.description}</Text>
                        <Text style={styles.infoText}>instructions:</Text>
                        <Text style={styles.description}>{recipe.instructions.join(', ')}</Text>
                        <Text style={styles.infoText}>ingredients:</Text>
                        <Text style={styles.description}>{recipe.ingredients.join(', ')}</Text>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity
                        onPress={shareItem}
                        style={styles.inputButton}>
                        <Text style={styles.inputButtonText}>Share</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default DetailedInfo