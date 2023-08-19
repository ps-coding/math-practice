

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.0d6ffee0.js","_app/immutable/chunks/scheduler.8b5db029.js","_app/immutable/chunks/index.e9fac723.js","_app/immutable/chunks/singletons.df6d3226.js"];
export const stylesheets = ["_app/immutable/assets/2.258333eb.css"];
export const fonts = [];
