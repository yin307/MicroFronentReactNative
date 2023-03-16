import { NavigationActions, NavigationNavigator } from 'react-navigation';

let navigator: any;

function setTopLevelNavigator(ref: any) {
  navigator = ref;
}

function navigate(routeName: any, params: any) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

function goBack() {
  navigator.dispatch(
    NavigationActions.back()
  );
}

// add other navigation functions that you need and export them

export default {
  navigator,
  navigate,
  goBack,
  setTopLevelNavigator,
};