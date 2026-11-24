import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class atv001_4 {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        ArrayList <Integer> lista = new ArrayList<>();
        lista.addAll(Arrays.asList(12, 15, 14, 10, 18, 20, 16));
        while(true){
        System.out.println("1 - Calculo total por semana\n2 - Calculo médio diário\n3 - Dia com maior consumo\n4 - Todos os dias com consumo acima da média\0 - Sair");
        int num = entrada.nextInt();

        if(num <0||num>4){
            System.out.println("Valor inválido!");
        }
        else if(num == 0){
            break;
        }
        else if(num == 1){
            
        }
    
        }
    }
}
