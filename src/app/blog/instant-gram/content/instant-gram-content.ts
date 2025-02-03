import { PageBackgroundProps, FootnoteTileProps } from '../../../../components';

type InstantGramProps = {
  background: PageBackgroundProps;
  tileOne: FootnoteTileProps;
};

export const instantGramContent: InstantGramProps = {
  background: { type: 'ig', content: 'Instant Gram' },
  // TODO: potentially feed data in from session here, rather than into the components directly
  // So it matches the {{Page}}Content props like other pages which don't rely on API calls
  tileOne: {
    content: [
      {
        variant: 'body',
        children:
          'All images presented on this page were captured on devices used in the observed scenarios by either myself or someone I know',
      },
    ],
  },
};
