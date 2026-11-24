import java.util.ArrayList;
import java.util.Scanner;

public class atv010 {
    public static void main(String args[]){
        Scanner entrada = new Scanner(System.in);
        ArrayList<String> lista = new ArrayList<>();

        while (true) { 
         
            System.out.println("1 - Adicionar\n2 - Remover\n3 - Editar\n4 - Procurar\n5 - Mostrar\n6 - Limpar\n7 - Verificar lista\n0 - Sair\n");
            int num = entrada.nextInt();
            entrada.nextLine();
            if (num == 0){
                break;
            }
            else if (num < 0 || num > 7){
                System.out.println("Valor inválido!");
            }
            else if(num == 1){
                System.out.println("Qual convidado deseja adicionar? ");
                String convidado = entrada.nextLine();

                if(lista.contains(convidado)){
                    System.out.println("Convidado existente!");
                }
                else{
                    lista.add(convidado);
                    System.out.println("Convidado adicionado!");
                }
            }
            else if (num == 2){
                System.out.println("Qual convidado deseja remover? ");
                String remover = entrada.nextLine();

                if (lista.contains(remover)){
                    lista.remove(remover);
                    System.out.println("Removido!");
                }
                else{
                    System.out.println("Convidado não encontrado!");
                }
            }
            else if (num == 3){
                System.out.println("Qual convidado deseja editar? ");
                String editor = entrada.nextLine();

                if (lista.contains(editor)){
                    
                    System.out.println("Qual o novo nome? ");
                    String novoNome = entrada.nextLine();
                    lista.set(lista.indexOf(editor), novoNome);

                }
                else{
                    System.out.println("Convidado não encontrado!");
                }
            }
            else if (num == 4){
                System.out.println("Qual convidado deseja procurar? ");
                String busca = entrada.nextLine();

                if (lista.contains(busca)){
                    
                    System.out.println("É o "+(lista.indexOf(busca)+1)+" da lista");
                }
                else{
                    System.out.println("Usuário não encontrado!");
                }
            }
            else if (num == 5){
               System.out.println("Lista de convidados: \n"+lista);
            }
            else if (num == 6){
                lista.clear();
                System.out.println("Lista de convidados limpa!");
            }
            else{
                if(lista.isEmpty()){
                    System.out.println("Lista vazia!");
                }
                else{
                    System.out.println(lista);
                }
            }

        }
        entrada.close();
    }
}
