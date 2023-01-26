<script>
import { state } from './store.js';  
  
function getData(){
    fetch("https://middleware.marcoleporati.repl.co/get_data")
      .then((response) => response.json())
      .then((json) => {
        console.log($state.plan)
        $state.plan = json.plan;
        $state.direction = json.direction;
        if (json.stopped != $state.stopped){
          //set a one second timeout
          setTimeout(function(){
            //do what you need here
            $state.stopped = json.stopped;
          }, 400);
        }

      })
    setTimeout(getData, 25);
  }; 
  getData()
</script>

<main>
  <br>
  <h1 class="text-center text-6xl font-bold" style="color: red;">
    Stato dell'ascensore
  </h1>
  <br>

  <div class="grid grid-flow-col gap-5 text-center auto-cols-max justify-center">
    <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
      <span class="countdown font-mono text-6xl">
        <span style="--value:{$state.plan};"></span>
      </span>
    </div>
  </div>
  <br>
  <div class="flex w-full justify-center">
    <div class="grid h-100 flex-grow:3 card place-items-center">
      {#if $state.stopped}
        <div class="swap-on">
          <img src="../img/ascensore_aperto.jpg" alt="ascensore" style="width: 100%;">
        </div>
      {:else}  
        <div class="swap-on">
          <img src="../img/ascensore_chiuso.jpg" alt="ascensore" style="width: 100%;">
        </div>
      {/if}
      </div>
    <div class="grid h-100 flex-grow:1">
      <div style="text-align: center;" class="swap text-8xl">
        {#if $state.direction != -1}
          <div class="swap-off">⤊</div>
        {:else}
          <div class="swap-on">⤊</div>
        {/if}
      </div>
      <br>
      <div style="text-align: center;" class="swap text-8xl">
        {#if $state.direction != 1}
          <div class="swap-off">⤋</div>
        {:else}
          <div class="swap-on">⤋</div>
        {/if}
      </div>
    </div>
  </div>
</main>
