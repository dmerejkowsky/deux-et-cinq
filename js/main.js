const Lancer = require('./lancer')

function lanceDé() {
  return Math.floor(Math.random() * 6) + 1
}

function main() {
  console.log('Premier lancer')
  const d1 = lanceDé()
  const d2 = lanceDé()
  const d3 = lanceDé()
  const d4 = lanceDé()
  const d5 = lanceDé()

  console.log('Dés: ', d1, d2, d3, d4, d5)
  const lancer = new Lancer(d1, d2, d3, d4, d5)
  if (lancer.finDePartie()) {
    console.log('Fin de partie')
    return
  }
  console.log('Score:', lancer.getScore())
  const àLancer = lancer.désPourLeProchainLancer()
  console.log(`Il reste ${àLancer} dés à lancer`)
}


main()
