import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import axios from "axios";
//Modal
import Modal from 'react-native-modal';
//STYLE LINK
import styles from './style/style'
//Link API
const BASE_URL = 'https://rickandmortyapi.com/api';


export function Home() {

  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [selectCharacter, setSelectCharacter] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchCharacters();
  }, []);

  // Abra o modal
  const openModal = (character) => {
    setSelectCharacter(character);
    setIsModalOpen(true);
  };

  // Feche o modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const fetchCharacters = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${BASE_URL}/character?page=${page}`);
      const newCharacters = response.data.results;

      setCharacters((prevCharacters) => [...prevCharacters, ...newCharacters]);
      setPage((prevPage) => prevPage + 1);
      setHasMore(response.data.info.next !== null);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    if (!loading && hasMore) {
      fetchCharacters();
    }
  };

  const renderFooter = () => {
    if (!loading) return null;
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="small" color="#999999" />
      </View>
    );
  };



  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => openModal(item)}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{ uri: item.image }}
        />
        <Text style={styles.name}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rick and Morty Characters</Text>
      <FlatList
        data={characters}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
      />


      <Modal isVisible={isModalOpen} onBackdropPress={closeModal}>
        {selectCharacter && (
          <View style={styles.bottomSheetContent}>
            <Text style={styles.modalTitle}>{selectCharacter.name}</Text>
            <Text>Status: {selectCharacter.status}</Text>
            <Text>Species: {selectCharacter.species}</Text>
           
          </View>
        )}
      </Modal>
    </View>
  )
}
