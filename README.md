# 🛒 OpenCart Automation Testing Project

![Playwright Tests](https://github.com/VinodYohan/opencart-automation/actions/workflows/playwright.yml/badge.svg)
![Node.js](https://img.shields.io/badge/Node.js-20.x-green)
![Playwright](https://img.shields.io/badge/Playwright-Latest-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-Latest-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

## 📋 Project Overview
End-to-end automation testing project for OpenCart e-commerce platform built as a portfolio project to demonstrate automation testing skills using industry standard tools and best practices.

## 🌐 Application Under Test
[TutorialsNinja OpenCart Demo](https://tutorialsninja.com/demo)

## 🛠️ Tech Stack
| Tool | Purpose |
|------|---------|
| Playwright | Test automation framework |
| TypeScript | Programming language |
| GitHub Actions | CI/CD pipeline |
| Allure | Test reporting |
| Node.js | Runtime environment |
| Page Object Model | Design pattern |

## 📁 Project Structure
opencart-automation/
├── .github/
│   └── workflows/
│       └── playwright.yml   # CI/CD pipeline
├── pages/                   # Page Object Model
│   ├── HomePage.ts
│   ├── LoginPage.ts
│   ├── RegisterPage.ts
│   ├── SearchPage.ts
│   └── CartPage.ts
├── tests/                   # Test spec files
│   ├── login.spec.ts
│   ├── register.spec.ts
│   ├── search.spec.ts
│   ├── cart.spec.ts
│   ├── account.spec.ts
│   └── search-data-driven.spec.ts
├── test-data/               # Test data
│   ├── users.json
│   └── search-data.json
├── utils/                   # Helpers & fixtures
│   ├── helpers.ts
│   └── fixtures.ts
└── playwright.config.ts

## 🧪 Test Coverage
| Module | Test Cases | Status |
|--------|-----------|--------|
| Login | 4 | ✅ Passing |
| Register | 4 | ✅ Passing |
| Search | 4 | ✅ Passing |
| Cart | 4 | ✅ Passing |
| Account | 4 | ✅ Passing |
| Data Driven Search | 5 | ✅ Passing |
| **Total** | **25** | ✅ **All Passing** |

## ✨ Key Features
- ✅ Page Object Model design pattern
- ✅ Data driven testing with JSON
- ✅ Custom test fixtures for logged-in state
- ✅ Screenshot capture on test failure
- ✅ Video recording on test failure
- ✅ Allure test reporting
- ✅ GitHub Actions CI/CD pipeline
- ✅ Auto retry on failure

## 🚀 How to Run

### Clone the project
```bash
git clone https://github.com/VinodYohan/opencart-automation.git
cd opencart-automation
```

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

### Run specific test file
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

## 📊 Test Report Preview
After running tests, open the HTML report:
```bash
npx playwright show-report
```

## 👤 Author
**Vinod Yohan**
- 💼 [LinkedIn](https://linkedin.com/in/vinod-yohan)
- 🐙 [GitHub](https://github.com/VinodYohan)

## 📄 License
This project is licensed under the MIT License.