package fr.arolla;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class LancerTest {
    @Test
    public void calcule_le_nombre_de_dés_restant() {
        Lancer lancer = new Lancer(1, 3, 4, 4, 6);
        assertEquals(5, lancer.resteALancer());

        lancer = new Lancer(1, 2, 3, 4, 5);
        assertEquals(3, lancer.resteALancer());

        lancer = new Lancer(2, 2, 2, 5, 5);
        assertEquals(0, lancer.resteALancer());
    }

    @Test
    public void calcule_le_score() {
        Lancer lancer = new Lancer(1, 1, 1, 1, 1);
        assertEquals(5, lancer.getScore());

        lancer = new Lancer(1, 1, 1, 2, 5);
        assertEquals(3, lancer.getScore());

        lancer = new Lancer(2, 2, 2, 5, 5);
        assertEquals(0, lancer.getScore());
    }

    @Test
    void détecte_la_fin_de_partie() {
        Lancer lancer = new Lancer(1, 2, 3, 4, 5);
        assertFalse(lancer.findDePartie());

        lancer = new Lancer(2, 2, 2, 5, 5);
        assertTrue(lancer.findDePartie());
    }
}
