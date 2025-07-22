import conf from "../config/config.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client()


    constructor() {
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)
    }
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                //call another method
                return this.login({ email, password })
            } else {
                return userAccount;
            }
        } catch (error) {
            console.error("Create Account failed:", error);

        }
    }


    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            console.error("Login failed:", error);

        }
    }


    async getCurrentUser() {
        try {
            await this.account.get();
        } catch (error) {
            console.error("Login failed:", error);
        }
        return null;
    }

    async logout() {
        try {
            //await this.account.deleteSessions();
            await this.account.deleteSession('current');
        } catch (error) {
            console.error("LogOut failed:", error);
        }
    }
}




const authService = new AuthService();
export default authService

