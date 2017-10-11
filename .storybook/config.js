import { configure } from '@storybook/react';

const reqBrowser = require.context('../src', true, /\.stories\.js$/);

function loadStories() {
  reqBrowser.keys().forEach(path => reqBrowser(path));
}

configure(loadStories, module);
