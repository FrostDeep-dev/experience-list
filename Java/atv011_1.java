import java.util.ArrayList;
import java.util.Scanner;

public class atv011_1 {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        ArrayList<Integer> numeros = new ArrayList<>();
        
        System.out.println("Primeiro número:");
        int a = entrada.nextInt();
        numeros.add(a);
        System.out.println("Segundo número:");
        int b = entrada.nextInt();
        numeros.add(b);
        System.out.println("Terceiro número:");
        int c = entrada.nextInt();
        numeros.add(c);
        System.out.println("Quarto número:");
        int d = entrada.nextInt();
        numeros.add(d);
        while (true){
        System.out.println("Digite:\n1 - Lista do menor para o maior\n2 - Lista do maior para o menor\n0 - Sair\n");
        int num = entrada.nextInt();

        if (num<0 || num>2){
            System.out.println("Valor inválido!");
        }
        else if(num == 1){
        for(int i = 0;i<numeros.size();i++){
            for(int j = 0;j<numeros.size();j++){
                if(numeros.get(i)<numeros.get(j)){
                    int temp = numeros.get(i);
                    numeros.set(i, numeros.get(j));
                    numeros.set(j, temp);
                }
            }
    }
    }
        else if (num == 2){
        for (int i = 0; i < numeros.size(); i++) {
            for(int j = 0;j<numeros.size();j++){
                if(numeros.get(i)>numeros.get(j)){
                    int temp = numeros.get(i);
                    numeros.set(i, numeros.get(j));
                    numeros.set(j, temp);
                }
            }
        }
    }   else{
        break;
    }
    System.out.println("Total: "+numeros);
    }
}
}
