<script>
    import { createEventDispatcher } from "svelte";
    import categories from "../categories.json";

    const dispatch = createEventDispatcher();
    let filters = {};
    let isExpanded = false;

    function updateFilters() {
        dispatch("updateFilters", filters);
    }

    function toggleFilters() {
        isExpanded = !isExpanded;
    }
</script>

<style>
    .filters-container {
        position: relative;
        /*background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);*/
        /*border-radius: 10px;*/
        overflow: hidden;
        transition: max-height 0.5s ease;
        margin-bottom: 10px;
    }

    .filters-container.collapsed {
        max-height: 60px;
        margin-bottom: 10px;
    }

    .filters {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        grid-gap: 10px;
        padding: 8px;
    }

    .filter-item {
        display: flex;
        background-color: #171D6499;
        margin-top: 4px;
        border-radius: 30px;
        padding: 10px;
        max-width: 185px;
        align-items: center;
        gap: 5px;
    }

    .toggle-button {
        position: absolute;
        background-color: darkslateblue;

        top: -5px;
        right: 10px;
        border-radius: 20px;
        padding: 10px;
        cursor: pointer;
    }
</style>

<div class="filters-container" class:collapsed="{!isExpanded}">
    <div class="filters">
        {#each categories as category}
            <label class="filter-item">
                <input
                        type="checkbox"
                        bind:checked="{filters[category.name]}"
                        on:change="{updateFilters}"
                />
                {category.title}
            </label>
        {/each}
    </div>
    <span class="toggle-button" on:click="{toggleFilters}">{isExpanded ? 'Hide' : 'Show'} filters</span>
</div>
