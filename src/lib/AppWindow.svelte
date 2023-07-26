<script lang="ts">
    import Navigation from "./Navigation.svelte";

    export let navOpen = false;

</script>

<div class="app-window-area">
    <Navigation open={navOpen}>
        <slot></slot>
    </Navigation>
</div>

<style>
    .app-window-area {
        height: 100%;
        width: 100%;
        overflow: hidden;
    }
</style>
