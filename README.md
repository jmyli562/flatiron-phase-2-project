# Exercise Guru Hub

My App is called Exercise Guru Hub and it pulls data from an API called Exercises (https://rapidapi.com/apininjas/api/exercises-by-api-ninjas)
which is a database of roughly 1,300 exercises.

## Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## About
Exercise Guru Hub is meant to give users of varying exercise experience a way to plan their exercise routine in a easy to manage way. This app allows users to create a account, view/filter exercises based on name, target muscle and equipment needed, and finally create a custom exercise routine that outlines what exercise to do on what day and for how long. 

## Getting Started 

### Installation
The project makes use of two seperate github repos, one which houses the source code the other which houses the db.json which we will run json server off of to create a RESTFUL API.

github link tosource code: https://github.com/jmyli562/flatiron-phase-2-project
github link to db.json: https://github.com/jmyli562/flatiron-phase-2-project-backened-database

First begin by clicking on the first link and follow the instructions below:
```shell
# Clone the repository
git clone https://github.com/jmyli562/flatiron-phase-2-project.git

# Navigate to the project directory
cd flatiron-phase-2-project

# Open the project files in VS Code
code .

# Install dependencies
npm install

Since this project includes CSS elements styled with Bootstrap, the Boostrap dependency needs to be installed.

# Install bootstrap

npm install react-bootstrap bootstrap

# Start the development server
npm start

```
Next click on the github link for the db.json file and git clone it down to your local machine and install json-server globally with the command:
```shell
#Install JSON-Server

npm install -g json-server

```
Next to start the json server type:

```shell
json-server --watch --port 3001 db.json
```
## Comprehensive Usage Guide
When you first load up my application you should be taken to the home page where you will be greeted by a welcome message. You can begin by clicking on the "Get Started" button which will take you to the registration page to create a account. 

![example1](https://github.com/jmyli562/flatiron-phase-2-project/assets/60550632/a91e6b00-fa7d-41a7-befc-85d2a0ba4126)

After creating a account, you can login using the login text box at the top right of the navigation bar. Once you are authenticated you can navigate to the exercise tab to view all the exercises. 

![example2](https://github.com/jmyli562/flatiron-phase-2-project/assets/60550632/4dcff113-f840-45e7-a4d2-247cf268a581)

On the exercise page, you can filter the exercise by name, what muscle the exercise targets, and what equipment the exercise uses by using the search bar as well as the drop down as shown in the gif below. You can save any exercise you like by clicking on the "Save Exercise" button which will save the exercise for use when you go to create a routine. 

![example3](https://github.com/jmyli562/flatiron-phase-2-project/assets/60550632/23bac4ae-94dd-49bb-8cb9-8d284ee88c31)

On the Create your Routines page, you can select one of your saved Exercises from a dropdown and choose on what day of the week you would like to do that exercise on as well as for how long. To add more than one exercise on a day, you can click the "Add new Exercise" button beside the dropdown and to remove an exercise click "Remove Exercise" on the exercise you want to remove. Once you are done creating your routine, you can save it by clicking on the "Save Routine" button. 
![example4](https://github.com/jmyli562/flatiron-phase-2-project/assets/60550632/8775aefe-efb5-4ac1-a7cf-0d16370625b2)



## Contributing
Pull requests are welcome. If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

Fork the Project
Create your Feature Branch (git checkout -b feature/NewFeature)
Commit your Changes (git commit -m 'Add some NewFeature')
Push to the Branch (git push origin feature/NewFeature)
Open a Pull Request
For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
MIT License

Copyright (c) 2023 Jimmy Li

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

