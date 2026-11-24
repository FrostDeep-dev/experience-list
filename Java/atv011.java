import java.util.ArrayList;
import java.util.Scanner;

public class atv011 {
    public static void main(String args[]){
        Scanner entrada = new Scanner(System.in);
        ArrayList<String> jogadores = new ArrayList<>();
        ArrayList<Integer> pontos = new ArrayList<>();


        while (true) { 
            System.out.println("1 - Adicionar jogadores\n2 - Atualizar pontos\n3 - Mostrar ranking\n4 - Procurar jogador\n5 - Remover jogador\n0 - Sair");    
            int num = entrada.nextInt();
            entrada.nextLine();

            if (num < 0 || num > 5){
                System.out.println("Número inválido!");
            }
            else if (num == 0){
                break;
            }
            else if (num == 1){
                System.out.println("Nome do jogador: ");
                String nomeJogador = entrada.nextLine();
                
                if(jogadores.contains(nomeJogador)){
                    System.out.println("Jogador já está cadastrado!");
                }
                else{
                jogadores.add(nomeJogador);
                pontos.add(0);
                System.out.println("Jogador Adicionado!");
                }
            }
            else if(num == 2){
                System.out.println("Nome do jogador: ");
                String jogadorAtualizado = entrada.nextLine();
                
                int posicao = -1;
                
                for(int i = 0;i < jogadores.size();i++){
                    if(jogadores.get(i).equalsIgnoreCase(jogadorAtualizado)){
                        posicao = i;
                        break;
                    }
                }  
                if(posicao != -1){
                    int pontosAtuais = pontos.get(posicao);
                    System.out.println("Qual a pontuação?");
                    int pontosNovos = entrada.nextInt();
                    int soma = pontosAtuais + pontosNovos;
                    pontos.set(posicao, soma);
                }
            }
            else if (num == 3){

                for(int l = 0;l < jogadores.size();l++){
                    System.out.println(jogadores.get(l)+" -> "+pontos.get(l));
                    if (pontos.get(0)>pontos.get(1)){
                    for(int m = 0;m < jogadores.size();m++){

                    }
                }
                }
            }
            else if (num == 4){
                System.out.println("Buscar jogador: ");
                String jogadorBusca = entrada.nextLine();

                int posicao = -1;

                for(int j=0;j<jogadores.size();j++){
                    if (jogadores.get(j).equalsIgnoreCase(jogadorBusca)){
                        posicao = j;
                        break;
                    }
                }
                if (posicao != -1){
                    System.out.println(jogadorBusca+" foi encontrado!");
                }
                else{
                    System.out.println("Jogador não encontrado!");
                }
            }
            else{
                System.out.println("Remover jogador: ");
                String jogadorRemove = entrada.nextLine();

                int posicao = -1;

                for(int k =0;k<jogadores.size();k++){
                    if(jogadores.get(k).equalsIgnoreCase(jogadorRemove)){
                        posicao = k;
                        break;
                    }
                }
                if (posicao != -1){
                    jogadores.remove(jogadorRemove);
                    System.out.println("Jogador removido!");
                }
                else{
                    System.out.println("Jogador não encontrado!");
            }

        }
    }
}
}



            
            

