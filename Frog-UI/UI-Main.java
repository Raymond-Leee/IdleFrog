package Frog-UI;
import java.io.*;
import javax.swing.*;

public class frogUI{
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


}