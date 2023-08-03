<svelte:head>
	<title>Math Practice - About</title>
	<meta
		name="description"
		content="Learn about all of the features of the website, Math Practice, and learn how to access it on Github."
	/>
	<meta
		name="keywords"
		content="about information how to use math practice trainer addition sum subtraction difference multiplication product division quotient root roots exponents exponentiation dynamic difficulty coins currency high score"
	/>
</svelte:head>

<h1 id="math-practice">About <a href="/">Math Practice</a></h1>
<h2 id="how-to-use">How to use</h2>
<h3 id="question-types">Question types</h3>
<ul>
	<li>Answer addition, subtraction, multiplication, division, exponent, and root questions</li>
	<li>The questions get harder the more questions you answer</li>
	<li>
		The difficulty changes at different rates: root and exponent questions increase in number
		logarithmically while the main four operations increase linearly, and even then multiplication
		and division increase slower than addition and subtraction
	</li>
</ul>
<h3 id="scores-and-coins">Scores and coins</h3>
<ul>
	<li>If you don't answer a question in 10 seconds, you move back a level</li>
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
		question in time
	</li>
	<li>
		Coin values:
		<ul>
			<li>2 coins: 3 seconds of extra time on the current question</li>
			<li>
				10 coins: Increment the amount of extra time granted after each answered question (default 0
				sec)
			</li>
			<li>
				20 coins: Increment the cap on the maximum amount of time you can start with after each
				answered question (default 60 sec)
			</li>
			<li>
				30 coins: Increment the time multiplier granted after each answered question (default 0x)
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
	<li>Make sure you have <a href="https://nodejs.org/en/" target="_blank">node</a> and npm</li>
	<li>
		Clone the repo <a href="https://github.com/ps-coding/math-practice" target="_blank">here</a>
	</li>
	<li>Run <code>npm install</code> to get the dependencies</li>
	<li>Execute <code>npm run dev</code> in the terminal</li>
	<li>Open your browser to the localhost address displayed</li>
	<li>Enjoy!</li>
</ul>
<i
	>Some stylistic inspiration (mainly just regarding the text field input) was taken from <a
		href="https://mathtrainer.ai">https://mathtrainer.ai</a
	>, but no code was copied. The current and future state of the project is and will be solely based
	on my ideas, and I am the only developer. I created the project because I felt like such a math
	app turned into a game would be useful and enjoyable.</i
>
