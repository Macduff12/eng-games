# Quiz Application

## Overview

This is a Node.js-based quiz application using Express.js, which features a set of quiz questions and allows users to provide feedback. The application also integrates Swagger for API documentation. It includes functionality for handling quizzes, feedback, and user interactions with cookie-based sessions.

## Features

- **Quiz Functionality**: Users can take quizzes with multiple questions and get their results.
- **Feedback System**: Users can submit feedback which is stored in a JSON file.
- **Swagger Integration**: API documentation for the endpoints is available via Swagger UI.
- **Session Management**: User sessions are managed using cookies.
- **Static File Serving**: Serve static files from the `public` directory.
- **Dynamic Rendering**: Uses EJS for rendering views.

## Installation

1. **Clone the Repository**:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies**:

   Make sure you have Node.js installed. Then, run:

   ```bash
   npm install
   ```

3. **Start the Server**:

   ```bash
   npm start
   ```

   The server will start on port `3001` by default.

## API Endpoints

### GET /quiz

- **Summary**: Displays the quiz page with questions.
- **Response**: Renders `quiz.ejs` with quiz questions.

### POST /quiz

- **Summary**: Submits answers and displays the result.
- **Request Body**: `answers` and `questions`.
- **Response**: Renders `quiz-result.ejs` with the score.

### GET /feedback

- **Summary**: Provides the feedback form.
- **Response**: Renders `feedback.ejs`.

### POST /feedback

- **Summary**: Adds new feedback.
- **Request Body**: JSON with `name`, `email`, and `message`.
- **Responses**:
  - `201`: Feedback added successfully.
  - `400`: Bad request.
  - `500`: Internal server error.

### GET /feedbacks

- **Summary**: Retrieves all feedbacks.
- **Response**: JSON list of feedbacks.

### GET /congratulations

- **Summary**: Displays a congratulations page after quiz completion.
- **Response**: Renders `congratulations.ejs`.

### POST /start

- **Summary**: Starts the quiz process by setting user’s name.
- **Request Body**: `name`.
- **Response**: Redirects to `/select-language`.

### GET /select-language

- **Summary**: Displays the language selection page.
- **Response**: Renders `select-language.ejs`.

### POST /select-language

- **Summary**: Sets the language and redirects to level selection.
- **Request Body**: `language`.
- **Response**: Redirects to `/select-level`.

### GET /select-level

- **Summary**: Displays the level selection page.
- **Response**: Renders `select-level.ejs`.

### POST /select-level

- **Summary**: Sets the level and initializes question index.
- **Request Body**: `level`.
- **Response**: Redirects to `/questions`.

### GET /questions

- **Summary**: Displays questions based on user’s level.
- **Response**: Renders `questions.ejs`.

### POST /answer

- **Summary**: Processes the answer and redirects based on correctness.
- **Request Body**: `answer` and `questionIndex`.
- **Response**: Redirects to `/questions` with correctness query.

### GET /view-questions

- **Summary**: Displays all questions.
- **Response**: Renders `view-questions.ejs`.

### GET /add-question

- **Summary**: Provides the page to add new questions.
- **Response**: Renders `add-question.ejs`.

## Swagger Documentation

API documentation is available at `/api-docs`. It includes details for the endpoints and request/response formats.

## Folder Structure

- **`public/`**: Static files such as HTML, CSS, and JavaScript.
- **`views/`**: EJS templates for dynamic rendering.
- **`swagger/`**: Swagger configuration and setup.
- **`feedback.json`**: Stores user feedback.
- **`results.json`**: Stores quiz results.
- **`questions.json`**: Stores quiz questions.

## License

This project is licensed under the MIT License.
