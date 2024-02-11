<script>
	import { beforeNavigate } from '$app/navigation';
	import { getProblem } from '$lib/problem';
	import { onMount } from 'svelte';

	let correct = -2; // MAGIC NUMBERS: -2 is start; -1 is restart. The -1 is useful because it happens automatically once the user fails level 1, and -2 just made sense to avoid using an extra variable and to keep everything consistent.

	let highScore = 0;

	let coins = highScore * 2;

	let carryOver = 0;

	let bonusTime = 0;

	let maxTime = 60;

	let canRecover = false;

	let recoveryData = {
		recoveryCoins: 0,
		recoveryBonusTime: 0,
		recoveryMaxTime: 60,
		recoveryCarryOver: 0,
		recoveryMultiplier: 1
	};

	beforeNavigate(() => {
		clearInterval(interval);
		userInput = '';
		inputEl.disabled = true;

		inputColor = 'black';
		inputBackgroundColor = 'transparent';
		inputBorderRadius = '0';

		highScoreColor = 'black';
		highScoreBackgroundColor = 'transparent';
		highScoreBorderRadius = '0';

		showBar = false;
		secondsLeft = 0;

		while (correct > -1 && coins >= -1) {
			correct--;
			coins--;
		}

		if (correct <= -1 || coins < -1) {
			localStorage.setItem('started', 'false');

			showBar = true;

			let bankrupt = false;

			if (coins < -1) {
				bankrupt = true;

				carryOver = 0;
				bonusTime = 0;
				maxTime = 60;
				localStorage.setItem('carryOver', '0');
				localStorage.setItem('bonusTime', '0');
				localStorage.setItem('maxTime', '60');

				if (highScore >= 1) {
					highScore -= 1;
					localStorage.setItem('highScore', highScore.toString());
				}

				correct = -1;
			}
			if (!bankrupt) {
				canRecover = true;
				localStorage.setItem('canRecover', 'true');

				recoveryData.recoveryCoins = coins;
				recoveryData.recoveryCarryOver = carryOver;
				recoveryData.recoveryBonusTime = bonusTime;
				recoveryData.recoveryMaxTime = maxTime;
				recoveryData.recoveryMultiplier = multiplier;

				localStorage.setItem('recoveryCoins', coins.toString());
				localStorage.setItem('recoveryCarryOver', carryOver.toString());
				localStorage.setItem('recoveryBonusTime', bonusTime.toString());
				localStorage.setItem('recoveryMaxTime', maxTime.toString());
				localStorage.setItem('recoveryMultiplier', multiplier.toString());
			} else {
				canRecover = false;
				localStorage.setItem('canRecover', 'false');
			}

			carryOver = parseInt(localStorage.getItem('carryOver') || '0');
			bonusTime = parseInt(localStorage.getItem('bonusTime') || '0');
			maxTime = parseInt(localStorage.getItem('maxTime') || '60');
			multiplier = 1;

			highScore = parseInt(localStorage.getItem('highScore') || '0');
			coins = highScore * 2;

			clearInterval(interval);
		}
	});

	onMount(() => {
		highScore = parseInt(localStorage.getItem('highScore') || '0');
		coins = highScore * 2;

		carryOver = parseInt(localStorage.getItem('carryOver') || '0');
		bonusTime = parseInt(localStorage.getItem('bonusTime') || '0');
		maxTime = parseInt(localStorage.getItem('maxTime') || '60');

		canRecover = localStorage.getItem('canRecover') == 'true';

		if (canRecover) {
			recoveryData = {
				recoveryCoins: parseInt(localStorage.getItem('recoveryCoins') || '0'),
				recoveryBonusTime: parseInt(localStorage.getItem('recoveryBonusTime') || '0'),
				recoveryMaxTime: parseInt(localStorage.getItem('recoveryMaxTime') || '60'),
				recoveryCarryOver: parseInt(localStorage.getItem('recoveryCarryOver') || '0'),
				recoveryMultiplier: parseInt(localStorage.getItem('recoveryMultiplier') || '1')
			};
		}

		const started = localStorage.getItem('started') == 'true';

		if (started) {
			carryOver = 0;
			bonusTime = 0;
			maxTime = 60;
			localStorage.setItem('carryOver', '0');
			localStorage.setItem('bonusTime', '0');
			localStorage.setItem('maxTime', '60');

			if (highScore >= 1) {
				highScore -= 1;
				localStorage.setItem('highScore', highScore.toString());
			}

			correct = -1;
			canRecover = false;
			localStorage.setItem('canRecover', 'false');

			localStorage.setItem('started', 'false');
		}
	});

	let multiplier = 1;

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

	let interval = -1; // MAGIC NUMBER: -1 indicates there has been no interval set yet.

	const yearTag = new Date().getFullYear() <= 2023 ? '' : `-${new Date().getFullYear()}`;

	let selectable = false;

	let showBar = true;
</script>

<svelte:head>
	<title>Math Practice - Arithmetic Trainer</title>
	<meta
		name="description"
		content="Practice your math skills with this simple game. You can practice addition, subtraction, multiplication, division, exponentiation, and roots. The game tracks your high score locally, uses coins as an in-game currency to buy additional time on a problem, has various cool and strategic powerups, and dynamically increases the difficulty of problems at different paces for different types of questions."
	/>
	<meta
		name="keywords"
		content="math practice trainer game powerups addition sum subtraction difference multiplication product division quotient root roots exponents exponentiation dynamic difficulty coins currency high score"
	/>
</svelte:head>

<header class="top">
	<!-- svelte-ignore a11y-invalid-attribute -->
	<h1 class="outerTitle">
		<a
			class="title"
			href={correct >= 0
				? 'javascript:navigator.clipboard.writeText("https://math.shahprasham.com")'
				: '/'}>Math Practice</a
		>
		{#if correct >= 0}
			<br />
			<small>Above button copies the link 🔗</small>
			·
			<small>Do <i>not</i> try to refresh</small>
		{/if}
	</h1>
	{#if correct >= 0 && coins > 0 && showBar}
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
					>
					Coins: {coins}</span
				></button
			>
			{#if coins >= 10}
				<button
					class="button bonusTime"
					on:click={() => {
						coins -= 10;
						bonusTime += 2;
					}}
					><span
						>⚡ Bonus Time ({bonusTime != 0 ? bonusTime.toString() + ' sec ' : ''}to {bonusTime + 2}
						sec)</span
					></button
				>
			{/if}
			{#if coins >= 30}
				<button
					class="button carryOver"
					on:click={() => {
						coins -= 30;
						carryOver++;
					}}
					><span
						>⚡ Carry Over Time ({carryOver != 0 ? carryOver.toString() + 'x ' : ''}to {carryOver +
							1}x)</span
					></button
				>
			{/if}
			{#if coins >= 20}
				<button
					class="button increaseMax"
					on:click={() => {
						coins -= 20;
						maxTime += 20;
					}}><span>↑ Max Time ({maxTime} sec to {maxTime + 20} sec)</span></button
				>
			{/if}
		</div>
	{/if}
	{#if correct >= 0 && coins == -1}
		<span class="danger">In Danger of Bankruptcy! (Reloading will also trigger this.)</span>
		{#if highScore >= 5 && showBar}
			<button
				class="button saveme"
				on:click={() => {
					clearInterval(interval);

					correct = -1;

					canRecover = false;
					localStorage.setItem('canRecover', 'false');

					carryOver = parseInt(localStorage.getItem('carryOver') || '0');
					bonusTime = parseInt(localStorage.getItem('bonusTime') || '0');
					maxTime = parseInt(localStorage.getItem('maxTime') || '60');
					multiplier = 1;

					highScore = parseInt(localStorage.getItem('highScore') || '0');
					highScore -= 5;
					localStorage.setItem('highScore', highScore.toString());

					coins = highScore * 2;
				}}>Keep Existing Checkpoint for 5💎</button
			>
		{/if}
	{/if}
</header>
<main>
	{#if highScore > 0}
		<span
			class="highScore"
			style:color={highScoreColor}
			style:background-color={highScoreBackgroundColor}
			style:border-radius={highScoreBorderRadius}
			>High Score: <span class="em">{highScore}</span>💎</span
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
			inputmode="numeric"
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
						coins += multiplier;

						userInput = '';
						secondsLeft = Math.min(10 + bonusTime + secondsLeft * carryOver, maxTime);

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
								coins--;
								userInput = '';

								let bankrupt = false;

								if (coins < -1) {
									bankrupt = true;

									carryOver = 0;
									bonusTime = 0;
									maxTime = 60;
									localStorage.setItem('carryOver', '0');
									localStorage.setItem('bonusTime', '0');
									localStorage.setItem('maxTime', '60');

									if (highScore >= 1) {
										highScore -= 1;
										localStorage.setItem('highScore', highScore.toString());
									}

									correct = -1;
								}

								if (correct < 0) {
									localStorage.setItem('started', 'false');

									if (!bankrupt) {
										canRecover = true;
										localStorage.setItem('canRecover', 'true');

										recoveryData.recoveryCoins = coins;
										recoveryData.recoveryCarryOver = carryOver;
										recoveryData.recoveryBonusTime = bonusTime;
										recoveryData.recoveryMaxTime = maxTime;
										recoveryData.recoveryMultiplier = multiplier;

										localStorage.setItem('recoveryCoins', coins.toString());
										localStorage.setItem('recoveryCarryOver', carryOver.toString());
										localStorage.setItem('recoveryBonusTime', bonusTime.toString());
										localStorage.setItem('recoveryMaxTime', maxTime.toString());
										localStorage.setItem('recoveryMultiplier', multiplier.toString());
									} else {
										canRecover = false;
										localStorage.setItem('canRecover', 'false');
									}

									carryOver = parseInt(localStorage.getItem('carryOver') || '0');
									bonusTime = parseInt(localStorage.getItem('bonusTime') || '0');
									maxTime = parseInt(localStorage.getItem('maxTime') || '60');
									multiplier = 1;

									highScore = parseInt(localStorage.getItem('highScore') || '0');
									coins = highScore * 2;

									clearInterval(interval);
								}
							}
						}, 1000);

						inputEl.disabled = false;
						inputEl.tabIndex = -1;
						inputEl.focus();
						inputEl.tabIndex = 0;
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
		{#if coins >= 50 && highScore >= 25 && showBar}
			<button
				class="button checkpoint"
				on:click={() => {
					if (coins >= 50 && highScore >= 25) {
						coins -= 50;
						highScore -= 25;
						localStorage.setItem('highScore', highScore.toString());

						localStorage.setItem('carryOver', carryOver.toString());
						localStorage.setItem('bonusTime', bonusTime.toString());
						localStorage.setItem('maxTime', maxTime.toString());
					}
				}}><span>✓ Checkpoint: Save Powerups</span></button
			>
		{/if}
		{#if coins >= 10 && showBar}
			<button
				class="button multiplier"
				on:click={() => {
					coins -= 10;
					multiplier++;
				}}
				><span
					>× Coin Multiplier ({multiplier != 1 ? multiplier.toString() + 'x ' : ''}to {multiplier +
						1}x)</span
				></button
			>
		{/if}
		{#if showBar}
			<button
				class="button done"
				on:click={() => {
					clearInterval(interval);
					userInput = '';
					inputEl.disabled = true;

					inputColor = 'black';
					inputBackgroundColor = 'transparent';
					inputBorderRadius = '0';

					highScoreColor = 'black';
					highScoreBackgroundColor = 'transparent';
					highScoreBorderRadius = '0';

					showBar = false;
					secondsLeft = 0;

					let countdown = setInterval(() => {
						correct--;
						coins--;

						if (correct <= -1 || coins < -1) {
							clearInterval(countdown);

							localStorage.setItem('started', 'false');

							showBar = true;

							let bankrupt = false;

							if (coins < -1) {
								bankrupt = true;

								carryOver = 0;
								bonusTime = 0;
								maxTime = 60;
								localStorage.setItem('carryOver', '0');
								localStorage.setItem('bonusTime', '0');
								localStorage.setItem('maxTime', '60');

								if (highScore >= 1) {
									highScore -= 1;
									localStorage.setItem('highScore', highScore.toString());
								}

								correct = -1;
							}
							if (!bankrupt) {
								canRecover = true;
								localStorage.setItem('canRecover', 'true');

								recoveryData.recoveryCoins = coins;
								recoveryData.recoveryCarryOver = carryOver;
								recoveryData.recoveryBonusTime = bonusTime;
								recoveryData.recoveryMaxTime = maxTime;
								recoveryData.recoveryMultiplier = multiplier;

								localStorage.setItem('recoveryCoins', coins.toString());
								localStorage.setItem('recoveryCarryOver', carryOver.toString());
								localStorage.setItem('recoveryBonusTime', bonusTime.toString());
								localStorage.setItem('recoveryMaxTime', maxTime.toString());
								localStorage.setItem('recoveryMultiplier', multiplier.toString());
							} else {
								canRecover = false;
								localStorage.setItem('canRecover', 'false');
							}

							carryOver = parseInt(localStorage.getItem('carryOver') || '0');
							bonusTime = parseInt(localStorage.getItem('bonusTime') || '0');
							maxTime = parseInt(localStorage.getItem('maxTime') || '60');
							multiplier = 1;

							highScore = parseInt(localStorage.getItem('highScore') || '0');
							coins = highScore * 2;

							clearInterval(interval);
						}
					}, 300);
				}}>I'm Done</button
			>
		{/if}
	{:else}
		<hr class="break" />
		<div class="options">
			<b>Options:</b>
			<span class="checkbox">
				<input type="checkbox" id="selectable" bind:checked={selectable} />
				<label for="selectable"
					><span class="em">Can{selectable ? '' : 'not'}</span> select (and thus copy & paste) the
					problem.
					<small
						><i
							>Unselect this option to make cheating by pasting the question into a calculator
							harder.</i
						></small
					></label
				>
			</span>
		</div>
		<hr class="break" />
		<div>
			<b>You are launching with (based on the last saved checkpoint):</b>
			<ul class="launch">
				<li><span class="em">{carryOver ? carryOver.toString() + 'x' : 'No'}</span> Carry Over</li>
				<li>
					<span class="em">{bonusTime ? bonusTime.toString() + ' sec' : 'No'}</span> Bonus Time
				</li>
				<li><span class="em">{maxTime} sec</span> Max Time</li>
				<li>
					<span class="em">{highScore ? highScore * 2 : 'No'}</span> coins
				</li>
				<li>
					<span class="em">1x</span> Multiplier
				</li>
			</ul>
		</div>
		<button
			class={'button ' + (correct == -1 ? 'reset' : 'start')}
			on:click={() => {
				localStorage.setItem('started', 'true');

				showBar = true;

				inputColor = 'black';
				inputBackgroundColor = 'transparent';
				inputBorderRadius = '0';

				highScoreColor = 'black';
				highScoreBackgroundColor = 'transparent';
				highScoreBorderRadius = '0';

				userInput = '';
				correct = 0;
				secondsLeft = 10;
				highScore = parseInt(localStorage.getItem('highScore') || '0');
				coins = highScore * 2;

				carryOver = parseInt(localStorage.getItem('carryOver') || '0');
				bonusTime = parseInt(localStorage.getItem('bonusTime') || '0');
				maxTime = parseInt(localStorage.getItem('maxTime') || '60');
				multiplier = 1;

				if (interval != -1) clearInterval(interval);
				interval = setInterval(() => {
					secondsLeft--;
					if (secondsLeft == 0) {
						secondsLeft = 10;
						correct--;
						coins--;
						userInput = '';

						let bankrupt = false;

						if (coins < -1) {
							bankrupt = true;

							carryOver = 0;
							bonusTime = 0;
							maxTime = 60;
							localStorage.setItem('carryOver', '0');
							localStorage.setItem('bonusTime', '0');
							localStorage.setItem('maxTime', '60');

							if (highScore >= 1) {
								highScore -= 1;
								localStorage.setItem('highScore', highScore.toString());
							}

							correct = -1;
						}

						if (correct < 0) {
							localStorage.setItem('started', 'false');

							if (!bankrupt) {
								canRecover = true;
								localStorage.setItem('canRecover', 'true');

								recoveryData.recoveryCoins = coins;
								recoveryData.recoveryCarryOver = carryOver;
								recoveryData.recoveryBonusTime = bonusTime;
								recoveryData.recoveryMaxTime = maxTime;
								recoveryData.recoveryMultiplier = multiplier;

								localStorage.setItem('recoveryCoins', coins.toString());
								localStorage.setItem('recoveryCarryOver', carryOver.toString());
								localStorage.setItem('recoveryBonusTime', bonusTime.toString());
								localStorage.setItem('recoveryMaxTime', maxTime.toString());
								localStorage.setItem('recoveryMultiplier', multiplier.toString());
							} else {
								canRecover = false;
								localStorage.setItem('canRecover', 'false');
							}

							carryOver = parseInt(localStorage.getItem('carryOver') || '0');
							bonusTime = parseInt(localStorage.getItem('bonusTime') || '0');
							maxTime = parseInt(localStorage.getItem('maxTime') || '60');
							multiplier = 1;

							highScore = parseInt(localStorage.getItem('highScore') || '0');
							coins = highScore * 2;

							clearInterval(interval);
						}
					}
				}, 1000);
			}}>{correct == -1 ? 'Restart' : 'Start'}</button
		>
		{#if canRecover && highScore >= 5}
			<hr class="break" />
			<div>
				<b>You could launch with (based on the automatically saved recovery):</b>
				<ul class="launch">
					<li>
						<span class="em"
							>{recoveryData.recoveryCarryOver
								? recoveryData.recoveryCarryOver.toString() + 'x'
								: 'No'}</span
						> Carry Over
					</li>
					<li>
						<span class="em"
							>{recoveryData.recoveryBonusTime
								? recoveryData.recoveryBonusTime.toString() + ' sec'
								: 'No'}</span
						> Bonus Time
					</li>
					<li><span class="em">{recoveryData.recoveryMaxTime} sec</span> Max Time</li>
					<li>
						<span class="em"
							>{recoveryData.recoveryCoins ? recoveryData.recoveryCoins + 1 : 'No'}</span
						>
						coins
					</li>
					<li>
						<span class="em">{recoveryData.recoveryMultiplier}x</span> Multiplier
					</li>
				</ul>
			</div>
			<button
				class="button recover"
				on:click={() => {
					localStorage.setItem('started', 'true');

					showBar = true;

					inputColor = 'black';
					inputBackgroundColor = 'transparent';
					inputBorderRadius = '0';

					highScoreColor = 'black';
					highScoreBackgroundColor = 'transparent';
					highScoreBorderRadius = '0';

					userInput = '';
					correct = 0;
					secondsLeft = 10;
					highScore = parseInt(localStorage.getItem('highScore') || '0');
					highScore -= 5;
					localStorage.setItem('highScore', highScore.toString());

					coins = recoveryData.recoveryCoins + 1;
					carryOver = recoveryData.recoveryCarryOver;
					bonusTime = recoveryData.recoveryBonusTime;
					maxTime = recoveryData.recoveryMaxTime;
					multiplier = recoveryData.recoveryMultiplier;

					if (interval != -1) clearInterval(interval);
					interval = setInterval(() => {
						secondsLeft--;
						if (secondsLeft == 0) {
							secondsLeft = 10;
							correct--;
							coins--;
							userInput = '';

							let bankrupt = false;

							if (coins < -1) {
								bankrupt = true;

								carryOver = 0;
								bonusTime = 0;
								maxTime = 60;
								localStorage.setItem('carryOver', '0');
								localStorage.setItem('bonusTime', '0');
								localStorage.setItem('maxTime', '60');

								if (highScore >= 1) {
									highScore -= 1;
									localStorage.setItem('highScore', highScore.toString());
								}

								correct = -1;
							}

							if (correct < 0) {
								localStorage.setItem('started', 'false');

								if (!bankrupt) {
									canRecover = true;
									localStorage.setItem('canRecover', 'true');

									recoveryData.recoveryCoins = coins;
									recoveryData.recoveryCarryOver = carryOver;
									recoveryData.recoveryBonusTime = bonusTime;
									recoveryData.recoveryMaxTime = maxTime;

									localStorage.setItem('recoveryCoins', coins.toString());
									localStorage.setItem('recoveryCarryOver', carryOver.toString());
									localStorage.setItem('recoveryBonusTime', bonusTime.toString());
									localStorage.setItem('recoveryMaxTime', maxTime.toString());
								} else {
									canRecover = false;
									localStorage.setItem('canRecover', 'false');
								}

								carryOver = parseInt(localStorage.getItem('carryOver') || '0');
								bonusTime = parseInt(localStorage.getItem('bonusTime') || '0');
								maxTime = parseInt(localStorage.getItem('maxTime') || '60');
								multiplier = 1;

								highScore = parseInt(localStorage.getItem('highScore') || '0');
								coins = highScore * 2;

								clearInterval(interval);
							}
						}
					}, 1000);
				}}>Recover for 5💎</button
			>
		{/if}
	{/if}
</main>
<footer class="bottom">
	<a href="/about" target={correct >= 0 ? '_blank' : '_self'}>About</a> ·
	<small><i>Copyright &copy; 2023{yearTag} Prasham Shah. All rights reserved.</i></small>
	·
	<a href="https://shahprasham.com" target="_blank">⧉ Portfolio</a>
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
		flex-wrap: wrap;
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
		margin-bottom: 20px;
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
		margin-left: 10px;
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

	.bonusTime {
		background-color: lightskyblue;
		color: black;
		width: 30ch;
		margin-left: 10px;
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

	.increaseMax {
		background-color: lightcoral;
		color: black;
		width: 30ch;
		margin-left: 10px;
	}

	.increaseMax:hover {
		background-color: darkorange;
		color: white;
	}

	.increaseMax:hover span {
		display: none;
	}

	.increaseMax:hover:before {
		content: '$ Buy for 20 coins';
	}

	.carryOver {
		background-color: lightskyblue;
		color: black;
		width: 30ch;
		margin-left: 10px;
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

	.checkpoint {
		background-color: aquamarine;
		color: black;
		width: 35ch;
	}

	.checkpoint:hover {
		background-color: darkolivegreen;
		color: white;
	}

	.checkpoint:hover span {
		display: none;
	}

	.checkpoint:hover:before {
		content: '$ Buy for 25 gems + 50 coins';
	}

	.multiplier {
		background-color: gold;
		color: black;
		width: 30ch;
	}

	.multiplier:hover {
		background-color: darkred;
		color: white;
	}

	.multiplier:hover span {
		display: none;
	}

	.multiplier:hover:before {
		content: '$ Buy for 10 coins [no checkpoint]';
	}

	.done {
		background-color: lightsalmon;
		color: black;
		width: 30ch;
	}

	.done:hover {
		background-color: coral;
		color: whitesmoke;
	}

	.danger {
		color: red;
		margin-left: 10px;
	}

	.saveme {
		background-color: lightslategray;
		color: black;
		width: 35ch;
	}

	.saveme:hover {
		background-color: brown;
		color: white;
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

	.recover {
		background-color: lightblue;
		color: black;
		font-size: 1.5em;
	}

	.recover:hover {
		background-color: var(--accent);
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
		margin-top: 40px;
		text-align: center;
	}

	/* Emphasis */
	.em {
		color: var(--accent);
	}

	/* Section Break */
	.break {
		border: 0;
		clear: both;
		display: block;
		width: 96%;
		background-color: darkgray;
		height: 1px;
	}

	/* Misc */
	.options {
		text-align: center;
	}

	.launch {
		margin-top: 5px;
	}
</style>
