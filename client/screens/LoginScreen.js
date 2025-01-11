import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Dimensions,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

export default function LoginScreen() {
  const [selectedTab, setSelectedTab] = useState("phone");
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>KARYAH कार्य:</Text>
        <Text style={styles.subtitle}>STREAMLINE, BUILD AND DESIGN WITH</Text>
      </View>

      {/* Login Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Login to Your Account</Text>

        {/* Tab Switcher */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[
              styles.tab,
              selectedTab === "email" && styles.activeTab,
            ]}
            onPress={() => setSelectedTab("email")}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === "email" && styles.activeTabText,
              ]}
            >
              Email
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tab,
              selectedTab === "phone" && styles.activeTab,
            ]}
            onPress={() => setSelectedTab("phone")}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === "phone" && styles.activeTabText,
              ]}
            >
              Phone Number
            </Text>
          </TouchableOpacity>
        </View>

        {/* Input Fields */}
        {selectedTab === "email" ? (
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
          />
        ) : (
          <View style={styles.phoneInputContainer}>
            <View style={styles.countryCodePicker}>
              <Picker
                selectedValue={selectedCountryCode}
                onValueChange={(itemValue) =>
                  setSelectedCountryCode(itemValue)
                }
              >
                <Picker.Item label="+91" value="+91" />
                <Picker.Item label="+1" value="+1" />
                <Picker.Item label="+44" value="+44" />
                {/* Add more country codes as needed */}
              </Picker>
            </View>
            <TextInput
              style={styles.phoneInput}
              placeholder="Phone number"
              keyboardType="phone-pad"
            />
          </View>
        )}

        {/* Send OTP Button */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("OTP")}>
          <Text style={styles.buttonText}>Send OTP</Text>
        </TouchableOpacity>
      </View>

      {/* Sign Up Option */}
      <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
            <Text style={styles.signupText}>
              Don’t have an account?{" "}
              <Text style={styles.linkText}>Sign up</Text>
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
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20,
    textAlign: "center",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    borderBottomWidth: 2,
    borderColor: "transparent",
  },
  activeTab: {
    borderColor: "#000",
  },
  tabText: {
    fontSize: 16,
    color: "#666",
  },
  activeTabText: {
    color: "#000",
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#fff",
    fontSize: 16,
    marginBottom: 10,
  },
  phoneInputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  countryCodePicker: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginRight: 10,
    overflow: "hidden",
    width: width * 0.25,
  },
  phoneInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  signupText: {
    textAlign: "center",
    fontSize: 14,
    color: "#666",
  },
  linkText: {
    color: "#007BFF",
    textDecorationLine: "underline",
  },
});
