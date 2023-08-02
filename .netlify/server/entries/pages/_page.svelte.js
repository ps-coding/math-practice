import { c as create_ssr_component, e as escape, d as add_attribute, f as null_to_empty } from "../../chunks/ssr.js";
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
  code: "main.svelte-1qokqrh.svelte-1qokqrh{display:flex;flex-direction:column;align-items:center;justify-content:center}.top.svelte-1qokqrh.svelte-1qokqrh{display:flex;width:100%;justify-content:space-around;align-items:center}h1.svelte-1qokqrh.svelte-1qokqrh{font-size:1em}.title.svelte-1qokqrh.svelte-1qokqrh{text-align:center;font-family:'Courier New', Courier, monospace;font-size:2.75em;margin-block:10px;text-decoration:none;color:black}.title.svelte-1qokqrh.svelte-1qokqrh:hover{font-weight:bold;color:rgb(100, 100, 255)}.highScore.svelte-1qokqrh.svelte-1qokqrh{font-size:2em;margin-block:10px;transition:all 500ms ease-in-out;padding:10px}.problem.svelte-1qokqrh.svelte-1qokqrh{font-size:2em;display:flex;justify-content:center;transition:all 500ms ease-in-out}.firstNum.svelte-1qokqrh.svelte-1qokqrh{margin-right:5px}.secondNum.svelte-1qokqrh.svelte-1qokqrh{margin-left:5px}.operation.svelte-1qokqrh.svelte-1qokqrh{color:rgb(100, 100, 255)}.r-index.svelte-1qokqrh.svelte-1qokqrh{font-size:15px;align-self:flex-start}.r-radicand.svelte-1qokqrh.svelte-1qokqrh{text-decoration:overline;text-decoration-color:rgb(100, 100, 255)}.exponent.svelte-1qokqrh.svelte-1qokqrh{align-self:flex-start;font-size:0.5em}.unselectable.svelte-1qokqrh.svelte-1qokqrh{-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none}.answer.svelte-1qokqrh.svelte-1qokqrh{text-align:center;width:100%;font-size:1.5em;border:none;outline:none;transition:all 500ms cubic-bezier(0.445, 0.05, 0.55, 0.95)}.answer.svelte-1qokqrh.svelte-1qokqrh::-webkit-outer-spin-button,.answer.svelte-1qokqrh.svelte-1qokqrh::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.answer.svelte-1qokqrh.svelte-1qokqrh{-moz-appearance:textfield;appearance:textfield}.level.svelte-1qokqrh.svelte-1qokqrh{margin-top:10px;font-size:1.5em}.time.svelte-1qokqrh.svelte-1qokqrh{font-size:1.5em}.button.svelte-1qokqrh.svelte-1qokqrh{padding:10px;border:none;border-radius:10px;transition:all 250ms ease-in-out}.button.svelte-1qokqrh.svelte-1qokqrh:hover{border-radius:20px;cursor:pointer}.reset.svelte-1qokqrh.svelte-1qokqrh{background-color:lightcoral;color:lightgoldenrodyellow;font-size:1.5em}.reset.svelte-1qokqrh.svelte-1qokqrh:hover{background-color:red;color:white}.coins.svelte-1qokqrh.svelte-1qokqrh{background-color:yellow;color:black;width:17ch}.coins.svelte-1qokqrh.svelte-1qokqrh:hover{background-color:darkgoldenrod;color:white}.coins.svelte-1qokqrh:hover span.svelte-1qokqrh{display:none}.coins.svelte-1qokqrh.svelte-1qokqrh:hover:before{content:'2 coins for 3 sec'}.coins[disabled].svelte-1qokqrh.svelte-1qokqrh,.coins[disabled].svelte-1qokqrh.svelte-1qokqrh:hover,.coins.svelte-1qokqrh.svelte-1qokqrh:disabled,.coins.svelte-1qokqrh.svelte-1qokqrh:disabled:hover{background-color:lightgray;color:black;border-radius:0}.coins[disabled].svelte-1qokqrh.svelte-1qokqrh:hover:before,.coins.svelte-1qokqrh.svelte-1qokqrh:disabled:hover:before{content:'Not enough coins'}.start.svelte-1qokqrh.svelte-1qokqrh{background-color:lightgreen;color:black;font-size:1.5em}.start.svelte-1qokqrh.svelte-1qokqrh:hover{background-color:green;color:white}.checkbox.svelte-1qokqrh.svelte-1qokqrh{display:flex;align-items:start;justify-content:center;margin-bottom:20px}.bottom.svelte-1qokqrh.svelte-1qokqrh{text-align:center;position:absolute;bottom:15px;left:0;right:0;margin-left:auto;margin-right:auto}.em.svelte-1qokqrh.svelte-1qokqrh{color:rgb(100, 100, 255)}@media screen and (max-width: 550px){.top.svelte-1qokqrh.svelte-1qokqrh{flex-wrap:wrap}.title.svelte-1qokqrh.svelte-1qokqrh{flex-basis:100%}}@media screen and (max-height: 600px){.bottom.svelte-1qokqrh.svelte-1qokqrh{margin-top:40px;position:relative}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let problem;
  let correct = -2;
  let highScore = parseInt("0");
  let userInput = "";
  let secondsLeft = 10;
  let inputEl;
  let highScoreEl;
  let coins = highScore * 2;
  let interval = setInterval(
    () => {
      secondsLeft--;
      if (secondsLeft == 0) {
        secondsLeft = 10;
        correct--;
        coins--;
        userInput = "";
        if (correct < 0) {
          clearInterval(interval);
        }
      }
    },
    1e3
  );
  const yearTag = (/* @__PURE__ */ new Date()).getFullYear() <= 2023 ? "" : `-${(/* @__PURE__ */ new Date()).getFullYear()}`;
  let selectable = false;
  $$result.css.add(css);
  problem = getProblem(correct + 1);
  return `${$$result.head += `<!-- HEAD_svelte-184g3su_START -->${$$result.title = `<title>Math Practice - Arithmetic Trainer</title>`, ""}<meta name="description" content="Practice your math skills with this simple game. You can practice addition, subtraction, multiplication, division, exponentiation, and roots. The game tracks your high score locally, uses coins as an in-game currency to buy additional time on a problem, and dynamically increases the difficulty of problems at different paces for different types of questions."><meta name="keywords" content="math practice trainer addition sum subtraction difference multiplication product division quotient root roots exponents exponentiation dynamic difficulty coins currency high score"><!-- HEAD_svelte-184g3su_END -->`, ""} <header class="top svelte-1qokqrh"> <h1 class="svelte-1qokqrh" data-svelte-h="svelte-jjgg0j"><a class="title svelte-1qokqrh" href="javascript:location.reload()">Math Practice</a></h1> ${correct >= 0 && coins > 0 ? `<button class="button coins svelte-1qokqrh" ${coins < 2 ? "disabled" : ""}><span class="svelte-1qokqrh">Coins: ${escape(coins)}</span></button>` : ``}</header> <main class="svelte-1qokqrh">${highScore > 0 ? `<span class="highScore svelte-1qokqrh"${add_attribute("this", highScoreEl, 0)}>High Score: <span class="em svelte-1qokqrh">${escape(highScore + 1)}</span></span>` : ``} ${correct >= 0 ? `<b class="${escape(null_to_empty("problem unselectable"), true) + " svelte-1qokqrh"}">${problem.operation != "√" || problem.firstNum != 2 ? `<span class="${escape(
    null_to_empty(problem.operation == "√" ? "r-index" : problem.operation != "^" ? "firstNum" : ""),
    true
  ) + " svelte-1qokqrh"}">${escape(problem.firstNum)}</span>` : ``} ${problem.operation != "^" ? `<span class="operation svelte-1qokqrh">${escape(problem.operation)}</span> <span class="${escape(null_to_empty(problem.operation == "√" ? "r-radicand" : "secondNum"), true) + " svelte-1qokqrh"}">${escape(problem.secondNum)}</span>` : `<sup class="exponent em svelte-1qokqrh">${escape(problem.secondNum)}</sup>`}
			 =</b>  <input class="answer svelte-1qokqrh" type="number" placeholder="Answer" autofocus${add_attribute("value", userInput, 0)}${add_attribute("this", inputEl, 0)}> <span class="level svelte-1qokqrh">Level: <span class="em svelte-1qokqrh">${escape(correct + 1)}</span></span> <span class="time svelte-1qokqrh">Answer in <span class="em svelte-1qokqrh">${escape(secondsLeft)}</span>
			second${escape(secondsLeft == 1 ? "" : "s")}</span>` : `<span class="checkbox svelte-1qokqrh"><input type="checkbox" id="selectable"${add_attribute("checked", selectable, 1)}> <label for="selectable"><span class="em svelte-1qokqrh">Can${escape("not")}</span> select (and thus copy &amp; paste) the
				problem.<br>Select to make it harder to cheat by pasting the question into a calculator.</label></span> <button ${correct >= 0 ? "hidden" : ""} class="${escape(null_to_empty("button " + (correct == -1 ? "reset" : "start")), true) + " svelte-1qokqrh"}">${escape(correct == -1 ? "Restart" : "Start")}</button>`}</main> <footer class="bottom svelte-1qokqrh">Copyright © 2023${escape(yearTag)} Prasham Shah. All rights reserved.
</footer>`;
});
export {
  Page as default
};
