const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const fs = require('fs');

const { swaggerUi, swaggerSetup } = require('./swagger');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
// Налаштування для розпізнавання JSON тіла запиту
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Налаштування для обробки кукі
app.use(cookieParser());

// Статичні файли
app.use(express.static(path.join(__dirname, 'public')));

// Шаблони
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Swagger UI route
app.use('/api-docs', swaggerUi.serve, swaggerSetup);

// Файл для зберігання відгуків
const feedbackFile = path.join(__dirname, 'feedback.json');

// Отримання форми зворотного зв'язку
/**
 * @swagger
 * /feedback:
 *   get:
 *     summary: Отримати форму для зворотного зв'язку
 *     description: Повертає HTML-форму для зворотного зв'язку
 *     responses:
 *       200:
 *         description: Повертає HTML-форму для зворотного зв'язку
 *         content:
 *           text/html:
 *             schema:
 *               type: string
 *               example: '<!DOCTYPE html>...'
 */
app.get('/feedback', (req, res) => {
  res.render('feedback'); // Рендеримо шаблон feedback.ejs
});

// Додати новий відгук
/**
 * @swagger
 * /feedback:
 *   post:
 *     summary: Додати новий відгук
 *     description: Додає новий відгук до файлу JSON
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Ім'я користувача
 *                 example: 'Іван'
 *               email:
 *                 type: string
 *                 description: Електронна пошта користувача
 *                 example: 'ivan@example.com'
 *               message:
 *                 type: string
 *                 description: Текст відгуку
 *                 example: 'Чудова служба підтримки!'
 *     responses:
 *       201:
 *         description: Відгук успішно додано
 *       400:
 *         description: Неправильний запит (не всі поля заповнені)
 *       500:
 *         description: Помилка запису файлу
 */
app.post('/feedback', (req, res) => {
  const newFeedback = req.body;

  // Перевірте, чи всі необхідні поля є у запиті
  if (!newFeedback.name || !newFeedback.email || !newFeedback.message) {
    return res.status(400).send('Неправильний запит (не всі поля заповнені)');
  }

  fs.readFile(feedbackFile, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Помилка читання файлу');
    }

    let feedbacks = [];
    try {
      feedbacks = JSON.parse(data);
    } catch (e) {
      console.log('Помилка при парсингу JSON:', e);
    }

    feedbacks.push(newFeedback);

    fs.writeFile(feedbackFile, JSON.stringify(feedbacks, null, 2), 'utf8', (err) => {
      if (err) {
        return res.status(500).send('Помилка запису файлу');
      }
      res.status(201).send('Відгук додано');
    });
  });
});

/**
 * @swagger
 * /feedbacks:
 *   get:
 *     summary: Отримати всі відгуки
 *     description: Повертає список всіх відгуків у форматі JSON
 *     responses:
 *       200:
 *         description: Повертає список всіх відгуків
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     description: Ім'я користувача
 *                   email:
 *                     type: string
 *                     description: Електронна пошта користувача
 *                   message:
 *                     type: string
 *                     description: Текст відгуку
 *               example: [
 *                 {
 *                   "name": "Іван",
 *                   "email": "ivan@example.com",
 *                   "message": "Чудова служба підтримки!"
 *                 }
 *               ]
 */
app.get('/feedbacks', (req, res) => {
  fs.readFile(feedbackFile, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Помилка читання файлу');
    }

    let feedbacks = [];
    try {
      feedbacks = JSON.parse(data);
    } catch (e) {
      console.log('Помилка при парсингу JSON:', e);
    }

    res.json(feedbacks);
  });
});

/**
 * @swagger
 * /:
 *   get:
 *     summary: Головна сторінка
 *     responses:
 *       200:
 *         description: Повертає головну сторінку
 */
app.get('/', (req, res) => {
  const userName = req.cookies.userName || '';
  res.render('index', { userName });
});

/**
 * @swagger
 * /start:
 *   post:
 *     summary: Початок тестування
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Ім'я користувача
 *     responses:
 *       302:
 *         description: Перенаправляє на вибір мови
 */
app.post('/start', (req, res) => {
  const { name } = req.body;
  res.cookie('userName', name);
  res.redirect('/select-language');
});

/**
 * @swagger
 * /select-language:
 *   get:
 *     summary: Сторінка вибору мови
 *     responses:
 *       200:
 *         description: Повертає сторінку вибору мови
 */
app.get('/select-language', (req, res) => {
  const userName = req.cookies.userName || '';
  res.render('select-language', { userName });
});

/**
 * @swagger
 * /select-language:
 *   post:
 *     summary: Вибір мови
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               language:
 *                 type: string
 *                 description: Вибрана мова
 *     responses:
 *       302:
 *         description: Перенаправляє на вибір рівня
 */
app.post('/select-language', (req, res) => {
  const { language } = req.body;
  res.cookie('language', language);
  res.redirect('/select-level');
});

/**
 * @swagger
 * /select-level:
 *   get:
 *     summary: Сторінка вибору рівня
 *     responses:
 *       200:
 *         description: Повертає сторінку вибору рівня
 */
app.get('/select-level', (req, res) => {
  const userName = req.cookies.userName || '';
  res.render('select-level', { userName });
});

/**
 * @swagger
 * /select-level:
 *   post:
 *     summary: Вибір рівня
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               level:
 *                 type: string
 *                 description: Вибраний рівень
 *     responses:
 *       302:
 *         description: Перенаправляє на сторінку з питаннями
 */
app.post('/select-level', (req, res) => {
  const { level } = req.body;
  res.cookie('level', level);
  res.cookie('questionIndex', 0); // Ініціалізація індексу питання
  res.redirect('/questions');
});
// Додаємо маршрут для перегляду всіх питань
/**
 * @swagger
 * /view-questions:
 *   get:
 *     summary: Перегляд всіх питань
 *     responses:
 *       200:
 *         description: Повертає сторінку з усіма питаннями
 */
app.get('/view-questions', (req, res) => {
  const questionsFilePath = path.join(__dirname, 'questions.json');
  let questions;
  try {
    questions = JSON.parse(fs.readFileSync(questionsFilePath, 'utf8'));
  } catch (error) {
    console.error("Error reading questions file:", error);
    return res.status(500).send('Error reading questions file.');
  }

  res.render('view-questions', { questions });
});

/**
 * @swagger
 * /questions:
 *   get:
 *     summary: Сторінка з питаннями
 *     responses:
 *       200:
 *         description: Повертає сторінку з питаннями
 */
app.get('/questions', (req, res) => {
  const userName = req.cookies.userName;
  const language = req.cookies.language;
  const level = req.cookies.level;
  const questionIndex = parseInt(req.cookies.questionIndex, 10) || 0;

  if (!userName || !language || !level) {
    return res.redirect('/');
  }

  const questionsFilePath = path.join(__dirname, 'questions.json');
  let questions;
  try {
    questions = JSON.parse(fs.readFileSync(questionsFilePath, 'utf8'));
  } catch (error) {
    console.error("Error reading questions file:", error);
    return res.redirect('/');
  }

  if (!questions[language] || !questions[language][level]) {
    return res.redirect('/');
  }

  const questionsList = questions[language][level];
  const currentQuestion = questionsList[questionIndex];

  if (!currentQuestion) {
    return res.redirect('/');
  }

  res.render('questions', {
    userName,
    question: currentQuestion,
    index: questionIndex,
    correct: req.query.correct === 'true',
    incorrect: req.query.incorrect === 'true'
  });
});

/**
 * @swagger
 * /answer:
 *   post:
 *     summary: Обробка відповіді на питання
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               answer:
 *                 type: string
 *                 description: Відповідь користувача
 *               questionIndex:
 *                 type: number
 *                 description: Індекс питання
 *     responses:
 *       302:
 *         description: Перенаправляє на сторінку з питаннями
 */
app.post('/answer', (req, res) => {
  const { answer, questionIndex } = req.body;
  const userName = req.cookies.userName;
  const language = req.cookies.language;
  const level = req.cookies.level;

  const questionsFilePath = path.join(__dirname, 'questions.json');
  let questions;
  try {
    questions = JSON.parse(fs.readFileSync(questionsFilePath, 'utf8'));
  } catch (error) {
    console.error("Error reading questions file:", error);
    return res.redirect('/');
  }

  if (!questions[language] || !questions[language][level]) {
    return res.redirect('/');
  }

  const questionsList = questions[language][level];
  const currentQuestion = questionsList[questionIndex];

  if (!currentQuestion) {
    return res.redirect('/');
  }

  const correctAnswerIndex = currentQuestion.answer;

  if (parseInt(answer, 10) === correctAnswerIndex) {
    if (questionIndex + 1 < questionsList.length) {
      res.cookie('questionIndex', questionIndex + 1);
      res.redirect('/questions?correct=true');
    } else {
      res.clearCookie('questionIndex');
      res.redirect('/congratulations');
    }
  } else {
    res.redirect('/questions?incorrect=true');
  }
});

/**
 * @swagger
 * /congratulations:
 *   get:
 *     summary: Сторінка привітання
 *     responses:
 *       200:
 *         description: Повертає сторінку з привітанням
 */
app.get('/congratulations', (req, res) => {
  const userName = req.cookies.userName || '';
  const userScore = parseInt(req.query.score, 10) || 0;

  // Рекомендації на основі результатів тесту
  const recommendations = {
    0: 'Початківець: Рекомендуємо більше практикувати базові концепції.',
    1: 'Середній: Поглибте знання у середовищах розробки.',
    2: 'Досвідчений: Спробуйте нові технології і концепції.'
  };

  // Отримання відповідних рекомендацій
  const recommendationText = recommendations[userScore] || 'Немає рекомендацій';

  res.render('congratulations', { userName, recommendationText });
});


/**
 * @swagger
 * /add-question:
 *   get:
 *     summary: Сторінка додавання питання
 *     responses:
 *       200:
 *         description: Повертає сторінку додавання питання
 */
app.get('/add-question', (req, res) => {
  res.render('add-question');
});

/**
 * @swagger
 * /add-question:
 *   post:
 *     summary: Додавання питання
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               language:
 *                 type: string
 *                 description: Мова питання
 *               level:
 *                 type: string
 *                 description: Рівень питання
 *               question:
 *                 type: string
 *                 description: Текст питання
 *               options:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Відповіді
 *               answer:
 *                 type: number
 *                 description: Індекс правильної відповіді
 *     responses:
 *       302:
 *         description: Перенаправляє на сторінку додавання питання
 */
app.post('/add-question', (req, res) => {
  const { language, level, question, options, answer } = req.body;

  const questionsFilePath = path.join(__dirname, 'questions.json');
  let questions;
  try {
    questions = JSON.parse(fs.readFileSync(questionsFilePath, 'utf8'));
  } catch (error) {
    console.error("Error reading questions file:", error);
    return res.redirect('/add-question');
  }

  if (!questions[language]) {
    questions[language] = {};
  }

  if (!questions[language][level]) {
    questions[language][level] = [];
  }

  questions[language][level].push({
    question,
    options: options.split(','),
    answer: parseInt(answer, 10),
  });

  try {
    fs.writeFileSync(questionsFilePath, JSON.stringify(questions, null, 2));
  } catch (error) {
    console.error("Error writing questions file:", error);
    return res.redirect('/add-question');
  }

  res.redirect('/add-question');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
