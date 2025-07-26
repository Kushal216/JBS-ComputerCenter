// src/auth.js

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../config/config";


class AuthService {
    // Register new user
    async createAccount({ email, password }) {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log("Signup successful:", userCredential.user);
            return userCredential.user;
        } catch (error) {
            console.error("Firebase signup error:", error.message);
            throw error;
        }
    }

    // Login existing user
    async login({ email, password }) {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("Login successful:", userCredential.user);
            return userCredential.user;
        } catch (error) {
            console.error("Firebase login error:", error.message);
            throw error;
        }
    }

    // Get the current authenticated user (realtime listener)
    getCurrentUser(callback) {
        return onAuthStateChanged(auth, (user) => {
            callback(user);
        });
    }

    // Logout the current user
    async logout() {
        try {
            await signOut(auth);
            console.log("Logout successful");
        } catch (error) {
            console.error("Firebase logout error:", error.message);
            throw error;
        }
    }
}

const authService = new AuthService();
export default authService;
