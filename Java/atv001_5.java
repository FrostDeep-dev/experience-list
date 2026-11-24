import java.util.ArrayList;

public class atv001_5 {
    public static void main (String args[]){
        ArrayList<Integer> lista = new ArrayList<>();
        int k1 = 120;
        lista.add(k1);
        int k2 = 150;
        lista.add(k2);
        int k3 = 130;
        lista.add(k3);
        int k4 = 180;
        lista.add(k4);
        int k5 = 160;
        lista.add(k5);

        for(int i = 0;i < lista.size();i++){
            for(int j = 0; j< lista.size();j++){
                if(lista.get(i)<lista.get(j)){
                    int temp = lista.get(i);
                    lista.set(i, lista.get(j));
                    lista.set(j, temp);
                }
            }
        }
        System.out.println("Total: "+lista);
    }
}
