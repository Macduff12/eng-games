// cypress/pages/engineeringGamesHomePage.js

class EngineeringGamesHomePage {
    // Метод для переходу на сайт
    navigateSite() {
      cy.visit('http://localhost:3001');
    }
  
    // Методи для взаємодії з полями форми
    clickInputNameField() {
      return cy.get('input[type="text"]');
    }
  
    clickInputName() {
      return this.clickInputNameField();
    }
  
    clickSelectLanguage() {
      return cy.get('select[name="language"]');
    }
  
    selectLanguage() {
      return this.clickSelectLanguage().select('python');
    }
  
    clickSelectLevel() {
      return cy.get('select[id="level"]');
    }
  
    selectLevel() {
      return this.clickSelectLevel().select('junior');
    }
  
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
  }
  
  export default EngineeringGamesHomePage;
  