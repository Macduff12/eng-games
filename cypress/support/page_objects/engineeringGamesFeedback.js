// cypress/pages/engineeringGamesFeedback.js

class EngineeringGamesFeedback {
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
  
    clickSentFeedback() {
      return cy.get('a.btn').eq(3); // Використовуємо eq для вибору 4-го елемента
    }
  
    clickNameField() {
      return cy.get('input[name="name"]');
    }
  
    typeName() {
      return this.clickNameField();
    }
  
    clickEmailField() {
      return cy.get('input[name="email"]');
    }
  
    typeEmail() {
      return this.clickEmailField();
    }
  
    clickMessageField() {
      return cy.get('textarea[name="message"]');
    }
  
    typeMessage() {
      return this.clickMessageField();
    }
  
    clickViewFeedback() {
      return cy.get('button[id="viewFeedbacks"]');
    }
  
    clickSendFeedback() {
      return this.clickSubmitButton();
    }
  }
  
  export default EngineeringGamesFeedback;
  