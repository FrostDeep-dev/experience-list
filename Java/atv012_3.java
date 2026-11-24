import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JTextField;
import javax.swing.WindowConstants;

public class atv012_3 extends JFrame{
    
    JButton botao;
    JLabel texto1, texto2, multi, resultado;
    JTextField num1, num2;

    public static void main(String[] args) {
        new atv012_3();
    }
    public atv012_3(){
        
        setSize(500,500);
        setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
        setLayout(null);
        
        texto1 = new JLabel();
        texto1.setBounds(20, 20,100,20);
        texto1.setText("Número 1: ");
        add(texto1);

        multi = new JLabel();
        multi.setBounds(40,20,150,60);
        multi.setText("X");
        add(multi);

        texto2 = new JLabel();
        texto2.setBounds(20,20,100,90);
        texto2.setText("Número 2: ");
        add(texto2);

        num1 = new JTextField();
        num1.setBounds(100,20,150,20);
        add(num1);

        num2 = new JTextField();
        num2.setBounds(100,55,150,20);
        add(num2);

        botao = new JButton("Multiplicar");
        botao.setBounds(300,35,100,20);
        botao.addActionListener((e) ->{
            cliqueBotao();
        });
        add(botao);

        resultado = new JLabel();
        resultado.setBounds(20,90,100,20);
        add(resultado);
        

        setVisible(true);
    }
    public void cliqueBotao(){
        int num01 = Integer.valueOf(num1.getText());
        int num02 = Integer.valueOf(num2.getText());
        int produto = num01 * num02;
        resultado.setText("Resultado = "+produto);
    }
}
