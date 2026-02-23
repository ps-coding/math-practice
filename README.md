# Math Practice

Check the [about page](https://math.shahprasham.com/about) for the most up-to-date and visually appealing documentation and use instructions, or see below.

About [Math Practice](https://math.shahprasham.com/)
====================================================

*   [Fast facts](#fast-facts)
*   [How to use](#how-to-use)
    *   [Question types](#question-types)
    *   [Scores and coins](#scores-and-coins)
    *   [Powerups](#powerups)
    *   [Recovery](#recovery)
*   [How to contribute](#how-to-contribute)

## Fast facts

*   The question types are addition, subtraction, multiplication, division, exponentiation, and roots
*   The base time is 10 seconds per question, but that can change
*   If you get a question right, your coins increase by the coin multiplier, but if you get a question wrong, your coins only decrease by 1
*   Your initial coins are proportional to your high score and can be used to buy powerups, which are listed below; however, during the game you can just hover over the powerups as they appear to see what they do and how much they cost (note the coin button does activate a temporary powerup too)
*   Your high score reflects the highest level you have reached, and increasing that is the main purpose of the game, but you can sacrifice some gems (high score points) to gain an advantage by buying recovery or checkpoints, for example, if you think it will help you in the long term
*   If you have no coins left, and you subsequently get two questions wrong in a row (bringing your coin count to "-2"), bankruptcy will be triggered, resulting in you losing your checkpoint (unless you pay five diamonds to save it) and recovery data, as well as losing a gem if you have any
*   Recovery is saved automatically once you drop to level zero and saves _everything_, including your end coins and coin multiplier; meanwhile, checkpoints have to be saved manually, but they can save whenever you want and do not include coins or coin multipliers
*   While you have to pay five diamonds for recovery, you have to pay nothing to reactivate your last checkpoint
*   Click "I'm Done" and wait through the animation to guarantee your progress is saved, since if you refresh, we'll try to do this automatically but some browser's do not support it; in that case, we'll assume the worst, that you are trying to cheat out of bankruptcy, and trigger bankruptcy anyway

## How to use

### Question types

*   Answer addition, subtraction, multiplication, division, exponent, and root questions
*   The questions get harder the more questions you answer
*   The difficulty changes at different rates: root and exponent questions increase in number logarithmically (ln(n/5) + k) while the main four operations increase linearly, and even then multiplication and division (4n) increase slower than addition and subtraction (10n)

### Scores and coins

*   If you don't answer a question in the allotted number of seconds (default is 10), you move back a level
*   If you are on level 1 and you fail to answer the question in time, you lose the game and can restart
*   Your high score is the highest level you successfully complete (not reach)
*   Your high score is saved locally, and your starting number of coins for each round is calculated based on your high score
*   You additionally earn a coin (times your coin multiplier) for each correct answer and lose a coin for not answering the question in time (but any coin multiplier only applies when gaining coins, not losing them)

_You can go bankrupt if you spend a lot of money and can't pay for the incorrect question, resulting in you not only losing the round but also losing all powerups you may have saved using a checkpoint — specifically, if the coin value hits -2, you lose. You additionally lose the ability to recover next round. You also lose a gem or high score point for going bankrupt if you have at least one gem. Before you hit this debt value, you will be warned so you know that a lot is riding on that question. There is a way out if you have enough gems, however: you can use 5 gems to save your checkpoints, although recovery will be disabled and you will still lose regardless. However, if you have gotten sufficiently far with your checkpoints, spending 5 gems to save them should be an easy decision. Oh, and don't even _try_ refreshing or navigating away, since that will automatically trigger bankruptcy as well (we try to do a normal countdown procedure automatically before navigation if your browser supports it to try to help you out, but if your browser does not support navigate-away hooks, like most browsers on mobile, the app will assume the worst). All links on the game page have been set to always open in new tab except the link to this about page from the home page, which will open in the same tab unless you are in the middle of the game, to prevent accidental bankruptcy._

### Powerups

Powerups appear as they become available and include the following:

*   2 coins: 3 seconds of extra time on the current question (default time 10 sec per question) - click the coin counter to access this powerup since it does not have a dedicated button; the coin indicator will turn yellow when you have enough coins for this powerup
*   10 coins: Increment (by +2 sec) the amount of extra time granted after each answered question (default 0 sec)
*   10 coins: Increment (by +1x) the coin multiplier granted after each answered question (default 1x)  
    _This does not save in checkpoints, only in recovery._
*   20 coins: Increment (by +20 sec) the cap on the maximum amount of time you can start with after each answered question (default 60 sec)
*   30 coins: Increment (by +1x) the time factor to be multiplied with the amount of time left on each question to be added on to the time for the next question (default 0x)
*   50 coins and 25 gems (high score points): Save all of the current powerups in a checkpoint so next game you start with those powerups already equipped  
    _Design Note: It might seem weird that you have to give up high score points for this. The reason why it is required to give up gems is to prevent people who have reached very high levels from just buying a power up, clicking checkpoint, counting down, restarting, and doing the same thing over an over again since if they start with the same number of initial points determined by their very great high score, they will always have enough money to keep going. In contrast, the way this is currently implemented, after a certain amount of checkpoints, they will run out of gems and thus not start with enough coins to pay for a checkpoint, so they will have to work their way up to getting that high score again. However, if you can buy them, checkpoints are worth it, since they help you reach higher levels much more easily and make up for the cost. Bankruptcy is another feature intended to mitigate abuse and encourage wise spending, and it not only works with bankruptcy but also recovery, making it a good additional failsafe._

### Recovery

*   For 5 gems or high score points, you can recover, which means that you will start the next game with the same powerups (including, unlike checkpoints, the same coin multiplier) and the same number of coins as you ended with when you died at level one in the last game
*   This feature is only available if you did not go bankrupt, and it only saves once you drop back to level one, so don't try any hacks
*   To remove the annoying part of watching the timer count down and waiting to lose every level if you just want to stop playing yet save your recovery data, there is an "I'm Done" button that simply disables all buttons and counts down the levels very quickly, and, assuming you did not go bankrupt in that process, stores all recovery information after you willingly die at level one
*   The "I'm Done" button is the best way to end a game in the middle, instead of just refreshing the page, since refreshing triggers bankruptcy to stop people from abusing game features)
*   Note that there is the major risk that if you are going to go bankrupt and you still click the "I'm Done" button, you will not have the chance to answer more questions to boost yourself up out of bankruptcy or to pay the fee to keep you checkpoints

_A common question is why would you recover when there are checkpoints, or vice versa. However, each has its pros and cons, and as a strategic player it is up to you to decide. Remember, recovery costs 5 gems, while a checkpoint costs 25 gems along with 50 coins. However, a checkpoint can be saved at any time during a game, and assuming you do not go bankrupt, the powerups saved in a checkpoint can help you in every game just by pressing the normal "start" or "restart" button without any additional fee. Moreover, if you have 5 gems, you can save your checkpoint from being dissolved by bankruptcy. However, coins are not saved in checkpoints (which can sometimes be a good thing if your high score gives you more coins), nor are multipliers (which is almost certainly a negative). Meanwhile, with recovery, you can only save what you had right before you lost, but you can save coins and multipliers too (you _have_ to start with the same number of coins as you ended with when you use recovery though, so it can be a bad thing if you bought a lot and did not end with much). Recovery only lasts once (i.e. you have to pay every time you want to recover from the last round), and bankruptcy is always fatal, but it is much cheaper. So, based on the context, the choice is yours. Note that you have to actively save a checkpoint, but can use it for free, while recovery data is saved automatically, but you have to pay each time to use it. They accomplish similar goals, but in most other ways, they are opposites._

## How to contribute

Feel free to play around with/contribute to this project if you wish, although if you publish a fork, please give full credit including writing, conspicuously, my name, my Github profile, and the location of my original version, including a hyperlink to the repository, in the README.md file and somewhere obvious on the website.

*   Make sure you have [⧉ node](https://nodejs.org/en/) and npm
*   Clone the repo [⧉ here](https://github.com/ps-coding/math-practice)
*   Run `npm install` to get the dependencies
*   Execute `npm run dev` in the terminal
*   Open your browser to the localhost address displayed
*   Edit the files in the `src/` directory, commit, and submit a request to incorporate your changes

_Some stylistic inspiration (mainly just regarding the "automatic enter" aspect of the text field input) was taken from [⧉ Math Trainer: Mental Math Competition](https://mathtrainer.ai/), but no code was copied, and all of the powerup features, leveling features, coin systems, bankruptcy, the algorithm for generating questions, etc. are mine alone as far as I am aware._
  
_The current state of the project is solely based on my ideas, and I am the only developer, but I welcome ideas and contributions. There are many math apps and games, but I hope this offers a unique combination of variability, strategy, and challenging computation. If you like this website, please share it and experiment with different ways to use this in friendly competitions. Enjoy!_
