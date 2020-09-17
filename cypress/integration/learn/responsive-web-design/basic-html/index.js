/* global cy */
import { introductionPageTests } from '../../introductionPages.js';

const testTitle = 'HTML & HTML5';
const pageTitle = 'Basic HTML and HTML5 | freeCodeCamp.org';

const selectors = {
  tableOfContents: '.intro-toc'
  // warningMessage: '.flash-message-enter-active'
  // pageTitle: '.intro-layout h2'
};

const locations = {
  index: '/learn/responsive-web-design/basic-html-and-html5/'
};

const lessonNames = [
  'Say Hello to HTML Elements',
  'Headline with the h2 Element',
  'Inform with the Paragraph Element',
  'Fill in the Blank with Placeholder Text',
  'Uncomment HTML',
  'Comment out HTML',
  'Delete HTML Elements',
  'Introduction to HTML5 Elements',
  'Add Images to Your Website',
  'Link to External Pages with Anchor Elements',
  'Link to Internal Sections of a Page with Anchor Elements',
  'Nest an Anchor Element within a Paragraph',
  'Make Dead Links Using the Hash Symbol',
  'Turn an Image into a Link',
  'Create a Bulleted Unordered List',
  'Create an Ordered List',
  'Create a Text Field',
  'Add Placeholder Text to a Text Field',
  'Create a Form Element',
  'Add a Submit Button to a Form',
  'Use HTML5 to Require a Field',
  'Create a Set of Radio Buttons',
  'Create a Set of Checkboxes',
  'Use the value attribute with Radio Buttons and Checkboxes',
  'Check Radio Buttons and Checkboxes by Default',
  'Nest Many Elements within a Single div Element',
  'Declare the Doctype of an HTML Document',
  'Define the Head and Body of an HTML Document'
];

// const titleName = 'Introduction to Basic HTML & HTML5';

// const warningMessage =
//   'Note: Some browser extensions may interfere with elements on the page. ' +
//   'If the tests fail, try disabling your extensions for the most reliable ' +
//   'experience.';

// describe('Basic HTML & HTML5 Introduction page', function() {
//   it('renders', () => {
//     cy.visit(locations.index);

//     cy.title().should('eq', 'Basic HTML and HTML5 | freeCodeCamp.org');
//   });

//   //   it('renders a warning user about extensions', () => {
//   //     cy.visit(locations.index);
//   //     cy.get(selectors.warningMessage).contains(warningMessage);
//   //   });

//   it('renders a lesson index', () => {
//     cy.get(selectors.pageTitle).contains(titleName);
//     lessonNames.forEach(name => {
//       cy.get(selectors.tableOfContents).contains('span', name);
//     });
//   });
// });

introductionPageTests(testTitle, pageTitle, locations, selectors, lessonNames);
