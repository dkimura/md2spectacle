// @flow
import React from 'react';

import { Deck, MarkdownSlides } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default/index';

const theme = createTheme({}, {
  primary: 'Helvetica',
});

const Presentation = () => (
  <Deck transition={['slide']} theme={theme}>
    {MarkdownSlides`
# presentation-boilerplate
    `}
  </Deck>
);

export default Presentation;
