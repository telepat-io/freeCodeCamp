/* global cy */
import { introductionPageTests } from '../../introductionPages.js';
import { challengePageTests } from '../../challengePages';
const testTitle = 'Basic CSS';

const selectors = {
  tableOfContents: '.intro-toc',
  defaultOutput: '.output-text',
  editor: '.monaco-editor',
  hotkeys: '.default-layout > div',
  runTestsButton: 'button:contains("Run the Tests")',
  successModal: '.challenge-success-modal',
  challenges: '.challenge-test-suite > div'
};

const url = '/learn/responsive-web-design/basic-css/';

const lessons = [
  {
    name: 'Change the Color of Text',
    slug: 'change-the-color-of-text',
    challengeCount: 3
  },
  {
    name: 'Use CSS Selectors to Style Elements',
    slug: 'use-css-selectors-to-style-elements',
    challengeCount: 5
  },
  {
    name: 'Use a CSS Class to Style an Element',
    slug: 'use-a-css-class-to-style-an-element',
    challengeCount: 4
  },
  {
    name: 'Style Multiple Elements with a CSS Class',
    slug: 'style-multiple-elements-with-a-css-class',
    challengeCount: 5
  },
  {
    name: 'Change the Font Size of an Element',
    slug: 'change-the-font-size-of-an-element',
    challengeCount: 1
  },
  {
    name: 'Set the Font Family of an Element',
    slug: 'set-the-font-family-of-an-element',
    challengeCount: 1
  },
  {
    name: 'Import a Google Font',
    slug: 'import-a-google-font',
    challengeCount: 4
  },
  {
    name: 'Specify How Fonts Should Degrade',
    slug: 'specify-how-fonts-should-degrade',
    challengeCount: 4
  },
  {
    name: 'Size Your Images',
    slug: 'size-your-images',
    challengeCount: 2
  },
  {
    name: 'Add Borders Around Your Elements',
    slug: 'add-borders-around-your-elements',
    challengeCount: 5
  },
  {
    name: 'Add Rounded Corners with border-radius',
    slug: 'add-rounded-corners-with-border-radius',
    challengeCount: 2
  },
  {
    name: 'Make Circular Images with a border-radius',
    slug: 'make-circular-images-with-a-border-radius',
    challengeCount: 2
  },
  {
    name: 'Give a Background Color to a div Element',
    slug: 'give-a-background-color-to-a-div-element',
    challengeCount: 3
  },
  {
    name: 'Set the id of an Element',
    slug: 'set-the-id-of-an-element',
    challengeCount: 1
  },
  {
    name: 'Use an id Attribute to Style an Element',
    slug: 'use-an-id-attribute-to-style-an-element',
    challengeCount: 4
  },
  {
    name: 'Adjust the Padding of an Element',
    slug: 'adjust-the-padding-of-an-element',
    challengeCount: 1
  },
  {
    name: 'Adjust the Margin of an Element',
    slug: 'adjust-the-margin-of-an-element',
    challengeCount: 1
  },
  {
    name: 'Add a Negative Margin to an Element',
    slug: 'add-a-negative-margin-to-an-element',
    challengeCount: 1
  },
  {
    name: 'Add Different Padding to Each Side of an Element',
    slug: 'add-different-padding-to-each-side-of-an-element',
    challengeCount: 4
  },
  {
    name: 'Add Different Margins to Each Side of an Element',
    slug: 'add-different-margins-to-each-side-of-an-element',
    challengeCount: 4
  },
  {
    name: 'Use Clockwise Notation to Specify the Padding of an Element',
    slug: 'use-clockwise-notation-to-specify-the-padding-of-an-element',
    challengeCount: 5
  },
  {
    name: 'Use Clockwise Notation to Specify the Margin of an Element',
    slug: 'use-clockwise-notation-to-specify-the-margin-of-an-element',
    challengeCount: 5
  },
  {
    name: 'Use Attribute Selectors to Style Elements',
    slug: 'use-attribute-selectors-to-style-elements',
    challengeCount: 3
  },
  {
    name: 'Understand Absolute versus Relative Units',
    slug: 'understand-absolute-versus-relative-units',
    challengeCount: 2
  },
  {
    name: 'Style the HTML Body Element',
    slug: 'style-the-html-body-element',
    challengeCount: 3
  },
  {
    name: 'Inherit Styles from the Body Element',
    slug: 'inherit-styles-from-the-body-element',
    challengeCount: 7
  },
  {
    name: 'Prioritize One Style Over Another',
    slug: 'prioritize-one-style-over-another',
    challengeCount: 3
  },
  {
    name: 'Override Styles in Subsequent CSS',
    slug: 'override-styles-in-subsequent-css',
    challengeCount: 4
  },
  {
    name: 'Override Class Declarations by Styling ID Attributes',
    slug: 'override-class-declarations-by-styling-id-attributes',
    challengeCount: 7
  },
  {
    name: 'Override Class Declarations with Inline Styles',
    slug: 'override-class-declarations-with-inline-styles',
    challengeCount: 5
  },
  {
    name: 'Override All Other Styles by using Important',
    slug: 'override-all-other-styles-by-using-important',
    challengeCount: 6
  },
  {
    name: 'Use Hex Code for Specific Colors',
    slug: 'use-hex-code-for-specific-colors',
    challengeCount: 2
  },
  {
    name: 'Use Hex Code to Mix Colors',
    slug: 'use-hex-code-to-mix-colors',
    challengeCount: 8
  },
  {
    name: 'Use Abbreviated Hex Code',
    slug: 'use-abbreviated-hex-code',
    challengeCount: 8
  },
  {
    name: 'Use RGB values to Color Elements',
    slug: 'use-rgb-values-to-color-elements',
    challengeCount: 2
  },
  {
    name: 'Use RGB to Mix Colors',
    slug: 'use-rgb-to-mix-colors',
    challengeCount: 8
  },
  {
    name: 'Use CSS Variables to change several elements at once',
    slug: 'use-css-variables-to-change-several-elements-at-once',
    challengeCount: 3
  },
  {
    name: 'Create a custom CSS Variable',
    slug: 'create-a-custom-css-variable',
    challengeCount: 1
  },
  {
    name: 'Use a custom CSS Variable',
    slug: 'use-a-custom-css-variable',
    challengeCount: 4
  },
  {
    name: 'Attach a Fallback value to a CSS Variable',
    slug: 'attach-a-fallback-value-to-a-css-variable',
    challengeCount: 2
  },
  {
    name: 'Improve Compatibility with Browser Fallbacks',
    slug: 'improve-compatibility-with-browser-fallbacks',
    challengeCount: 1
  },
  {
    name: 'Inherit CSS Variables',
    slug: 'inherit-css-variables',
    challengeCount: 1
  },
  {
    name: 'Change a variable for a specific area',
    slug: 'change-a-variable-for-a-specific-area',
    challengeCount: 1
  },
  {
    name: 'Use a media query to change a variable',
    slug: 'use-a-media-query-to-change-a-variable',
    challengeCount: 2
  }
];

introductionPageTests(testTitle, url, selectors, lessons.map(l => l.name));
challengePageTests(testTitle, url, selectors, lessons);
