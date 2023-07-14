<script lang="ts">
import Navigation from "./Navigation.svelte";
</script>
<div class="app-window-area">
    <Navigation/>
    <div class="app-window-content">
        <slot></slot>
    </div>
</div>

<style>
    .app-window-area {
        height: 100%;
        width: 100%;
        overflow: hidden;
    }

    .app-window-content {
        height: calc(100vh - 50px);
        width: 100%;
        margin-top: 50px;
        overflow: hidden;
    }

</style>
