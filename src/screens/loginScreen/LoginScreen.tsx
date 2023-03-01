import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, CollectionReference, doc, DocumentReference, getDoc } from "firebase/firestore";
import React, { useState, useContext } from "react";
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { firebaseAuth, firebaseFirestore } from "../../../firebaseConfig";
import { UserContext } from "../../UserContext";
import style from "./style";

export default function LoginScreen({navigation}: any) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {user, setUser} = useContext(UserContext);

    const onFooterLinkPress = () => {
        
    }

    const onLoginPress = () => {

    }

    return (
        <View style={style.container}>
            <TextInput 
                style={style.input} 
                placeholder="email" 
                placeholderTextColor="gray" 
                onChangeText={(text) => setEmail(text)} 
                value={email} 
                autoCapitalize="none"
            />
            <TextInput 
                style={style.input} 
                placeholder="password" 
                placeholderTextColor="gray" 
                secureTextEntry 
                onChangeText={(text) => setPassword(text)} 
                value={password} 
                autoCapitalize="none"
            />
            <TouchableOpacity style={style.button} onPress={() => onLoginPress()}>
                <Text style={style.buttonTitle}>Log in!</Text>
            </TouchableOpacity>
            <View style={style.footerView}>
                <Text style={style.footerText}>Don't have an account? <Text onPress={onFooterLinkPress} style={style.footerLink}>Sign up!</Text></Text>
            </View>
        </View>
    )
}