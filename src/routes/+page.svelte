<script>
	import { getProblem } from '$lib/problem';
	import { browser } from '$app/environment';

	let correct = -2; // MAGIC NUMBERS: -2 is start; -1 is restart. The -1 is useful because it happens automatically once the user fails level 1, and -2 just made sense to avoid using an extra variable and to keep everything consistent.

	let highScore = parseInt((browser && localStorage.getItem('highScore')) || '0');

	/** @type {string} */
	let userInput = '';

	let secondsLeft = 10;

	$: problem = getProblem(correct + 1);

	/** @type {HTMLInputElement} */
	let inputEl;

	/** @type {HTMLSpanElement} */
	let highScoreEl;

	let coins = highScore * 2;

	let interval = setInterval(() => {
		secondsLeft--;
		if (secondsLeft == 0) {
			secondsLeft = 10;
			correct--;
			coins--;
			userInput = '';
			if (correct < 0) {
				clearInterval(interval);
			}
		}
	}, 1000);

	const yearTag = new Date().getFullYear() <= 2023 ? '' : `-${new Date().getFullYear()}`;

	let selectable = false;
</script>

<svelte:head>
	<title>Math Practice - Arithmetic Trainer</title>
	<meta
		name="description"
		content="Practice your math skills with this simple game. You can practice addition, subtraction, multiplication, division, exponentiation, and roots. The game tracks your high score locally, uses coins as an in-game currency to buy additional time on a problem, and dynamically increases the difficulty of problems at different paces for different types of questions."
	/>
	<meta
		name="keywords"
		content="math practice trainer addition sum subtraction difference multiplication product division quotient root roots exponents exponentiation dynamic difficulty coins currency high score"
	/>
</svelte:head>

<header class="top">
	<!-- svelte-ignore a11y-invalid-attribute -->
	<h1><a class="title" href="javascript:location.reload()">Math Practice</a></h1>
	{#if correct >= 0 && coins > 0}
		<button
			class="button coins"
			disabled={coins < 2}
			on:click={() => {
				if (coins >= 2) {
					coins -= 2;
					secondsLeft += 3;
				}
			}}><span>Coins: {coins}</span></button
		>
	{/if}
</header>
<main>
	{#if highScore > 0}
		<span class="highScore" bind:this={highScoreEl}
			>High Score: <span class="em">{highScore + 1}</span></span
		>
	{/if}

	{#if correct >= 0}
		<b class={'problem' + (selectable ? '' : ' unselectable')}>
			{#if problem.operation != '√' || problem.firstNum != 2}
				<span
					class={problem.operation == '√' ? 'r-index' : problem.operation != '^' ? 'firstNum' : ''}
					>{problem.firstNum}</span
				>
			{/if}
			{#if problem.operation != '^'}
				<span class="operation">{problem.operation}</span>
				<span class={problem.operation == '√' ? 'r-radicand' : 'secondNum'}
					>{problem.secondNum}
				</span>
			{:else}
				<sup class="exponent em">{problem.secondNum}</sup>
			{/if}
			&nbsp;=
		</b>

		<!-- svelte-ignore a11y-autofocus -->
		<input
			class="answer"
			type="number"
			placeholder="Answer"
			autofocus
			bind:value={userInput}
			bind:this={inputEl}
			on:input={() => {
				if (parseInt(userInput) == problem.answer) {
					inputEl.disabled = true;
					inputEl.style.backgroundColor = 'green';
					inputEl.style.borderRadius = '50px';
					inputEl.style.color = 'white';
					clearInterval(interval);

					if (correct + 1 > highScore) {
						highScoreEl.style.color = 'white';
						highScoreEl.style.backgroundColor = 'green';
						highScoreEl.style.borderRadius = '20px';
					}

					setTimeout(() => {
						inputEl.style.backgroundColor = 'white';
						inputEl.style.borderRadius = '0';
						inputEl.style.color = 'black';
						inputEl.disabled = false;

						correct++;
						coins++;

						userInput = '';
						secondsLeft = 10;

						if (correct > highScore) {
							highScore = correct;
							localStorage.setItem('highScore', highScore.toString());

							highScoreEl.style.color = 'black';
							highScoreEl.style.backgroundColor = 'white';
							highScoreEl.style.borderRadius = '0';
						}

						interval = setInterval(() => {
							secondsLeft--;
							if (secondsLeft == 0) {
								secondsLeft = 10;
								correct--;
								coins--;
								userInput = '';
								if (correct < 0) {
									clearInterval(interval);
								}
							}
						}, 1000);

						inputEl.focus();
					}, 500);
				}
			}}
		/>

		<span class="level">Level: <span class="em">{correct + 1}</span></span>
		<span class="time"
			>Answer in <span class="em">{secondsLeft}</span>
			second{secondsLeft == 1 ? '' : 's'}</span
		>
	{:else}
		<span class="checkbox">
			<input type="checkbox" id="selectable" bind:checked={selectable} />
			<label for="selectable"
				><span class="em">Can{selectable ? '' : 'not'}</span> select (and thus copy & paste) the
				problem.<br />Select to make it harder to cheat by pasting the question into a calculator.</label
			>
		</span>
		<button
			hidden={correct >= 0}
			class={'button ' + (correct == -1 ? 'reset' : 'start')}
			on:click={() => {
				userInput = '';
				correct = 0;
				secondsLeft = 10;
				coins = highScore * 2;
				clearInterval(interval);
				interval = setInterval(() => {
					secondsLeft--;
					if (secondsLeft == 0) {
						secondsLeft = 10;
						correct--;
						coins--;
						userInput = '';
						if (correct < 0) {
							clearInterval(interval);
						}
					}
				}, 1000);
			}}>{correct == -1 ? 'Restart' : 'Start'}</button
		>
	{/if}
</main>
<footer class="bottom">
	Copyright &copy; 2023{yearTag} Prasham Shah. All rights reserved.
</footer>

<style>
	/* General */
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	/* Top */
	.top {
		display: flex;
		width: 100%;
		justify-content: space-around;
		align-items: center;
	}

	h1 {
		font-size: 1em;
	}

	.title {
		text-align: center;
		font-family: 'Courier New', Courier, monospace;
		font-size: 2.75em;
		margin-block: 10px;
		text-decoration: none;
		color: black;
	}

	.title:hover {
		font-weight: bold;
		color: rgb(100, 100, 255);
	}

	.highScore {
		font-size: 2em;
		margin-block: 10px;
		transition: all 500ms ease-in-out;
		padding: 10px;
	}

	/* Problem */
	.problem {
		font-size: 2em;
		display: flex;
		justify-content: center;
		transition: all 500ms ease-in-out;
	}

	.firstNum {
		margin-right: 5px;
	}

	.secondNum {
		margin-left: 5px;
	}

	.operation {
		color: rgb(100, 100, 255);
	}

	.r-index {
		font-size: 15px;
		align-self: flex-start;
	}

	.r-radicand {
		text-decoration: overline;
		text-decoration-color: rgb(100, 100, 255);
	}

	.exponent {
		align-self: flex-start;
		font-size: 0.5em;
	}

	.unselectable {
		-webkit-user-select: none;
		-ms-user-select: none;
		-moz-user-select: none;
		user-select: none;
	}

	/* Answer */
	.answer {
		text-align: center;
		width: 100%;
		font-size: 1.5em;
		border: none;
		outline: none;
		transition: all 500ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
	}

	.answer::-webkit-outer-spin-button,
	.answer::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	.answer {
		-moz-appearance: textfield;
		appearance: textfield;
	}

	/* Bottom */
	.level {
		margin-top: 10px;
		font-size: 1.5em;
	}

	.time {
		font-size: 1.5em;
	}

	/* Buttons */
	.button {
		padding: 10px;
		border: none;
		border-radius: 10px;
		transition: all 250ms ease-in-out;
	}

	.button:hover {
		border-radius: 20px;
		cursor: pointer;
	}

	.reset {
		background-color: lightcoral;
		color: lightgoldenrodyellow;
		font-size: 1.5em;
	}

	.reset:hover {
		background-color: red;
		color: white;
	}

	.coins {
		background-color: yellow;
		color: black;
		width: 17ch;
	}

	.coins:hover {
		background-color: darkgoldenrod;
		color: white;
	}

	.coins:hover span {
		display: none;
	}

	.coins:hover:before {
		content: '2 coins for 3 sec';
	}

	.coins[disabled],
	.coins[disabled]:hover,
	.coins:disabled,
	.coins:disabled:hover {
		background-color: lightgray;
		color: black;
		border-radius: 0;
	}

	.coins[disabled]:hover:before,
	.coins:disabled:hover:before {
		content: 'Not enough coins';
	}

	.start {
		background-color: lightgreen;
		color: black;
		font-size: 1.5em;
	}

	.start:hover {
		background-color: green;
		color: white;
	}

	/* Checkboxes */
	.checkbox {
		display: flex;
		align-items: start;
		justify-content: center;
		margin-bottom: 20px;
	}

	/* Bottom */
	.bottom {
		text-align: center;
		position: absolute;
		bottom: 15px;
		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;
	}

	/* Emphasis */
	.em {
		color: rgb(100, 100, 255);
	}

	/* Media Queries */

	@media screen and (max-width: 550px) {
		.top {
			flex-wrap: wrap;
		}
		.title {
			flex-basis: 100%;
		}
	}

	@media screen and (max-height: 600px) {
		.bottom {
			margin-top: 40px;
			position: relative;
		}
	}
</style>
