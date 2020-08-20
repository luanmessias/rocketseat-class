import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';

import api from './services/api'

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      console.log(response.data);
      setProjects(response.data);
    })
  }, [])

  async function handleAddProject() {
    const response = await api.post('projects', {
      title: `New Project ${Date.now()}`,
      owner: 'Luan Messias'
    });

    const project = response.data

    setProjects([...projects, project])
  }

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#7159C1'></StatusBar>

      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({ item: project }) => (
            <Text style={styles.project}>{project.title}</Text>
          )}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddProject}>
          <Text style={styles.buttonText}>Add project</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159C1',
    padding: 10
  },
  project: {
    color: '#FFF',
    fontSize: 20
  },
  button: {
    backgroundColor: '#FFF',
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16
  }
})