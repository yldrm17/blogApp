import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { FontAwesome } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));
    return(
        <View style={styles.View}>
            <Text style={styles.title}>
                {blogPost.title}
            </Text>
            <Text>
                {blogPost.content}
            </Text>
        </View>
    )
};

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
          <TouchableOpacity
            onPress={() =>
                navigation.navigate('Edit', {id: navigation.getParam('id') })
            }
           >
            <FontAwesome name="pencil" size={30} paddingHorizontal={10} color="black" />
          </TouchableOpacity>
        ),
      };
  };

const styles = StyleSheet.create ({
    View:{
        borderWidth: 1,
        borderRadius: 10,
        padding: 20,
        margin: 10
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center'
    }
});

export default ShowScreen;