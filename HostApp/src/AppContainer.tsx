import {
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";

import { createStackNavigator } from 'react-navigation-stack';
// import LoginBase from "./loginModule/LoginBase";
// import LoginSuccess from "./loginModule/LoginSuccess";

import {LoginBaseScreen, LoginSuccessScreen} from './ScreenResgister'
const LoginNavigator = createStackNavigator(
  {
    LoginBaseScreen: {screen: LoginBaseScreen},
    LoginSuccessScreen: {screen: LoginSuccessScreen},
   
  },
  {
    headerMode: 'none',
    initialRouteName: 'LoginBaseScreen'
  }
)

const AppContainer = createAppContainer(LoginNavigator);
export default AppContainer;