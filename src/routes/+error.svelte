<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		page.subscribe((value) => {
			if (value.status === 404) {
				location.href = '/';
			}
		});
	});
</script>

<h1>{$page.status}: {$page.error?.message}</h1>
<p>
	It looks like something went wrong. If possible, you will automatically be redirected to the home
	(game) page. If this does not occur within a couple of seconds, you can click <a href="/">here</a>
	to go to the home (game) page.
</p>
