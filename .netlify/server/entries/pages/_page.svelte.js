import { c as create_ssr_component, d as add_attribute, e as escape, f as null_to_empty } from "../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--accent:rgb(50, 50, 200)}main.svelte-1ofyqwg.svelte-1ofyqwg{display:flex;flex-direction:column;align-items:center;justify-content:center}.top.svelte-1ofyqwg.svelte-1ofyqwg{display:flex;width:100%;justify-content:space-around;align-items:center;align-content:center;flex-wrap:wrap}.outerTitle.svelte-1ofyqwg.svelte-1ofyqwg{font-size:1em}.title.svelte-1ofyqwg.svelte-1ofyqwg{text-align:center;font-family:'Courier New', Courier, monospace;font-size:2.75em;margin-block:10px;text-decoration:none;color:black}.title.svelte-1ofyqwg.svelte-1ofyqwg:hover{font-weight:bold;color:var(--accent)}.highScore.svelte-1ofyqwg.svelte-1ofyqwg{font-size:2em;margin-block:10px;transition:all 500ms ease-in-out;padding:10px}.problem.svelte-1ofyqwg.svelte-1ofyqwg{font-size:2em;display:flex;justify-content:center;transition:all 500ms ease-in-out}.firstNum.svelte-1ofyqwg.svelte-1ofyqwg{margin-right:5px}.secondNum.svelte-1ofyqwg.svelte-1ofyqwg{margin-left:5px}.operation.svelte-1ofyqwg.svelte-1ofyqwg{color:var(--accent)}.r-index.svelte-1ofyqwg.svelte-1ofyqwg{font-size:15px;align-self:flex-start}.r-radicand.svelte-1ofyqwg.svelte-1ofyqwg{text-decoration:overline;text-decoration-color:var(--accent)}.exponent.svelte-1ofyqwg.svelte-1ofyqwg{align-self:flex-start;font-size:0.5em}.unselectable.svelte-1ofyqwg.svelte-1ofyqwg{-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none}.answer.svelte-1ofyqwg.svelte-1ofyqwg{text-align:center;width:100%;font-size:1.5em;border:none;outline:none;transition:all 500ms cubic-bezier(0.445, 0.05, 0.55, 0.95)}.answer.svelte-1ofyqwg.svelte-1ofyqwg::-webkit-outer-spin-button,.answer.svelte-1ofyqwg.svelte-1ofyqwg::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.answer.svelte-1ofyqwg.svelte-1ofyqwg{-moz-appearance:textfield;appearance:textfield}.level.svelte-1ofyqwg.svelte-1ofyqwg{margin-top:10px;font-size:1.5em}.time.svelte-1ofyqwg.svelte-1ofyqwg{margin-bottom:20px;font-size:1.5em}.button.svelte-1ofyqwg.svelte-1ofyqwg{padding:10px;border:none;border-radius:10px;transition:all 250ms ease-in-out}.button.svelte-1ofyqwg.svelte-1ofyqwg:hover{border-radius:20px;cursor:pointer}.reset.svelte-1ofyqwg.svelte-1ofyqwg{background-color:lightcoral;color:lightgoldenrodyellow;font-size:1.5em}.reset.svelte-1ofyqwg.svelte-1ofyqwg:hover{background-color:red;color:white}.coins.svelte-1ofyqwg.svelte-1ofyqwg{background-color:yellow;color:black;width:17ch;margin-left:10px}.coins.svelte-1ofyqwg.svelte-1ofyqwg:hover{background-color:darkgoldenrod;color:white}.coins.svelte-1ofyqwg:hover span.svelte-1ofyqwg{display:none}.coins.svelte-1ofyqwg.svelte-1ofyqwg:hover:before{content:'2 coins for 3 sec'}.coins[disabled].svelte-1ofyqwg.svelte-1ofyqwg,.coins[disabled].svelte-1ofyqwg.svelte-1ofyqwg:hover,.coins.svelte-1ofyqwg.svelte-1ofyqwg:disabled,.coins.svelte-1ofyqwg.svelte-1ofyqwg:disabled:hover{background-color:lightgray;color:black;border-radius:0}.coins[disabled].svelte-1ofyqwg.svelte-1ofyqwg:hover:before,.coins.svelte-1ofyqwg.svelte-1ofyqwg:disabled:hover:before{content:'Not enough coins'}.coinsvg.svelte-1ofyqwg.svelte-1ofyqwg{width:1em;height:1em;margin-right:5px;fill:black}.bonusTime.svelte-1ofyqwg.svelte-1ofyqwg{background-color:lightskyblue;color:black;width:30ch;margin-left:10px}.bonusTime.svelte-1ofyqwg.svelte-1ofyqwg:hover{background-color:darkslateblue;color:white}.bonusTime.svelte-1ofyqwg:hover span.svelte-1ofyqwg{display:none}.bonusTime.svelte-1ofyqwg.svelte-1ofyqwg:hover:before{content:'$ Buy for 10 coins'}.increaseMax.svelte-1ofyqwg.svelte-1ofyqwg{background-color:lightcoral;color:black;width:30ch;margin-left:10px}.increaseMax.svelte-1ofyqwg.svelte-1ofyqwg:hover{background-color:darkorange;color:white}.increaseMax.svelte-1ofyqwg:hover span.svelte-1ofyqwg{display:none}.increaseMax.svelte-1ofyqwg.svelte-1ofyqwg:hover:before{content:'$ Buy for 20 coins'}.carryOver.svelte-1ofyqwg.svelte-1ofyqwg{background-color:lightskyblue;color:black;width:30ch;margin-left:10px}.carryOver.svelte-1ofyqwg.svelte-1ofyqwg:hover{background-color:darkslateblue;color:white}.carryOver.svelte-1ofyqwg:hover span.svelte-1ofyqwg{display:none}.carryOver.svelte-1ofyqwg.svelte-1ofyqwg:hover:before{content:'$ Buy for 30 coins'}.checkpoint.svelte-1ofyqwg.svelte-1ofyqwg{background-color:aquamarine;color:black;width:35ch}.checkpoint.svelte-1ofyqwg.svelte-1ofyqwg:hover{background-color:darkolivegreen;color:white}.checkpoint.svelte-1ofyqwg:hover span.svelte-1ofyqwg{display:none}.checkpoint.svelte-1ofyqwg.svelte-1ofyqwg:hover:before{content:'$ Buy for 25 gems + 50 coins'}.multiplier.svelte-1ofyqwg.svelte-1ofyqwg{background-color:gold;color:black;width:30ch}.multiplier.svelte-1ofyqwg.svelte-1ofyqwg:hover{background-color:darkred;color:white}.multiplier.svelte-1ofyqwg:hover span.svelte-1ofyqwg{display:none}.multiplier.svelte-1ofyqwg.svelte-1ofyqwg:hover:before{content:'$ Buy for 10 coins [no checkpoint]'}.done.svelte-1ofyqwg.svelte-1ofyqwg{background-color:lightsalmon;color:black;width:30ch}.done.svelte-1ofyqwg.svelte-1ofyqwg:hover{background-color:coral;color:whitesmoke}.danger.svelte-1ofyqwg.svelte-1ofyqwg{color:red;margin-left:10px}.saveme.svelte-1ofyqwg.svelte-1ofyqwg{background-color:lightslategray;color:black;width:35ch}.saveme.svelte-1ofyqwg.svelte-1ofyqwg:hover{background-color:brown;color:white}.start.svelte-1ofyqwg.svelte-1ofyqwg{background-color:lightgreen;color:black;font-size:1.5em}.start.svelte-1ofyqwg.svelte-1ofyqwg:hover{background-color:green;color:white}.recover.svelte-1ofyqwg.svelte-1ofyqwg{background-color:lightblue;color:black;font-size:1.5em}.recover.svelte-1ofyqwg.svelte-1ofyqwg:hover{background-color:var(--accent);color:white}.checkbox.svelte-1ofyqwg.svelte-1ofyqwg{display:flex;align-items:start;justify-content:center;margin-bottom:20px}.bottom.svelte-1ofyqwg.svelte-1ofyqwg{margin-top:40px;text-align:center}.em.svelte-1ofyqwg.svelte-1ofyqwg{color:var(--accent)}.break.svelte-1ofyqwg.svelte-1ofyqwg{border:0;clear:both;display:block;width:96%;background-color:darkgray;height:1px}.options.svelte-1ofyqwg.svelte-1ofyqwg{text-align:center}.launch.svelte-1ofyqwg.svelte-1ofyqwg{margin-top:5px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let maxTime = 60;
  const yearTag = (/* @__PURE__ */ new Date()).getFullYear() <= 2023 ? "" : `-${(/* @__PURE__ */ new Date()).getFullYear()}`;
  let selectable = false;
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1ibek9d_START -->${$$result.title = `<title>Math Practice - Arithmetic Trainer</title>`, ""}<meta name="description" content="Practice your math skills with this simple game. You can practice addition, subtraction, multiplication, division, exponentiation, and roots. The game tracks your high score locally, uses coins as an in-game currency to buy additional time on a problem, has various cool and strategic powerups, and dynamically increases the difficulty of problems at different paces for different types of questions."><meta name="keywords" content="math practice trainer game powerups addition sum subtraction difference multiplication product division quotient root roots exponents exponentiation dynamic difficulty coins currency high score"><!-- HEAD_svelte-1ibek9d_END -->`, ""} <header class="top svelte-1ofyqwg"> <h1 class="outerTitle svelte-1ofyqwg" data-svelte-h="svelte-1auowd9"><a class="title svelte-1ofyqwg" href="javascript:location.reload()">Math Practice</a></h1> ${``} ${``}</header> <main class="svelte-1ofyqwg">${``} ${`<hr class="break svelte-1ofyqwg"> <div class="options svelte-1ofyqwg"><b data-svelte-h="svelte-f8p8jc">Options:</b> <span class="checkbox svelte-1ofyqwg"><input type="checkbox" id="selectable"${add_attribute("checked", selectable, 1)}> <label for="selectable"><span class="em svelte-1ofyqwg">Can${escape("not")}</span> select (and thus copy &amp; paste) the
					problem.
					<small data-svelte-h="svelte-8nqry1"><i>Select this option to make cheating by pasting the question into a calculator harder.</i></small></label></span></div> <hr class="break svelte-1ofyqwg"> <div><b data-svelte-h="svelte-1o6g7el">You are launching with (based on the last saved checkpoint):</b> <ul class="launch svelte-1ofyqwg"><li><span class="em svelte-1ofyqwg">${escape("No")}</span> Carry Over</li> <li><span class="em svelte-1ofyqwg">${escape("No")}</span> Bonus Time</li> <li><span class="em svelte-1ofyqwg">${escape(maxTime)} sec</span> Max Time</li> <li><span class="em svelte-1ofyqwg">${escape("No")}</span> coins</li> <li data-svelte-h="svelte-ilogg7"><span class="em svelte-1ofyqwg">1x</span> Multiplier</li></ul></div> <button class="${escape(null_to_empty("button start"), true) + " svelte-1ofyqwg"}">${escape("Start")}</button> ${``}`}</main> <footer class="bottom svelte-1ofyqwg"><a href="/about" data-svelte-h="svelte-iphxk9">About</a> ·
	<small><i>Copyright © 2023${escape(yearTag)} Prasham Shah. All rights reserved.</i></small>
	·
	<a href="https://shahprasham.com" data-svelte-h="svelte-czvig1">⧉ Portfolio</a> </footer>`;
});
export {
  Page as default
};
