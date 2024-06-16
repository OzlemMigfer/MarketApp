import React, { useState } from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import styles from './AddBranchModal.styles';
import useBranchStore from '../../../state/branch/branchSlice'; 

const AddBranchModal = ({ visible, onClose }) => {
    const [branchName, setBranchName] = useState('');
    const addBranch = useBranchStore((state) => state.addBranch);
    const isSaveDisabled = branchName.trim() === '';

    const handleSave = async () => {
        try {
            await addBranch(branchName);
            onClose();
        } catch (error) {
            console.error('Error adding branch:', error.message);
            Alert.alert("Eklenemedi");
        }
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Market Şubesi Ekle</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Market Şubesi Adı"
                        value={branchName}
                        onChangeText={(text) => setBranchName(text)}
                    />
                    <TouchableOpacity
                        style={[
                            styles.button,
                            isSaveDisabled && { backgroundColor: 'gray' }
                        ]}
                        onPress={handleSave}
                        disabled={isSaveDisabled}
                    >
                        <Text style={styles.buttonText}>Kaydet</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default AddBranchModal;