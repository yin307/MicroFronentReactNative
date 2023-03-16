import React from 'react';
import { Text } from 'react-native';


export default function TextBase(props: {children: string}) {
    return <Text
    style={{
        color: 'green',
        fontSize: 16
    }}
    >TextBase{props.children}</Text>;
  }
  