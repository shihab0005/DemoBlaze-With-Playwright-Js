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
  

## Scenarios
```bash
Scenario 1: Verify all the element of the home page of the website..

Scenario Description: 
User open the website and verifies all the elements of the home page.This is like a Smoke test. 

Test Steps:
1.	Open website and verify url and title of the page.
2.	Verify site Logo is visible & enable to click or not.
3.	Verify sit navbar and carosol are visible or not.
4.	Verify Product Category and Products are visible or not.
5.	Verify all content of footer section are visible or not. 

Testname: TC_001_home_page.spec.js
```
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
npx playwright test
OR
npx playwright test Test_001_login_page.spec.js
OR Run all test with HTML Reports
npm run test:all_test_with_html-report
```

