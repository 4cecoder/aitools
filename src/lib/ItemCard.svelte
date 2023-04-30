<!-- src/lib/ItemCard.svelte -->
<script>
    export let previewImage = '';
    export let title = '';
    export let directLink= '';

    export let description = '';
    export let tags = '';
</script>

<style>
    .card {
        background-color: rgba(15,59,118,0.58);
        background-image: linear-gradient(120deg, #3C8885BF 0%, rgba(80, 37, 66, 0.75) 100%);
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        padding: 20px;
        margin: 5px;
        min-width: 220px;
        max-width: 300px;
        max-height: 350px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .preview-image {
        width: 100%;
        height: 150px;
        object-fit: cover;
        border-radius: 10px;
    }

    .title {
        font-size: 24px;
        font-weight: bold;
        color: #c9c9c9;
    }

    .description {
        font-size: 16px;
        color: #2c2020;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        max-height: 72px;
    }


    .tags {
        font-size: 14px;
        color: #333;
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
    }

    .tag {
        /*cool gradient*/
        background-color: #30d78c;
        padding: 2px 8px;
        border-radius: 20px;
    }
</style>

<div class="card">
    {#if previewImage}
        <a href="{directLink}"><img class="preview-image" src="{previewImage}" alt="{title}" /></a>
    {/if}
    <div class="title">{title}</div>
    <div class="description">{description}</div>
    <div class="tags">
        {#each tags.split(',') as tag (tag)}
            <div class="tag">{tag.trim()}</div>
        {/each}
    </div>
</div>
