<script>
    export let previewImage = '';
    export let title = '';
    export let directLink = '';
    export let description = '';
    export let tags = '';
    export let price = '';

    let placeholderImage = '';
    if (!previewImage && title.length >= 2) {
        placeholderImage = `https://via.placeholder.com/150/4a4a4a/FFFFFF?text=${title.substring(0, 2).toUpperCase()}`;
    }
    let displayPrice = price ? price : 'Unknown';
</script>

<style>
    .card {
        position: relative;
        border-radius: 10px;
        padding: 20px;
        margin: 5px;
        min-width: 220px;
        max-width: 300px;
        max-height: 350px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        transition: transform 0.3s, box-shadow 0.3s;
    }

    .card:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    }

    .frame {
        width: 100%;
        height: 150px;
        border-radius: 10px;
        overflow: hidden;
        position: relative;
    }

    .frame::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: 0.2;
        z-index: 1;
    }

    .frame img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .title {
        font-size: 24px;
        font-weight: bold;
        color: #c9c9c9;
    }

    .description {
        font-size: 16px;
        color: #818181;
        margin-top: 10px;
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
        background-color: #30d78c;
        padding: 2px 8px;
        border-radius: 20px;
    }

    .price {
        background-color: #818181;
        color: white;
        font-size: 12px;
        font-weight: bold;
        width: 40px;
        height: 20px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 8px;
        right: 8px;
        transition: background-color 0.3s;
        margin-top: 8px;
        font-size: .75rem;
        overflow: hidden;
    }

    .card:hover .price {
        background-color: #4a4a4a;
    }
</style>

<div class="card">
    {#if previewImage}
        <div class="frame">
            <img class="preview-image" src="{previewImage}" alt="{title}" />
        </div>
    {/if}

    {#if placeholderImage}
        <div class="frame">
            <img class="placeholder-image" src="{placeholderImage}" alt="{title}" />
        </div>
    {/if}

    {#if price}
        <div class="price">{displayPrice}</div>
    {/if}

    {#if directLink}
        <a href="{directLink}">
            <div class="title">{title}</div>
        </a>
    {/if}

    <div class="description">{description}</div>

    {#if tags}
        <div class="tags">
            {#each tags.split(',') as tag (tag)}
                <div class="tag">{tag}</div>
            {/each}
        </div>
    {/if}
</div>
