import java.util.Scanner;

public class atv001 {
    public static void main(String args[]){
        Scanner entrada = new Scanner(System.in);
        System.out.println("Digite seu nome:");
        String nome = entrada.nextLine();

        System.out.println("Bem vindo: "+nome);
        entrada.close();
    }
}
