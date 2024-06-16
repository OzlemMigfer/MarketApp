import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './BranchCard.styles';

const BranchCard = ({ branchName, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.branchName}>{branchName}</Text>
    </TouchableOpacity>
  );
};

export default BranchCard;
