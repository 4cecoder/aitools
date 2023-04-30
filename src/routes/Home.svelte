<!--src/lib/Home.svelte-->
<script>
    import { onMount } from 'svelte';
    import SearchBar from '../lib/SearchBar.svelte';
    import ItemCard from '../lib/ItemCard.svelte';

    let items = [];
    let currentPage = 1;
    let itemsPerPage = 48;

    onMount(async () => {
        const response = await fetch('/data.csv');
        const csvText = await response.text();
        const lines = csvText.trim().split('\n');
        const headers = lines.shift().split(',');

        items = lines.map((line) => {
            const values = line.split(',');
            const item = {};
            headers.forEach((header, index) => {
                item[header] = values[index];
            });
            return item;
        });
    });

    function nextPage() {
        currentPage += 1;
    }

    function previousPage() {
        currentPage -= 1;
    }
</script>

<style>
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

<h1 class="page-intro">
    Ai Toolbox Search Engine
</h1>

<SearchBar />
<br />

<div class="grid">
    {#each items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) as item}
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
