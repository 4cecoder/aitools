<!--src/lib/Home.svelte-->
<script>
    import { onMount } from 'svelte';
    import SearchBar from '../lib/SearchBar.svelte';
    import ItemCard from '../lib/ItemCard.svelte';
    import CategoryFilters from "../lib/CategoryFilters.svelte";
    import searchQuery from '../lib/SearchBar.svelte';
    import  {showSearchBar}  from "../stores.js";


    let items = [];
    let currentPage = 1;
    let itemsPerPage = 48;
    let hashtags = [];
    let directLink = "";

    let filteredItems = [];
    let selectedCategories = {};

    function search(event) {
        const query = event.detail.toLowerCase();

        filteredItems = items.filter(item => {
            const categoryMatch = Object.entries(selectedCategories).every(
                ([category, isSelected]) =>
                    !isSelected || item.tags.toLowerCase().includes(category)
            );

            const titleMatch = item.title.toLowerCase().includes(query);
            const descriptionMatch = item.description.toLowerCase().includes(query);
            const tagMatch = item.tags.toLowerCase().includes(query);

            return (titleMatch || descriptionMatch || tagMatch) && categoryMatch;
        });
    }

    onMount(async () => {
        const response = await fetch('/data.json');
        const jsonData = await response.json();

        items = jsonData.map((item) => {
            return {
                title: item.name,
                link: item.direct_Link,
                tags: item.hashtags,
                description: item.description,
                price: item.pricing_model,
                image: '', // Add image property in your JSON data if available
            };
        });
        filteredItems = items;
    });

    function nextPage() {
        currentPage += 1;
    }

    function previousPage() {
        currentPage -= 1;
    }

    function updateFilters(event) {
        selectedCategories = event.detail;
        search({ detail: searchQuery });
    }
</script>

<style>
    .home-container {
        margin: 0 auto;
        margin-top: 100px;
        max-width: 1200px;
        padding: 0 20px;
        color: black;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;
    }

    .pagination {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }

    .pagination button {
        padding: 5px;
        margin: 0 5px;
        cursor: pointer;
    }
    .page-intro {
        margin-top: 80px;
        margin-bottom: 20px;
    }
</style>

<!--<h1 class="page-intro">-->
<!--    Ai Toolbox Search Engine-->
<!--</h1>-->

{#if $showSearchBar}
    <SearchBar on:search="{search}" />
{/if}
<br />
<div class="home-container">
<CategoryFilters on:updateFilters="{updateFilters}" />
<div class="grid">
    {#each filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) as item}
        <ItemCard
                previewImage={item.image}
                directLink={item.link}
                title={item.title}
                description={item.description}
                tags={item.tags}
        />

    {/each}
</div>

<div class="pagination">
    {#if currentPage > 1}
        <button on:click={previousPage}>Previous</button>
    {/if}
    {#if currentPage * itemsPerPage < items.length}
        <button on:click={nextPage}>Next</button>
    {/if}
</div>
</div>