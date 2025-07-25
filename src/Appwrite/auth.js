import conf from "../config/config.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    // ✅ Updated method names for Appwrite v13+
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );
            if (userAccount) {
                return this.login({ email, password }); // Auto-login after signup
            }
        } catch (error) {
            console.error("Appwrite signup error:", error);
            throw error;
        }
    }

    // ✅ Correct method: createEmailPasswordSession (not createEmailSession)
    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.error("Appwrite login error:", error);
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.error("Appwrite getCurrentUser error:", error);
            throw error;
        }
    }

    async logout() {
        try {
            await this.account.deleteSession("current");
        } catch (error) {
            console.error("Appwrite logout error:", error);
            throw error;
        }
    }
}

const authService = new AuthService();
export default authService;