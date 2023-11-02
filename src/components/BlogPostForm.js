import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View>
      <Text style={styles.label}>Blog Basligi Giriniz: </Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Blog Icerigini Giriniz: </Text>
      <TextInput
        style={styles.input}
        value={content}
        multiline={true}
        onChangeText={(text) => setContent(text)}
      />
      <Button title="Blogu Kaydet" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
    borderRadius: 10,
  },
  label: {
    fontSize: 20,
    marginTop: 5,
    marginBottom: 5,
    textAlign: "center",
  },
});

export default BlogPostForm;
