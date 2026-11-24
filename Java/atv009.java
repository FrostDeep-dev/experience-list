import java.util.ArrayList;
import java.util.Scanner;

public class atv009 {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        ArrayList<String> lista = new ArrayList<>();
        while (true){
        System.out.println("1 - Adicionar produtos\n2 - Lista dos produtos\n3 - Remover\n4 - Esvaziar\n0 - Sair\n");
        int num = entrada.nextInt();
        entrada.nextLine();

        if (num < 0 || num > 4){
            System.out.println("Valor inválido!");
        }
        else if (num == 0){
            break;
        }
        else if (num == 1) {
            while(true){
                System.out.println("Digite o produto que deseja adicionar: (Digite N para finalizar)");
                String produtoAdicionar = entrada.nextLine();

                if (produtoAdicionar.equalsIgnoreCase("N")){
                    break;
                    }
                else if (lista.contains(produtoAdicionar)){
                    System.out.println("Produto existente!");
                    
                }
                else{
                    lista.add(produtoAdicionar);
                    System.out.println("Produto adicionado!");
                }
                
                }
            }
        
        else if (num == 2){
            System.out.println("Produtos adicionados:");
            System.out.println(lista);
            }
        else if (num == 3){
            System.out.println("Informe o produto que deseja remover: ");
            String remover = entrada.nextLine();
            if (lista.contains(remover)){
                lista.remove(remover);
                System.out.println("Removido!");
            }
        }
        else if (num == 4){
            System.out.println("Tem certeza que quer esvaziar a lista? Y/N");
            String esvaziar = entrada.nextLine();

            if(esvaziar.equalsIgnoreCase("Y")){
                lista.clear();
                System.out.println("Lista esvaziada!");
            }
        }
        }
        entrada.close();
    }
}

