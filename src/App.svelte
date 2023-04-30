<!--src/App.svelte-->
<script lang="ts">
import TopBar from "./lib/TopBar.svelte";
import {Router, Route} from "svelte-routing";
import Home from "./routes/Home.svelte";
</script>

<main>
    <TopBar />
    <Router>
        <Route path="/" component="{Home}" />
        <Route path="/home" component="{Home}" />
<!--        <Route path="/ai" component="{AI}" />-->
<!--        <Route path="/news" component="{News}" />-->
<!--        <Route path="/learn" component="{Learn}" />-->
<!--        <Route path="/glossary" component="{Glossary}" />-->
<!--        <Route path="/submit" component="{Submit}" />-->
    </Router>

</main>
