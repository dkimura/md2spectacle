// @flow
import 'react-hot-loader/patch';

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Presentation from './Presentation';

render(
  <AppContainer>
    <Presentation />
  </AppContainer>,
  document.getElementById('app'),
);

if (module.hot) {
  module.hot.accept('./Presentation', () => {
    const NewApp = require('./Presentation').default;

    render(
      <AppContainer>
        <NewApp />
      </AppContainer>,
      document.getElementById('app'),
    );
  });
}
