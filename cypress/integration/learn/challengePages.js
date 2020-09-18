/* global cy */

export function challengePageTests(topicName, baseUrl, selectors, lessons) {
  const defaultOutput = `
/**
* Your test output will go here.
*/`;

  const runningOutput = '// running tests';
  const finishedOutput = '// tests completed';

  lessons.forEach(lesson => {
    describe(`${topicName} - ${lesson.name}`, function() {
      const url = `${baseUrl}/${lesson.slug}`;

      it('renders', () => {
        cy.wait(500);
        cy.visit(url);

        cy.title().should(
          'eq',
          `Learn ${topicName}: ${lesson.name} | freeCodeCamp.org`
        );
      });

      it('renders the default output text', () => {
        cy.wait(500);
        cy.visit(url);
        cy.get(selectors.defaultOutput).contains(defaultOutput);
      });

      it('shows the right number of challenges', () => {
        cy.wait(500);
        cy.visit(url);
        cy.get(selectors.challenges).should(
          'have.length',
          lesson.challengeCount || 1
        );
      });

      it('shows test output when the tests are run', () => {
        cy.wait(500);
        cy.visit(url);
        // first wait for the editor to load
        cy.get(selectors.editor, { timeout: 15000 });
        cy.get(selectors.runTestsButton)
          .click()
          .then(() => {
            cy.get(selectors.defaultOutput)
              .contains(runningOutput)
              .contains(finishedOutput);
            cy.get(selectors.successModal).should('not.be.visible');
          });
      });

      if (lesson.solution) {
        it('shows success modal', () => {
          cy.visit(url);
          // first wait for the editor to load
          cy.get(selectors.editor, { timeout: 10000 })
            .type(lesson.solution)
            .then(() => {
              cy.get(selectors.runTestsButton)
                .click()
                .then(() => {
                  cy.get(selectors.successModal).should('be.visible');
                });
            });
        });
      }
    });
  });
}
