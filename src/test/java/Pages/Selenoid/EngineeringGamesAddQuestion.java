package Pages.Selenoid;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class EngineeringGamesAddQuestion extends BasePage {

    // XPaths для елементів сторінки
    private By inputNameField = By.xpath("//input[@type='text']");
    private By selectLanguage = By.xpath("//select[@name='language']");
    private By languagePythonOption = By.xpath("//option[@value='python']");
    private By languageJsOption = By.xpath("//option[@value='js']");
    private By selectLevel = By.xpath("//select[@id='level']");
    private By levelJuniorOption = By.xpath("//option[@value='junior']");
    private By levelMiddleOption = By.xpath("//option[@value='middle']");
    private By submitButton = By.xpath("//button[@type='submit']");
    private By trueAnswerFirst = By.xpath("//button[@value='3']");
    private By trueAnswerSecond = By.xpath("//button[@value='0']");
    private By returnHomePageButton = By.xpath("//button[@class='returnPage']");
    private By addQuestionButton = By.xpath("//a[@class='btn'][2]");
    private By questionTextarea = By.xpath("//textarea[@id='question']");
    private By optionsTextarea = By.xpath("//textarea[@id='options']");
    private By trueAnswerInput = By.xpath("//input[@name='answer']");

    public EngineeringGamesAddQuestion(WebDriver driver) {
        super(driver);
    }


    public void navigateToSite() {
        driver.get("http://localhost:3001");
    }

    // Методи для роботи з елементами

    public WebElement getInputNameField() {
        return driver.findElement(inputNameField);
    }

    public WebElement getSelectLanguage() {
        return driver.findElement(selectLanguage);
    }

    public WebElement getLanguagePythonOption() {
        return driver.findElement(languagePythonOption);
    }

    public WebElement getLanguageJsOption() {
        return driver.findElement(languageJsOption);
    }

    public WebElement getSelectLevel() {
        return driver.findElement(selectLevel);
    }

    public WebElement getLevelJuniorOption() {
        return driver.findElement(levelJuniorOption);
    }

    public WebElement getLevelMiddleOption() {
        return driver.findElement(levelMiddleOption);
    }

    public WebElement getSubmitButton() {
        return driver.findElement(submitButton);
    }

    public WebElement getTrueAnswerFirst() {
        return driver.findElement(trueAnswerFirst);
    }

    public WebElement getTrueAnswerSecond() {
        return driver.findElement(trueAnswerSecond);
    }

    public WebElement getReturnHomePageButton() {
        return driver.findElement(returnHomePageButton);
    }

    public WebElement getAddQuestionButton() {
        return driver.findElement(addQuestionButton);
    }

    public WebElement getQuestionTextarea() {
        return driver.findElement(questionTextarea);
    }

    public WebElement getOptionsTextarea() {
        return driver.findElement(optionsTextarea);
    }

    public WebElement getTrueAnswerInput() {
        return driver.findElement(trueAnswerInput);
    }
}
