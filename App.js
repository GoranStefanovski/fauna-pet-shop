import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
import { StyleSheet } from "react-native";
import { theme } from './src/infrastructure/theme'
import { useFonts as useOswald, Oswald_400Regular } from "@expo-google-fonts/oswald"
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato"

import { Navigation } from "./src/infrastructure/navigation";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { initializeApp } from 'firebase/app';
import { KeyboardDismissProvider } from "./src/global/KeyboardDismissProvider";

const firebaseConfig = {
  apiKey: "AIzaSyAnJ5A3cxhapgtkLANsIwZLAG0lciStBc4",
  authDomain: "restaurantsapp-6355e.firebaseapp.com",
  projectId: "restaurantsapp-6355e",
  storageBucket: "restaurantsapp-6355e.appspot.com",
  messagingSenderId: "802218396852",
  appId: "1:802218396852:web:02b04c284a409ae44fdbe1"
};

const app = initializeApp(firebaseConfig);

export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular
  });

  const [latoLoaded] = useLato({
    Lato_400Regular
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <KeyboardDismissProvider>
            <Navigation />
          </KeyboardDismissProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

