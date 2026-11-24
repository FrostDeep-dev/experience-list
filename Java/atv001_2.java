import java.util.Scanner;

public class atv001_2 {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        while (true) { 
            int senhaCadastrada = 1234;
            System.out.println("Senha: ");
            int senhaDigitada = entrada.nextInt();

            if(senhaDigitada == senhaCadastrada){
                System.out.println("Senha correta!");
                break;
            }
            else{
                System.out.println("Senha incorreta!");
            
            }
        }
    }
}

