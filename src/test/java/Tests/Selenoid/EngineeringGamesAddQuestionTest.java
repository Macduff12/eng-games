package Tests.Selenoid;

import Pages.Selenoid.EngineeringGamesAddQuestion;
import io.qameta.allure.Allure;
import io.qameta.allure.Epic;
import io.qameta.allure.Feature;
import io.qameta.allure.Issue;
import io.qameta.allure.Owner;
import io.qameta.allure.Severity;
import io.qameta.allure.Step;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.net.MalformedURLException;
import java.net.URL;
import java.time.Duration;
import java.util.Date;

public class EngineeringGamesAddQuestionTest {

    private WebDriver driver;
    private WebDriverWait wait;

    @BeforeEach
    public void setUp() throws MalformedURLException {
        // Setup WebDriver and WebDriverWait
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--start-maximized"); // Example argument
        // Additional Chrome options can be added here

        // Update with your Selenoid or Selenium Grid URL
        driver = new RemoteWebDriver(new URL("http://localhost:4444/wd/hub"), options);
        wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    }

    @Test
    @Epic("Engineering Games Suite")
    @Feature("Engineering Add Question Functionality")
    @Severity(io.qameta.allure.SeverityLevel.CRITICAL)
    @Owner("John Doe")
    @Issue("ENG-126")
    @Step("Add new question to Engineering Games")
    public void testEngineeringAddQuestion() {
        Allure.addAttachment("Test Start Time", new Date().toString());

        EngineeringGamesAddQuestion page = new EngineeringGamesAddQuestion(driver);

        page.navigateToSite();

        // Actions
        page.getInputNameField().click();
        page.getInputNameField().sendKeys("Test Name");

        page.getSelectLanguage().click();
        page.getLanguagePythonOption().click();

        page.getSubmitButton().click();

        page.getSelectLevel().click();
        page.getLevelJuniorOption().click();

        page.getSubmitButton().click();

        page.getTrueAnswerFirst().click();
        page.getTrueAnswerSecond().click();

        page.getReturnHomePageButton().click();
        page.getAddQuestionButton().click();

        page.getSelectLanguage().click();
        page.getLanguageJsOption().click();

        page.getSelectLevel().click();
        page.getLevelMiddleOption().click();

        page.getQuestionTextarea().click();
        page.getQuestionTextarea().sendKeys("test?");
        page.getOptionsTextarea().sendKeys("Yes\nNo");

        page.getTrueAnswerInput().sendKeys("0");
        page.getSubmitButton().click();
    }

    @AfterEach
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}
