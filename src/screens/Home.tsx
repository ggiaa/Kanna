// src/components/CustomButton.tsx
import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import {useTheme} from '../contexts/ThemeContext';

const Home = () => {
  const {colors} = useTheme();

  return (
    <View style={[styles.outerContainer, {backgroundColor: colors.background}]}>
      <Text style={{color: colors.text}}>Example text</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    height: '100%',
    padding: '2%',
  },
});

export default Home;
