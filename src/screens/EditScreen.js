import react, {useContext, useState} from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
    const { state } = useContext(Context);

    const blogPost = state.find(
        (blogPost) => blogPost.id === navigation.getParam('id')
    );

    const [title, setTitle] = useState(blogPost.title);
    const [content, setContent] = useState(blogPost.content);

    return(
        <View>
            <Text>Duzenleme Ekrani - {navigation.getParam('id')} </Text>
            <TextInput value={title} onChangeText={(newTitle) => setTitle(newTitle)} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default EditScreen;