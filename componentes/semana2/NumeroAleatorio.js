import React from "react";
import { Text } from "react-native";

export default function NumeroAleatorio(props) {
    const { min, max } = props;
    
    const resultado = Math.floor(Math.random() * (max - min + 1) + min);

    return (
        <Text>{resultado}</Text>
    );
}
 