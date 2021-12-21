
<template>

  <div class="corpo">

    <nav>
      <ul>       
          <li v-for="route in routes" :key="route">
            <router-link :to="route.path">{{ route.titulo }}</router-link>
          </li>
      
      </ul>
    </nav>
    <transition name="reload">
      <router-view></router-view>
    </transition>
  </div>
</template>


<script>
import { routes } from './routes'

export default {

  data(){
    return{
      routes
    }
  }  
    
}
</script>

<style>
  .corpo{
    font-family: Helvetica, sans-serif;
    width: 96%;
    margin: 0 auto;
  }


  .reload-fade-enter, .reload-leave-active{
    opacity: 0;
  }

  .reload-enter-active, .reload-leave-active{
    transition: opacity .4s;
  }

 
</style> 