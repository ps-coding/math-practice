

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.0f5e786f.js","_app/immutable/chunks/scheduler.8b5db029.js","_app/immutable/chunks/index.d2bfde14.js","_app/immutable/chunks/singletons.de87b841.js"];
export const stylesheets = [];
export const fonts = [];
