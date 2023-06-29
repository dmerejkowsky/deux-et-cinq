class Lancer {

  constructor(d1, d2, d3, d4, d5) {
    this.d1 = d1
    this.d2 = d2
    this.d3 = d3
    this.d4 = d4
    this.d5 = d5
  }

  getScore() {
    let score = 0
    if (!((this.d1 == 2) || (this.d1 == 5))) {
      score += this.d1
    }
    if (!((this.d2 == 2) || (this.d2 == 5))) {
      score += this.d2
    }
    if (!((this.d3 == 2) || (this.d3 == 5))) {
      score += this.d3
    }
    if (!((this.d4 == 2) || (this.d4 == 5))) {
      score += this.d4
    }
    if (!((this.d5 == 2) || (this.d5 == 5))) {
      score += this.d5
    }
    return score
  }

  resteALancer() {
    const dés = []
    dés.push(this.d1)
    dés.push(this.d2)
    dés.push(this.d3)
    dés.push(this.d4)
    dés.push(this.d5)
    let ret = 5
    for (let i = 0; i < 5; i++) {
      if ((dés[i] == 2) || (dés[i] == 5)) {
        ret--
      }
    }
    return ret
  }

  finDePartie() {
    if ((this.d1 != 2) && (this.d1 != 5))
      return false
    if ((this.d2 != 2) && (this.d2 != 5))
      return false
    if ((this.d3 != 2) && (this.d3 != 5))
      return false
    if ((this.d4 != 2) && (this.d4 != 5))
      return false
    if ((this.d5 != 2) && (this.d5 != 5))
      return false
    return true
  }

}

module.exports = Lancer
