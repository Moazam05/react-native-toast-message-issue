import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Toast from 'react-native-toast-message';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text>React Native App Version</Text>
        <Text style={styles.versionText}>0.76.1</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          Toast.show({
            type: 'warningToast',
            props: {
              msg: 'This is a warning toast',
            },
          });
        }}>
        <Text style={styles.buttonText}>Show Toast</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 75,
  },
  versionText: {
    marginTop: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default Home;
