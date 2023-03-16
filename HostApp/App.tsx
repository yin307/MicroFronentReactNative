import * as React from 'react';
import { Text } from 'react-native';

const HelloWorld = React.lazy(() => import('./HelloWorld'));
export default function App() {
  return <React.Suspense fallback={<Text>Loading...</Text>}>
    <HelloWorld />
  </React.Suspense>
}