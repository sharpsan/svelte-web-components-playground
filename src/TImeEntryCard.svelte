<svelte:options customElement="time-entry-card" />

<script>
  //   import "base.js";

  export let date = "";
  export let username = "";
  export let hours = "";
  export let description;
</script>

<div>
  <div class="d-flex justify-content-between text-secondary">
    <div>
      {date} - {username}
    </div>
    <div>{hours} Hours</div>
  </div>

  <div class="bg-light py-3 px-2">
    {description ?? "No description"}
  </div>

  <hr />
</div>

<style>
  @import "node_modules/bootstrap/dist/css/bootstrap.min.css";
</style>
