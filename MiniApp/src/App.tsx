import * as React from 'react';
import { Text } from 'react-native';

const TextBase = React.lazy(() => import('hostapp/TextBase'));
export default function App() {
  return <TextBase children='This is a Mini app'/>
  // return <Text>1313123123122112331231</Text>
}
