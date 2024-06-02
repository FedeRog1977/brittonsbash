import { ArticleTileProps, BackgroundProps } from '../../../bash-blocks';

type LibraryProps = {
  background: BackgroundProps;
  tileOne: ArticleTileProps;
  tileTwo: ArticleTileProps;
  tileThree: ArticleTileProps;
};

export const libraryContent: LibraryProps = {
  background: { content: 'Library' },
  tileOne: {
    type: 'solid',
    gap: true,
    heading: 'Computer Science and Mathematics',
    subHeading: 'Writings',
    sections: [
      {
        component: 'books',
        content: {
          items: [
            {
              heading: 'LaTeX and Markdown',
              items: [
                '[Symbols & Logic Syntax (TeX)]()',
                '[Symbols & Logic Syntax (PDF)]()',
                '[Basic Syntax Templates (TeX)]()',
                '[Basic Syntax Templates (PDF)]()',
              ],
            },
            {
              heading: 'HTML, CSS, and JavaScript',
              items: ['TBW'],
            },
            {
              heading: 'React and Typescript',
              items: ['TBW'],
            },
          ],
        },
      },
    ],
  },
  tileTwo: {
    type: 'solid',
    heading: 'M.Sc. Software Development',
    subHeading: 'Writings',
    sections: [
      {
        component: 'books',
        content: {
          items: [
            {
              heading: 'CS958 (Project)',
              items: ['Assignment'],
            },
            {
              heading: 'CS995',
              items: ['Assignment (Code)'],
            },
            {
              heading: 'CS994',
              items: ['Assignment (Code)'],
            },
            {
              heading: 'CS993',
              items: ['Assignment I', 'Assignment I (Code)', 'Assignment II'],
            },
            {
              heading: 'CS992',
              items: ['Assignment', 'Labs'],
            },
            {
              heading: 'CS991',
              items: [
                'Assignment I',
                'Assignment I (Code)',
                'Assignment II (Code)',
              ],
            },
            {
              heading: 'CS990',
              items: [
                'Assignment I',
                'Assignment II',
                'Assignment II (Code)',
                'Labs',
                'Lectures',
              ],
            },
            {
              heading: 'CS978',
              items: ['Assignment'],
            },
            {
              heading: 'CS808',
              items: ['Assignment', 'Assignment (Code)', 'Examination'],
            },
          ],
        },
      },
    ],
  },
  tileThree: {
    type: 'solid',
    heading: 'B.A. Finance',
    subHeading: 'Writings',
    sections: [
      {
        component: 'books',
        content: {
          items: [
            {
              heading: 'AG436 (Dissertation)',
              items: ['Assignment'],
            },
            {
              heading: 'AG432',
              items: ['Assignment', 'Test'],
            },
            {
              heading: 'AG431',
              items: ['Assignment', 'Examination'],
            },
            {
              heading: 'AG430',
              items: ['Examination'],
            },
            {
              heading: 'AG428',
              items: ['Assignment', 'Examination'],
            },
            {
              heading: 'AG313',
              items: ['Summary', 'Examination'],
            },
            {
              heading: 'AG312',
              items: ['Summary', 'Assignment'],
            },
            {
              heading: 'AG217',
              items: ['Summary', 'Assignment'],
            },
            {
              heading: 'AG215',
              items: ['Summary', 'Assignment'],
            },
            {
              heading: 'EC315',
              items: ['Summary', 'Assignment'],
            },
            {
              heading: 'EC216',
              items: ['Summary'],
            },
            {
              heading: 'BF303 and BF201',
              items: ['Assignment (BF303)', 'Assignment (BF201)'],
            },
          ],
        },
      },
    ],
  },
};
