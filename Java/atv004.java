import java.util.ArrayList;
import java.util.Scanner;

public class atv004 {
    public static void main(String args[]){
        Scanner entrada = new Scanner(System.in);
        ArrayList<String> lista = new ArrayList<>();
        

        while (true) { 
            System.out.println("Digite um nome: (Digite fim para parar)");
            String nome = entrada.nextLine();
  
            if (nome.equalsIgnoreCase("fim")){
                break;
            }
            lista.add(nome);
        }
        System.out.println("Total: "+ lista.size());
        System.out.println("Primeiro: "+ lista.get(0));
        System.out.println("Último: "+ lista.get(lista.size()-1));
        entrada.close();
        
    }
}

