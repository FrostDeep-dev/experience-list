import java.util.Scanner;

public class atv001_3 {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int soma = 0;
        while (true) { 
            System.out.println("Digite os números: ");
            int num = entrada.nextInt();
            
            if (num == 0){
                System.out.println("Soma: "+soma);
                break;
            }
            else {
                soma += num;
            }
        }
    }
}
