import conf from "../config/config";
import { Client, ID, Storage, Query, Databases } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket - new Storage(this.client);
    }
    async addProduct({ image, rating, productId, productName, discription, Price, userId }) {
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, ID.unique(),
                {
                    image,
                    rating,
                    productId,
                    productName,
                    discription,
                    Price,
                    userId,

                })
        } catch (error) {
            console.error("Added failed:", error);
        }
    }

    async updateProduct(productId, { image, rating, productName, discription, Price }) {
        try {
            return await this.databases.updateDocuments(
                conf.appwriteDatabaseId, conf.appwriteCollectionId, productId,
                {
                    image,
                    rating,
                    productName,
                    discription,
                    Price,
                }
            )
        } catch (error) {
            console.error("Update failed:", error);
        }
    }
    async deleteProduct(productId) {
        try {
            await this.databases.deleteDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, productId)
            true
        } catch (error) {
            console.error("Delete Product failed:", error);
            return false
        }
    }
    async searchProduct(productId) {
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, productId)
        } catch (error) {
            console.error("Searching product failed:", error);
            return false
        }
    }
    async getProducts() {
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId)
        } catch (error) {
            console.error("Getting all products failed:", error);
            return false
        }
    }
    async getAllProducts() {
        try {
            return await this.databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionId)
        } catch (error) {
            console.error("Getting all products failed:", error);
            return false
        }
    }
    //file upload service 
    async uploadProduct(product) {
        try {
            return await this.bucket.addProduct(
                conf.appwriteBucketId,
                ID.unique(),
                product
            )
        } catch (error) {
            console.error("Uploading product failed:", error);
            return false
        }
    }
    //deleteProduct
    async removeProduct(productId) {
        try {
            return await this.bucket.deleteProduct(
                conf.appwriteBucketId,
                productId
            )
        } catch (error) {
            console.error("Deleting product failed:", error);
            return false
        }
    }
    getProductPreview(productId) {
        return this.bucket.getProductPreview(
            conf.appwriteBucketId,
            productId
        )
    }

}
const service = new Service()
export default service