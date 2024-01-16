# project: "test task using playwright"

# run codegen
- npx playwright codegen

# Start one specific test with npx chromium and headed
- npx playwright test --project=chromium --headed

# Start in parralel:
- npx jest --maxWorkers=2