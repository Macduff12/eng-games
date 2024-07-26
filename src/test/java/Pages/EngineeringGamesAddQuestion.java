package Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class EngineeringGamesAddQuestion extends BasePage{
    public EngineeringGamesAddQuestion(WebDriver driver) {
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
    public WebElement clickSelectLanguageAdd() {
        return driver.findElement(By.xpath("//select[@name='language']"));
    }
    public WebElement selectLanguageAdd() {
        return driver.findElement(By.xpath("//option[@value='js']"));
    }
    public WebElement clickSelectLevel() {
        return driver.findElement(By.xpath("//select[@id='level']"));
    }
    public WebElement clickSelectLevelAdd() {
        return driver.findElement(By.xpath("//select[@id='level']"));
    }
    public WebElement selectLevel() {
        return driver.findElement(By.xpath("//option[@value='junior']"));
    }
    public WebElement selectLevelAdd() {
        return driver.findElement(By.xpath("//option[@value='middle']"));
    }
    public WebElement clickSubmitButton() {
        return driver.findElement(By.xpath("//button[@type='submit']"));
    }
    public WebElement clickTrueAnswerFirst() {
        return driver.findElement(By.xpath("//button[@value='3']"));
    }
    public WebElement clickTrueAnswerSecond() {
        return driver.findElement(By.xpath("//button[@value='0']"));
    }
    public WebElement clickReturnHomePage() {
        return driver.findElement(By.xpath("//button[@class='returnPage']"));
    }
    public WebElement clickAddQuestion() {
        return driver.findElement(By.xpath("//a[@class='btn'][2]"));
    }
    public WebElement clickQuestion() {
        return driver.findElement(By.xpath("//textarea[@id='question']"));
    }
    public WebElement typeQuestion() {
        return driver.findElement(By.xpath("//textarea[@id='question']"));
    }
    public WebElement typeOptions() {
        return driver.findElement(By.xpath("//textarea[@id='options']"));
    }

    public WebElement clickTrueAnswer() {
        return driver.findElement(By.xpath("//input[@name='answer']"));
    }
    public WebElement typeTrueAnswer() {
        return driver.findElement(By.xpath("//input[@name='answer']"));
    }
    public WebElement typeSubmit() {
        return driver.findElement(By.xpath("//button[@type='submit']"));
    }
}
