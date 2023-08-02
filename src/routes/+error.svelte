<script>
	import { page } from '$app/stores';
	import { browser } from '$app/environment';

	browser &&
		page.subscribe((value) => {
			if (value.status === 404) {
				location.href = '/';
			}
		});
</script>

<h1>{$page.status}: {$page.error?.message}</h1>
<p>
	It looks like something went wrong. If possible, you will automatically be redirected to the home
	page. Otherwise, you can click <a href="/">here</a> to go to the home page.
</p>
