import { createSlice } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseCOnfiguration";

const initialState= {
    user: {},
    isloggedIn: false,
    error: "",
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isloggedIn = true
            state.user = action.payload;
        },
        logout: (state) => {
            state.isloggedIn = false
        },
    },
});


export const { login,logout } = authSlice.actions
export default authSlice.reducer;


export const LoginAuth = ({email,password}) => async (dispatch) => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password)
        console.log(user)
        await dispatch(login(user))
    } catch (error) {
        console.error(error)
    }
}


// logout 
export const LogoutAuth = () => async (dispatch) => {
    try {
        await auth.signOut()
        await dispatch(logout())
    } catch (error) {
        console.error(error)
    }
}