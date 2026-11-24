import java.util.ArrayList;
import java.util.Scanner;

public class atv003 {
    public static void main(String args []){
        Scanner entrada = new Scanner(System.in);
        ArrayList<String> lista = new ArrayList<>();
        
        for (int i = 0;i < 5;i++){
            System.out.println("Digite uma fruta: ");
            String fruta = entrada.nextLine();
            lista.add(fruta);  
        }
        System.out.println();
        System.out.println("Primeira: "+(lista.get(0)));
        System.out.println("Terceira: "+(lista.get(2)));
        System.out.println(("Quinta: "+lista.get(4)));
        entrada.close();
        entrada.close();
    }    
}
