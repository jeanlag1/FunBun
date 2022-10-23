import { View, StyleSheet, Text, StatusBar } from 'react-native';
import { Icon, Button, Card } from 'react-native-elements';

export default function Dashboard({ navigation }) {
  return (
    <View style={styles.container}>
      <Card flex={0.7} borderRadius={20} width='90%' justifyContent='flex-end' >
        <Icon size={200} name="person" />
        <Text style={{ fontSize: 30 }}>Welcome Jean, ... </Text>
        <StatusBar style="auto" />
      </Card>
      <View style={styles.container}>
        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}> Hi,</Text>
        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 17 }} >How are you doing today? :)</Text>
      </View>
      <View style={{ width: '90%', marginBottom: 50 }}>
        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 17 }}>Let's start by taking a picture or selecting your mood by clicking on the camera or the emoji below</Text>
        <StatusBar style="auto" />
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 15, justifyContent: 'space-between' }}>
        <View style={{ marginHorizontal: 40 }}>
          <Button
            type="clear"
            icon={
              <Icon size={55} name="camera" />
            }
            onPress={
              () => {
                navigation.navigate('Camera');
              }
            }
          />
        </View>
        <View style={{ marginHorizontal: 40 }}>
          <Button
            type="clear"
            icon={
              <Icon size={55} name="face" />
            }
            onPress={
              () => {
                navigation.navigate('MoodPicker');
              }
            }
          />
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
    width: "50%",
  },
  cameraContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  cameraButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  cameraButton: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});