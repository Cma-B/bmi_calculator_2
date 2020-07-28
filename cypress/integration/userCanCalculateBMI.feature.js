describe(" user can calculate BMI", () => {
  beforeEach(() => {
    cy.visit('/');
  })
  it( 'calculates BMI in metric', () => {
    cy.get('#weight').type(65);
    cy.get('#height').type(165);
    cy.get('button#calculate').click();
    cy.get('p#bmi-message').should('contain', 'you are normal with a BMI of 23.9')
  })
});
