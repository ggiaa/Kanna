import React from 'react';
import {StatusBar} from 'react-native';

import Home from './screens/Home';
import {ThemeProvider, useTheme} from './contexts/ThemeContext';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function StatusBarElement(): React.JSX.Element {
  const {theme, colors} = useTheme();
  return (
    <StatusBar barStyle={theme === 'dark' ? 'light-content' : 'dark-content'} backgroundColor={ theme === 'dark' ? '#181818' : '#FFFFFF'} />
  );
}

// barStyle={scheme === 'dark' ? 'light-content' : 'dark-content'}  // Set content color (light or dark) based on theme
//         backgroundColor={scheme === 'dark' ? colors.background : '#FFFFFF'}

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <StatusBarElement />
      <Home />
    </ThemeProvider>
  );
}

export default App;
