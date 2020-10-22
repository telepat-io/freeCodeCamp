/* global cy */
import { introductionPageTests } from '../../introductionPages.js';
import { challengePageTests } from '../../challengePages';
const testTitle = 'Applied Visual Design';

const selectors = {
  tableOfContents: '.intro-toc',
  defaultOutput: '.output-text',
  editor: '.monaco-editor',
  hotkeys: '.default-layout > div',
  runTestsButton: 'button:contains("Run the Tests")',
  successModal: '.challenge-success-modal',
  challenges: '.challenge-test-suite > div'
};

const url = '/learn/responsive-web-design/applied-visual-design/';

const lessons = [
  {
    name: 'Create Visual Balance Using the text-align Property',
    slug: 'create-visual-balance-using-the-text-align-property',
    challengeCount: 2
  },
  {
    name: 'Adjust the Width of an Element Using the width Property',
    slug: 'adjust-the-width-of-an-element-using-the-width-property',
    challengeCount: 1
  },
  {
    name: 'Adjust the Height of an Element Using the height Property',
    slug: 'adjust-the-height-of-an-element-using-the-height-property',
    challengeCount: 1
  },
  {
    name: 'Use the strong Tag to Make Text Bold',
    slug: 'use-the-strong-tag-to-make-text-bold',
    challengeCount: 3
  },
  {
    name: 'Use the u Tag to Underline Text',
    slug: 'use-the-u-tag-to-underline-text',
    challengeCount: 2
  },
  {
    name: 'Use the em Tag to Italicize Text',
    slug: 'use-the-em-tag-to-italicize-text',
    challengeCount: 2
  },
  {
    name: 'Use the s Tag to Strikethrough Text',
    slug: 'use-the-s-tag-to-strikethrough-text',
    challengeCount: 3
  },
  {
    name: 'Create a Horizontal Line Using the hr Element',
    slug: 'create-a-horizontal-line-using-the-hr-element',
    challengeCount: 2
  },
  {
    name: 'Adjust the background-color Property of Text',
    slug: 'adjust-the-background-color-property-of-text',
    challengeCount: 3
  },
  {
    name: 'Adjust the Size of a Header Versus a Paragraph Tag',
    slug: 'adjust-the-size-of-a-header-versus-a-paragraph-tag',
    challengeCount: 1
  },
  {
    name: 'Add a box-shadow to a Card-like Element',
    slug: 'add-a-box-shadow-to-a-card-like-element',
    challengeCount: 2
  },
  {
    name: 'Decrease the Opacity of an Element',
    slug: 'decrease-the-opacity-of-an-element',
    challengeCount: 1
  },
  {
    name: 'Use the text-transform Property to Make Text Uppercase',
    slug: 'use-the-text-transform-property-to-make-text-uppercase',
    challengeCount: 2
  },
  {
    name: 'Set the font-size for Multiple Heading Elements',
    slug: 'set-the-font-size-for-multiple-heading-elements',
    challengeCount: 6
  },
  {
    name: 'Set the font-weight for Multiple Heading Elements',
    slug: 'set-the-font-weight-for-multiple-heading-elements',
    challengeCount: 6
  },
  {
    name: 'Set the font-size of Paragraph Text',
    slug: 'set-the-font-size-of-paragraph-text',
    challengeCount: 1
  },
  {
    name: 'Set the line-height of Paragraphs',
    slug: 'set-the-line-height-of-paragraphs',
    challengeCount: 1
  },
  {
    name: 'Adjust the Hover State of an Anchor Tag',
    slug: 'adjust-the-hover-state-of-an-anchor-tag',
    challengeCount: 2
  },
  {
    name: "Change an Element's Relative Position",
    slug: 'change-an-elements-relative-position',
    challengeCount: 2
  },
  {
    name: 'Move a Relatively Positioned Element with CSS Offsets',
    slug: 'move-a-relatively-positioned-element-with-css-offsets',
    challengeCount: 2
  }, // STOPPED HERE
  {
    name: 'Lock an Element to its Parent with Absolute Positioning',
    slug: 'lock-an-element-to-its-parent-with-absolute-positioning',
    challengeCount: 3
  },
  {
    name: 'Lock an Element to the Browser Window with Fixed Positioning',
    slug: 'lock-an-element-to-the-browser-window-with-fixed-positioning',
    challengeCount: 3
  },
  {
    name: 'Push Elements Left or Right with the float Property',
    slug: 'push-elements-left-or-right-with-the-float-property',
    challengeCount: 2
  },
  {
    name:
      'Change the Position of Overlapping Elements with the z-index Property',
    slug:
      'change-the-position-of-overlapping-elements-with-the-z-index-property',
    challengeCount: 1
  },
  {
    name: 'Center an Element Horizontally Using the margin Property',
    slug: 'center-an-element-horizontally-using-the-margin-property',
    challengeCount: 1
  },
  {
    name: 'Learn about Complementary Colors',
    slug: 'learn-about-complementary-colors',
    challengeCount: 2
  },
  {
    name: 'Learn about Tertiary Colors',
    slug: 'learn-about-tertiary-colors',
    challengeCount: 4
  },
  {
    name: 'Adjust the Color of Various Elements to Complementary Colors',
    slug: 'adjust-the-color-of-various-elements-to-complementary-colors',
    challengeCount: 4
  },
  {
    name: 'Adjust the Hue of a Color',
    slug: 'adjust-the-hue-of-a-color',
    challengeCount: 6
  },
  {
    name: 'Adjust the Tone of a Color',
    slug: 'adjust-the-tone-of-a-color',
    challengeCount: 1
  },
  {
    name: 'Create a Gradual CSS Linear Gradient',
    slug: 'create-a-gradual-css-linear-gradient',
    challengeCount: 1
  },
  {
    name: 'Use a CSS Linear Gradient to Create a Striped Element',
    slug: 'use-a-css-linear-gradient-to-create-a-striped-element',
    challengeCount: 6
  },
  {
    name: 'Create Texture by Adding a Subtle Pattern as a Background Image',
    slug: 'create-texture-by-adding-a-subtle-pattern-as-a-background-image',
    challengeCount: 1
  },
  {
    name:
      'Use the CSS Transform scale Property to Change the Size of an Element',
    slug:
      'use-the-css-transform-scale-property-to-change-the-size-of-an-element',
    challengeCount: 1
  },
  {
    name: 'Use the CSS Transform scale Property to Scale an Element on Hover',
    slug: 'use-the-css-transform-scale-property-to-scale-an-element-on-hover',
    challengeCount: 1
  },
  {
    name:
      'Use the CSS Transform Property skewX to Skew an Element Along the X-Axis',
    slug:
      'use-the-css-transform-property-skewx-to-skew-an-element-along-the-x-axis',
    challengeCount: 1
  },
  {
    name:
      'Use the CSS Transform Property skewY to Skew an Element Along the Y-Axis',
    slug:
      'use-the-css-transform-property-skewy-to-skew-an-element-along-the-y-axis',
    challengeCount: 1
  },
  {
    name: 'Create a Graphic Using CSS',
    slug: 'create-a-graphic-using-css',
    challengeCount: 3
  },
  {
    name: 'Create a More Complex Shape Using CSS and HTML',
    slug: 'create-a-more-complex-shape-using-css-and-html',
    challengeCount: 4
  },
  {
    name: 'Learn How the CSS @keyframes and animation Properties Work',
    slug: 'learn-how-the-css-keyframes-and-animation-properties-work',
    challengeCount: 6
  },
  {
    name: 'Use CSS Animation to Change the Hover State of a Button',
    slug: 'use-css-animation-to-change-the-hover-state-of-a-button',
    challengeCount: 2
  },
  {
    name: 'Modify Fill Mode of an Animation',
    slug: 'modify-fill-mode-of-an-animation',
    challengeCount: 1
  },
  {
    name: 'Create Movement Using CSS Animation',
    slug: 'create-movement-using-css-animation',
    challengeCount: 3
  },
  {
    name: 'Create Visual Direction by Fading an Element from Left to Right',
    slug: 'create-visual-direction-by-fading-an-element-from-left-to-right',
    challengeCount: 1
  },
  {
    name: 'Animate Elements Continually Using an Infinite Animation Count',
    slug: 'animate-elements-continually-using-an-infinite-animation-count',
    challengeCount: 1
  },
  {
    name: 'Make a CSS Heartbeat using an Infinite Animation Count',
    slug: 'make-a-css-heartbeat-using-an-infinite-animation-count',
    challengeCount: 2
  },
  {
    name: 'Animate Elements at Variable Rates',
    slug: 'animate-elements-at-variable-rates',
    challengeCount: 1
  },
  {
    name: 'Animate Multiple Elements at Variable Rates',
    slug: 'animate-multiple-elements-at-variable-rates',
    challengeCount: 3
  },
  {
    name: 'Change Animation Timing with Keywords',
    slug: 'change-animation-timing-with-keywords',
    challengeCount: 2
  },
  {
    name: 'Learn How Bezier Curves Work',
    slug: 'learn-how-bezier-curves-work',
    challengeCount: 2
  },
  {
    name: 'Use a Bezier Curve to Move a Graphic',
    slug: 'use-a-bezier-curve-to-move-a-graphic',
    challengeCount: 3
  },
  {
    name: 'Make Motion More Natural Using a Bezier Curve',
    slug: 'make-motion-more-natural-using-a-bezier-curve',
    challengeCount: 1
  }
];

introductionPageTests(testTitle, url, selectors, lessons.map(l => l.name));
challengePageTests(testTitle, url, selectors, lessons);
