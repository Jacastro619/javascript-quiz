# JavaScript Screen

## Technology Used

| Technology Used |                                                    Resource URL                                                    |
| --------------- | :----------------------------------------------------------------------------------------------------------------: |
| HTML            |       [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)       |
| CSS             |        [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)        |
| JavaScript      | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |
| Git             |                                    [https://git-scm.com/](https://git-scm.com/)                                    |

## Description

[Visit the Deployed Site]()

This project tasked me with building and deploying a short multiple-choice quiz from the ground up. With the use of query selectors in JavaScript, I was able to give this page dynamic functionality. The content of this page is a short quiz that asks the user a series of fundamental JavaScript questions. The quiz has a timer that will countdown to zero. If the user gets a question wrong, the timer will decrease by five seconds. The quiz ends either when the timer reaches zero or once the user answers all the questions. At the end of the quiz, the user's score is the time left once the quiz is completed. If the user runs out of time, the score will be zero. At the end of the quiz, the user may save their previous score and start the quiz again.

## Usage

- Startting quiz and timer: Upon initial loading of the page the user will be meet with the quiz page (image 1a.). After reading the brief instruction the user may click on the "Start Quiz" button to begin the quiz. Once the quiz begins the timer on the top right of screen (second image below) will automatically start. During the quiz, if the user selects the incorrect answer to a quesiton, the timer will decrease 5 seconds.

Image 1a.

![Quiz card screenshot](./assets/images/quiz%20card%20screenshot.JPG)

---

Image 1b.

![timer screenshot](./assets/images/timer%20screenshot.JPG)

---

- Submitting and Viewing score: At the end of the quiz, the user may submit their score. The score page (Image 2a.), will be where the user types their initals and submit their score. Once the user types their name in the input the box provided, they'll click the submit button to submit the score into local storage. If the user wishes to view their previous submitted score, the may click on the "Last Submitted Score" link at the top left of the page (Image 2b.). This will show the user their previous submitted score (Image 2c.).

Image 2a.

![Score page screenshot](./assets/images/score%20page%20screenshot.JPG)

---

Image 2b.

![Quiz card screenshot](./assets/images/view%20score%20screenshot.JPG)

---

Image 2c.

![View Score Page](./assets/images/submitted%20score%20sreenshot.JPG)

## Learning Points

Throughout the first two weeks of UC Berkeley's Full Stack Coding Academy, I learned HTML, CSS, and JavaScript. This project challenged me to put it all together to make a functioning dynamic web page. Understanding how to properly use query selectors was crutial to this project as they are needed to select specific elements from the HTML file. We use query selectors so our JavaScript can add functionality to the page. One challenge I faced was figuring out how to randomly generate the order of the questions and answers. Upon researching potential solutions, I discovered the Fisher-Yates shuffle. I researched further into the use cases and the logic behind the code within the Fisher-Yates shuffle. I was able to implement the Fisher-Yates shiffle into my code to help solve my problem with randomly shuffling indexes in an array. This allowed me to randomly generate the order of the questions and answers. This was only a fraction of what I learned from this project. The more I practice this material, the more my skills will be refined to find solutions to problems in the future.

## Author Info

Created by Jorge Castro, a student at UC Berkeley Full Stack Coding Academy. For more information go to https://bootcamp.berkeley.edu/coding/

- [Portfolio](https://jacastro619.github.io/my-portfolio/)

- [LinkedIn](https://www.linkedin.com/in/jorge-castro-2a9545177/)

- [GitHub](https://github.com/Jacastro619)

## Credits

Aleti, N., & Tutorialspoint. (2022, September 23). What is Fisher–Yates shuffle in JavaScript? Online Courses and eBooks Library | Tutorialspoint. https://www.tutorialspoint.com/what-is-fisher-yates-shuffle-in-javascript
