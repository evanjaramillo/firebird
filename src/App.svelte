<script lang="ts">
    import {onMount} from "svelte";
    import {Viewer} from "cesium";
    import '../node_modules/cesium/Build/Cesium/Widgets/widgets.css'

    (window as any).CESIUM_BASE_URL = "./cesium/"; // Point cesium to its assets

    let viewer: Viewer;

    onMount(async () => {
        viewer = new Viewer('cesiumContainer', {
            animation: false,
            baseLayerPicker: false,
            fullscreenButton: false,
            vrButton: false,
            geocoder: false,
            homeButton: false,
            sceneModePicker: false,
            timeline: false,
            navigationHelpButton: false,
            navigationInstructionsInitiallyVisible: false,
            scene3DOnly: true,
            shouldAnimate: true,
            creditContainer: 'cesiumCreditContainer'
        });
    });

</script>

<div id="cesiumContainer">
</div>
<div id="cesiumCreditContainer">
</div>

<style>
  #cesiumContainer {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      overflow: hidden;
  }

  #cesiumCreditContainer {
      visibility: hidden;
  }
</style>