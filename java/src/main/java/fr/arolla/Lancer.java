package fr.arolla;

import java.util.ArrayList;

public class Lancer {
    private final int d1;
    private final int d2;
    private final int d3;
    private final int d4;
    private final int d5;

    public Lancer(int d1, int d2, int d3, int d4, int d5) {
        this.d1 = d1;
        this.d2 = d2;
        this.d3 = d3;
        this.d4 = d4;
        this.d5 = d5;
    }

    public int resteALancer() {
        ArrayList<Integer> dés = new ArrayList<Integer>();
        dés.add(this.d1);
        dés.add(this.d2);
        dés.add(this.d3);
        dés.add(this.d4);
        dés.add(this.d5);
        int ret = 5;
        for (int i = 0; i < 5; i++) {
            if ((dés.get(i) == 2) || (dés.get(i) == 5)) {
                ret--;
            }
        }
        return ret;
    }

    public int getScore() {
        int score = 0;
        if (!((this.d1 == 2) || (this.d1 == 5))) {
            score += this.d1;
        }
        if (!((this.d2 == 2) || (this.d2 == 5))) {
            score += this.d2;
        }
        if (!((this.d3 == 2) || (this.d3 == 5))) {
            score += this.d3;
        }
        if (!((this.d4 == 2) || (this.d4 == 5))) {
            score += this.d4;
        }
        if (!((this.d5 == 2) || (this.d5 == 5))) {
            score += this.d5;
        }
        return score;
    }

    public boolean findDePartie() {
        if ((this.d1 != 2) && (this.d1 != 5))
            return false;
        if ((this.d2 != 2) && (this.d2 != 5))
            return false;
        if ((this.d3 != 2) && (this.d3 != 5))
            return false;
        if ((this.d4 != 2) && (this.d4 != 5))
            return false;
        return (this.d5 == 2) || (this.d5 == 5);
    }
}
