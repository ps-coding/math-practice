

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.e7623e5d.js","_app/immutable/chunks/scheduler.8b5db029.js","_app/immutable/chunks/index.e9fac723.js"];
export const stylesheets = [];
export const fonts = [];
