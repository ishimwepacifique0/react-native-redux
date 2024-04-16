import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../components/home';
import LoginScreen from '../components/login';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

export default function MyStack() {
    const { isloggedIn, user } = useSelector((state) => state.auth)
    console.log(isloggedIn, user);
    return (
        <Stack.Navigator>
            {isloggedIn ? (
                <Stack.Screen name="Home" component={HomeScreen} />
            ) : (
                <Stack.Screen name="Login" component={LoginScreen} />
            )}
        </Stack.Navigator>
    );
}