import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Image,
  Alert,
} from 'react-native';
import styles from './Login.styles';
import { useNavigation } from '@react-navigation/native';
import  useAuthStore  from '../../../state/auth/authSlice';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuthStore();

  const handleSignIn = async () => {
    try {
      await signIn(email, password); //"ozlemigfer@gmail.com", "ozlemM.4"
      console.log('Success signing in:');
      navigation.navigate('MarketBranch');
    } catch (error) {
      console.error('Error signing in:', error.message);
      Alert.alert(error.message);
    }
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
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Şifre"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.sendButton} onPress={handleSignIn}>
            <Text style={styles.sendButtonText}>Giriş Yap</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
