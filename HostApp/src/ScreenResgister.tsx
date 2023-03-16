import * as React from 'react';
import { Text, View } from 'react-native';
// const LoginBase = React.lazy(() => import('./loginModule/LoginBase'));
// const LoginSuccess = React.lazy(() => import('./loginModule/LoginSuccess'));

const LoginBase = React.lazy(() =>
  import('../src/loginModule').then(module => {
    return { default: module.LoginBase };
  })
);
const LoginSuccess = React.lazy(() =>
  import('../src/loginModule').then(module => {
    return { default: module.LoginSuccess };
  })
);
function LoginBaseScreen() {
    return (
        <React.Suspense fallback={<Text>Loading...</Text>}>
            <LoginBase/>
        </React.Suspense>
    );
};


function LoginSuccessScreen() {
    return (
        <React.Suspense fallback={<Text>Loading...</Text>}>
            <LoginSuccess />
        </React.Suspense>
    );
};

export {
    LoginBaseScreen,
    LoginSuccessScreen
}