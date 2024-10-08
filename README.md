

# Developer README 📚

## Опис проекту 🌟

Цей проект - веб-додаток для вікторин, зворотного зв'язку та відображення результатів тестування. Додаток використовує **Express** для сервера, **EJS** для шаблонів, а **Swagger** для документування API.

## Технічний стек 🛠️

- **Node.js**: Середовище виконання JavaScript
- **Express**: Фреймворк для створення веб-додатків
- **EJS**: Шаблонізатор для рендерингу HTML
- **Swagger**: Інструмент для документування API
- **body-parser**: Модуль для розбору тіла запитів
- **cookie-parser**: Модуль для обробки кукі
- **fs**: Модуль для роботи з файловою системою

## Налаштування середовища 🌱

1. **Клонування репозиторію**

   ```bash
   git clone https://github.com/ваш-репозиторій.git
   ```

2. **Перехід до директорії проекту**

   ```bash
   cd ваш-репозиторій
   ```

3. **Встановлення залежностей**

   ```bash
   npm install
   ```

4. **Налаштування змінних середовища**

   Створіть файл `.env` у кореневій директорії проекту з такими змінними:

   ```env
   PORT=3001
   NODE_ENV=development
   ```

## Структура проекту 📂

- **`server.js`**: Основний файл для запуску сервера.
- **`routes/`**: Директорія для маршрутів API.
- **`views/`**: Директорія для шаблонів EJS.
- **`public/`**: Директорія для статичних файлів (CSS, JS, зображення).
- **`models/`**: Моделі для роботи з даними.
- **`controllers/`**: Логіка обробки запитів.
- **`swagger/`**: Конфігураційні файли для Swagger.

## Запуск сервера 🚀

Запустіть сервер у режимі розробки:

```bash
npm run dev
```

Або у режимі продакшн:

```bash
npm start
```

## Розробка нових функцій 🚧

1. **Створення нової функціональності**

   - Додайте новий маршрут до **`routes/`**.
   - Додайте логіку до **`controllers/`**.
   - Оновіть шаблони в **`views/`**.

2. **Оновлення Swagger документації**

   Оновіть файли у **`swagger/`**, щоб відобразити зміни в API.

3. **Додавання нових питань**

   - Оновіть файл **`questions.json`** у кореневій директорії.

4. **Тестування**

   Запускайте тести для перевірки нових функцій:

   ```bash
   npm test
   ```

## Тестування 🧪

Тести знаходяться у директорії **`tests/`**. Для запуску тестів використовуйте:

```bash
npm test
```

## Документація API 📖

Документація API доступна за адресою:

```
http://localhost:3001/api-docs
```

## Внесення змін 🔄

1. **Створення гілки**

   ```bash
   git checkout -b new-feature
   ```

2. **Коміт змін**

   ```bash
   git add .
   git commit -m "Додано нову функцію"
   ```

3. **Злиття змін**

   ```bash
   git checkout main
   git merge new-feature
   ```

4. **Пуш змін на сервер**

   ```bash
   git push origin main
   ```

## Підтримка 🆘

Для отримання допомоги або запитів щодо проекту, звертайтесь до розробників через [контактні дані](#).
