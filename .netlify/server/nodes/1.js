

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.5b0b823c.js","_app/immutable/chunks/scheduler.8b5db029.js","_app/immutable/chunks/index.e9fac723.js","_app/immutable/chunks/singletons.bac8fcb0.js"];
export const stylesheets = [];
export const fonts = [];
