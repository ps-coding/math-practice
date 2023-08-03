<svelte:head>
	<title>Math Practice - About</title>
	<meta
		name="description"
		content="Learn about all of the features of the website, Math Practice, and learn how to access it on Github. Website description: Practice your math skills with this simple game. You can practice addition, subtraction, multiplication, division, exponentiation, and roots. The game tracks your high score locally, uses coins as an in-game currency to buy additional time on a problem, has various cool and strategic powerups, and dynamically increases the difficulty of problems at different paces for different types of questions."
	/>
	<meta
		name="keywords"
		content="about information how to use math practice trainer game powerups addition sum subtraction difference multiplication product division quotient root roots exponents exponentiation dynamic difficulty coins currency high score"
	/>
</svelte:head>

<h1 id="math-practice">About <a href="/">Math Practice</a></h1>
<summary>
	Contents:
	<ul>
		<li>
			<a href="#how-to-use">How to use</a>:
			<ul>
				<li><a href="#question-types">Question types</a></li>
				<li><a href="#scores-and-coins">Scores and coins</a></li>
			</ul>
		</li>
		<li><a href="#how-to-run-dev">How to run (dev)</a></li>
	</ul>
</summary>
<h2 id="how-to-use">How to use</h2>
<h3 id="question-types">Question types</h3>
<ul>
	<li>Answer addition, subtraction, multiplication, division, exponent, and root questions</li>
	<li>The questions get harder the more questions you answer</li>
	<li>
		The difficulty changes at different rates: root and exponent questions increase in number
		logarithmically (ln(n/5) + k) while the main four operations increase linearly, and even then
		multiplication and division (4n) increase slower than addition and subtraction (10n)
	</li>
</ul>
<h3 id="scores-and-coins">Scores and coins</h3>
<ul>
	<li>
		If you don't answer a question in the allotted number of seconds (default is 10), you move back
		a level
	</li>
	<li>
		If you are on level 1 and you fail to answer the question in time, you lose the game and can
		restart
	</li>
	<li>
		Your high score is saved locally, and your starting number of coins for each round is calculated
		based on your high score
	</li>
	<li>
		You additionally earn a coin for each correct answer and lose a coin for not answering the
		question in time (you can go bankrupt if you spend a lot of money and can't pay for the
		incorrect question, resulting in you not only losing but also losing all powerups you may have
		saved using a checkpoint)
	</li>
	<li>
		Powerups:
		<ul>
			<li>
				2 coins: 3 seconds of extra time on the current question (default time 10 sec per question)
			</li>
			<li>
				10 coins: Increment (by +2 sec) the amount of extra time granted after each answered
				question (default 0 sec)
			</li>
			<li>
				10 coins: Increment (by +1x) the coin multiplier granted after each answered question
				(default 1x)
				<br />
				<small><i>This does not save in checkpoints.</i></small>
			</li>
			<li>
				20 coins: Increment (by +20 sec) the cap on the maximum amount of time you can start with
				after each answered question (default 60 sec)
			</li>
			<li>
				30 coins: Increment (by +1x) the time multiplier granted after each answered question
				(default 0x)
			</li>
			<li>
				50 coins and 25 gems (high score points): Save all of the current powerups in a checkpoint
				so next game you start with those powerups already equipped
				<br />
				<small
					><i
						>Note: The reason why it is required to give up gems for this is to prevent people who
						have reached very high levels from just buying a power up, clicking checkpoint,
						refreshing, and doing the same thing over an over again since if they start with the
						same number of initial points determined by their very great high score, they will
						always have enough money to keep going. In contrast, the way it is implemented, after a
						certain amount of checkpoints, they will run out of gems and thus not start with enough
						coins to pay for a checkpoint, so they will have to work their way up to getting that
						high score again. However, if you can buy them, checkpoints are worth it, since they
						help you reach higher levels much more easily and make up for the cost.</i
					></small
				>
			</li>
		</ul>
	</li>
</ul>
<h2 id="how-to-run-dev">How to run (dev)</h2>
<p>
	Feel free to play around with/contribute to this project if you wish, although if you publish a
	fork, please give credit.
</p>
<ul>
	<li>Make sure you have <a href="https://nodejs.org/en/" target="_blank">⧉ node</a> and npm</li>
	<li>
		Clone the repo <a href="https://github.com/ps-coding/math-practice" target="_blank">⧉ here</a>
	</li>
	<li>Run <code>npm install</code> to get the dependencies</li>
	<li>Execute <code>npm run dev</code> in the terminal</li>
	<li>Open your browser to the localhost address displayed</li>
	<li>Enjoy!</li>
</ul>
<i
	>Some stylistic inspiration (mainly just regarding the text field input) was taken from <a
		href="https://mathtrainer.ai">⧉ Math Trainer Mental Math Competition</a
	>, but no code was copied. The current and future state of the project is and will be solely based
	on my ideas, and I am the only developer. I created the project because I felt like such a math
	app turned into a game would be useful and enjoyable.</i
>

<small><b>Access my personal website <a href="https://shahprasham.com">⧉ here</a>.</b></small>
