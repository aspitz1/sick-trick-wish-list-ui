describe('empty spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/tricks',
      [
          {
              "stance": "regular",
              "name": "treflip",
              "obstacle": "flat ground",
              "tutorial": "https://www.youtube.com/watch?v=XGw3YkQmNig",
              "id": 1
          },
          {
              "stance": "switch",
              "name": "heelflip",
              "obstacle": "stairs",
              "tutorial": "https://www.youtube.com/watch?v=9N9swrZU1HA",
              "id": 2
          },
          {
              "stance": "regular",
              "name": "frontside 50-50, backside 180 out",
              "obstacle": "ledge",
              "tutorial": "https://www.youtube.com/watch?v=9N9swrZU1HA",
              "id": 3
          }
      ]
    )
    .visit('http://localhost:3000')
  })

  it('User sees title of app when visiting page', () => {
    cy.get('h1')
    .should('contain', 'Sick Trick Wish List')
  })

  it('User can see tricks previously added', () => {
    cy.get('section[class="card-container"]')
    .children('article[class="trick-card"]')
    .first()
    .should('contain', 'Obstacle')
    .should('contain', 'Link to Tutorial')
    .get('section[class="card-container"]')
    .children('article[class="trick-card"]')
    .last()
    .should('contain', 'Obstacle')
    .should('contain', 'Link to Tutorial')
  })

  it('User should be able to update form to add a trick card', () => {
    cy.get('select[name="stance"]')
    .select('regular')
    .select('switch')
    .get('input[name="name"]')
    .type('whalla whalla')
    .get('select[name="obstacle"]')
    .select('pool')
    .select('stairs')
    .select('ledge')
    .select('rail')
    .get('input[name="tutorial"]')
    .type('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
  })

  it('User should be able to add a new trick', () => {
    cy.get('select[name="stance"]')
    .select('regular')
    .get('input[name="name"]')
    .type('toeflip')
    .get('select[name="obstacle"]')
    .select('pool')
    .get('input[name="tutorial"]')
    .type('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
    .get('button')
    .should('contain', 'SEND IT')
    .click()
  })
})