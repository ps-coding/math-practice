

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.f83b1fb1.js","_app/immutable/chunks/scheduler.8b5db029.js","_app/immutable/chunks/index.d2bfde14.js"];
export const stylesheets = [];
export const fonts = [];
