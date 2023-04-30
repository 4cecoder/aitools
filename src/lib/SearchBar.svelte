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
        align-items: center;
        background-image: linear-gradient(120deg, #66a6ff 0%, #89f7fe 100%);
        border-radius: 25px;
        padding: 10px;
    }

    .search-icon {
        color: #fff;
        margin-right: 5px;
    }

    .search-input {
        background: transparent;
        border: none;
        outline: none;
        color: #fff;
        font-size: 16px;
        width: 100%;
    }

    .search-input::placeholder {
        color: #fff;
    }
</style>

<div class="search-bar">
    <FontAwesomeIcon icon="{faSearch}" class="search-icon" />
    <input class="search-input" type="text" placeholder="Search..." bind:value="{searchQuery}" on:input="{updateSearch}" />
</div>
