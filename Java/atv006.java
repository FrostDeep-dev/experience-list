import java.util.ArrayList;
import java.util.Scanner;


public class atv006 {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        ArrayList<String> lista = new ArrayList<>();

        for (int i = 0; i <7;i++){

            System.out.println("Digite um produto: ");
            String cadastro = entrada.nextLine();

            lista.add(cadastro);
        }
        System.out.println("Deseja remover um produto? S/N");
        String remocao = entrada.nextLine();
        
        if (remocao.equalsIgnoreCase("S")){
            System.out.println("Digite o produto que deseja remover: ");
            String remover = entrada.nextLine();

            if (lista.contains(remover)){
            System.out.println("Removido!" );
            lista.remove(remover);
            System.out.println("Lista: "+lista);
        }
            else{
                System.out.println("Produto não encontrado");
            }
            }
        else{
            System.out.println("Lista: "+lista);
        }
        entrada.close();
        
    }
}
