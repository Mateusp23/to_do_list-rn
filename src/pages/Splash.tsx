import React from 'react';
import { Text, View } from 'react-native';

export function Splash() {
    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>To.Do</Text>
            <Text>Seu aplicativo
                favorito de afazeres
            </Text>
        </View>
    )
}