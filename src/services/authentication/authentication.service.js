import { Keyboard } from 'react-native'

import { getAuth, updateProfile, sendEmailVerification, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInAnonymously, sendPasswordResetEmail } from "firebase/auth";
  
export const loginRequest = (email, password) => {
    return new Promise((resolve, reject) => {
    const auth = getAuth();
    Keyboard.dismiss();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            if (user.emailVerified) {
            resolve(userCredential.user);
            } else {
                reject(new Error('Email not verified'))
            }
        })
        .catch((error) => {
            reject(error);
        });
    })
}

export const registerRequest = (email, password) => {
    return new Promise((resolve, reject) => {
    const auth = getAuth();
    Keyboard.dismiss();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
                emailVerified: false
            })
            .then(() => {
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                    resolve();
                    })
                    .catch((error) => {
                    reject(error);
                    });
                })
            })
        .catch((error) => {
            reject(error);
        });
    })
}

export const continueAsGuestRequest = () => {
    return new Promise((resolve, reject) => {
    const auth = getAuth();
    Keyboard.dismiss();
    signInAnonymously(auth)
        .then((userCredential) => {
            resolve(userCredential.user);
        })
        .catch((error) => {
            reject(error);
        });
    })
}

export const resetPasswordRequest = (email) => {
    return new Promise((resolve, reject) => {
      const auth = getAuth();
  
      sendPasswordResetEmail(auth, email)
        .then(() => {
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
};
