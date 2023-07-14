<script lang="ts">
    import Router from 'svelte-spa-router';
    import HomePage from "./lib/HomePage.svelte";

    const routes = {
        '/': HomePage
    };

</script>

<Router {routes}/>
