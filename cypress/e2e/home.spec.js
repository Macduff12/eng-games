// cypress/integration/form.spec.js

import EngineeringGamesAddQuestion from '../pages/engineeringGamesAddQuestion';

describe('Engineering Games Add Question Tests', () => {
  const page = new EngineeringGamesAddQuestion();

  beforeEach(() => {
    page.navigateSite();
  });

  it('Should add a new question', () => {
    page.clickInputNameField().type('Sample Name');
    page.clickSelectLanguage().select('python');
    page.clickSelectLevel().select('junior');
    page.clickQuestion().type('What is a function?');
    page.typeOptions('Option 1\nOption 2\nOption 3');
    page.clickTrueAnswerFirst();
    page.clickSubmitButton();
  });
});
