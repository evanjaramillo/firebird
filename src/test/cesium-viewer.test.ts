import { describe, expect, test } from "vitest";
import { render } from "@testing-library/svelte";
import CesiumViewer from "../lib/CesiumViewer.svelte";

describe( 'should instantiate and show cesium', () => {

    test( 'should render cesium and set base url', () => {

        render( CesiumViewer );
        expect( ( window as Window )[ "CESIUM_BASE_URL" ] ).toBe( "./cesium/" ); // make sure this is defined.

    } );

} );
