// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {APIKEY,AUTHDOMAIN,PROJECT_ID,STORAGEBUCKET,MSGSENDERID,APPID,MEASUREMENTID} from '@env'

const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  projectId:PROJECT_ID,
  storageBucket:STORAGEBUCKET,
  messagingSenderId: MSGSENDERID,
  appId: APPID,
  measurementId:MEASUREMENTID
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);