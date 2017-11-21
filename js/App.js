/**
 * R10 App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  NavigationContext,
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';

import Store from './redux/store';
import Router from './navigation/routes';

const navigationContext = new NavigationContext({
  router: Router,
  store: Store,
})

export default class App extends Component {

  render() {
    return (
      <Provider store={Store}>
        <NavigationProvider context={navigationContext}>
          <StackNavigation initialRoute={Router.getRoute('about')} />
        </NavigationProvider>
      </Provider>
    );
  }
}

