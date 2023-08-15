import images from '../../images.json'
import { formatDate } from "../../src/utils/date";
describe('Home Page', () => {
  
  it('shows the right content', () => {
    const [highlight, ...archive] = images 
    cy.visit('localhost:3000/handpickedbyai/')

    cy.get('img').should('have.attr', 'src').and('eq', highlight.image)
    cy.get('img').should('have.attr', 'alt').and('eq', highlight.caption)

    for(const image of archive ) {
        const date = formatDate(image.date)
        cy.findAllByText(date, {timeout: 7000}).should('exist')
    }
  })

  it('Opens the different URLS', () => {
    const [_, ...archive] = images 
    cy.visit('localhost:3000/handpickedbyai/')

    const archiveImage = archive[0]
    const date = formatDate(archiveImage.date)
    cy.findByText(date).click()

    cy.url()
      .should('be.equal', `http://localhost:3000/handpickedbyai/archive/${archiveImage.id}/`)

    cy.findAllByText(date, {timeout: 7000}).should('exist')
    cy.get('img').should('have.attr', 'src').and('eq', archiveImage.image)
    cy.get('img').should('have.attr', 'alt').and('eq', archiveImage.caption)

    cy.findByTitle('Next Image').click()

    const nextImage = archive[1]
    const nextDate = formatDate(nextImage.date)

    cy.url()
      .should('be.equal', `http://localhost:3000/handpickedbyai/archive/${nextImage.id}/`)


    cy.findAllByText(nextDate, {timeout: 7000}).should('exist')
    cy.get('img').should('have.attr', 'src').and('eq', nextImage.image)
    cy.get('img').should('have.attr', 'alt').and('eq', nextImage.caption)

    cy.findByTitle('Previous Image').click()

    cy.url()
    .should('be.equal', `http://localhost:3000/handpickedbyai/archive/${archiveImage.id}/`)

    cy.findAllByText(date, {timeout: 7000}).should('exist')
    cy.get('img').should('have.attr', 'src').and('eq', archiveImage.image)
    cy.get('img').should('have.attr', 'alt').and('eq', archiveImage.caption)
  })

  it('Navigate rollover', () => {
    const firstImage = images[0]
    const lastImage = images[images.length - 1]

    cy.visit(`localhost:3000/handpickedbyai/archive/${firstImage.id}/`)
    cy.get('img').should('have.attr', 'alt').and('eq', firstImage.caption)

    //Previous of first takes you to the last image
    cy.findByTitle('Previous Image').click()

    cy.url()
    .should('be.equal', `http://localhost:3000/handpickedbyai/archive/${lastImage.id}/`)
    cy.get('img').should('have.attr', 'alt').and('eq', lastImage.caption)
   
    //next of last takes you to the first image
    cy.findByTitle('Next Image').click()

    cy.url()
    .should('be.equal', `http://localhost:3000/handpickedbyai/archive/${firstImage.id}/`)
    cy.get('img').should('have.attr', 'alt').and('eq', firstImage.caption)
  })
})