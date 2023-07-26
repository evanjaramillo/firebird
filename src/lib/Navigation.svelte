<script lang="ts">
    import Drawer, { Header, Title, Subtitle, Content, AppContent } from '@smui/drawer';
    import Button, { Label } from '@smui/button';
    import List, { Item, Text, Separator, Subheader } from '@smui/list';
    import { replace, location } from "svelte-spa-router";

    export let showNavigation = false;
    let currentPage = $location;

</script>

<Drawer variant="modal" open={showNavigation}>
    <Header>
        <Title>Firebird</Title>
        <Subtitle>Mission Visualization</Subtitle>
    </Header>
    <Content>
        <List>
            <Separator/>
            <Subheader tag="h6">Views</Subheader>
            <Item on:click={() => replace( '/' )} activated={currentPage === '/'}>
                <Text>3D Scenario</Text>
            </Item>
            <Item on:click={() => replace( '/plots' )} activated={currentPage === '/plots'}>
                <Text>Plots</Text>
            </Item>
            <Separator/>
            <Subheader tag="h6">Configuration</Subheader>
            <Item>
                <Text>Input Channels</Text>
            </Item>
            <Item>
                <Text>Formats</Text>
            </Item>
            <Item>
                <Text>Display Message Format</Text>
            </Item>
        </List>
    </Content>
</Drawer>

<AppContent style="height: 100%; flex: auto; flex-grow: 1; overflow: auto;">
    <div class="nav-toggle-button">
        <Button on:click={() => ( showNavigation = ! showNavigation )}>
            <Label>Menu</Label>
        </Button>
    </div>
    <main class="main-content">
        <slot></slot>
    </main>
</AppContent>

<style>

    .nav-toggle-button {
        position: absolute;
        left: 5px;
        top: 5px;
        z-index: 1;
    }

    .main-content {
        overflow: auto;
        height: 100%;
        box-sizing: border-box;
    }

</style>
