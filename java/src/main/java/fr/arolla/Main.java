package fr.arolla;

public class Main {
    private static int lanceDé() {
        return (int) (Math.random() * 6 + 1);
    }

    public static void main(String[] args) {
        System.out.println("Premier lancer");
        int d1 = lanceDé();
        int d2 = lanceDé();
        int d3 = lanceDé();
        int d4 = lanceDé();
        int d5 = lanceDé();
        System.out.format("dés: %d %d %d %d %d\n", d1, d2, d3, d4, d5);

        Lancer lancer = new Lancer(d1, d2, d3, d4, d5);
        if (lancer.findDePartie()) {
            System.out.println("Fin de partie");
            return;
        }

        System.out.format("Score: %d\n", lancer.getScore());
        int àLancer = lancer.resteALancer();
        System.out.format("Reste %d à lancer\n", àLancer);
    }
}