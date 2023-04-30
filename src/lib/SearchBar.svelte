<!-- src/lib/SearchBar.svelte -->
<script>
    import { createEventDispatcher } from 'svelte';
    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
    import { faSearch } from "@fortawesome/free-solid-svg-icons";

    const dispatch = createEventDispatcher();

    let searchQuery = '';

    function updateSearch() {
        dispatch('search', searchQuery);
    }
</script>

<style>
    .search-bar {
        display: flex;
        position: fixed;
        top: 125px;
        left: 36%;
        min-width: 400px;
        align-items: center;
        background-color: rgba(33, 53, 72, 0.2);
        background-image: linear-gradient(120deg, rgba(9, 23, 35, 0.8) 0%, #0F1515CC 100%);
        border-radius: 25px;
        /*add white outline*/
        box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.60);
        z-index: 2;
        padding: 10px;
    }

    .search-icon {
        color: #fff;
        margin-right: 8px;
    }

    .search-input {
        background: transparent;
        border: none;
        outline: none;
        color: #fff;
        font-size: 18px;
        width: 100%;
        padding: 15px;
    }

    .search-input::placeholder {
        color: #fff;
        font-size: 18px;
    /*     make it bold font*/
        font-weight: 600;
    }
</style>

<div class="search-bar">
    <FontAwesomeIcon icon="{faSearch}" class="search-icon" />
    <input class="search-input" type="text" placeholder="Search..." bind:value="{searchQuery}" on:input="{updateSearch}" />
</div>
