package Pages;

import org.openqa.selenium.WebDriver;

public class EngineerngGamesHomePageNegative extends BasePage{
    public EngineerngGamesHomePageNegative(WebDriver driver) {
        super(driver);
    }

    public void navigateSite() {
        driver.get("http://localhost:3000");
    }
}
