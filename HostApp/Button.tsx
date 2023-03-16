import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Button(props: { onPress: () => void }) {
    return (
        
            <TouchableOpacity
              style={{
                width: 200,
                height: 50,
                backgroundColor: 'gray',
                // marginTop: 20,
              }}
              onPress={() => {                
                props.onPress();
              }}
            >
              <Text>Login</Text>
            </TouchableOpacity>
          
    )
}