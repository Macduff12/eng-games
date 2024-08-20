const { defineConfig } = require('cypress');
const mochawesome = require('cypress-mochawesome-reporter/plugin');
const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');
const puppeteer = require('puppeteer');

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3001/",
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 8000,
    screenshotOnRunFailure: true,
    video: true,
    videoCompression: 32,
    retries: {
      runMode: 2,
      openMode: 0,
    },
    setupNodeEvents(on, config) {
      mochawesome(on);

      // Генерація PDF після завершення тестів
      on('after:run', async (results) => {
        if (results.totalFailed > 0) {
          // Створення PDF документа
          const doc = new PDFDocument();
          const pdfPath = path.join(__dirname, 'reports', 'test-results.pdf');
          doc.pipe(fs.createWriteStream(pdfPath));

          doc.fontSize(16).text('Test Results', { underline: true });
          doc.moveDown();
          
          // Додаємо загальну інформацію
          doc.fontSize(12).text(`Total Tests: ${results.totalTests}`);
          doc.text(`Total Failed: ${results.totalFailed}`);
          doc.text(`Total Passed: ${results.totalPassed}`);
          doc.text(`Total Skipped: ${results.totalSkipped}`);
          doc.moveDown();

          // Додаємо деталі по кожному тесту
          results.tests.forEach(test => {
            doc.text(`Test: ${test.title}`);
            doc.text(`Status: ${test.state}`);
            doc.text(`Duration: ${test.duration}ms`);
            doc.moveDown();
          });

          doc.end();

          console.log(`PDF report generated at ${pdfPath}`);
        }
      });

      // Інші плагіни або обробники подій
    },
    chromeWebSecurity: false,
  },
});
