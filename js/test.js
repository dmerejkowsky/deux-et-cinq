const { expect } = require('chai')

const Lancer = require('./lancer')

describe('Lancer', () => {
  specify('calcule le nombre de dés restant à lancer', () => {
    let lancer = new Lancer(1, 3, 4, 4, 6)
    expect(lancer.désPourLeProchainLancer()).to.eq(5)

    lancer = new Lancer(1, 2, 3, 4, 5)
    expect(lancer.désPourLeProchainLancer()).to.eq(3)

    lancer = new Lancer(2, 2, 2, 5, 5)
    expect(lancer.désPourLeProchainLancer()).to.eq(0)
  })

  specify('calcule le score', () => {
    let lancer = new Lancer(1, 1, 1, 1, 1)
    expect(lancer.getScore()).to.eq(5)

    lancer = new Lancer(1, 1, 1, 2, 5)
    expect(lancer.getScore()).to.eq(3)

    lancer = new Lancer(2, 2, 2, 5, 5)
    expect(lancer.getScore()).to.eq(0)
  })

  specify('détecte la fin de la partie', () => {
    let lancer = new Lancer(1, 2, 3, 4, 5)
    expect(lancer.finDePartie()).to.be.false

    lancer = new Lancer(2, 2, 2, 5, 5)
    expect(lancer.finDePartie()).to.be.true
  })
})
