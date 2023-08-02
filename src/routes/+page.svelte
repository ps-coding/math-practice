<script>
	import { getProblem } from '$lib/problem';
	import { onMount } from 'svelte';

	let correct = -2; // MAGIC NUMBERS: -2 is start; -1 is restart. The -1 is useful because it happens automatically once the user fails level 1, and -2 just made sense to avoid using an extra variable and to keep everything consistent.

	let highScore = 0;

	onMount(() => {
		highScore = parseInt(localStorage.getItem('highScore') || '0');
		coins = highScore * 2;
	});

	let userInput = '';

	let secondsLeft = 10;

	$: problem = getProblem(correct + 1);

	/** @type {HTMLInputElement} */
	let inputEl;

	let inputColor = 'black';
	let inputBackgroundColor = 'transparent';
	let inputBorderRadius = '0';

	let highScoreColor = 'black';
	let highScoreBackgroundColor = 'transparent';
	let highScoreBorderRadius = '0';

	let coins = highScore * 2;

	let interval = -1; // MAGIC NUMBER: -1 indicates there has been no interval set yet.

	onMount(() => {
		interval = setInterval(() => {
			secondsLeft--;
			if (secondsLeft == 0) {
				secondsLeft = 10;
				correct--;
				coins = Math.max(0, coins - 1);
				userInput = '';
				if (correct < 0) {
					clearInterval(interval);
				}
			}
		}, 1000);
	});

	const yearTag = new Date().getFullYear() <= 2023 ? '' : `-${new Date().getFullYear()}`;

	let selectable = false;

	let carryOver = 0;

	let bonusTime = 0;
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
	<h1 class="outerTitle"><a class="title" href="javascript:location.reload()">Math Practice</a></h1>
	{#if correct >= 0 && coins > 0}
		<div>
			<button
				class="button coins"
				disabled={coins < 2}
				on:click={() => {
					if (coins >= 2) {
						coins -= 2;
						secondsLeft += 3;
					}
				}}
				><span
					><svg
						class="coinsvg"
						xmlns="http://www.w3.org/2000/svg"
						height="1em"
						viewBox="0 0 512 512"
						><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
							d="M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2l0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5V176c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336V300.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4V304v5.7V336zm32 0V304 278.1c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5V272c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5V432c0 44.2-86 80-192 80S0 476.2 0 432V396.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z"
						/></svg
					>Coins: {coins}</span
				></button
			>
			{#if coins >= 10}
				<button
					class="button bonusTime"
					on:click={() => {
						if (coins >= 10) {
							coins -= 10;
							bonusTime++;
						}
					}}
					><span
						>⚡ Bonus Time ({bonusTime != 0 ? bonusTime.toString() + ' sec ' : ''}to {bonusTime + 1}
						sec)</span
					></button
				>
			{/if}
			{#if coins >= 30}
				<button
					class="button carryOver"
					on:click={() => {
						if (coins >= 30) {
							coins -= 30;
							carryOver++;
						}
					}}
					><span
						>⚡ Carry Over Time ({carryOver != 0 ? carryOver.toString() + 'x ' : ''}to {carryOver +
							1}x)</span
					></button
				>
			{/if}
		</div>
	{/if}
</header>
<main>
	{#if highScore > 0}
		<span
			class="highScore"
			style:color={highScoreColor}
			style:background-color={highScoreBackgroundColor}
			style:border-radius={highScoreBorderRadius}
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
			style:color={inputColor}
			style:background-color={inputBackgroundColor}
			style:border-radius={inputBorderRadius}
			bind:value={userInput}
			bind:this={inputEl}
			on:input={() => {
				if (parseInt(userInput) == problem.answer) {
					clearInterval(interval);
					inputEl.disabled = true;
					inputColor = 'white';
					inputBackgroundColor = 'green';
					inputBorderRadius = '50px';

					if (correct + 1 > highScore) {
						highScoreColor = 'white';
						highScoreBackgroundColor = 'green';
						highScoreBorderRadius = '20px';
					}

					setTimeout(() => {
						inputColor = 'black';
						inputBackgroundColor = 'transparent';
						inputBorderRadius = '0';

						correct++;
						coins++;

						userInput = '';
						secondsLeft = 10 + bonusTime + secondsLeft * carryOver;

						if (correct > highScore) {
							highScore = correct;
							localStorage.setItem('highScore', highScore.toString());

							highScoreColor = 'black';
							highScoreBackgroundColor = 'transparent';
							highScoreBorderRadius = '0';
						}

						interval = setInterval(() => {
							secondsLeft--;
							if (secondsLeft == 0) {
								secondsLeft = 10;
								correct--;
								coins = Math.max(0, coins - 1);
								userInput = '';
								if (correct < 0) {
									clearInterval(interval);
								}
							}
						}, 1000);

						inputEl.disabled = false;
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
				carryOver = 0;
				bonusTime = 0;
				clearInterval(interval);
				interval = setInterval(() => {
					secondsLeft--;
					if (secondsLeft == 0) {
						secondsLeft = 10;
						correct--;
						coins = Math.max(0, coins - 1);
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
	<a href="/about">About</a> · Copyright &copy; 2023{yearTag} Prasham Shah. All rights reserved.
</footer>

<style>
	:root {
		--accent: rgb(50, 50, 200);
	}

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
		align-content: center;
	}

	.outerTitle {
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
		color: var(--accent);
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
		color: var(--accent);
	}

	.r-index {
		font-size: 15px;
		align-self: flex-start;
	}

	.r-radicand {
		text-decoration: overline;
		text-decoration-color: var(--accent);
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

	.coinsvg {
		width: 1em;
		height: 1em;
		margin-right: 5px;
		fill: black;
	}

	.carryOver {
		background-color: lightskyblue;
		color: black;
		width: 30ch;
	}

	.carryOver:hover {
		background-color: darkslateblue;
		color: white;
	}

	.carryOver:hover span {
		display: none;
	}

	.carryOver:hover:before {
		content: '$ Buy for 30 coins';
	}

	.bonusTime {
		background-color: lightskyblue;
		color: black;
		width: 30ch;
	}

	.bonusTime:hover {
		background-color: darkslateblue;
		color: white;
	}

	.bonusTime:hover span {
		display: none;
	}

	.bonusTime:hover:before {
		content: '$ Buy for 10 coins';
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
		color: var(--accent);
	}

	/* Media Queries */
	@media screen and (max-width: 950px) {
		.top {
			justify-content: center;
			flex-wrap: wrap;
		}

		.coins {
			margin-left: 10px;
		}

		.carryOver {
			margin-left: 10px;
		}

		.bonusTime {
			margin-left: 10px;
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
