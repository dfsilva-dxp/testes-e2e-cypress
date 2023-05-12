describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Deve renderizar o heading com o texto correto.', () => {
    cy.getByData('titulo-principal').contains(
      'Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!'
    );
  });
});
