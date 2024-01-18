# project: "test task using playwright"

# run codegen
- npx playwright codegen

# Start one specific test with npx chromium and headed
- npx playwright test --project=chromium --headed --repeat-each=5

# Start in parralel:
- npx jest --maxWorkers=2