namespace DeuxEtCinq;

internal class Program
{
  private static void Main(string[] args)
  {
    Console.WriteLine("Premier lancer");

    var r = new Random();
    int d1 = LanceDé();
    int d2 = LanceDé();
    int d3 = LanceDé();
    int d4 = LanceDé();
    int d5 = LanceDé();

    Console.WriteLine($"Dés: {d1} {d2} {d3} {d4} {d5}");

    var lancer = new Lancer(d1, d2, d3, d4, d5);
    if (lancer.FinDePartie())
    {
      Console.WriteLine("Find de partie");
      return;
    }

    Console.WriteLine($"Score: {lancer.Score()}");
    Console.WriteLine($"Reste: {lancer.ResteALancer()} dés à lancer");
  }

  private static int LanceDé()
  {
    var random = new Random();
    return random.Next(1, 7);
  }
}