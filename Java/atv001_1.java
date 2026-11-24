import java.util.Scanner;

public class atv001_1 {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int soma = 0;
        for(int i = 1;i<=5;i++){
        System.out.println("Quantidade em "+i+"h");
        int quantidade = entrada.nextInt();
        soma += quantidade;
        }
        System.out.println("Total: "+soma);
    }
}
