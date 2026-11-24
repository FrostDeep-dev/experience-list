import java.util.ArrayList;
import java.util.Scanner;

public class atv002 {
    public static void main(String args []){
        Scanner entrada = new Scanner(System.in);
        ArrayList<String> lista = new ArrayList<>();

        for (int i = 0;i < 5;i++){
            System.out.println("Digite seu nome: ");
            String nome = entrada.nextLine();
            lista.add(nome);
        }
        System.out.println(lista);
        entrada.close();
        entrada.close();
    }
}
