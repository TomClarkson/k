import { configure } from '@storybook/react';

import '../src/App.css';

const reqBrowser = require.context('../src', true, /\.stories\.js$/);

function loadStories() {
  reqBrowser.keys().forEach(path => reqBrowser(path));
}

configure(loadStories, module);
