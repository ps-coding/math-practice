import { g as getContext, c as create_ssr_component, b as subscribe, e as escape } from "../../chunks/ssr.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h1>${escape($page.status)}: ${escape($page.error?.message)}</h1> <p data-svelte-h="svelte-1ug8tq1">It looks like something went wrong. If possible, you will automatically be redirected to the home
	page. Otherwise, you can click <a href="/">here</a> to go to the home page.</p>`;
});
export {
  Error$1 as default
};
