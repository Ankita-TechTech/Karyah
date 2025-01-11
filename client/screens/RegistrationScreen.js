import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
// import CheckBox from '@react-native-community/checkbox';

export default function RegistrationScreen() {
  // const [isChecked, setIsChecked] = useState(false);
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');


  const handleRegister = async () => {
    if (!name || !mobile || !email) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    try {
      const response = await axios.post('http://192.168.1.110:8080/users', {
        name,
        mobile,
        email,
      });

      if (response.status === 201) {
        Alert.alert('Success', 'User registered successfully');
        // You can navigate to another screen (e.g., login screen)
        navigation.navigate('Login');
      }
    } catch (error) {
      console.error('Registration error:', error);
      Alert.alert('Error', 'Registration failed');
    }
  };


  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>KARYAH कार्य:</Text>
        <Text style={styles.subtitle}>STREAMLINE, BUILD AND DESIGN WITH</Text>
      </View>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Full name" />
        <TextInput style={styles.input} placeholder="Phone number" keyboardType="phone-pad" />
        <TextInput style={styles.input} placeholder="Valid email" keyboardType="email-address" />
      </View>

      {/* Terms and Conditions */}
      {/* <View style={styles.checkboxContainer}>
        <CheckBox value={isChecked} onValueChange={setIsChecked} />
        <Text style={styles.checkboxText}>
          By checking the box you agree to our{" "}
          <Text style={styles.linkText}>Terms and Conditions</Text>.
        </Text>
      </View> */}

      {/* Continue Button */}
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      {/* Log In Option */}
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
      <Text style={styles.loginText}>
        Already a member? <Text style={styles.linkText}>Log In</Text>
      </Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F9F9F9",
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkboxText: {
    marginLeft: 8,
    fontSize: 14,
    color: "#666",
  },
  linkText: {
    color: "#007BFF",
    textDecorationLine: "underline",
  },
  button: {
    backgroundColor: "#334155",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginText: {
    textAlign: "center",
    fontSize: 14,
    color: "#666",
  },
});
