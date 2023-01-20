<script>
import { state } from './store.js';  
  
function getData(){
    fetch("https://middlewaredb.langellotti.repl.co/get_data")
      .then((response) => response.json())
      .then((json) => {
        console.log($state.piano)
        //TODO: aggiornare lo stato
      })
    setTimeout(getData, 1000);
  }; 
  getData()
</script>

<main>
  <br>
  <h1 class="text-center text-6xl font-bold" style="color: lightgreen;">
    Piano dell'ascensore:
  </h1>
  <br>

  <div class="grid grid-flow-col gap-5 text-center auto-cols-max justify-center">
    <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
      <span class="countdown font-mono text-8xl">
        <span style="--value:{$state.piano};"></span>
      </span>
    </div>
  </div>
  
  <div class="flex w-full">
    <div class="grid h-100 flex-grow card place-items-center">
      <img src="../img/ascensore.jpg" alt="ascensore" style="width: 30%;">
    </div>
    <div class="grid h-100 flex-grow card place-items-center">
      <div style="text-align: center;">
        <label class="swap text-8xl">
          {#if $state.direzione == 1}
            <div class="swap-on" style="background-color: green;">⤊</div>
          {:else}
            <div class="swap-off">⤊</div>
          {/if}
        </label>  
      </div>
      <br>
      <div style="text-align: center;">
        <label class="swap text-8xl">
          {#if $state.direzione == -1}
            <div class="swap-on" style="background-color: red;">⤋</div>
          {:else}
            <div class="swap-off">⤋</div>
          {/if}
        </label>
      </div>
    </div>
</main>
