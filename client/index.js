import React from 'react';
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader';
import TopLevelComponent from './components/TopLevelComponent'

render(<AppContainer><TopLevelComponent /></AppContainer>, document.getElementById('app'))

if (module.hot) {
  module.hot.accept('./components/TopLevelComponent', () => {
    render(
      <AppContainer>
        <TopLevelComponent />
      </AppContainer>,
      document.querySelector("#app")
    );
  });
}