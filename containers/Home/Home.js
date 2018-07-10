import React, {Component} from 'react'
import {View, Text, TouchableOpacity, ScrollView, ActivityIndicator, FlatList, RefreshControl} from 'react-native'

import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styles from './HomeStyle'


const GET_ALL_RECIPES = gql`{
  allRecipes {
    id
    title
    description
    instructions,
    ingredients
  }
}`;


class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }


    static navigationOptions = ({ navigation }) => ({
        title: "Main Page",
        headerTitleStyle : {textAlign: 'center',alignSelf:'center'},
        headerStyle :{
            backgroundColor:'#FFFFFF',
        }
    });

    keyExtractor = (item) => item.id;

    renderItem = ({item: recipe}) => (

        <TouchableOpacity onPress={() => this.detailedInfo(recipe)}>
            <View style={styles.newRecipe}>
                <View style={styles.recipe}>
                    <Text style={styles.recipeTitle}>{recipe.title}</Text>
                    <Text style={styles.reciperDescription}>{recipe.description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )

    detailedInfo = (recipe) => {
        this.props.navigation.navigate("InfoPage", {recipes: recipe})
    }

    render() {

        return (
            <View style={styles.wrapper}>
                    <ScrollView>
                        <Query query={GET_ALL_RECIPES}>
                            {({loading, data}) => (
                                loading
                                    ? <ActivityIndicator />
                                    : (
                                        <FlatList
                                            keyExtractor={this.keyExtractor}
                                            data={data ? data.allRecipes : []}
                                            renderItem={this.renderItem}/>
                                    )
                            )}
                        </Query>
                    </ScrollView>
                <TouchableOpacity style={styles.roundButton}
                    onPress={() => this.props.navigation.navigate("AddPage")}>
                    <View>
                        <Text style={styles.buttonText}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Home