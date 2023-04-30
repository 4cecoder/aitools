<!-- src/lib/Glossary.svelte -->
<script>
    import terms from "../terms.json";
    let searchQuery = "";
    let filteredTerms;

    function filterTerms() {
        filteredTerms = terms.filter(term => {
            return term.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                term.name.toLowerCase().includes(searchQuery.toLowerCase());
        });
    }

    // Filter the terms when the component is created.
    $: filterTerms();
    $: searchQuery, filterTerms();
</script>

<style>
    .search-container {
        display: flex;
        justify-content: center;
        margin-top: 100px;
        margin-bottom: 1rem;
    }

    .search-input {
        width: 50%;
        background-color: #4251BE28;
        padding: 0.5rem;
        font-size: 1rem;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    .term {
        margin-bottom: 2rem;
    }

    .term-name {
        font-size: 1.25rem;
        font-weight: bold;
    }

    .term-title {
        font-size: 1rem;
        font-weight: normal;
        color: #ccc2c2;
        margin-bottom: 0.5rem;
    }

    .term-definition {
        font-size: 1rem;
        color: #eac8c8;
        line-height: 1.5;
    }
</style>

<div class="search-container">
    <input
            type="text"
            class="search-input"
            placeholder="Search for a term..."
            bind:value="{searchQuery}"
    />
</div>

<div>
    {#each filteredTerms as term}
        <div class="term">
            <div class="term-name">{term.name}</div>
            <div class="term-title">({term.title}):</div>
            <div class="term-definition">{term.definition}</div>
        </div>
    {/each}
</div>
