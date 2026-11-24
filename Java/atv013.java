import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JTextField;
import javax.swing.WindowConstants;

public class atv013 extends JFrame{
    
    JButton botao;
    JLabel texto1, saidaTexto;
    JTextField caixa1;

    public static void main(String[] args) {
        new atv013();
    }
    public atv013(){

        setSize(500,500);
        setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
        setLayout(null);

        texto1 = new JLabel();
        texto1.setBounds(20,20,100,20);
        texto1.setText("Digite sua idade: ");

        caixa1 = new JTextField();
        caixa1.setBounds(120,20,100,20);

        saidaTexto = new JLabel();
        saidaTexto.setBounds(20,40,100,20);
        
        botao = new JButton("Resultado");
        botao.setBounds(245,20,100,20);
        botao.addActionListener((e )->{
            botaoClicado();
        });

        add(botao);
        add(texto1);
        add(saidaTexto);
        add(caixa1);
        setVisible(true);
    }
    public void botaoClicado(){
        int num = Integer.valueOf(caixa1.getText());
        
        if (num>=18){
            saidaTexto.setText("Maior de idade");
            
        }
        else{
            saidaTexto.setText("Menor de idade");
            
        }
    }
}
