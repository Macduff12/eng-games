import EngineeringGamesAddQuestion from '../support/page_objects/engineeringGamesAddQuestions';
import EngineeringGamesFeedback from '../support/page_objects/engineeringGamesFeedback';
import EngineeringGamesHomePage from '../support/page_objects/engineeringGamesHomePage';

// describe('Engineering Games Add Question Tests', () => {
//   const page = new EngineeringGamesAddQuestion();

//   beforeEach(() => {
//     page.navigateSite();
//   });

//   it('Should add a new question', () => {
//     page.clickInputNameField().type('Sample Name');
//     page.clickSubmitButton().click();
//     page.clickSelectLanguage().select('java');
//     page.clickSubmitButton().click(); 
//     page.clickSelectLevel().select('junior');
//     page.clickSubmitButton().click();
//     page.clickTrueAnswerFirst().click();
//     page.clickTrueAnswerSecond().click();
//     page.clickReturnHomePage().click();
//     page.clickAddQuestion().click();
//     page.clickSelectLanguage().select('python');
//     page.clickSelectLevel().select('junior');
//     page.clickQuestion().type('question for test');
//     page.clickOptions().type('Option 1\nOption 2\nOption 3', { force: true });
//     page.clickTrueAnswer().type('1');
//     page.typeSubmit().click();
//   });
// });
// describe('Engineering Games Add Question Tests', () => {
//   const page = new EngineeringGamesFeedback();

//   beforeEach(() => {
//     page.navigateSite();
//   });

//   it('Add a feedback', () => {
//     page.clickInputNameField().type('Sample Name');
//     page.clickSubmitButton().click();
//     page.clickSelectLanguage().select('java');
//     page.clickSubmitButton().click(); 
//     page.clickSelectLevel().select('junior');
//     page.clickSubmitButton().click();
//     page.clickTrueAnswerFirst().click();
//     page.clickTrueAnswerSecond().click();
//     page.clickReturnHomePage().click();
//     page.clickSentFeedback().click();
//     page.clickNameField().type('Test Name')
//     page.clickEmailField().type('test@example.com')
//     page.clickMessageField().type('Test Message 123321')
//     page.clickSendFeedback().click();
//     page.clickViewFeedback().click();
//   });
// });
describe('Engineering Games Home Page', () => {
  const page = new EngineeringGamesHomePage();

  beforeEach(() => {
    page.navigateSite();
  });

  it('Engineering Games Home Page', () => {
    page.clickInputNameField().type('Sample Name');
    page.clickSubmitButton().click();
    page.clickSelectLanguage().select('java');
    page.clickSubmitButton().click(); 
    page.clickSelectLevel().select('junior');
    page.clickSubmitButton().click();
    page.clickTrueAnswerFirst().click();
    page.clickTrueAnswerSecond().click();
    page.clickReturnHomePage().click();
  });
});
