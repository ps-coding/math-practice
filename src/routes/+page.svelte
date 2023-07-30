<script>
	import { getProblem } from '$lib/problem';
	import { browser } from '$app/environment';

	let correct = 0;

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
</script>

<svelte:head>
	<title>Math Practice</title>
	<meta name="description" content="Practice your math skills with this simple game." />
</svelte:head>

<main>
	<header class="top">
		<a class="title" href="/">Math Practice</a>
		{#if correct >= 0 && coins > 0}
			<button
				class="button coins"
				on:click={() => {
					if (coins >= 2) {
						coins -= 2;
						secondsLeft += 3;
					}
				}}><span>Coins: {coins}</span></button
			>
		{/if}
	</header>

	<span class="highScore" bind:this={highScoreEl}>High Score: {highScore + 1}</span>

	{#if correct >= 0}
		<span class="problem">
			<span class={problem.operation == '√' ? 'r-index' : 'firstNum'}>{problem.firstNum}</span>
			<span class="operation">{problem.operation}</span>
			<span class={problem.operation == '√' ? 'r-radicand' : 'secondNum'}>{problem.secondNum}</span>
			&nbsp;=
		</span>

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

		<span class="level">Level: {correct + 1}</span>
		<span class="time">Answer in {secondsLeft} {secondsLeft == 1 ? 'second' : 'seconds'}</span>
	{:else}
		<button
			hidden={correct >= 0}
			class="button reset"
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
			}}>Restart</button
		>
	{/if}
</main>

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

	.title {
		text-align: center;
		font-family: 'Courier New', Courier, monospace;
		font-size: 2.75em;
		margin-block: 10px;
		text-decoration: none;
	}

	.title:hover {
		font-weight: bold;
		font-style: italic;
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
		color: rgb(0, 255, 255);
	}

	.r-index {
		font-size: 15px;
		align-self: flex-start;
	}

	.r-radicand {
		text-decoration: overline;
		text-decoration-color: rgb(0, 255, 255);
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
		background-color: lightcoral;
		color: lightgoldenrodyellow;
		transition: all 250ms ease-in-out;
	}

	.button:hover {
		background-color: red;
		color: white;
		border-radius: 20px;
	}

	.reset {
		font-size: 1.5em;
	}

	.coins {
		background-color: yellow;
		width: 17ch;
	}

	.coins:hover {
		background-color: darkgoldenrod;
	}

	.coins:hover span {
		display: none;
	}

	.coins:hover:before {
		content: '2 coins for 3 sec';
	}

	@media screen and (max-width: 500px) {
		.top {
			flex-wrap: wrap;
		}
		.title {
			flex-basis: 100%;
		}
	}
</style>
