import { Text, View, Image } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { useState, useEffect } from 'react';


// const API_KEY = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
export default function DadJokes({ route, navigation }) {

    const [jokesetup, setJokeSetup] = useState('...');
    const [jokeAnswerVisible, setJokeAnswerVisible] = useState(false);
    const [showSeeAnswer, setShowSeeAnswer] = useState(false);
    const [jokePunchline, setJokePunchline] = useState('...');
    const { mood } = route.params;

    function showJokeAnswer() {
        return (
            <View>
                <Card borderRadius={30}>
                    <Text style={{ fontStyle: 'italic', fontSize: 16 }}>{jokePunchline}</Text>
                </Card>
                <View >
                    <Image style={{ marginBottom: 0, alignSelf: 'center', height: 170, width: 200, resizeMode: 'contain' }} source={require('./assets/Laughing-Smiley.png')} />
                </View>
            </View>

        );
    }
    const jokeSetup = useEffect(
        () => {
            const axios = require("axios").default;
            const options = {
                method: 'GET',
                url: 'https://dad-jokes.p.rapidapi.com/random/joke',
                headers: {
                    'X-RapidAPI-Key': API_KEY,
                    'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
                }
            };
            axios.request(options).then(function (response) {
                console.log(response.data);

                setJokePunchline(response.data.body[0].punchline);
                setTimeout(() => {
                    console.log("here: ", response.data.body[0].setup);
                    setJokeSetup(response.data.body[0].setup);
                    setShowSeeAnswer(true)
                }, 3500)
            }).catch(function (error) {
                console.error(error);
            });
            console.log("smtg");
        },
        []
    );

    return (
        <View style={{ flex: 1, justifyContent: 'space' }}>
            <Card borderRadius={20} flex={0.5} justifyContent='center'>
                <Text style={{ fontSize: 50, textAlign: 'center' }}> MOOD </Text>
                <Text style={{ fontSize: 30, textAlign: 'center' }}> CHANGER </Text>
            </Card>
            <View>
                <Card borderRadius={20}>
                    <Text style={{ margin: 5, fontWeight: 'bold', fontSize: 16, textAlign: 'center' }}>
                        It seems like you are a bit {mood} today :(.  Let's cheer you up with some joke
                    </Text>
                </Card>
                <View style={{ marginTop: 20 }}>
                    <Card borderRadius={30}>
                        <Text style={{ fontStyle: 'italic', fontSize: 16 }}>{jokesetup}</Text>
                    </Card>
                    {jokeSetup}
                    {jokeAnswerVisible && showJokeAnswer()}
                    {showSeeAnswer && !jokeAnswerVisible && (
                        <Button type='clear' title='See answer'
                            onPress={() => {
                                setJokeAnswerVisible(true);
                                setShowSeeAnswer(false)
                            }}
                        />
                    )}
                </View>

            </View>
        </View>
    );
}