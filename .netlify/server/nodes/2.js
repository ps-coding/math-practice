

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.bfda2e68.js","_app/immutable/chunks/scheduler.8b5db029.js","_app/immutable/chunks/index.d2bfde14.js"];
export const stylesheets = ["_app/immutable/assets/2.ae07dda2.css"];
export const fonts = [];
