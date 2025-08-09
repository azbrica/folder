import javax.swing.*;
import java.awt.*;

public class Blue extends JPanel {

    private String[] lyrics = {
            "Living all alone kinda forgot it's been that long",
            "Since someone's gone, I've been trying to be a little bit strong",
            "And it is not that easy to be exactly who I was",
            "My shit is done, now it's time for me try to moving on",
            "",
            "'Cuz if you think I'm such a happy person, no you are wrong",
            "By saying my laughter is louder than yours",
            "Shut your freakin' mouth",
            "No one knows what I feel and what i suffer, no they don't know",
            "So keep your thoughts and stop assuming that",
            "Someone is always fine"
    };

    // Delay (ms) setelah selesai ketik tiap baris; aku sesuaikan supaya natural
    private int[] delays = {
            1500, 1800, 1500, 1500, 800, 2000, 1500, 1000, 2000, 1500, 1500
    };

    private int currentIndex = 0;
    private String currentLine = "";
    private int currentCharIndex = 0;
    private ImageIcon backgroundGif;

    public Blue() {
        setPreferredSize(new Dimension(1280, 720));
        backgroundGif = new ImageIcon("bluesky.gif");
        new Thread(() -> {
            try {
                while (currentIndex < lyrics.length) {
                    if (currentCharIndex < lyrics[currentIndex].length()) {
                        currentLine += lyrics[currentIndex].charAt(currentCharIndex);
                        currentCharIndex++;
                        repaint();
                        Thread.sleep(110); // Kecepatan ketik per karakter
                    } else {
                        Thread.sleep(delays[currentIndex]); // Delay setelah baris selesai
                        currentIndex++;
                        currentLine = "";
                        currentCharIndex = 0;
                        repaint();
                    }
                }
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }).start();
    }

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        if (backgroundGif != null) {
            g.drawImage(backgroundGif.getImage(), 0, 0, getWidth(), getHeight(), this);
        }
        g.setFont(new Font("Serif", Font.PLAIN, 42));
        g.setColor(Color.WHITE);

        // Hitung posisi tengah horizontal dan vertikal
        int stringWidth = g.getFontMetrics().stringWidth(currentLine);
        int x = (getWidth() - stringWidth) / 2;
        int y = getHeight() / 2;

        // Gambar lirik di tengah
        g.drawString(currentLine, x, y);
    }

    public static void main(String[] args) {
        JFrame frame = new JFrame("Lyrics");
        Blue panel = new Blue();
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.add(panel);
        frame.pack();
        frame.setLocationRelativeTo(null);
        frame.setVisible(true);
    }
}
