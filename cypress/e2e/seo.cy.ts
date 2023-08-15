import images from '../../images.json'
import { formatDate } from "../../src/utils/date";
describe('SEO', () => {
  
  it('home page', () => {
    const highlight = images[0] 
    cy.visit('localhost:3000/handpickedbyai/')

    cy.title().should('eq', 'AI Image of the day')
    cy.get('head meta[name="og:title"]').should('exist')
    cy.get('head meta[name="og:url"]').should('exist')
    cy.get('head meta[name="twitter:card"]').should('exist')
    cy.get('head meta[name="twitter:site"]').should('exist')
    cy.get('head meta[name="twitter:title"]').should('exist')
    cy.get('head meta[name="twitter:description"]').should('exist')
    cy.get('head meta[name="twitter:image"').should('exist')
    cy.get('head meta[name="twitter:image:alt"]').should('exist')
    cy.get('head link[rel="icon"]').should('exist')
    cy.get('head link[rel="shortcut icon"]').should('exist')

    cy.get('head meta[name="description"]').should('have.attr', 'content', `Handpicked by AI - ${highlight.caption}`)
    cy.get('head meta[name="og:image"]').should('have.attr', 'content', highlight.image)
  })

  it('archive', () => {
    const archiveImage = images[1] 
    cy.visit(`http://localhost:3000/handpickedbyai/archive/${archiveImage.id}/`)

    cy.title().should('eq', `Archive | ${formatDate(archiveImage.date)}`)
    cy.get('head meta[name="og:title"]').should('exist')
    cy.get('head meta[name="og:url"]').should('exist')
    cy.get('head meta[name="twitter:card"]').should('exist')
    cy.get('head meta[name="twitter:site"]').should('exist')
    cy.get('head meta[name="twitter:title"]').should('exist')
    cy.get('head meta[name="twitter:description"]').should('exist')
    cy.get('head meta[name="twitter:image"').should('exist')
    cy.get('head meta[name="twitter:image:alt"]').should('exist')
    cy.get('head link[rel="icon"]').should('exist')
    cy.get('head link[rel="shortcut icon"]').should('exist')

    cy.get('head meta[name="description"]').should('have.attr', 'content', `Handpicked by AI - ${archiveImage.caption}`)
    cy.get('head meta[name="og:image"]').should('have.attr', 'content', archiveImage.image)
  })
})