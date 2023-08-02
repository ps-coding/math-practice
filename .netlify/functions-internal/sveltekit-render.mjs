import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.8eeb3c21.js","app":"_app/immutable/entry/app.e490f5b8.js","imports":["_app/immutable/entry/start.8eeb3c21.js","_app/immutable/chunks/scheduler.8b5db029.js","_app/immutable/chunks/singletons.de87b841.js","_app/immutable/entry/app.e490f5b8.js","_app/immutable/chunks/scheduler.8b5db029.js","_app/immutable/chunks/index.d2bfde14.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
