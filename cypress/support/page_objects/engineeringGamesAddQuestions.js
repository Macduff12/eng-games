// cypress/pages/engineeringGamesAddQuestion.js

class EngineeringGamesAddQuestion {
    // Метод для навігації на сайт
    navigateSite() {
      cy.visit('http://localhost:3001');
    }
  
    // Методи для роботи з полями вводу
    clickInputNameField() {
      return cy.get('input[type="text"]');
    }
  
    clickInputName() {
      return cy.get('input[type="text"]');
    }
  
    // Методи для роботи з випадаючими списками
    clickSelectLanguage() {
      return cy.get('select[name="language"]');
    }
  
    selectLanguage() {
      return cy.get('option[value="python"]');
    }
  
    clickSelectLanguageAdd() {
      return cy.get('select[name="language"]');
    }
  
    selectLanguageAdd() {
      return cy.get('option[value="js"]');
    }
  
    clickSelectLevel() {
      return cy.get('select[id="level"]');
    }
  
    clickSelectLevelAdd() {
      return cy.get('select[id="level"]');
    }
  
    selectLevel() {
      return cy.get('option[value="junior"]');
    }
  
    selectLevelAdd() {
      return cy.get('option[value="middle"]');
    }
  
    // Методи для роботи з кнопками
    clickSubmitButton() {
      return cy.get('button[type="submit"]');
    }
  
    clickTrueAnswerFirst() {
      return cy.get('button[value="0"]');
    }
  
    clickTrueAnswerSecond() {
      return cy.get('button[value="0"]');
    }
  
    clickReturnHomePage() {
      return cy.get('button.returnPage');
    }
  
    clickAddQuestion() {
      return cy.get('a.btn').eq(1); // Вибирає другий елемент з класом 'btn'
    }
  
    // Методи для роботи з текстовими полями
    clickQuestion() {
      return cy.get('textarea[id="question"]');
    }
    clickSelectQuestionLanguage() {
      return cy.get('//select[@name="language"]');
    }
    selectQuestionLanguagePython() {
      return cy.get('//option[@value="python"]');
    } 
    clickOptions() {
      return cy.get('textarea[id="options"]');
    }
  
    clickTrueAnswer() {
      return cy.get('input[name="answer"]');
    }
  
    typeTrueAnswer() {
    return  cy.get('input[name="answer"]');
    }
  
    typeSubmit() {
      return cy.get('button[type="submit"]');
    }
  }
  
  export default EngineeringGamesAddQuestion;
  