<script>
    import { createEventDispatcher } from "svelte";
    import categories from "../categories.json";

    const dispatch = createEventDispatcher();
    let filters = {};
    let isExpanded = false;
    let clickedCategory = new Map();

    function updateFilters() {
        dispatch("updateFilters", filters);
    }

    function toggleFilters() {
        isExpanded = !isExpanded;
    }

    function toggleCheckbox(category) {
        filters[category.name] = !filters[category.name];
        clickedCategory = category.name;
        updateFilters();
    }

    function getRandomCategory() {
        return categories[Math.floor(Math.random() * categories.length)];
    }

    let randomCategory = getRandomCategory();
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
        font-size: 14px;
        color: #fff;
        transition: background-color 0.3s;
    }

    .filter-item:hover {
        cursor: pointer;
        background-color: #4a4a4a;
    }

    .filter-item.clicked {
        background-color: gray;
    }

    .filter-item.unchecked {
        background-color: #664d70;
    }

    .toggle-button {
        display: block;
        text-align: center;
        background-color: #4a4a4a;
        color: #fff;
        font-size: 14px;
        padding: 8px 12px;
        cursor: pointer;
    }

    .toggle-button {
        display: flex;
        align-items: center;
        background-color: #664d70;
        border-radius: 20px;
        padding: 8px 12px;
        max-width: 200px;
        font-size: 14px;
        color: #fff;
        transition: background-color 0.3s;
    }

    .toggle-button:hover {
        background-color: #4a4a4a;
    }
</style>

<div class="filters-container" class:collapsed="{!isExpanded}">
    <div class="filters">
        <div class="toggle-button" on:click="{toggleFilters}">
            {isExpanded ? 'Hide filters' : 'Show filters'}
        </div>
        <label
                class="filter-item {clickedCategory === randomCategory.name ? 'clicked' : ''}"
                on:click="{() => toggleCheckbox(randomCategory)}"
        >
            <input
                    type="checkbox"
                    bind:checked="{filters[randomCategory.name]}"
                    style="display: none;"
            />
            <span>{randomCategory.title}</span>
        </label>
        {#each categories as category}
            {#if category.name !== randomCategory.name}
                <label
                        class="filter-item {clickedCategory === category.name ? 'clicked' : ''}"
                        on:click="{() => toggleCheckbox(category)}"
                >
                    <input
                            type="checkbox"
                            bind:checked="{filters[category.name]}"
                            style="display: none;"
                    />
                    <span>{category.title}</span>
                </label>
            {/if}
        {/each}
    </div>
</div>