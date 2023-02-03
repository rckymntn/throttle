import React, { useState, useMemo } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, RegistrationScreen } from './src/screens';
import { UserContext } from './src/UserContext';

const Stack = createStackNavigator();

export default function App() {

	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState(null);

	const userMemo = useMemo(() => ({user, setUser}), [user, setUser]);

	return (
		<UserContext.Provider value={userMemo}>
			<NavigationContainer>
				<Stack.Navigator>
					{user ? (
						<>
							<Stack.Screen name="Home" component={HomeScreen}/>
						</>
					) : (
						<>
							<Stack.Screen name="Login" component={LoginScreen}/>
							<Stack.Screen name="Registration" component={RegistrationScreen}/>
						</>
					)}
				</Stack.Navigator>
			</NavigationContainer>
		</UserContext.Provider>
	);
}