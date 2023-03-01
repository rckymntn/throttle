import React, { useState, useContext } from "react";
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import style from "./style";
import { firebaseAuth, firebaseFirestore } from "../../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, CollectionReference, doc, DocumentReference, setDoc } from "firebase/firestore";
import { UserContext } from "../../UserContext";


export default function RegistrationScreen({navigation}: any) {
    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const {user, setUser} = useContext(UserContext);


    const onFooterLinkPress = () => {
        
    }

    const onRegisterPress = () => {

    }

    return (
        <View style={style.container}>
            <TextInput
                style={style.input}
                placeholder='Username'
                placeholderTextColor="gray"
                onChangeText={(text) => setUsername(text)}
                value={username}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput
                style={style.input}
                placeholder='First name'
                placeholderTextColor="gray"
                onChangeText={(text) => setFirstName(text)}
                value={firstName}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput
                style={style.input}
                placeholder='Last name'
                placeholderTextColor="gray"
                onChangeText={(text) => setLastName(text)}
                value={lastName}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput
                style={style.input}
                placeholder='E-mail'
                placeholderTextColor="gray"
                onChangeText={(text) => setEmail(text)}
                value={email}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput
                style={style.input}
                placeholderTextColor="gray"
                secureTextEntry
                placeholder='Password'
                onChangeText={(text) => setPassword(text)}
                value={password}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput
                style={style.input}
                placeholderTextColor="gray"
                secureTextEntry
                placeholder='Confirm Password'
                onChangeText={(text) => setConfirmPassword(text)}
                value={confirmPassword}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TouchableOpacity style={style.button} onPress={() => onRegisterPress()}>
                <Text style={style.buttonTitle}>Register!</Text>
            </TouchableOpacity>
            <View style={style.footerView}>
                <Text style={style.footerText}>Already have an account? <Text onPress={onFooterLinkPress} style={style.footerLink}>Log in!</Text></Text>
            </View>
        </View>
    )
}