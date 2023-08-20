import { c as create_ssr_component } from "../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".outerTitle.svelte-f65lgz{font-size:2.75em}.title.svelte-f65lgz{text-align:center;font-family:'Courier New', Courier, monospace;font-size:1em;margin-block:10px;text-decoration:none;color:black}.title.svelte-f65lgz:hover{font-weight:bold;color:var(--accent)}a.svelte-f65lgz{text-decoration:none;color:blue}div.svelte-f65lgz{margin:10px;padding:10px;border-radius:10px}.d.svelte-f65lgz{background-color:lightgray}.s1.svelte-f65lgz{background-color:lightblue}.s2.svelte-f65lgz{background-color:lightpink}.s3.svelte-f65lgz{background-color:lightgreen}.s4.svelte-f65lgz{background-color:lightyellow}.bottom.svelte-f65lgz{margin-top:20px;text-align:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-4mnmgn_START -->${$$result.title = `<title>Math Practice - About</title>`, ""}<meta name="description" content="Learn about all of the features of the website, Math Practice, and learn how to access it on Github. Website description: Practice your math skills with this simple game. You can practice addition, subtraction, multiplication, division, exponentiation, and roots. The game tracks your high score locally, uses coins as an in-game currency to buy additional time on a problem, has various cool and strategic powerups, and dynamically increases the difficulty of problems at different paces for different types of questions."><meta name="keywords" content="about information how to use math practice trainer game powerups addition sum subtraction difference multiplication product division quotient root roots exponents exponentiation dynamic difficulty coins currency high score"><!-- HEAD_svelte-4mnmgn_END -->`, ""} <h1 class="outerTitle svelte-f65lgz" data-svelte-h="svelte-1r3bnp5">About <a href="/" class="title svelte-f65lgz">Math Practice</a></h1> <summary data-svelte-h="svelte-xm52pe"><ul><li><a href="#fast-facts" class="svelte-f65lgz">Fast facts</a></li> <li><a href="#how-to-use" class="svelte-f65lgz">How to use</a> <ul><li><a href="#question-types" class="svelte-f65lgz">Question types</a></li> <li><a href="#scores-and-coins" class="svelte-f65lgz">Scores and coins</a></li> <li><a href="#powerups" class="svelte-f65lgz">Powerups</a></li> <li><a href="#recover" class="svelte-f65lgz">Recovery</a></li></ul></li> <li><a href="#contribute" class="svelte-f65lgz">How to contribute</a></li></ul></summary> <div class="d svelte-f65lgz" data-svelte-h="svelte-xrqhbv"><h2 id="fast-facts">Fast facts</h2> <ul><li>The question types are addition, subtraction, multiplication, division, exponentiation, and
			roots</li> <li>The base time is 10 seconds per question, but that can change</li> <li>If you get a question right, your coins increase by the coin multiplier, but if you get a
			question wrong, your coins only decrease by 1</li> <li>Your initial coins are proportional to your high score and can be used to buy powerups, which
			are listed below; however, during the game you can just hover over the powerups as they appear
			to see what they do and how much they cost (note the coin button does activate a temporary
			powerup too)</li> <li>Your high score reflects the highest level you have reached, and increasing that is the main
			purpose of the game, but you can sacrifice some gems (high score points) to gain an advantage
			by buying recovery or checkpoints, for example, if you think it will help you in the long term</li> <li>If you have no coins left, and you subsequently get two questions wrong in a row (bringing
			your coin count to &quot;-2&quot;), bankruptcy will be triggered, resulting in you losing your
			checkpoint (unless you pay five diamonds to save it) and recovery data, as well as losing a
			gem if you have any</li> <li>Recovery is saved automatically once you drop to level zero and saves <i>everything</i>,
			including your end coins and coin multiplier; meanwhile, checkpoints have to be saved
			manually, but they can save whenever you want and do not include coins or coin multipliers</li> <li>While you have to pay five diamonds for recovery, you have to pay nothing to reactivate your
			last checkpoint</li> <li>Click &quot;I&#39;m Done&quot; and wait through the animation to guarantee your progress is saved, since if
			you refresh, we&#39;ll try to do this automatically but some browser&#39;s do not support it; in that
			case, we&#39;ll assume the worst, that you are trying to cheat out of bankruptcy, and trigger
			bankruptcy anyway</li></ul></div> <div class="d svelte-f65lgz" data-svelte-h="svelte-1krvmh8"><h2 id="how-to-use">How to use</h2> <div class="s1 svelte-f65lgz"><h3 id="question-types">Question types</h3> <ul><li>Answer addition, subtraction, multiplication, division, exponent, and root questions</li> <li>The questions get harder the more questions you answer</li> <li>The difficulty changes at different rates: root and exponent questions increase in number
				logarithmically (ln(n/5) + k) while the main four operations increase linearly, and even
				then multiplication and division (4n) increase slower than addition and subtraction (10n)</li></ul></div> <div class="s2 svelte-f65lgz"><h3 id="scores-and-coins">Scores and coins</h3> <ul><li>If you don&#39;t answer a question in the allotted number of seconds (default is 10), you move
				back a level</li> <li>If you are on level 1 and you fail to answer the question in time, you lose the game and can
				restart</li> <li>Your high score is the highest level you successfully complete (not reach)</li> <li>Your high score is saved locally, and your starting number of coins for each round is
				calculated based on your high score</li> <li>You additionally earn a coin (times your coin multiplier) for each correct answer and lose a
				coin for not answering the question in time (but any coin multiplier only applies when
				gaining coins, not losing them)</li></ul> <small><i>You can go bankrupt if you spend a lot of money and can&#39;t pay for the incorrect question,
				resulting in you not only losing the round but also losing all powerups you may have saved
				using a checkpoint — specifically, if the coin value hits -2, you lose. You
				additionally lose the ability to recover next round. You also lose a gem or high score point
				for going bankrupt if you have at least one gem. Before you hit this debt value, you will be
				warned so you know that a lot is riding on that question. There is a way out if you have
				enough gems, however: you can use 5 gems to save your checkpoints, although recovery will be
				disabled and you will still lose regardless. However, if you have gotten sufficiently far
				with your checkpoints, spending 5 gems to save them should be an easy decision. Oh, and
				don&#39;t even <i>try</i> refreshing or navigating away, since that will automatically trigger bankruptcy
				as well (we try to do a normal countdown procedure automatically before navigation if your browser
				supports it to try to help you out, but if your browser does not support navigate-away hooks,
				like most browsers on mobile, the app will assume the worst). All links on the game page have
				been set to always open in new tab except the link to this about page from the home page, which
				will open in the same tab unless you are in the middle of the game, to prevent accidental bankruptcy.</i></small></div> <div class="s3 svelte-f65lgz"><h3 id="powerups">Powerups</h3> <p>Powerups appear as they become available and include the following:</p> <ul><li>2 coins: 3 seconds of extra time on the current question (default time 10 sec per question)
				- click the coin counter to access this powerup since it does not have a dedicated button;
				the coin indicator will turn yellow when you have enough coins for this powerup</li> <li>10 coins: Increment (by +2 sec) the amount of extra time granted after each answered
				question (default 0 sec)</li> <li>10 coins: Increment (by +1x) the coin multiplier granted after each answered question
				(default 1x)
				<br> <small><i>This does not save in checkpoints, only in recovery.</i></small></li> <li>20 coins: Increment (by +20 sec) the cap on the maximum amount of time you can start with
				after each answered question (default 60 sec)</li> <li>30 coins: Increment (by +1x) the time factor to be multiplied with the amount of time left
				on each question to be added on to the time for the next question (default 0x)</li> <li>50 coins and 25 gems (high score points): Save all of the current powerups in a checkpoint
				so next game you start with those powerups already equipped
				<br> <small><i>Design Note: It might seem weird that you have to give up high score points for this.
						The reason why it is required to give up gems is to prevent people who have reached very
						high levels from just buying a power up, clicking checkpoint, counting down, restarting,
						and doing the same thing over an over again since if they start with the same number of
						initial points determined by their very great high score, they will always have enough
						money to keep going. In contrast, the way this is currently implemented, after a certain
						amount of checkpoints, they will run out of gems and thus not start with enough coins to
						pay for a checkpoint, so they will have to work their way up to getting that high score
						again. However, if you can buy them, checkpoints are worth it, since they help you reach
						higher levels much more easily and make up for the cost. Bankruptcy is another feature
						intended to mitigate abuse and encourage wise spending, and it not only works with
						bankruptcy but also recovery, making it a good additional failsafe.</i></small></li></ul></div> <div class="s4 svelte-f65lgz"><h3 id="recover">Recovery</h3> <ul><li>For 5 gems or high score points, you can recover, which means that you will start the next
				game with the same powerups (including, unlike checkpoints, the same coin multiplier) and
				the same number of coins as you ended with when you died at level one in the last game</li> <li>This feature is only available if you did not go bankrupt, and it only saves once you drop
				back to level one, so don&#39;t try any hacks</li> <li>To remove the annoying part of watching the timer count down and waiting to lose every level
				if you just want to stop playing yet save your recovery data, there is an &quot;I&#39;m Done&quot; button
				that simply disables all buttons and counts down the levels very quickly, and, assuming you
				did not go bankrupt in that process, stores all recovery information after you willingly die
				at level one</li> <li>The &quot;I&#39;m Done&quot; button is the best way to end a game in the middle, instead of just
				refreshing the page, since refreshing triggers bankruptcy to stop people from abusing game
				features)</li> <li>Note that there is the major risk that if you are going to go bankrupt and you still click
				the &quot;I&#39;m Done&quot; button, you will not have the chance to answer more questions to boost
				yourself up out of bankruptcy or to pay the fee to keep you checkpoints</li></ul> <small><i>A common question is why would you recover when there are checkpoints, or vice versa.
				However, each has its pros and cons, and as a strategic player it is up to you to decide.
				Remember, recovery costs 5 gems, while a checkpoint costs 25 gems along with 50 coins.
				However, a checkpoint can be saved at any time during a game, and assuming you do not go
				bankrupt, the powerups saved in a checkpoint can help you in every game just by pressing the
				normal &quot;start&quot; or &quot;restart&quot; button without any additional fee. Moreover, if you have 5 gems,
				you can save your checkpoint from being dissolved by bankruptcy. However, coins are not
				saved in checkpoints (which can sometimes be a good thing if your high score gives you more
				coins), nor are multipliers (which is almost certainly a negative). Meanwhile, with
				recovery, you can only save what you had right before you lost, but you can save coins and
				multipliers too (you <i>have</i> to start with the same number of coins as you ended with when
				you use recovery though, so it can be a bad thing if you bought a lot and did not end with much).
				Recovery only lasts once (i.e. you have to pay every time you want to recover from the last round),
				and bankruptcy is always fatal, but it is much cheaper. So, based on the context, the choice
				is yours. Note that you have to actively save a checkpoint, but can use it for free, while recovery
				data is saved automatically, but you have to pay each time to use it. They accomplish similar
				goals, but in most other ways, they are opposites.</i></small></div></div> <div class="d svelte-f65lgz" data-svelte-h="svelte-1n6bvz6"><h2 id="contribute">How to contribute</h2> <p>Feel free to play around with/contribute to this project if you wish, although if you publish a
		fork, please give full credit including writing, conspicuously, my name, my Github profile, and
		the location of my original version, including a hyperlink to the repository, in the README.md
		file and somewhere obvious on the website.</p> <ul><li>Make sure you have <a href="https://nodejs.org/en/" target="_blank" class="svelte-f65lgz">⧉ node</a> and npm</li> <li>Clone the repo <a href="https://github.com/ps-coding/math-practice" target="_blank" class="svelte-f65lgz">⧉ here</a></li> <li>Run <code>npm install</code> to get the dependencies</li> <li>Execute <code>npm run dev</code> in the terminal</li> <li>Open your browser to the localhost address displayed</li> <li>Edit the files in the <code>src/</code> directory, commit, and submit a request to incorporate
			your changes</li></ul> <i><small>Some stylistic inspiration (mainly just regarding the &quot;automatic enter&quot; aspect of the text
			field input) was taken from <a href="https://mathtrainer.ai" target="_blank" class="svelte-f65lgz">⧉ Math Trainer: Mental Math Competition</a>, but no code was copied, and all of the powerup features, leveling features, coin systems,
			bankruptcy, the algorithm for generating questions, etc. are mine alone as far as I am aware.</small> <br> <br>
		The current state of the project is solely based on my ideas, and I am the only developer, but I
		welcome ideas and contributions. There are many math apps and games, but I hope this offers a unique
		combination of variability, strategy, and challenging computation. If you like this website, please
		share it and experiment with different ways to use this in friendly competitions. Enjoy!</i></div> <footer class="bottom svelte-f65lgz" data-svelte-h="svelte-1ql5itp"><a href="/about" class="svelte-f65lgz">About</a> ·
	<small><i>Copyright © 2023 Prasham Shah. All rights reserved.</i></small>
	·
	<a href="https://shahprasham.com" target="_blank" class="svelte-f65lgz">⧉ Portfolio</a> </footer>`;
});
export {
  Page as default
};
