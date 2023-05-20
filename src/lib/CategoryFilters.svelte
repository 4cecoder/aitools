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
        background-color: #352e44;
        border-radius: 10px;
        overflow: hidden;
        transition: max-height 0.5s ease;
        margin-bottom: 10px;
        margin-right: 20px;
    }

    .filters-container.collapsed {
        max-height: 60px;
        margin-bottom: 10px;
    }

    .filters {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        padding: 8px;
        gap: 10px;
    }

    .filter-item {
        display: flex;
        align-items: center;
        background-color: #664d70;
        border-radius: 20px;
        padding: 8px 12px;
        max-width: 200px;
        color: #fff;
        font-size: 14px;
    }

    .filter-item input {
        margin-right: 8px;
    }

    .toggle-button {
        position: absolute;
        background-color: #352e44;
        color: #fff;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        border-radius: 20px;
        padding: 8px 16px;
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
