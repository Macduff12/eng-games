package Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class EngineeringGamesHomePage extends BasePage {

    public EngineeringGamesHomePage(WebDriver driver) {
        super(driver);
    }

    public void navigateSite() {
        driver.get("http://localhost:3000");
    }

    public WebElement clickInputNameField() {
        return driver.findElement(By.xpath("//input[@type='text']"));
    }

    public WebElement clickInputName() {
        return driver.findElement(By.xpath("//input[@type='text']"));
    }
    public WebElement clickSelectLanguage() {
        return driver.findElement(By.xpath("//select[@name='language']"));
    }
    public WebElement selectLanguage() {
        return driver.findElement(By.xpath("//option[@value='python']"));
    }
    public WebElement clickSelectLevel() {
        return driver.findElement(By.xpath("//select[@id='level']"));
    }

    public WebElement selectLevel() {
        return driver.findElement(By.xpath("//option[@value='junior']"));
    }


    public WebElement clickSubmitButton() {
        return driver.findElement(By.xpath("//button[@type='submit']"));
    }
    public WebElement clickTrueAnswerFirst() {
        return driver.findElement(By.xpath("//button[@value='3']"));
    }
//    public WebElement clickTrueSubmit() {
//        return driver.findElement(By.xpath("//button[@type='submit']"));
//    }
    public WebElement clickTrueAnswerSecond() {
        return driver.findElement(By.xpath("//button[@value='0']"));
    }
//    public WebElement clickTrueAnswerThird() {
//        return driver.findElement(By.xpath("//button[@value='2']"));
//    }
    public WebElement clickReturnHomePage() {
        return driver.findElement(By.xpath("//button[@class='returnPage']"));
    }


}
