<script lang="ts">
    import Router from 'svelte-spa-router';
    import Scenario3D from "./lib/Scenario3D.svelte";
    import PlotWindow from "./lib/PlotWindow.svelte";

    const routes = {
        '/': Scenario3D,
        '/plots': PlotWindow
    };

</script>

<Router {routes}/>
