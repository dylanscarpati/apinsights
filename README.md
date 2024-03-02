# AP Insights

## Description

This project is a web application designed to help high school students select Advanced Placement (AP) classes based on their major interests. The application uses the Jaccard index to compare the attributes of students' selected majors with the attributes of AP classes, in order to provide personalized class recommendations.

## Features

- Selection of two majors from a comprehensive list.
- Personalized AP class recommendations based on selected majors.
- Use of the Jaccard index to measure the similarity between major attributes and AP class attributes.
    - J(Major2, Major2) = |Major2 ∩ Major2| / |Major2 ∪ Major2|

## Installation

To set up the project for development on your local machine, please follow the instructions below:

1. Clone the repository:
   ```
   git clone https://github.com/dylanscarpati/apinsights.git
   ```
2. Navigate to the project directory:
   ```
   cd apinsights
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```
## License

Distributed under the MIT License. See `LICENSE` for more information.
