import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-4mnmgn_START -->${$$result.title = `<title>Math Practice - About</title>`, ""}<meta name="description" content="Learn about all of the features of the website, Math Practice, and learn how to access it on Github. Website description: Practice your math skills with this simple game. You can practice addition, subtraction, multiplication, division, exponentiation, and roots. The game tracks your high score locally, uses coins as an in-game currency to buy additional time on a problem, has various cool and strategic powerups, and dynamically increases the difficulty of problems at different paces for different types of questions."><meta name="keywords" content="about information how to use math practice trainer game powerups addition sum subtraction difference multiplication product division quotient root roots exponents exponentiation dynamic difficulty coins currency high score"><!-- HEAD_svelte-4mnmgn_END -->`, ""} <h1 id="math-practice" data-svelte-h="svelte-1onr6t8">About <a href="/">Math Practice</a></h1> <summary data-svelte-h="svelte-i47ov5"><ul><li><a href="#how-to-use">How to use</a>:
			<ul><li><a href="#question-types">Question types</a></li> <li><a href="#scores-and-coins">Scores and coins</a></li> <li><a href="#powerups">Powerups</a></li></ul></li> <li><a href="#how-to-run-dev">How to run (dev)</a></li></ul></summary> <h2 id="how-to-use" data-svelte-h="svelte-6r9r48">How to use</h2> <h3 id="question-types" data-svelte-h="svelte-1w79w5d">Question types</h3> <ul data-svelte-h="svelte-1hf64wl"><li>Answer addition, subtraction, multiplication, division, exponent, and root questions</li> <li>The questions get harder the more questions you answer</li> <li>The difficulty changes at different rates: root and exponent questions increase in number
		logarithmically (ln(n/5) + k) while the main four operations increase linearly, and even then
		multiplication and division (4n) increase slower than addition and subtraction (10n)</li></ul> <h3 id="scores-and-coins" data-svelte-h="svelte-195d834">Scores and coins</h3> <ul data-svelte-h="svelte-8h5x0r"><li>If you don&#39;t answer a question in the allotted number of seconds (default is 10), you move back
		a level</li> <li>If you are on level 1 and you fail to answer the question in time, you lose the game and can
		restart</li> <li>Your high score is saved locally, and your starting number of coins for each round is calculated
		based on your high score</li> <li>You additionally earn a coin for each correct answer and lose a coin for not answering the
		question in time
		<br> <small><i>You can go bankrupt if you spend a lot of money and can&#39;t pay for the incorrect question,
				resulting in you not only losing the round but also losing all powerups you may have saved
				using a checkpoint --- specifically, if the coin value hits -2, you lose. Before you hit
				this debt value, you will be warned so you know that a lot is riding on that question. Spend
				wisely.</i></small></li></ul> <h3 id="powerups" data-svelte-h="svelte-5y40w0">Powerups</h3> <ul data-svelte-h="svelte-9zd4o2"><li>2 coins: 3 seconds of extra time on the current question (default time 10 sec per question)</li> <li>10 coins: Increment (by +2 sec) the amount of extra time granted after each answered question
		(default 0 sec)</li> <li>10 coins: Increment (by +1x) the coin multiplier granted after each answered question (default
		1x)
		<br> <small><i>This does not save in checkpoints.</i></small></li> <li>20 coins: Increment (by +20 sec) the cap on the maximum amount of time you can start with after
		each answered question (default 60 sec)</li> <li>30 coins: Increment (by +1x) the time factor to be multiplied with the amount of time left on
		each question to be added on to the time for the next question (default 0x)</li> <li>50 coins and 25 gems (high score points): Save all of the current powerups in a checkpoint so
		next game you start with those powerups already equipped
		<br> <small><i>Design Note: It might seem weird that you have to give up high score points for this. The
				reason why it is required to give up gems is to prevent people who have reached very high
				levels from just buying a power up, clicking checkpoint, refreshing, and doing the same
				thing over an over again since if they start with the same number of initial points
				determined by their very great high score, they will always have enough money to keep going.
				In contrast, the way it is implemented, after a certain amount of checkpoints, they will run
				out of gems and thus not start with enough coins to pay for a checkpoint, so they will have
				to work their way up to getting that high score again. However, if you can buy them,
				checkpoints are worth it, since they help you reach higher levels much more easily and make
				up for the cost.</i></small></li></ul> <h2 id="how-to-run-dev" data-svelte-h="svelte-qj30ku">How to contribute</h2> <p data-svelte-h="svelte-49kxa5">Feel free to play around with/contribute to this project if you wish, although if you publish a
	fork, please give credit.</p> <ul data-svelte-h="svelte-19u8agp"><li>Make sure you have <a href="https://nodejs.org/en/" target="_blank">⧉ node</a> and npm</li> <li>Clone the repo <a href="https://github.com/ps-coding/math-practice" target="_blank">⧉ here</a></li> <li>Run <code>npm install</code> to get the dependencies</li> <li>Execute <code>npm run dev</code> in the terminal</li> <li>Open your browser to the localhost address displayed</li> <li>Edit the files in the <code>src/</code> directory, commit, and submit a request to incorporate your
		changes</li></ul> <i data-svelte-h="svelte-cn8qxj">Some stylistic inspiration (mainly just regarding the &quot;automatic enter&quot; aspect of the text field
	input) was taken from <a href="https://mathtrainer.ai">⧉ Math Trainer: Mental Math Competition</a>, but no code was copied. The current state of the project is solely based on my ideas, and I am
	the only developer, but I welcome ideas and contributions. There are many math apps and games, but
	I hope this offers a unique combination of simplicity, strategy, and challenging computation.
	Enjoy!</i> <br> <br> <small data-svelte-h="svelte-st96g"><b>Access my personal website <a href="https://shahprasham.com">⧉ here</a>.</b></small>`;
});
export {
  Page as default
};
