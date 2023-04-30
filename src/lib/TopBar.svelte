<!--src/lib/TopBar.svelte-->

<style>
  .top-bar {
    position: fixed;
    width: 100%;
    left:0;
    top: 0;

    padding: 10px 20px;
    /* this is the magic for the top bar*/
    background-color: #21014B54;
    background-image: linear-gradient(315deg, #6daddb 0%, #21014B54 74%);    box-shadow: 0 2px 4px rgba(71, 42, 122, 0.1);
  }

  .logo {
    font-size: 32px;
    font-weight: bold;
    text-decoration: none;
    color: #7efc4d;
    /*background-image: linear-gradient(45deg, #7efc4d 0%, #3db777 100%);*/
    text-shadow: 2px 2px 4px #000000;
    transition: color 0.3s ease;
    border-radius: 30px;
    padding: 8px 15px;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .nav-link {
    font-size: 16px;
    text-decoration: none;
    color: white;
    transition: color 0.3s ease;
  }

  .nav-link:hover {
    color: #007bff;
  }
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #7efc4d);
  }

</style>

<div class="top-bar">
  <a class="logo" href="/">Logo</a>
  <nav class="nav-links">
    <a class="nav-link" href="/home">Home</a>
    <a class="nav-link" href="/ai">AI</a>
    <a class="nav-link" href="/news">News</a>
    <a class="nav-link" href="/learn">Learn</a>
    <a class="nav-link" href="/glossary">Glossary</a>
    <a class="nav-link" href="/submit">Submit</a>
  </nav>
</div>
