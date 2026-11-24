import java.util.ArrayList;
import java.util.Scanner;

public class atv007 {
    public static void main(String args[]){
        Scanner entrada = new Scanner(System.in);
        ArrayList<String> lista = new ArrayList<>();

        for (int i = 1;i <= 5;i++){
            System.out.println("Digite uma tarefa: ");
            String tarefa = entrada.nextLine();
            lista.add(tarefa);
            if (i == 5){
                System.out.println("Posicao da tarefa: ");
                int posicao = entrada.nextInt();
                entrada.nextLine();
                

                if (posicao > 0 && posicao <= lista.size()){
                    
                    String tarefaEncontrada = lista.get(posicao - 1);
                    System.out.println("Na posicao " + posicao + " existe a tarefa: "+ tarefaEncontrada);
                }
                else{
                    System.out.println("Posicao invalida!");
                }
            }
        }
        
        entrada.close();
    }
}
