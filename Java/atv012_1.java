import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JTextField;
import javax.swing.WindowConstants;

public class atv012_1 extends JFrame{

    //atributos
    JFrame tela;
    JLabel texto;
    JLabel saidaTexto;
    JTextField caixaTexto;
    JTextField caixaTexto2;
    JButton botao;

    //comportamentos

    public atv012_1(){

        //definir janela JFrame

        tela = new JFrame();
        tela.setSize(400,400);
        tela.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
        tela.setLocationRelativeTo(null);
        tela.setResizable(false);
        tela.setLayout(null);
        tela.setTitle("Projeto Interface Grafica");
        //definir texto JLabel

        texto = new JLabel();
        texto.setBounds(100, 10, 100, 30);
        texto.setText("Calculo de soma");
        texto.setVisible(true);
        tela.add(texto);
        //definir caixa de texto JTextField

        caixaTexto = new JTextField();
        caixaTexto.setBounds(10, 50, 100, 30);
        caixaTexto.setVisible(true);
        tela.add(caixaTexto);
        //definir outra caixa de texto JTextField

        caixaTexto2 = new JTextField();
        caixaTexto2.setBounds(10, 100, 100, 30);
        caixaTexto2.setVisible(true);
        tela.add(caixaTexto2);
        //definir o botao JButton

        botao = new JButton("Somar");
        botao.setBounds(10, 150, 100, 30);
        botao.setVisible(true);
        botao.addActionListener((e) -> {
            cliqueBotao();

        });

        tela.add(botao);

        //definir a saidaTexto JLabel
        saidaTexto = new JLabel();
        saidaTexto.setBounds(10, 200, 100, 30);
        saidaTexto.setVisible(true);
        tela.add(saidaTexto);

        tela.setVisible(true);

    }
 
    public void cliqueBotao(){
        int n1 = Integer.valueOf(caixaTexto.getText());
        int n2 = Integer.valueOf(caixaTexto2.getText());
        saidaTexto.setText(String.valueOf(n1+n2));

    }
 
}
 

