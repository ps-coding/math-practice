import * as server from '../entries/pages/about/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/about/+page.server.js";
export const imports = ["_app/immutable/nodes/3.14839652.js","_app/immutable/chunks/scheduler.8b5db029.js","_app/immutable/chunks/index.e9fac723.js"];
export const stylesheets = ["_app/immutable/assets/3.e4b51c49.css"];
export const fonts = [];
