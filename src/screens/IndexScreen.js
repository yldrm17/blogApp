import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);

  return (
    <View>
      <Text>Index Sayfasi</Text>
      <Button onPress={addBlogPost} title="Blog Ekle" />
      <FlatList
      data={data}
      keyExtractor={(blogPost) => blogPost.title }
      renderItem={({ item }) => {
        return <Text>{item.title}</Text>
      }}
       />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;