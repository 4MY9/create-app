describe('Boilerplate', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:8000')
    cy.contains('Welcome')
  })
  it('messages can be send and deleted', function() {
    cy.visit('http://localhost:8000')
    cy.contains('Messages').click()
    cy.get('input').type('hello world')
    cy.contains('Send!').click()
    cy.contains('hello world').click()
    cy.contains('delete').click()
  })
})