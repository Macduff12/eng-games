package Tests;

import Pages.EngineeringGamesAddQuestion;
import Pages.EngineeringGamesFeedback;
import Pages.EngineeringGamesFeedbackNegative;
import Pages.EngineeringGamesHomePage;
import io.qameta.allure.Allure;
import io.qameta.allure.Epic;
import io.qameta.allure.Feature;
import io.qameta.allure.Issue;
import io.qameta.allure.Owner;
import io.qameta.allure.Severity;
import io.qameta.allure.Step;
import io.qameta.allure.Story;
import org.testng.annotations.Test;
import java.util.Date;

public class EngineeringTests extends Tests.TestInit {

    @Test
    @Epic("Engineering Games Suite")
    @Feature("Engineering Games Functionality")
    @Story("User Interaction with Engineering Games")
    @Severity(io.qameta.allure.SeverityLevel.CRITICAL)
    @Owner("John Doe")
    @Issue("ENG-123")
    @Step("Testing Engineering Games")
    public void TestEngineering() {
        Allure.addAttachment("Test Start Time", new Date().toString());

        try {
            EngineeringGamesHomePage engineeringGamesHomePage = new EngineeringGamesHomePage(driver);
            engineeringGamesHomePage.navigateSite();
            engineeringGamesHomePage.clickInputNameField().click();
            engineeringGamesHomePage.clickInputName().sendKeys("Test Name\n");
            engineeringGamesHomePage.clickSelectLanguage().click();
            engineeringGamesHomePage.selectLanguage().click();
            engineeringGamesHomePage.clickSubmitButton().click();
            engineeringGamesHomePage.clickSelectLevel().click();
            engineeringGamesHomePage.selectLevel().click();
            engineeringGamesHomePage.clickSubmitButton().click();
            engineeringGamesHomePage.clickTrueAnswerFirst().click();
            engineeringGamesHomePage.clickTrueAnswerSecond().click();
            engineeringGamesHomePage.clickReturnHomePage().click();
        } catch (Exception e) {
            Allure.addAttachment("Exception Stack Trace", e.getMessage());
            throw e;
        } finally {
            Allure.addAttachment("Test End Time", new Date().toString());
        }
    }

    @Test
    @Epic("Engineering Games Suite")
    @Feature("Engineering Feedback Functionality")
    @Story("User Feedback Submission")
    @Severity(io.qameta.allure.SeverityLevel.NORMAL)
    @Owner("Jane Smith")
    @Issue("ENG-124")
    @Step("Testing Engineering Feedback")
    public void TestEngineeringFeedback() {
        Allure.addAttachment("Test Start Time", new Date().toString());

        try {
            EngineeringGamesFeedback engineeringGamesFeedback = new EngineeringGamesFeedback(driver);
            engineeringGamesFeedback.navigateSite();
            engineeringGamesFeedback.clickInputNameField().click();
            engineeringGamesFeedback.clickInputName().sendKeys("Test Name\n");
            engineeringGamesFeedback.clickSelectLanguage().click();
            engineeringGamesFeedback.selectLanguage().click();
            engineeringGamesFeedback.clickSubmitButton().click();
            engineeringGamesFeedback.clickSelectLevel().click();
            engineeringGamesFeedback.selectLevel().click();
            engineeringGamesFeedback.clickSubmitButton().click();
            engineeringGamesFeedback.clickTrueAnswerFirst().click();
            engineeringGamesFeedback.clickTrueAnswerSecond().click();
            engineeringGamesFeedback.clickReturnHomePage().click();
            engineeringGamesFeedback.clickSentFeedback().click();
            engineeringGamesFeedback.clickNameField().click();
            engineeringGamesFeedback.typeName().sendKeys("TestForTesting\n");
            engineeringGamesFeedback.typeEmail().sendKeys("testingemail86@gmail.com\n");
            engineeringGamesFeedback.typeMessage().sendKeys("Very good service");
            engineeringGamesFeedback.clickViewFeedback().click();
            engineeringGamesFeedback.clickSendFeedback().click();
        } catch (Exception e) {
            Allure.addAttachment("Exception Stack Trace", e.getMessage());
            throw e;
        } finally {
            Allure.addAttachment("Test End Time", new Date().toString());
        }
    }

    @Test
    @Epic("Engineering Games Suite")
    @Feature("Engineering Feedback Functionality")
    @Story("Invalid Email Submission")
    @Severity(io.qameta.allure.SeverityLevel.MINOR)
    @Owner("Jane Smith")
    @Issue("ENG-125")
    @Step("Testing Engineering Feedback with Bad Email")
    public void TestEngineeringFeedbackNegativeWithBadEmail() {
        Allure.addAttachment("Test Start Time", new Date().toString());

        try {
            EngineeringGamesFeedbackNegative engineeringGamesFeedbackNegative = new EngineeringGamesFeedbackNegative(driver);
            engineeringGamesFeedbackNegative.navigateSite();
            engineeringGamesFeedbackNegative.clickInputNameField().click();
            engineeringGamesFeedbackNegative.clickInputName().sendKeys("Test Name\n");
            engineeringGamesFeedbackNegative.clickSelectLanguage().click();
            engineeringGamesFeedbackNegative.selectLanguage().click();
            engineeringGamesFeedbackNegative.clickSubmitButton().click();
            engineeringGamesFeedbackNegative.clickSelectLevel().click();
            engineeringGamesFeedbackNegative.selectLevel().click();
            engineeringGamesFeedbackNegative.clickSubmitButton().click();
            engineeringGamesFeedbackNegative.clickTrueAnswerFirst().click();
            engineeringGamesFeedbackNegative.clickTrueAnswerSecond().click();
            engineeringGamesFeedbackNegative.clickReturnHomePage().click();
            engineeringGamesFeedbackNegative.clickSentFeedback().click();
            engineeringGamesFeedbackNegative.clickNameField().click();
            engineeringGamesFeedbackNegative.typeName().sendKeys("TestForTesting\n");
            engineeringGamesFeedbackNegative.typeEmail().sendKeys("testingemai");
            engineeringGamesFeedbackNegative.typeMessage().sendKeys("Very good service");
            engineeringGamesFeedbackNegative.clickViewFeedback().click();
            engineeringGamesFeedbackNegative.clickSendFeedback().click();
        } catch (Exception e) {
            Allure.addAttachment("Exception Stack Trace", e.getMessage());
            throw e;
        } finally {
            Allure.addAttachment("Test End Time", new Date().toString());
        }
    }

    @Test
    @Epic("Engineering Games Suite")
    @Feature("Engineering Add Question Functionality")
    @Story("User Adds New Question")
    @Severity(io.qameta.allure.SeverityLevel.CRITICAL)
    @Owner("John Doe")
    @Issue("ENG-126")
    @Step("Testing Engineering Add Question")
    public void TestEngineeringAddQuestion() {
        Allure.addAttachment("Test Start Time", new Date().toString());

        try {
            EngineeringGamesAddQuestion engineeringGamesAddQuestion = new EngineeringGamesAddQuestion(driver);
            engineeringGamesAddQuestion.navigateSite();
            engineeringGamesAddQuestion.clickInputNameField().click();
            engineeringGamesAddQuestion.clickInputName().sendKeys("Test Name\n");
            engineeringGamesAddQuestion.clickSelectLanguage().click();
            engineeringGamesAddQuestion.selectLanguage().click();
            engineeringGamesAddQuestion.clickSubmitButton().click();
            engineeringGamesAddQuestion.clickSelectLevel().click();
            engineeringGamesAddQuestion.selectLevel().click();
            engineeringGamesAddQuestion.clickSubmitButton().click();
            engineeringGamesAddQuestion.clickTrueAnswerFirst().click();
            engineeringGamesAddQuestion.clickTrueAnswerSecond().click();
            engineeringGamesAddQuestion.clickReturnHomePage().click();
            engineeringGamesAddQuestion.clickAddQuestion().click();
            engineeringGamesAddQuestion.clickSelectLanguageAdd().click();
            engineeringGamesAddQuestion.selectLanguageAdd().click();
            engineeringGamesAddQuestion.clickSelectLevelAdd().click();
            engineeringGamesAddQuestion.selectLevelAdd().click();
            engineeringGamesAddQuestion.clickQuestion().click();
            engineeringGamesAddQuestion.typeQuestion().sendKeys("10 чи 9??");
            engineeringGamesAddQuestion.typeOptions().sendKeys("Yes/n No\n");
            engineeringGamesAddQuestion.typeTrueAnswer().sendKeys("0");
            engineeringGamesAddQuestion.typeSubmit().click();
        } catch (Exception e) {
            Allure.addAttachment("Exception Stack Trace", e.getMessage());
            throw e;
        } finally {
            Allure.addAttachment("Test End Time", new Date().toString());
        }
    }
}

