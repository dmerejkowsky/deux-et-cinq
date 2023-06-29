using Shouldly;

namespace DeuxEtCinq.Tests;

public class LancerTests
{
  [Test]
  public void calcule_le_nombre_de_dés_restant_à_lancer()
  {
    var lancer = new Lancer(1, 3, 4, 4, 6);
    lancer.ResteALancer().ShouldBe(5);

    lancer = new Lancer(1, 2, 3, 4, 5);
    lancer.ResteALancer().ShouldBe(3);

    lancer = new Lancer(2, 2, 2, 5, 5);
    lancer.ResteALancer().ShouldBe(0);
  }

  [Test]
  public void calcule_le_score()
  {
    var lancer = new Lancer(1, 1, 1, 1, 1);
    lancer.Score().ShouldBe(5);

    lancer = new Lancer(1, 1, 1, 2, 5);
    lancer.Score().ShouldBe(3);

    lancer = new Lancer(2, 2, 2, 5, 5);
    lancer.Score().ShouldBe(0);
  }

  [Test]
  public void détecte_la_fin_de_partie()
  {
    var lancer = new Lancer(1, 1, 1, 1, 1);
    lancer.FinDePartie().ShouldBe(false);

    lancer = new Lancer(2, 2, 2, 5, 5);
    lancer.FinDePartie().ShouldBe(true);

  }

}