import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
// import Constants from 'expo-constants';

const todos = [
{todo: "Create project"},
{todo: "Deploy Project"},
{todo: "Maintain Project"}]

function Item({ title }) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }

export default class DisplayList extends Component{
    state={
       todos: {
        todo1: "Create project",
        todo2: "Deploy Project",
        todo3: "Maintain Project"
       }
    }

    

    render(){
     
        return(
            <SafeAreaView style={styles.container} >
                <FlatList data={todos} renderItem={({ item }) => <Item title={item.todo} />}/>
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
    },
    item: {
      backgroundColor: 'grey',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
  