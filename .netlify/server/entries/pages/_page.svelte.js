import { c as create_ssr_component, d as add_attribute, e as escape, f as add_styles, h as null_to_empty } from "../../chunks/ssr.js";
function client_method(key) {
  {
    if (key === "before_navigate" || key === "after_navigate") {
      return () => {
      };
    } else {
      const name_lookup = {
        disable_scroll_handling: "disableScrollHandling",
        preload_data: "preloadData",
        preload_code: "preloadCode",
        invalidate_all: "invalidateAll"
      };
      return () => {
        throw new Error(`Cannot call ${name_lookup[key] ?? key}(...) on the server`);
      };
    }
  }
}
const beforeNavigate = /* @__PURE__ */ client_method("before_navigate");
function randomNumBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function getProblem(maxDifficulty) {
  const operations = ["+", "-", "*", "/", "^", "√"];
  const operation = operations[randomNumBetween(0, operations.length - 1)];
  let firstNum;
  let secondNum;
  let answer;
  if (operation == "+") {
    firstNum = randomNumBetween(1, 10 * maxDifficulty);
    secondNum = randomNumBetween(1, 10 * maxDifficulty);
    answer = firstNum + secondNum;
  } else if (operation == "-") {
    answer = randomNumBetween(1, 10 * maxDifficulty);
    secondNum = randomNumBetween(1, 10 * maxDifficulty);
    firstNum = answer + secondNum;
  } else if (operation == "*") {
    firstNum = randomNumBetween(1, 4 * maxDifficulty);
    secondNum = randomNumBetween(1, 4 * maxDifficulty);
    answer = firstNum * secondNum;
  } else if (operation == "/") {
    answer = randomNumBetween(1, 4 * maxDifficulty);
    secondNum = randomNumBetween(1, 4 * maxDifficulty);
    firstNum = answer * secondNum;
  } else if (operation == "^") {
    firstNum = randomNumBetween(1, 2 * Math.ceil(Math.log(maxDifficulty / 5)) + 3);
    secondNum = randomNumBetween(2, 2 * Math.ceil(Math.log(maxDifficulty / 5)) + 2);
    answer = Math.pow(firstNum, secondNum);
  } else {
    answer = randomNumBetween(1, 2 * Math.ceil(Math.log(maxDifficulty / 5)) + 3);
    firstNum = randomNumBetween(2, 2 * Math.ceil(Math.log(maxDifficulty / 5)) + 2);
    secondNum = Math.pow(answer, firstNum);
  }
  return { firstNum, secondNum, operation, answer };
}
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--accent:rgb(50, 50, 200)}main.svelte-1ofyqwg.svelte-1ofyqwg{display:flex;flex-direction:column;align-items:center;justify-content:center}.top.svelte-1ofyqwg.svelte-1ofyqwg{display:flex;width:100%;justify-content:space-around;align-items:center;align-content:center;flex-wrap:wrap}.outerTitle.svelte-1ofyqwg.svelte-1ofyqwg{font-size:1em}.title.svelte-1ofyqwg.svelte-1ofyqwg{text-align:center;font-family:'Courier New', Courier, monospace;font-size:2.75em;margin-block:10px;text-decoration:none;color:black}.title.svelte-1ofyqwg.svelte-1ofyqwg:hover{font-weight:bold;color:var(--accent)}.highScore.svelte-1ofyqwg.svelte-1ofyqwg{font-size:2em;margin-block:10px;transition:all 500ms ease-in-out;padding:10px}.problem.svelte-1ofyqwg.svelte-1ofyqwg{font-size:2em;display:flex;justify-content:center;transition:all 500ms ease-in-out}.firstNum.svelte-1ofyqwg.svelte-1ofyqwg{margin-right:5px}.secondNum.svelte-1ofyqwg.svelte-1ofyqwg{margin-left:5px}.operation.svelte-1ofyqwg.svelte-1ofyqwg{color:var(--accent)}.r-index.svelte-1ofyqwg.svelte-1ofyqwg{font-size:15px;align-self:flex-start}.r-radicand.svelte-1ofyqwg.svelte-1ofyqwg{text-decoration:overline;text-decoration-color:var(--accent)}.exponent.svelte-1ofyqwg.svelte-1ofyqwg{align-self:flex-start;font-size:0.5em}.unselectable.svelte-1ofyqwg.svelte-1ofyqwg{-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none}.answer.svelte-1ofyqwg.svelte-1ofyqwg{text-align:center;width:100%;font-size:1.5em;border:none;outline:none;transition:all 500ms cubic-bezier(0.445, 0.05, 0.55, 0.95)}.answer.svelte-1ofyqwg.svelte-1ofyqwg::-webkit-outer-spin-button,.answer.svelte-1ofyqwg.svelte-1ofyqwg::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.answer.svelte-1ofyqwg.svelte-1ofyqwg{-moz-appearance:textfield;appearance:textfield}.level.svelte-1ofyqwg.svelte-1ofyqwg{margin-top:10px;font-size:1.5em}.time.svelte-1ofyqwg.svelte-1ofyqwg{margin-bottom:20px;font-size:1.5em}.button.svelte-1ofyqwg.svelte-1ofyqwg{padding:10px;border:none;border-radius:10px;transition:all 250ms ease-in-out}.button.svelte-1ofyqwg.svelte-1ofyqwg:hover{border-radius:20px;cursor:pointer}.reset.svelte-1ofyqwg.svelte-1ofyqwg{background-color:lightcoral;color:lightgoldenrodyellow;font-size:1.5em}.reset.svelte-1ofyqwg.svelte-1ofyqwg:hover{background-color:red;color:white}.coins.svelte-1ofyqwg.svelte-1ofyqwg{background-color:yellow;color:black;width:17ch;margin-left:10px}.coins.svelte-1ofyqwg.svelte-1ofyqwg:hover{background-color:darkgoldenrod;color:white}.coins.svelte-1ofyqwg:hover span.svelte-1ofyqwg{display:none}.coins.svelte-1ofyqwg.svelte-1ofyqwg:hover:before{content:'2 coins for 3 sec'}.coins[disabled].svelte-1ofyqwg.svelte-1ofyqwg,.coins[disabled].svelte-1ofyqwg.svelte-1ofyqwg:hover,.coins.svelte-1ofyqwg.svelte-1ofyqwg:disabled,.coins.svelte-1ofyqwg.svelte-1ofyqwg:disabled:hover{background-color:lightgray;color:black;border-radius:0}.coins[disabled].svelte-1ofyqwg.svelte-1ofyqwg:hover:before,.coins.svelte-1ofyqwg.svelte-1ofyqwg:disabled:hover:before{content:'Not enough coins'}.coinsvg.svelte-1ofyqwg.svelte-1ofyqwg{width:1em;height:1em;margin-right:5px;fill:black}.bonusTime.svelte-1ofyqwg.svelte-1ofyqwg{background-color:lightskyblue;color:black;width:30ch;margin-left:10px}.bonusTime.svelte-1ofyqwg.svelte-1ofyqwg:hover{background-color:darkslateblue;color:white}.bonusTime.svelte-1ofyqwg:hover span.svelte-1ofyqwg{display:none}.bonusTime.svelte-1ofyqwg.svelte-1ofyqwg:hover:before{content:'$ Buy for 10 coins'}.increaseMax.svelte-1ofyqwg.svelte-1ofyqwg{background-color:lightcoral;color:black;width:30ch;margin-left:10px}.increaseMax.svelte-1ofyqwg.svelte-1ofyqwg:hover{background-color:darkorange;color:white}.increaseMax.svelte-1ofyqwg:hover span.svelte-1ofyqwg{display:none}.increaseMax.svelte-1ofyqwg.svelte-1ofyqwg:hover:before{content:'$ Buy for 20 coins'}.carryOver.svelte-1ofyqwg.svelte-1ofyqwg{background-color:lightskyblue;color:black;width:30ch;margin-left:10px}.carryOver.svelte-1ofyqwg.svelte-1ofyqwg:hover{background-color:darkslateblue;color:white}.carryOver.svelte-1ofyqwg:hover span.svelte-1ofyqwg{display:none}.carryOver.svelte-1ofyqwg.svelte-1ofyqwg:hover:before{content:'$ Buy for 30 coins'}.checkpoint.svelte-1ofyqwg.svelte-1ofyqwg{background-color:aquamarine;color:black;width:35ch}.checkpoint.svelte-1ofyqwg.svelte-1ofyqwg:hover{background-color:darkolivegreen;color:white}.checkpoint.svelte-1ofyqwg:hover span.svelte-1ofyqwg{display:none}.checkpoint.svelte-1ofyqwg.svelte-1ofyqwg:hover:before{content:'$ Buy for 25 gems + 50 coins'}.multiplier.svelte-1ofyqwg.svelte-1ofyqwg{background-color:gold;color:black;width:30ch}.multiplier.svelte-1ofyqwg.svelte-1ofyqwg:hover{background-color:darkred;color:white}.multiplier.svelte-1ofyqwg:hover span.svelte-1ofyqwg{display:none}.multiplier.svelte-1ofyqwg.svelte-1ofyqwg:hover:before{content:'$ Buy for 10 coins [no checkpoint]'}.done.svelte-1ofyqwg.svelte-1ofyqwg{background-color:lightsalmon;color:black;width:30ch}.done.svelte-1ofyqwg.svelte-1ofyqwg:hover{background-color:coral;color:whitesmoke}.danger.svelte-1ofyqwg.svelte-1ofyqwg{color:red;margin-left:10px}.saveme.svelte-1ofyqwg.svelte-1ofyqwg{background-color:lightslategray;color:black;width:35ch}.saveme.svelte-1ofyqwg.svelte-1ofyqwg:hover{background-color:brown;color:white}.start.svelte-1ofyqwg.svelte-1ofyqwg{background-color:lightgreen;color:black;font-size:1.5em}.start.svelte-1ofyqwg.svelte-1ofyqwg:hover{background-color:green;color:white}.recover.svelte-1ofyqwg.svelte-1ofyqwg{background-color:lightblue;color:black;font-size:1.5em}.recover.svelte-1ofyqwg.svelte-1ofyqwg:hover{background-color:var(--accent);color:white}.checkbox.svelte-1ofyqwg.svelte-1ofyqwg{display:flex;align-items:start;justify-content:center;margin-bottom:20px}.bottom.svelte-1ofyqwg.svelte-1ofyqwg{margin-top:40px;text-align:center}.em.svelte-1ofyqwg.svelte-1ofyqwg{color:var(--accent)}.break.svelte-1ofyqwg.svelte-1ofyqwg{border:0;clear:both;display:block;width:96%;background-color:darkgray;height:1px}.options.svelte-1ofyqwg.svelte-1ofyqwg{text-align:center}.launch.svelte-1ofyqwg.svelte-1ofyqwg{margin-top:5px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let problem;
  let correct = -2;
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
    userInput = "";
    inputEl.disabled = true;
    inputColor = "black";
    inputBackgroundColor = "transparent";
    inputBorderRadius = "0";
    highScoreColor = "black";
    highScoreBackgroundColor = "transparent";
    highScoreBorderRadius = "0";
    showBar = false;
    secondsLeft = 0;
    while (correct > -1 && coins >= -1) {
      correct--;
      coins--;
    }
    if (correct <= -1 || coins < -1) {
      localStorage.setItem("started", "false");
      showBar = true;
      let bankrupt = false;
      if (coins < -1) {
        bankrupt = true;
        carryOver = 0;
        bonusTime = 0;
        maxTime = 60;
        localStorage.setItem("carryOver", "0");
        localStorage.setItem("bonusTime", "0");
        localStorage.setItem("maxTime", "60");
        if (highScore >= 1) {
          highScore -= 1;
          localStorage.setItem("highScore", highScore.toString());
        }
        correct = -1;
      }
      if (!bankrupt) {
        canRecover = true;
        localStorage.setItem("canRecover", "true");
        recoveryData.recoveryCoins = coins;
        recoveryData.recoveryCarryOver = carryOver;
        recoveryData.recoveryBonusTime = bonusTime;
        recoveryData.recoveryMaxTime = maxTime;
        recoveryData.recoveryMultiplier = multiplier;
        localStorage.setItem("recoveryCoins", coins.toString());
        localStorage.setItem("recoveryCarryOver", carryOver.toString());
        localStorage.setItem("recoveryBonusTime", bonusTime.toString());
        localStorage.setItem("recoveryMaxTime", maxTime.toString());
        localStorage.setItem("recoveryMultiplier", multiplier.toString());
      } else {
        canRecover = false;
        localStorage.setItem("canRecover", "false");
      }
      carryOver = parseInt(localStorage.getItem("carryOver") || "0");
      bonusTime = parseInt(localStorage.getItem("bonusTime") || "0");
      maxTime = parseInt(localStorage.getItem("maxTime") || "60");
      multiplier = 1;
      highScore = parseInt(localStorage.getItem("highScore") || "0");
      coins = highScore * 2;
      clearInterval(interval);
    }
  });
  let multiplier = 1;
  let userInput = "";
  let secondsLeft = 10;
  let inputEl;
  let inputColor = "black";
  let inputBackgroundColor = "transparent";
  let inputBorderRadius = "0";
  let highScoreColor = "black";
  let highScoreBackgroundColor = "transparent";
  let highScoreBorderRadius = "0";
  let interval = -1;
  const yearTag = (/* @__PURE__ */ new Date()).getFullYear() <= 2023 ? "" : `-${(/* @__PURE__ */ new Date()).getFullYear()}`;
  let selectable = false;
  let showBar = true;
  $$result.css.add(css);
  problem = getProblem(correct + 1);
  return `${$$result.head += `<!-- HEAD_svelte-1ibek9d_START -->${$$result.title = `<title>Math Practice - Arithmetic Trainer</title>`, ""}<meta name="description" content="Practice your math skills with this simple game. You can practice addition, subtraction, multiplication, division, exponentiation, and roots. The game tracks your high score locally, uses coins as an in-game currency to buy additional time on a problem, has various cool and strategic powerups, and dynamically increases the difficulty of problems at different paces for different types of questions."><meta name="keywords" content="math practice trainer game powerups addition sum subtraction difference multiplication product division quotient root roots exponents exponentiation dynamic difficulty coins currency high score"><!-- HEAD_svelte-1ibek9d_END -->`, ""} <header class="top svelte-1ofyqwg"> <h1 class="outerTitle svelte-1ofyqwg"><a class="title svelte-1ofyqwg"${add_attribute(
    "href",
    correct >= 0 ? 'javascript:navigator.clipboard.writeText("https://math.shahprasham.com")' : "/",
    0
  )}>Math Practice</a> ${correct >= 0 ? `<br> <small data-svelte-h="svelte-10qvp5p">Above button copies the link 🔗</small>
			·
			<small data-svelte-h="svelte-yizet6">Do <i>not</i> try to refresh</small>` : ``}</h1> ${correct >= 0 && coins > 0 && showBar ? `<div><button class="button coins svelte-1ofyqwg" ${coins < 2 ? "disabled" : ""}><span class="svelte-1ofyqwg"><svg class="coinsvg svelte-1ofyqwg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2l0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5V176c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336V300.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4V304v5.7V336zm32 0V304 278.1c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5V272c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5V432c0 44.2-86 80-192 80S0 476.2 0 432V396.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z"></path></svg>
					Coins: ${escape(coins)}</span></button> ${coins >= 10 ? `<button class="button bonusTime svelte-1ofyqwg"><span class="svelte-1ofyqwg">⚡ Bonus Time (${escape(bonusTime != 0 ? bonusTime.toString() + " sec " : "")}to ${escape(bonusTime + 2)}
						sec)</span></button>` : ``} ${coins >= 30 ? `<button class="button carryOver svelte-1ofyqwg"><span class="svelte-1ofyqwg">⚡ Carry Over Time (${escape(carryOver != 0 ? carryOver.toString() + "x " : "")}to ${escape(carryOver + 1)}x)</span></button>` : ``} ${coins >= 20 ? `<button class="button increaseMax svelte-1ofyqwg"><span class="svelte-1ofyqwg">↑ Max Time (${escape(maxTime)} sec to ${escape(maxTime + 20)} sec)</span></button>` : ``}</div>` : ``} ${correct >= 0 && coins == -1 ? `<span class="danger svelte-1ofyqwg" data-svelte-h="svelte-1mg12hg">In Danger of Bankruptcy! (Reloading will also trigger this.)</span> ${highScore >= 5 && showBar ? `<button class="button saveme svelte-1ofyqwg" data-svelte-h="svelte-tokrbq">Keep Existing Checkpoint for 5💎</button>` : ``}` : ``}</header> <main class="svelte-1ofyqwg">${highScore > 0 ? `<span class="highScore svelte-1ofyqwg"${add_styles({
    "color": highScoreColor,
    "background-color": highScoreBackgroundColor,
    "border-radius": highScoreBorderRadius
  })}>High Score: <span class="em svelte-1ofyqwg">${escape(highScore)}</span>💎</span>` : ``} ${correct >= 0 ? `<b class="${escape(null_to_empty("problem unselectable"), true) + " svelte-1ofyqwg"}">${problem.operation != "√" || problem.firstNum != 2 ? `<span class="${escape(
    null_to_empty(problem.operation == "√" ? "r-index" : problem.operation != "^" ? "firstNum" : ""),
    true
  ) + " svelte-1ofyqwg"}">${escape(problem.firstNum)}</span>` : ``} ${problem.operation != "^" ? `<span class="operation svelte-1ofyqwg">${escape(problem.operation)}</span> <span class="${escape(null_to_empty(problem.operation == "√" ? "r-radicand" : "secondNum"), true) + " svelte-1ofyqwg"}">${escape(problem.secondNum)}</span>` : `<sup class="exponent em svelte-1ofyqwg">${escape(problem.secondNum)}</sup>`}
			 =</b>  <input class="answer svelte-1ofyqwg" type="number" placeholder="Answer" autofocus${add_styles({
    "color": inputColor,
    "background-color": inputBackgroundColor,
    "border-radius": inputBorderRadius
  })}${add_attribute("value", userInput, 0)}${add_attribute("this", inputEl, 0)}> <span class="level svelte-1ofyqwg">Level: <span class="em svelte-1ofyqwg">${escape(correct + 1)}</span></span> <span class="time svelte-1ofyqwg">Answer in <span class="em svelte-1ofyqwg">${escape(secondsLeft)}</span>
			second${escape(secondsLeft == 1 ? "" : "s")}</span> ${coins >= 50 && highScore >= 25 && showBar ? `<button class="button checkpoint svelte-1ofyqwg" data-svelte-h="svelte-2c8t4a"><span class="svelte-1ofyqwg">✓ Checkpoint: Save Powerups</span></button>` : ``} ${coins >= 10 && showBar ? `<button class="button multiplier svelte-1ofyqwg"><span class="svelte-1ofyqwg">× Coin Multiplier (${escape(multiplier != 1 ? multiplier.toString() + "x " : "")}to ${escape(multiplier + 1)}x)</span></button>` : ``} ${showBar ? `<button class="button done svelte-1ofyqwg" data-svelte-h="svelte-b2w83e">I&#39;m Done</button>` : ``}` : `<hr class="break svelte-1ofyqwg"> <div class="options svelte-1ofyqwg"><b data-svelte-h="svelte-f8p8jc">Options:</b> <span class="checkbox svelte-1ofyqwg"><input type="checkbox" id="selectable"${add_attribute("checked", selectable, 1)}> <label for="selectable"><span class="em svelte-1ofyqwg">Can${escape("not")}</span> select (and thus copy &amp; paste) the
					problem.
					<small data-svelte-h="svelte-8nqry1"><i>Select this option to make cheating by pasting the question into a calculator harder.</i></small></label></span></div> <hr class="break svelte-1ofyqwg"> <div><b data-svelte-h="svelte-1o6g7el">You are launching with (based on the last saved checkpoint):</b> <ul class="launch svelte-1ofyqwg"><li><span class="em svelte-1ofyqwg">${escape(carryOver ? carryOver.toString() + "x" : "No")}</span> Carry Over</li> <li><span class="em svelte-1ofyqwg">${escape(bonusTime ? bonusTime.toString() + " sec" : "No")}</span> Bonus Time</li> <li><span class="em svelte-1ofyqwg">${escape(maxTime)} sec</span> Max Time</li> <li><span class="em svelte-1ofyqwg">${escape(highScore ? highScore * 2 : "No")}</span> coins</li> <li data-svelte-h="svelte-ilogg7"><span class="em svelte-1ofyqwg">1x</span> Multiplier</li></ul></div> <button class="${escape(null_to_empty("button " + (correct == -1 ? "reset" : "start")), true) + " svelte-1ofyqwg"}">${escape(correct == -1 ? "Restart" : "Start")}</button> ${canRecover && highScore >= 5 ? `<hr class="break svelte-1ofyqwg"> <div><b data-svelte-h="svelte-457ke6">You could launch with (based on the automatically saved recovery):</b> <ul class="launch svelte-1ofyqwg"><li><span class="em svelte-1ofyqwg">${escape(recoveryData.recoveryCarryOver ? recoveryData.recoveryCarryOver.toString() + "x" : "No")}</span> Carry Over</li> <li><span class="em svelte-1ofyqwg">${escape(recoveryData.recoveryBonusTime ? recoveryData.recoveryBonusTime.toString() + " sec" : "No")}</span> Bonus Time</li> <li><span class="em svelte-1ofyqwg">${escape(recoveryData.recoveryMaxTime)} sec</span> Max Time</li> <li><span class="em svelte-1ofyqwg">${escape(recoveryData.recoveryCoins ? recoveryData.recoveryCoins + 1 : "No")}</span>
						coins</li> <li><span class="em svelte-1ofyqwg">${escape(recoveryData.recoveryMultiplier)}x</span> Multiplier</li></ul></div> <button class="button recover svelte-1ofyqwg" data-svelte-h="svelte-1n2fygg">Recover for 5💎</button>` : ``}`}</main> <footer class="bottom svelte-1ofyqwg"><a href="/about"${add_attribute("target", correct >= 0 ? "_blank" : "_self", 0)}>About</a> ·
	<small><i>Copyright © 2023${escape(yearTag)} Prasham Shah. All rights reserved.</i></small>
	·
	<a href="https://shahprasham.com" target="_blank" data-svelte-h="svelte-bggd98">⧉ Portfolio</a> </footer>`;
});
export {
  Page as default
};
