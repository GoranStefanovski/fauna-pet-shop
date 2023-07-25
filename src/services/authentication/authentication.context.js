import React, { useState, createContext, useEffect } from "react";

import { loginRequest, registerRequest, continueAsGuestRequest, resetPasswordRequest} from './authentication.service'

import { getAuth } from 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoadingAuth, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const restoreUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        throw error;
      } 
    };

    restoreUser();
  }, []);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser && authUser.emailVerified) {
        setUser(authUser);
        console.log(`User ${authUser.uid} signed in`);

        AsyncStorage.setItem('user', JSON.stringify(authUser)).catch(error => {
          console.log("Error storing user in AsyncStorage:", error);
        });
      } else {
        console.log(`User not logged in`);
        AsyncStorage.removeItem('user').catch(error => {
          console.log(error);
        });
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((authUser) => {
        setUser(authUser);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onRegister = (email, password, confirmPassword, navigation) => {
    if (password === confirmPassword) {
      registerRequest(email, password)
        .then(() => {
            setUser(null);
            setIsLoading(false);
            navigation.navigate("EmailVerification")
        })
        .catch((e) => {
          setIsLoading(false);
          setError(e.toString());
        });
    } else {
      setIsLoading(false);
      setError('Error: Passwords do not match!');
    }
  }

  const onLogOut = () => {
    const auth = getAuth();
    auth.signOut().then(() => {
      setUser(null);
      setError(null);
      AsyncStorage.removeItem('user').catch(error => {
        console.log("Error removing user from AsyncStorage:", error);
      });
    });
    setIsLoading(false);
  }

  const onContinueAsGuest = () => {
    setIsLoading(true);
    continueAsGuestRequest()
      .then((authUser) => {
        setUser(authUser);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  }

  const onResetPassword = (email, navigation, toResetScreen) => {
    if(toResetScreen) {
      navigation.navigate("ResetPassword")
    } else {
      navigation.goBack()
    }

    if(!toResetScreen) {
      setIsLoading(true);
      resetPasswordRequest(email)
      .then(() => {
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        console.log(e, ' ova e vo reset password')
        setError(e.toString());
      })
    }
  }

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoadingAuth,
        error,
        onLogin,
        onRegister,
        onLogOut,
        onContinueAsGuest,
        onResetPassword
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
