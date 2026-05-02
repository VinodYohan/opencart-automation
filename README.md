# OpenCart Automation Testing Project

![Playwright Tests](https://github.com/VinodYohan/opencart-automation/actions/workflows/playwright.yml/badge.svg)

## 📋 Project Overview
Automation testing project for OpenCart demo site using Playwright and TypeScript.

## 🌐 Application Under Test
[TutorialsNinja OpenCart Demo](https://tutorialsninja.com/demo)

## 🛠️ Tech Stack
- **Playwright** - Test automation framework
- **TypeScript** - Programming language
- **GitHub Actions** - CI/CD pipeline
- **Allure** - Test reporting
- **Node.js** - Runtime environment

## 📁 Project Structure
opencart-automation/
├── pages/          # Page Object Model files
├── tests/          # Test spec files
├── test-data/      # Test data JSON files
├── utils/          # Helper functions and fixtures
└── .github/        # GitHub Actions workflow

## 🧪 Test Cases
| Module | Tests |
|--------|-------|
| Login | 4 tests |
| Register | 4 tests |
| Search | 4 tests |
| Cart | 4 tests |
| Data Driven | 5 tests |
| Account | 4 tests |
| **Total** | **25 tests** |

## 🚀 How to Run

### Install dependencies
```bash
npm install
npx playwright install
```

### Run all tests
```bash
npx playwright test
```

### Run with browser visible
```bash
npx playwright test --headed
```

### Run specific file
```bash
npx playwright test tests/login.spec.ts
```

### View HTML report
```bash
npx playwright show-report
```

### Generate Allure report
```bash
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

## 👤 Author
**Vinod Yohan**  
[LinkedIn](https://linkedin.com/in/vinod-yohan) | [GitHub](https://github.com/VinodYohan)