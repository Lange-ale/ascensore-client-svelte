<script>
  let piano = 0;
  let direzione = 0; //-1 = scendere, 0 = fermo, 1 = salire;
</script>

<main>
  <h1 class="text-center text-4xl font-bold">
    Piano dell'ascensore:
  </h1>
  <div class="grid grid-flow-col gap-5 text-center auto-cols-max justify-center">
    <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
      <span class="countdown font-mono text-5xl">
        <span style="--value:{piano};"></span>
      </span>
    </div>
  </div>
</main>
