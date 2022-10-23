import { View, Text } from 'react-native';
import { Button, Card } from 'react-native-elements';
export default function MoodPicker({ navigation }) {
    function goToJokes(mood) {
        navigation.navigate('DadJokes', {
            mood: mood
        });
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Card borderRadius={20} flex={0.5} justifyContent='center'>
                <Text style={{ fontSize: 50, textAlign: 'center' }}> MOOD </Text>
                <Text style={{ fontSize: 30, textAlign: 'center' }}> ANALYSER </Text>
            </Card>
            <Card borderRadius={20}>
                <Button type='clear' title="HAPPY"
                    onPress={() => goToJokes('HAPPY')}
                />
            </Card >
            <Card borderRadius={20}>
                <Button type='clear' title='SAD'
                    onPress={() => goToJokes('SAD')}
                />
            </Card >
            <Card borderRadius={20}>
                <Button type='clear' title='OKAY I GUESS'
                    onPress={() => goToJokes('OKAY')}
                />
            </Card >
            <Card borderRadius={20}>
                <Button type='clear' title='SICK'
                    onPress={() => goToJokes('SICK')}
                />
            </Card >
            <Card borderRadius={20}>
                <Button type='clear' title='NEUTRAL'
                    onPress={() => goToJokes('NEUTRAL')}
                />
            </Card >
        </View>
    );
}