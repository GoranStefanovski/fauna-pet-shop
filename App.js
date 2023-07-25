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
  apiKey: "AIzaSyB9eFV5PL3oZKOAH7rTKZdp8-KyCYZR8ss",
  authDomain: "faunapetshopapp.firebaseapp.com",
  projectId: "faunapetshopapp",
  storageBucket: "faunapetshopapp.appspot.com",
  messagingSenderId: "493385495540",
  appId: "1:493385495540:web:29ae9f2ede20643907ffa1"
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

