import java.util.ArrayList;
import java.util.Scanner;

public class atv011_0 {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        ArrayList<String> nomes = new ArrayList<>();

        while (true) { 
            System.out.println("1 - Adicionar nomes\n2 - Procurar nomes\n3 - Remover nome\n4 - Mostrar nomes\n0 - Sair\n");
            int num = entrada.nextInt();
            entrada.nextLine();

            if (num < 0 || num > 4){
                System.out.println("Dados inválidos");
            }
            else if(num == 0){
                break;
            }
            else if(num == 1){
                System.out.println("Qual nome deseja adicionar?");
                String nomeAdicionar = entrada.nextLine();

                int posicao = -1;
                
                for(int j = 0;j < nomes.size();j++){
                    if(nomes.get(j).equalsIgnoreCase(nomeAdicionar)){
                        posicao = j;
                        break;
                    }
                }
                if (posicao == -1){
                    nomes.add(nomeAdicionar);
                    System.out.println("Nome adicionado!");
                }
                else{
                    System.out.println("Já está cadastrado!");
                }
        }
            else if (num == 2){
                System.out.println("Qual nome deseja buscar? ");
                String nomeBuscar = entrada.nextLine();

                int posicao = -1;

                for(int i =0;i < nomes.size();i++){
                    if(nomes.get(i).equalsIgnoreCase(nomeBuscar)){
                    posicao = i;
                    break;
                    }
                }
                if (posicao != -1){
                    System.out.println(nomeBuscar+" encontrado!");
                }
                else{
                    System.out.println("Não encontrado!");
                }
            }
            else if (num == 3){
                System.out.println("Qual nome deseja remover? ");
                String nomeRemover = entrada.nextLine();

                int posicao = -1;

                for(int k=0;k<nomes.size();k++){
                    if(nomes.get(k).equalsIgnoreCase(nomeRemover)){
                        posicao = k;
                        break;
                    }
                }
                if (posicao != -1){
                    nomes.remove(posicao);
                    System.out.println(nomeRemover+" removido!");
                }
                else{
                    System.out.println("Nome não encontrado!");
                }
            }
            else{
                System.out.println(nomes);
            }

    }
}
}