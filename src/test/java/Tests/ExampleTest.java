package Tests;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import java.net.URL;

public class ExampleTest {

    @Test
    public void testGoogleHomePage() {
        try {
            DesiredCapabilities capabilities = new DesiredCapabilities();
            capabilities.setBrowserName("chrome");
            capabilities.setVersion("latest");

            URL selenoidUrl = new URL("http://localhost:4444/wd/hub");
            WebDriver driver = new RemoteWebDriver(selenoidUrl, capabilities);

            driver.get("http://www.google.com");
            System.out.println("Title: " + driver.getTitle());

            driver.quit();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
