# DemoBlaze_Page_Object_Design_Pattern_Framework

## Application Under Test

- **URL** :  https://www.demoblaze.com/
  
- **Test Tool** :  Playwright JavaScript
  
- **Architecture** :  Page Object Design Pattern Framework
  
- **Report** :  HTML Report

- **OS**  :  Windows
  
- **Version Control**  :  Git
  
- **Pipeline**  :  GitHub Actions
  
- **IDE** :  Visual Studio Code
  
## Installation
Install the dependencies and devDependencies to run the test.
- Clone (OR) Download this repo as zip folder on to your local machine
- Navigate to project's directory on terminal and run the following commands:
  
**Clone the repository**
```bash
   https://github.com/shihab0005/DemoBlaze-With-Playwright-Js.git
```

**Install dependencies**
```bash
npm install
npx playwright install
```
## Run Application
```bash
## Run All Six Test
npx playwright test
## OR Run Specific Test Like
npx playwright test Test_001_login_page.spec.js
## OR Run all test with HTML Reports
npm run test:all_test_with_html-report
```

