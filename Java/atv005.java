import java.util.ArrayList;
import java.util.Scanner;


public class atv005 {
    public static void main(String args[]){
        Scanner entrada = new Scanner(System.in);
        ArrayList<Integer> lista = new ArrayList<>();

        for (int i=0;i < 6;i++){
            System.out.println("Digite um número: ");
            int num = entrada.nextInt();

            lista.add(num);
        }
        System.out.println(lista);
        System.out.println("Digite o número que deseja remover: ");
        int remove = entrada.nextInt();
        
        if (lista.contains(remove)){
            System.out.println("Removido!");
            System.out.println("Número removido: "+remove);
            lista.remove(Integer.valueOf(remove));
            System.out.println(lista);
        }
        else{
            System.out.println("Número não encontrado");
        }
        entrada.close();
    }
}
