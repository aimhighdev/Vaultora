// Firebase Configuration

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: 'AIzaSyDqpisHE31KO0wEN3gQwWOYZPHpgUCVIGs',
    authDomain: 'vaultora-site.firebaseapp.com',
    databaseURL: 'https://vaultora-site-default-rtdb.firebaseio.com',
    projectId: 'vaultora-site',
    storageBucket: 'vaultora-site.firebasestorage.app',
    messagingSenderId: '45703389328',
    appId: '1:45703389328:web:d4c833fa32792eb8017815',
    measurementId: 'G-5N8M4HK8L3'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const analytics = getAnalytics(app);

export { auth, database, analytics };