import { AppRegistry, Platform } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ScriptManager, Script, Federated } from '@callstack/repack/client';
import { name as appName } from './app.json';
import App from './App';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const resolveURL = Federated.createURLResolver({
//   containers: {
//     miniapp: 'http://localhost:9001/[name][ext]',
//     // app2: 'https://container-host.onrender.com/app2/[name][ext]',
//     // module1: 'https://container-host.onrender.com/module1/[name][ext]',
//   },
// });

// ScriptManager.shared.addResolver(async (scriptId, caller) => {
//   console.log('ScriptManager.shared.addResolver(async (scriptId, caller) => {', scriptId, caller);
//   let url;
//   if (caller === 'main') {
//     url = Script.getDevServerURL(scriptId);
//   } else {
//     url = resolveURL(scriptId, caller);
//   }

//   if (!url) {
//     return undefined;
//   }
//   let result = 
//    {
//     url,
//     cache: false, // For development
//     query: {
//       platform: Platform.OS,
//     },
//   };

//   console.log('resultresultresultresult', result)

//   return result
// });

// ScriptManager.shared.setStorage(AsyncStorage);
ScriptManager.shared.addResolver(async (scriptId) => {
  console.log('addResolveraddResolveraddResolver', scriptId);

  // In dev mode, resolve script location to dev server.
  // if (__DEV__) {
  //   return {
  //     url: Script.getDevServerURL(scriptId),
  //     cache: false,
  //   };
  // }
  
  return {
    url: Script.getRemoteURL(`https://container-host.onrender.com/chunk/${scriptId}`)
  };
});

AppRegistry.registerComponent(appName, () => App);
