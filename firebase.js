// Firebase SDK Imports

import { initializeApp }
from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

import {
getFirestore
}
from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

import {
getStorage
}
from "https://www.gstatic.com/firebasejs/11.9.1/firebase-storage.js";

const firebaseConfig = {

apiKey: "AIzaSyB3yVUeoNdQUhLO-dt1PKWBBNsHUfst8Mk",

authDomain: "osypod.firebaseapp.com",

projectId: "osypod",

storageBucket: "osypod.firebasestorage.app",

messagingSenderId: "67383351858",

appId: "1:67383351858:web:ff44230407392f9f2f7a2b"

};

const app =
initializeApp(firebaseConfig);

export const db =
getFirestore(app);

export const storage =
getStorage(app);