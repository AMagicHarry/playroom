import React from 'react';
import { render } from 'react-dom';
import Playroom from './Playroom/Playroom';
import { StoreProvider } from './StoreContext/StoreContext';

const playroomConfig = (window.__playroomConfig__ = __PLAYROOM_GLOBAL__CONFIG__);
const widths = playroomConfig.widths || [320, 375, 768, 1024];

const outlet = document.createElement('div');
document.body.appendChild(outlet);

const renderPlayroom = ({
  themes = require('./themes'),
  components = require('./components')
} = {}) => {
  const themeNames = Object.keys(themes);

  render(
    <StoreProvider themes={themeNames} widths={widths}>
      <Playroom components={components} widths={widths} themes={themeNames} />
    </StoreProvider>,
    outlet
  );
};
renderPlayroom();

if (module.hot) {
  module.hot.accept('./components', () => {
    renderPlayroom({ components: require('./components') });
  });

  module.hot.accept('./themes', () => {
    renderPlayroom({ themes: require('./themes') });
  });
}
