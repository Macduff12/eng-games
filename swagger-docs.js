/**
 * @swagger
 * openapi: 3.0.0
 * info:
 *   title: My API
 *   version: 1.0.0
 *   description: API documentation for my application
 * servers:
 *   - url: 'http://localhost:3000'
 *     description: Local server
 */
/**
 * @swagger
 * /:
 *   get:
 *     summary: Головна сторінка
 *     responses:
 *       200:
 *         description: Повертає головну сторінку
 */

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

/**
 * @swagger
 * /select-language:
 *   get:
 *     summary: Сторінка вибору мови
 *     responses:
 *       200:
 *         description: Повертає сторінку вибору мови
 */

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

/**
 * @swagger
 * /select-level:
 *   get:
 *     summary: Сторінка вибору рівня
 *     responses:
 *       200:
 *         description: Повертає сторінку вибору рівня
 */

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

/**
 * @swagger
 * /questions:
 *   get:
 *     summary: Сторінка з питаннями
 *     responses:
 *       200:
 *         description: Повертає сторінку з питаннями
 */

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
 *       200:
 *         description: Повертає результат відповіді
 */

/**
 * @swagger
 * /add-question:
 *   get:
 *     summary: Сторінка додавання питання
 *     responses:
 *       200:
 *         description: Повертає сторінку додавання питання
 */

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
/**
 * @swagger
 * /view-questions:
 *   get:
 *     summary: Перегляд усіх питань
 *     responses:
 *       200:
 *         description: Повертає всі питання
 */
