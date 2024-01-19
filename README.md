# Instructions for test project: "test task using playwright"

# 1. Install "node": ">=16" locally, version: 20.4.0 recommended:

# 2. Install dependecies from package.json using command:

- npm install

# 3. Install npx playwright (browsers):

- npx playwright install

# 4. To start tests (destop then mobile) in headed mode in parallel (repeat=1) with saving allure report in allure-report folder and open report at the end - run this command in terminal:

- [ -d allure-results ] && rm -rf allure-results; npx playwright test --project="Desktop Chrome" --headed --repeat-each=1 --workers=2 --reporter=line,allure-playwright || true && true && npx playwright test --project="Mobile Chrome" --headed --repeat-each=1 --workers=2 --reporter=html --reporter=line,allure-playwright || true && true && allure generate allure-results -o allure-report --clean || true && allure open allure-report || true
