<script>
    import { createEventDispatcher } from 'svelte';
    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
    import { faSearch } from "@fortawesome/free-solid-svg-icons";

    const dispatch = createEventDispatcher();

    let searchQuery = '';
    let isClicked = false;
    let isSearched = false;

    function updateSearch() {
        dispatch('search', searchQuery);
        hideFilters();
        isSearched = true;
    }

    function toggleClicked() {
        isClicked = !isClicked;
        if (isClicked) {
            hideFilters();
        } else {
            isSearched = false;
        }
    }

    function hideFilters() {
        const filtersContainer = document.querySelector('.filters-container');
        if (filtersContainer) {
            filtersContainer.style.display = 'none';
        }
    }

    function showFilters() {
        const filtersContainer = document.querySelector('.filters-container');
        if (filtersContainer) {
            filtersContainer.style.display = 'block';
        }
    }

    $: searchBarMargin = isSearched ? '10px' : '60px';


</script>


<style>
    body {
        transition: background-color 0.3s ease;
    }

    .search-bar {
        display: flex;
        position: fixed;
        top: 125px;
        left: 50%;
        transform: translateX(-50%);
        min-width: 400px;
        align-items: center;
        justify-content: center;
        background-color: rgba(33, 53, 72, 0.2);
        background-image: linear-gradient(120deg, rgba(9, 23, 35, 0.8) 0%, #0F1515CC 100%);
        border-radius: 25px;
        box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.60);
        z-index: 2;
        padding: 10px;
        transition: background-color 0.3s ease;
        margin-bottom: (searchBarMargin);
    }


    .search-bar.clicked {
        background-color: gray;
    }

    .search-bar.clicked:focus {
        background-color: lightgray;
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
        text-align: center;
    }

    .search-input::placeholder {
        color: #fff;
        font-size: 18px;
        font-weight: 600;
    }
</style>

<div class="search-bar" class:clicked="{isClicked}" on:click="{toggleClicked}">
    <FontAwesomeIcon icon="{faSearch}" class="search-icon" />
    <input class="search-input" type="text" placeholder="Search..." bind:value="{searchQuery}" on:input="{updateSearch}" />
</div>
