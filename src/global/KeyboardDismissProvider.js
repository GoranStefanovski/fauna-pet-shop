import React, { useEffect } from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';

export const KeyboardDismissProvider = ({ children }) => {
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      // No action needed when keyboard is shown
    });

    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      // Dismiss the keyboard when it's hidden
      Keyboard.dismiss();
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1 }}>{children}</View>
    </TouchableWithoutFeedback>
  );
};