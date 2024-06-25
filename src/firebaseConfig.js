import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Working with strorage
const storage = getStorage();
const storageRef = ref(storage);

// Authenticated with Firebase
const auth = getAuth(app);

export { auth, storageRef };
export default app;
