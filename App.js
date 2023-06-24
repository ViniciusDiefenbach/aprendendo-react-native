import Cesta from './src/telas/Cesta';
import { SafeAreaView, StatusBar, View } from 'react-native';

import mock from './src/mocks/cesta';

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';

export default function App() {
  const [minhasFontes] = useFonts({
    "Montserrat": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  })

  if (!minhasFontes) {
    return <View />
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}