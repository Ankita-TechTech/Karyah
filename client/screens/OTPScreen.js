import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const { width } = Dimensions.get("window");

export default function OTPScreen() {
  const [selectedTab, setSelectedTab] = useState("phone");
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

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
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Send OTP</Text>
        </TouchableOpacity>
      </View>

      {/* Phone Verification Section */}
      <View style={styles.verificationContainer}>
        <Text style={styles.verificationTitle}>Phone Verification</Text>
        <Text style={styles.verificationSubtitle}>
          Enter 6 digit verification code sent to your phone number
        </Text>
        <View style={styles.otpContainer}>
          {otp.map((value, index) => (
            <TextInput
              key={index}
              style={styles.otpInput}
              keyboardType="numeric"
              maxLength={1}
              value={value}
              onChangeText={(text) => handleOtpChange(text, index)}
            />
          ))}
        </View>

        {/* Verify Button */}
        <TouchableOpacity style={styles.verifyButton}>
          <Text style={styles.buttonText}>VERIFY</Text>
        </TouchableOpacity>

        {/* Resend Code */}
        <TouchableOpacity>
          <Text style={styles.resendText}>Resend Code</Text>
        </TouchableOpacity>
      </View>
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
    marginBottom: 20,
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
  verificationContainer: {
    marginTop: 30,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  verificationTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  verificationSubtitle: {
    textAlign: "center",
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  otpInput: {
    width: 40,
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    textAlign: "center",
    fontSize: 18,
    backgroundColor: "#fff",
  },
  verifyButton: {
    backgroundColor: "#334155",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  resendText: {
    textAlign: "center",
    color: "#007BFF",
    textDecorationLine: "underline",
    marginTop: 10,
  },
});
