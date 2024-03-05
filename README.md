# AP Insights

## Description

This project is a web application designed to help high school students select Advanced Placement (AP) classes based on their major interests. The application uses the Jaccard index to compare the attributes of students' selected majors with the attributes of AP classes, in order to provide personalized class recommendations.

## Features

- Selection of two majors from a comprehensive list.
- Personalized AP class recommendations based on selected majors.
- Use of the Jaccard index to measure the similarity between major attributes and AP class attributes.
    - J(Major2, Major2) = |Major2 ∩ Major2| / |Major2 ∪ Major2|

## Future Features

In the development pipeline for APInsights, we envision a range of enhancements that will further enrich the user experience and provide additional value to students navigating their AP courses. Here are some of the features we are excited about:

- **Dedicated AP Class Pages**: Each AP class will have its own dedicated page that provides comprehensive information such as score distributions, study tools, and AP test dates.

- **AP Score Calculator**: An integrated tool that allows students to estimate their AP scores based on their performance on practice questions and exams.

- **Tier Lists**: Curated rankings that evaluate the usefulness and difficulty of each AP class, helping students make informed decisions about which courses to take.

- **Interactive Practice Quizzes and Exams**: To reinforce learning and exam preparedness, we will offer a suite of interactive quizzes and exams that mimic the format and challenge of actual AP tests.

## Installation

To set up the project for development on your local machine, please follow the instructions below:

1. Install the dependencies:
   ```
   node.js from: https://nodejs.org/
   git from: https://git-scm.com/
   npm install
   npm install -g @angular/cli
   ```
2. Clone the repository:
   ```
   git clone https://github.com/dylanscarpati/apinsights.git
   ```
2. Navigate to the project directory:
   ```
   cd ...\apinsights\client
   ```
4. Start the development server:
   ```
   npm start
   ```
5. Accessing the website:
   ```
   Open your web browser and go to `http://localhost:4200`
   ```
## License

Distributed under the MIT License. See `LICENSE` for more information.
