<svelte:options customElement="my-component" />

<script>
    export let myPrimativeVal;
    export let myComplexVal;

    let count = 0;

    function handleClick() {
        count += 1;
    }
</script>

<button on:click={handleClick}>
    Clicked {count}
    {count === 1 ? "time" : "times"}
</button>

<p>Passed-in primative val: {myPrimativeVal}</p>

<p>
    Passed-in complex val (programmatic construction only): {JSON.stringify(
        myComplexVal,
    )}
</p>

<p>global val: {myGlobalVal}</p>

<hr />
