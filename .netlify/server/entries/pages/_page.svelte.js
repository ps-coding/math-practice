import { c as create_ssr_component, d as add_attribute, e as escape, f as null_to_empty } from "../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--accent:rgb(50, 50, 200)}main.svelte-1cri2ik.svelte-1cri2ik{display:flex;flex-direction:column;align-items:center;justify-content:center}.top.svelte-1cri2ik.svelte-1cri2ik{display:flex;width:100%;justify-content:space-around;align-items:center;align-content:center}.outerTitle.svelte-1cri2ik.svelte-1cri2ik{font-size:1em}.title.svelte-1cri2ik.svelte-1cri2ik{text-align:center;font-family:'Courier New', Courier, monospace;font-size:2.75em;margin-block:10px;text-decoration:none;color:black}.title.svelte-1cri2ik.svelte-1cri2ik:hover{font-weight:bold;color:var(--accent)}.highScore.svelte-1cri2ik.svelte-1cri2ik{font-size:2em;margin-block:10px;transition:all 500ms ease-in-out;padding:10px}.problem.svelte-1cri2ik.svelte-1cri2ik{font-size:2em;display:flex;justify-content:center;transition:all 500ms ease-in-out}.firstNum.svelte-1cri2ik.svelte-1cri2ik{margin-right:5px}.secondNum.svelte-1cri2ik.svelte-1cri2ik{margin-left:5px}.operation.svelte-1cri2ik.svelte-1cri2ik{color:var(--accent)}.r-index.svelte-1cri2ik.svelte-1cri2ik{font-size:15px;align-self:flex-start}.r-radicand.svelte-1cri2ik.svelte-1cri2ik{text-decoration:overline;text-decoration-color:var(--accent)}.exponent.svelte-1cri2ik.svelte-1cri2ik{align-self:flex-start;font-size:0.5em}.unselectable.svelte-1cri2ik.svelte-1cri2ik{-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none}.answer.svelte-1cri2ik.svelte-1cri2ik{text-align:center;width:100%;font-size:1.5em;border:none;outline:none;transition:all 500ms cubic-bezier(0.445, 0.05, 0.55, 0.95)}.answer.svelte-1cri2ik.svelte-1cri2ik::-webkit-outer-spin-button,.answer.svelte-1cri2ik.svelte-1cri2ik::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.answer.svelte-1cri2ik.svelte-1cri2ik{-moz-appearance:textfield;appearance:textfield}.level.svelte-1cri2ik.svelte-1cri2ik{margin-top:10px;font-size:1.5em}.time.svelte-1cri2ik.svelte-1cri2ik{font-size:1.5em}.button.svelte-1cri2ik.svelte-1cri2ik{padding:10px;border:none;border-radius:10px;transition:all 250ms ease-in-out}.button.svelte-1cri2ik.svelte-1cri2ik:hover{border-radius:20px;cursor:pointer}.reset.svelte-1cri2ik.svelte-1cri2ik{background-color:lightcoral;color:lightgoldenrodyellow;font-size:1.5em}.reset.svelte-1cri2ik.svelte-1cri2ik:hover{background-color:red;color:white}.coins.svelte-1cri2ik.svelte-1cri2ik{background-color:yellow;color:black;width:17ch}.coins.svelte-1cri2ik.svelte-1cri2ik:hover{background-color:darkgoldenrod;color:white}.coins.svelte-1cri2ik:hover span.svelte-1cri2ik{display:none}.coins.svelte-1cri2ik.svelte-1cri2ik:hover:before{content:'2 coins for 3 sec'}.coins[disabled].svelte-1cri2ik.svelte-1cri2ik,.coins[disabled].svelte-1cri2ik.svelte-1cri2ik:hover,.coins.svelte-1cri2ik.svelte-1cri2ik:disabled,.coins.svelte-1cri2ik.svelte-1cri2ik:disabled:hover{background-color:lightgray;color:black;border-radius:0}.coins[disabled].svelte-1cri2ik.svelte-1cri2ik:hover:before,.coins.svelte-1cri2ik.svelte-1cri2ik:disabled:hover:before{content:'Not enough coins'}.coinsvg.svelte-1cri2ik.svelte-1cri2ik{width:1em;height:1em;margin-right:5px;fill:black}.bonusTime.svelte-1cri2ik.svelte-1cri2ik{background-color:lightskyblue;color:black;width:30ch}.bonusTime.svelte-1cri2ik.svelte-1cri2ik:hover{background-color:darkslateblue;color:white}.bonusTime.svelte-1cri2ik:hover span.svelte-1cri2ik{display:none}.bonusTime.svelte-1cri2ik.svelte-1cri2ik:hover:before{content:'$ Buy for 10 coins'}.increaseMax.svelte-1cri2ik.svelte-1cri2ik{background-color:lightcoral;color:black;width:30ch}.increaseMax.svelte-1cri2ik.svelte-1cri2ik:hover{background-color:darkorange;color:white}.increaseMax.svelte-1cri2ik:hover span.svelte-1cri2ik{display:none}.increaseMax.svelte-1cri2ik.svelte-1cri2ik:hover:before{content:'$ Buy for 20 coins'}.carryOver.svelte-1cri2ik.svelte-1cri2ik{background-color:lightskyblue;color:black;width:30ch}.carryOver.svelte-1cri2ik.svelte-1cri2ik:hover{background-color:darkslateblue;color:white}.carryOver.svelte-1cri2ik:hover span.svelte-1cri2ik{display:none}.carryOver.svelte-1cri2ik.svelte-1cri2ik:hover:before{content:'$ Buy for 30 coins'}.start.svelte-1cri2ik.svelte-1cri2ik{background-color:lightgreen;color:black;font-size:1.5em}.start.svelte-1cri2ik.svelte-1cri2ik:hover{background-color:green;color:white}.checkbox.svelte-1cri2ik.svelte-1cri2ik{display:flex;align-items:start;justify-content:center;margin-bottom:20px}.bottom.svelte-1cri2ik.svelte-1cri2ik{text-align:center;position:absolute;bottom:15px;left:0;right:0;margin-left:auto;margin-right:auto}.em.svelte-1cri2ik.svelte-1cri2ik{color:var(--accent)}@media screen and (max-width: 950px){.top.svelte-1cri2ik.svelte-1cri2ik{justify-content:center;flex-wrap:wrap}.coins.svelte-1cri2ik.svelte-1cri2ik{margin-left:10px}.bonusTime.svelte-1cri2ik.svelte-1cri2ik{margin-left:10px}.carryOver.svelte-1cri2ik.svelte-1cri2ik{margin-left:10px}.increaseMax.svelte-1cri2ik.svelte-1cri2ik{margin-left:10px}.title.svelte-1cri2ik.svelte-1cri2ik{flex-basis:100%}}@media screen and (max-height: 600px){.bottom.svelte-1cri2ik.svelte-1cri2ik{margin-top:40px;position:relative}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const yearTag = (/* @__PURE__ */ new Date()).getFullYear() <= 2023 ? "" : `-${(/* @__PURE__ */ new Date()).getFullYear()}`;
  let selectable = false;
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-184g3su_START -->${$$result.title = `<title>Math Practice - Arithmetic Trainer</title>`, ""}<meta name="description" content="Practice your math skills with this simple game. You can practice addition, subtraction, multiplication, division, exponentiation, and roots. The game tracks your high score locally, uses coins as an in-game currency to buy additional time on a problem, and dynamically increases the difficulty of problems at different paces for different types of questions."><meta name="keywords" content="math practice trainer addition sum subtraction difference multiplication product division quotient root roots exponents exponentiation dynamic difficulty coins currency high score"><!-- HEAD_svelte-184g3su_END -->`, ""} <header class="top svelte-1cri2ik"> <h1 class="outerTitle svelte-1cri2ik" data-svelte-h="svelte-1auowd9"><a class="title svelte-1cri2ik" href="javascript:location.reload()">Math Practice</a></h1> ${``}</header> <main class="svelte-1cri2ik">${``} ${`<span class="checkbox svelte-1cri2ik"><input type="checkbox" id="selectable"${add_attribute("checked", selectable, 1)}> <label for="selectable"><span class="em svelte-1cri2ik">Can${escape("not")}</span> select (and thus copy &amp; paste) the
				problem.<br>Select to make it harder to cheat by pasting the question into a calculator.</label></span> <button ${""} class="${escape(null_to_empty("button start"), true) + " svelte-1cri2ik"}">${escape("Start")}</button>`}</main> <footer class="bottom svelte-1cri2ik"><a href="/about" data-svelte-h="svelte-iphxk9">About</a> · Copyright © 2023${escape(yearTag)} Prasham Shah. All rights reserved.
</footer>`;
});
export {
  Page as default
};
