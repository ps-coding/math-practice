export const manifest = (() => {
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
		client: {"start":"_app/immutable/entry/start.8be23a9c.js","app":"_app/immutable/entry/app.c91d8373.js","imports":["_app/immutable/entry/start.8be23a9c.js","_app/immutable/chunks/scheduler.8b5db029.js","_app/immutable/chunks/singletons.df6d3226.js","_app/immutable/entry/app.c91d8373.js","_app/immutable/chunks/scheduler.8b5db029.js","_app/immutable/chunks/index.e9fac723.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
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
})();
