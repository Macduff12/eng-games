# Вибрати базовий образ Node.js
FROM node:18

# Встановити робочу директорію в контейнері
WORKDIR /usr/src/app

# Копіювати package.json та package-lock.json
COPY package*.json ./

# Встановити залежності
RUN npm install

# Копіювати весь код в контейнер
COPY . .

# Відкрити порт, на якому працює ваш додаток
EXPOSE 3000

# Запустити додаток
CMD ["node", "server.js"]
