# Math Practice

## How to use

### Question types

- Answer addition, subtraction, multiplication, division, exponent, and root questions
- The questions get harder the more questions you answer
- The difficulty changes at different rates: root and exponent questions increase in number logarithmically while the main four operations increase linearly, and even then multiplication and division increase slower than addition and subtraction

### Scores and coins

- If you don't answer a question in 10 seconds, you move back a level
- If you are on level 1 and you fail to answer the question in time, you lose the game and can restart
- Your high score is saved locally, and your starting number of coins for each round is calculated based on your high score
- You additionally earn a coin for each correct answer and lose a coin for not answering the question in time
- Coin values:
  - 2 coins: 3 seconds of extra time on the current question
  - 10 coins: Increment the amount of extra time granted after each answered question
  - 30 coins: Increment the time multiplier granted after each answered question

## How to run (dev)

Feel free to play around with/contribute to this project if you wish, although if you publish a fork, please give credit.

- Make sure you have [node](https://nodejs.org/en/) and npm
- Clone the repo
- Run `npm install` to get the dependencies
- Execute `npm run dev` in the terminal
- Open your browser to the localhost address displayed
- Enjoy!

_Some stylistic inspiration (mainly just regarding the text field input) was taken from [https://mathtrainer.ai](https://mathtrainer.ai), but no code was copied. The current and future state of the project is and will be solely based on my ideas, and I am the only developer. I created the project because I felt like such a math app turned into a game would be useful and enjoyable._
