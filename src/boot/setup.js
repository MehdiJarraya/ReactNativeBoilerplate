import React, { Component } from "react";
import { StyleProvider } from "native-base";
// import getTheme from './../native-base-theme/components';
// import commonColor from './../native-base-theme/variables/commonColor';
import App from "../../App";//// Global First Component that contain the hole application
import { Provider } from 'react-redux';
import reducers from '../reducers';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

export default class Setup extends Component {
  render() {
    //create redux store and pass to it combined reducer and used middelware
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        {/* <StyleProvider style={getTheme(commonColor)}> */}
          <App />
        {/* </StyleProvider> */}
      </Provider>
    );
  }
}
