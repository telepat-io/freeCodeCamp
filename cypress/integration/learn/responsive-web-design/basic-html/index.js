import { introductionPageTests } from '../../introductionPages.js';
import { challengePageTests } from '../../challengePages';

const testTitle = 'Basic HTML and HTML5';

const selectors = {
  tableOfContents: '.intro-toc',
  defaultOutput: '.output-text',
  editor: '.monaco-editor',
  hotkeys: '.default-layout > div',
  runTestsButton: 'button:contains("Run the Tests")',
  successModal: '.challenge-success-modal',
  challenges: '.challenge-test-suite > div'
};

const url = './learn/responsive-web-design/basic-html-and-html5';

const lessons = [
  {
    name: 'Say Hello to HTML Elements',
    slug: 'say-hello-to-html-elements',
    challengeCount: 1,
    solution:
      '{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}' +
      '{leftarrow} World'
  },
  {
    name: 'Headline with the h2 Element',
    slug: 'headline-with-the-h2-element',
    challengeCount: 5
  },
  {
    name: 'Inform with the Paragraph Element',
    slug: 'inform-with-the-paragraph-element',
    challengeCount: 3
  },
  {
    name: 'Fill in the Blank with Placeholder Text',
    slug: 'fill-in-the-blank-with-placeholder-text',
    challengeCount: 1
  },
  {
    name: 'Uncomment HTML',
    slug: 'uncomment-html',
    challengeCount: 4
  },
  {
    name: 'Comment out HTML',
    slug: 'comment-out-html',
    challengeCount: 5
  },
  {
    name: 'Delete HTML Elements',
    slug: 'delete-html-elements',
    challengeCount: 3
  },
  {
    name: 'Introduction to HTML5 Elements',
    slug: 'introduction-to-html5-elements',
    challengeCount: 7
  },
  {
    name: 'Add Images to Your Website',
    slug: 'add-images-to-your-website',
    challengeCount: 3
  },
  {
    name: 'Link to External Pages with Anchor Elements',
    slug: 'link-to-external-pages-with-anchor-elements',
    challengeCount: 3
  },
  {
    name: 'Nest an Anchor Element within a Paragraph',
    slug: 'nest-an-anchor-element-within-a-paragraph',
    challengeCount: 8
  },
  {
    name: 'Make Dead Links Using the Hash Symbol',
    slug: 'make-dead-links-using-the-hash-symbol',
    challengeCount: 1
  },
  {
    name: 'Turn an Image into a Link',
    slug: 'turn-an-image-into-a-link',
    challengeCount: 3
  },
  {
    name: 'Create a Bulleted Unordered List',
    slug: 'create-a-bulleted-unordered-list',
    challengeCount: 5
  },
  {
    name: 'Create an Ordered List',
    slug: 'create-an-ordered-list',
    challengeCount: 11
  },
  {
    name: 'Create a Text Field',
    slug: 'create-a-text-field',
    challengeCount: 1
  },
  {
    name: 'Add Placeholder Text to a Text Field',
    slug: 'add-placeholder-text-to-a-text-field',
    challengeCount: 4
  },
  {
    name: 'Create a Form Element',
    slug: 'create-a-form-element',
    challengeCount: 3
  },
  {
    name: 'Add a Submit Button to a Form',
    slug: 'add-a-submit-button-to-a-form',
    challengeCount: 4
  },
  {
    name: 'Use HTML5 to Require a Field',
    slug: 'use-html5-to-require-a-field',
    challengeCount: 1
  },
  {
    name: 'Create a Set of Checkboxes',
    slug: 'create-a-set-of-checkboxes',
    challengeCount: 5
  },
  {
    name: 'Use the value attribute with Radio Buttons and Checkboxes',
    slug: 'use-the-value-attribute-with-radio-buttons-and-checkboxes',
    challengeCount: 5
  },
  {
    name: 'Check Radio Buttons and Checkboxes by Default',
    slug: 'check-radio-buttons-and-checkboxes-by-default',
    challengeCount: 2
  },
  {
    name: 'Nest Many Elements within a Single div Element',
    slug: 'nest-many-elements-within-a-single-div-element',
    challengeCount: 4
  },
  {
    name: 'Declare the Doctype of an HTML Document',
    slug: 'declare-the-doctype-of-an-html-document',
    challengeCount: 3
  },
  {
    name: 'Define the Head and Body of an HTML Document',
    slug: 'define-the-head-and-body-of-an-html-document',
    challengeCount: 6
  }
];

introductionPageTests(testTitle, url, selectors, lessons.map(l => l.name));
challengePageTests(testTitle, url, selectors, lessons);
