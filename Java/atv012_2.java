import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JTextField;
import javax.swing.WindowConstants;

public class atv012_2 extends JFrame{

    JFrame tela;
    JLabel texto;
    JLabel saidaTexto;
    JTextField caixaTexto;
    JButton botao;
    
    public static void main(String[] args) {
        new atv012_2();
    }
    public atv012_2(){
        
        tela = new JFrame();
        tela.setSize(500,500);
        tela.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
        tela.setLayout(null);

        texto = new JLabel();
        texto.setBounds(20,10,100,30);
        texto.setText("Digite seu nome: ");
        tela.add(texto);
        
        saidaTexto = new JLabel();
        saidaTexto.setBounds(100,100,100,100);
        tela.add(saidaTexto);

        caixaTexto = new JTextField();
        caixaTexto.setBounds(40,40,100,20);
        tela.add(caixaTexto);
        
        botao = new JButton("Mostrar");
        botao.setBounds(250,200,100,50);

        botao.addActionListener((e) ->{
            cliqueBotao();
        });
        tela.add(botao);
        tela.setVisible(true);
    }
    public void cliqueBotao(){
        String texto = caixaTexto.getText();
        saidaTexto.setText("Bem vindo "+texto);
    }
}
