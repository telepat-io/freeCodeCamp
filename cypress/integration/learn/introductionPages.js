export function introductionPageTests(
  testTitle,
  pageTitle,
  locations,
  selectors,
  lessonNames
) {
  const warningMessage =
    'Note: Some browser extensions may interfere with elements on the page. ' +
    'If the tests fail, try disabling your extensions for the most reliable ' +
    'experience.';
  describe(`Basic ${testTitle} Introduction page`, function() {
    it('renders', () => {
      cy.visit(locations.index);

      cy.title().should('eq', pageTitle);
    });

    if (selectors.warningMessage) {
      it('renders a warning user about extensions', () => {
        cy.visit(locations.index);
        cy.get(selectors.warningMessage).contains(warningMessage);
      });
    }

    it('renders a lesson index', () => {
      lessonNames.forEach(name => {
        cy.get(selectors.tableOfContents).contains('span', name);
      });
    });
  });
}
