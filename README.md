# Instructions for test project: "test task using playwright"

# 1. Install "node": ">=16" locally, version: 20.4.0 recommended:

# 2. Install dependecies from package.json using command:

- npm install

# To start tests (destop then mobile) with in headed mode in parallel (repeat=1) with saving index.html report in playwright-report folder run this command in terminal:

- npx playwright test --project="Desktop Chrome" --headed --repeat-each=1 --workers=2 --reporter=html && npx playwright test --project="Mobile Chrome" --headed --repeat-each=1 --workers=2 --reporter=html

# To show html report after running tests run this command:

- npx playwright show-report