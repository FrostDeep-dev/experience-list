import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JTextField;
import javax.swing.WindowConstants;

    public class atv012 extends JFrame{
        JFrame tela;
        JLabel texto;
        JLabel saidaTexto;
        JTextField caixaTexto;
        JButton botao;

        public atv012(){
            tela = new JFrame();
            tela.setSize(400,400);
            tela.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
            tela.setLocationRelativeTo(null);
            tela.setResizable(false);
            tela.setTitle("Projeto");

            texto = new JLabel();
            texto.setBounds(10, 10, 100, 30);
            texto.setText("Atividade");
            texto.setVisible(true);
            tela.add(texto);

            caixaTexto = new JTextField();
            caixaTexto.setBounds(10, 50, 100, 30);
            caixaTexto.setVisible(true);
            tela.add(caixaTexto);

            botao = new JButton();
            botao.setBounds(120, 50, 100, 30);
            botao.setVisible(true);
            botao.addActionListener((e) -> {
                cliqueBotao();
            });
            tela.add(botao);

            saidaTexto = new JLabel();
            saidaTexto.setBounds(10, 100, 100, 30);
            saidaTexto.setVisible(true);
            tela.add(saidaTexto);

            tela.setVisible(true);
        }

        public void cliqueBotao(){
            System.out.println("Clicado");
            String texto = caixaTexto.getText();
            saidaTexto.setText(texto);
        }

    }
