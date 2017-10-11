import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import SVGStrokeText from './SVGStrokeText';

const stories = storiesOf('SVG Stroke text', module);
stories.addDecorator(withKnobs);

stories
  .add('Text', () => (
    <SVGStrokeText text="Into to Question Screen!" />
  ));
