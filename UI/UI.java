package UI;
import javax.swing.*;

public class UI{
    // Startup UI
    public static void startup() {
        //window
        JFrame window = new JFrame("Idle Frog");
        window.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        //text
        JLabel texts = new JLabel("FUCK YOUUU");
        window.getContentPane().add(texts);

        //display window
        window.pack();
        window.setVisible(true);
    }

    //Testing code
    public static void main(String[] args){
        javax.swing.SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                startup();
                }
            });
    }

}