
import { db, storage } from "../config/config";
import {
    collection,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    getDoc,
    getDocs
} from "firebase/firestore";
import {
    ref,
    uploadBytes,
    deleteObject,
    getDownloadURL
} from "firebase/storage";

class Service {
    constructor() {
        this.productsCollection = collection(db, "products"); // Firestore collection
    }

    // Add new product document
    async addProduct({ image, rating, productId, productName, discription, Price, userId }) {
        try {
            const newProduct = {
                image,
                rating,
                productId,
                productName,
                discription,
                Price,
                userId,
                createdAt: new Date(),
            };
            const docRef = await addDoc(this.productsCollection, newProduct);
            return docRef.id;
        } catch (error) {
            console.error("Add product failed:", error);
            return null;
        }
    }

    // Update product document
    async updateProduct(productId, { image, rating, productName, discription, Price }) {
        try {
            const productRef = doc(db, "products", productId);
            await updateDoc(productRef, {
                image,
                rating,
                productName,
                discription,
                Price,
                updatedAt: new Date(),
            });
            return true;
        } catch (error) {
            console.error("Update failed:", error);
            return false;
        }
    }

    // Delete product document
    async deleteProduct(productId) {
        try {
            const productRef = doc(db, "products", productId);
            await deleteDoc(productRef);
            return true;
        } catch (error) {
            console.error("Delete product failed:", error);
            return false;
        }
    }

    // Get one product document by ID
    async searchProduct(productId) {
        try {
            const productRef = doc(db, "products", productId);
            const docSnap = await getDoc(productRef);
            if (docSnap.exists()) {
                return { id: docSnap.id, ...docSnap.data() };
            } else {
                return null;
            }
        } catch (error) {
            console.error("Search product failed:", error);
            return null;
        }
    }

    // Get all products
    async getAllProducts() {
        try {
            const querySnapshot = await getDocs(this.productsCollection);
            return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } catch (error) {
            console.error("Get all products failed:", error);
            return [];
        }
    }

    // Upload file to Firebase Storage
    async uploadProduct(file) {
        try {
            const fileRef = ref(storage, `products/${file.name}`);
            await uploadBytes(fileRef, file);
            const downloadURL = await getDownloadURL(fileRef);
            return downloadURL;
        } catch (error) {
            console.error("Upload product failed:", error);
            return null;
        }
    }

    // Delete file from Firebase Storage
    async removeProduct(fileUrl) {
        try {
            const path = decodeURIComponent(new URL(fileUrl).pathname.split("/o/")[1]).split("?")[0];
            const fileRef = ref(storage, path);
            await deleteObject(fileRef);
            return true;
        } catch (error) {
            console.error("Remove product failed:", error);
            return false;
        }
    }

    // Get product preview URL (just returns the URL in Firebase)
    async getProductPreview(fileUrl) {
        return fileUrl;
    }
}

const service = new Service();
export default service;
