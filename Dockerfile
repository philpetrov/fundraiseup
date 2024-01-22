# Use as a base image
FROM mcr.microsoft.com/playwright:latest

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json separately to leverage Docker cache
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm install 

# Install Allure commandline and @playwright/test
RUN npm install -g allure-commandline
 
# Install playwright chrome
RUN npx playwright install chrome
 
# Copy the rest of the application code
COPY . .
 
# Install dependencies from package-lock
RUN npm ci

# Install OpenJDK (Java Development Kit)
RUN apt-get update && apt-get install -y openjdk-11-jdk
 
# Set the JAVA_HOME environment variable
ENV JAVA_HOME /usr/lib/jvm/java-11-openjdk-amd64
 
# Expose the necessary ports
EXPOSE 80
 
# Install Nginx
RUN apt-get install -y nginx
 
# Copy Nginx configuration
COPY nginx.conf /etc/nginx/sites-available/default

# Command to run your tests and generate Allure report
CMD ["bash", "-c", "[ -d allure-results ] && rm -rf allure-results; npx playwright test --project='Desktop Chrome' --repeat-each=1 --workers=2 --reporter=line,allure-playwright || true && true && npx playwright test --project='Mobile Chrome' --repeat-each=1 --workers=2 --reporter=html --reporter=line,allure-playwright || true && true && allure generate allure-results -o /usr/share/nginx/html/allure-report --clean || true && nginx -g 'daemon off;'"]