import Lancer from './lancer'
import { describe, expect, test } from '@jest/globals'

describe('Lancer', () => {
  test('calcule le nombre de dés restant à lancer', () => {
    let lancer = new Lancer(1, 1, 1, 1, 1)
    expect(lancer.resteALancer()).toBe(5)

    lancer = new Lancer(1, 2, 3, 4, 5)
    expect(lancer.resteALancer()).toBe(3)

    lancer = new Lancer(2, 2, 2, 5, 5)
    expect(lancer.resteALancer()).toBe(0)

  })

  test('calcule le score', () => {
    let lancer = new Lancer(1, 1, 1, 1, 1)
    expect(lancer.getScore()).toBe(5)

    lancer = new Lancer(1, 1, 1, 2, 5)
    expect(lancer.getScore()).toBe(3)

    lancer = new Lancer(2, 2, 2, 5, 5)
    expect(lancer.getScore()).toBe(0)
  })

  test('détecte la fin de la partie', () => {
    let lancer = new Lancer(1, 2, 3, 4, 5)
    expect(lancer.finDePartie()).toBe(false)

    lancer = new Lancer(2, 2, 2, 5, 5)
    expect(lancer.finDePartie()).toBe(true)
  })


})
