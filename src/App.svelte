<!--src/App.svelte-->
<script lang="ts">
import TopBar from "./lib/TopBar.svelte";
import {Router, Route} from "svelte-routing";
import Home from "./routes/Home.svelte";
import Glossary from "./lib/Glossary.svelte";
import Login from "./lib/Login.svelte";
</script>

<main>
    <TopBar />
    <Router>
        <Route path="/" component="{Home}" />
        <Route path="/home" component="{Home}" />
        <Route path="/login" componet="{Login}" />
<!--        <Route path="/ai" component="{AI}" />-->
<!--        <Route path="/news" component="{News}" />-->
<!--        <Route path="/learn" component="{Learn}" />-->
        <Route path="/glossary" component="{Glossary}" />
<!--        <Route path="/submit" component="{Submit}" />-->
    </Router>

</main>
