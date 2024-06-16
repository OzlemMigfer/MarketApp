import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Image,
  Alert,
  FlatList,
  Modal,
} from 'react-native';
import styles from './MarketBranch.styles';
import { useNavigation } from '@react-navigation/native';
import BranchCard from '../../../components/Card/BranchCard/BranchCard';
import useBranchStore from '../../../state/branch/branchSlice';
import AddBranchModal from '../../../components/Modal/AddBranchModal/AddBranchModal';

const MarketBranch = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  const branches = useBranchStore((state) => state.branches);
  const fetchBranch = useBranchStore((state) => state.fetchBranch);

  useEffect(() => {
    fetchBranch();
  }, []);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.logoImage}
            source={require('../../../../assets/logo/logo.png')}
            resizeMode='contain'
          />
          <Text style={styles.brandName}>MİĞFER MARKET</Text>
        </View>
        <View style={styles.body}>
          <TouchableOpacity style={styles.addButton} onPress={openModal}>
            <Text style={styles.addButtonText}>Market Şubesi Ekle</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <FlatList
            data={branches}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <BranchCard branchName={item.branchName} />
            )}
          />
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <AddBranchModal onClose={closeModal} />
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default MarketBranch;
