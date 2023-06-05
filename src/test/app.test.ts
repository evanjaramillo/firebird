import { describe, test } from "vitest";
import { render } from "@testing-library/svelte";
import App from "../App.svelte";

describe( 'asserting that the testing framework is working', () => {

    test( 'should render the application component', () => {

        render( App );

    } );

} );

