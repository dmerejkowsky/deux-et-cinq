namespace DeuxEtCinq;

public class Lancer
{
  private int _d1;
  private int _d2;
  private int _d3;
  private int _d4;
  private int _d5;

  public Lancer(int d1, int d2, int d3, int d4, int d5)
  {
    _d1 = d1;
    _d2 = d2;
    _d3 = d3;
    _d4 = d4;
    _d5 = d5;
  }
  public int ResteALancer()
  {
    var dés = new List<int>();
    dés.Add(_d1);
    dés.Add(_d2);
    dés.Add(_d3);
    dés.Add(_d4);
    dés.Add(_d5);
    int ret = 5;
    for (int i = 0; i < 5; i++)
    {
      if ((dés[i] == 2) || (dés[i] == 5))
      {
        ret--;
      }
    }
    return ret;
  }

  public int Score()
  {
    int score = 0;
    if (!((_d1 == 2) || (_d1 == 5)))
    {
      score += _d1;
    }
    if (!((_d2 == 2) || (_d2 == 5)))
    {
      score += _d2;
    }
    if (!((_d3 == 2) || (_d3 == 5)))
    {
      score += _d3;
    }
    if (!((_d4 == 2) || (_d4 == 5)))
    {
      score += _d4;
    }
    if (!((_d5 == 2) || (_d5 == 5)))
    {
      score += _d5;
    }
    return score;
  }

  public bool FinDePartie()
  {
    if ((_d1 != 2) && (_d1 != 5))
      return false;
    if ((_d2 != 2) && (_d2 != 5))
      return false;
    if ((_d3 != 2) && (_d3 != 5))
      return false;
    if ((_d4 != 2) && (_d4 != 5))
      return false;
    if ((_d5 != 2) && (_d5 != 5))
      return false;
    return true;
  }


}
