import java.util.ArrayList;
import java.util.Scanner;

public class atv008 {
    public static void main(String args[]){
        Scanner entrada = new Scanner(System.in);
        ArrayList<String> lista = new ArrayList<>();

        while (true) { 
            System.out.println("1-Cadastrar\n2-Mostrar\n0-Sair");
            int num = entrada.nextInt();
            entrada.nextLine();

            if(num < 0 || num > 2){
                System.out.println("Valor inválido!");
            }

            else if (num == 0){
                break;
            }
            else if (num == 1){
                while(true){

                System.out.println("Nome do aluno: ");
                String nome = entrada.nextLine();
                lista.add(nome);
                System.out.println("Adicionado!");
                System.out.println("Deseja continuar? S/N ");
                String exit = entrada.nextLine();
                if (exit.equalsIgnoreCase("N")) {
                    break;
                }
                    }
            }
            else if (num == 2){
                System.out.println("Qual nome deseja verificar? ");
                String aluno = entrada.nextLine();
                if (lista.contains(aluno)){
                    int posicao = lista.indexOf(aluno)+1;
                    System.out.println("O aluno está na posição: "+posicao);
                }
                else{
                    System.out.println("Nome não identificado!");
                }
            }
        }
        entrada.close();
    }
}
