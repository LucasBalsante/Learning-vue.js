
<template>

  <div>
    <h1 class="centralizado">{{ titulo }}</h1>

    <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="Digite o titulo procurado">
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="post of fotosComFiltro" :key="post"> 
        
        <meu-painel :titulo="post.titulo">
          <imagemresponsiva :url="post.url" :tirulo="post.titulo"></imagemresponsiva>
        </meu-painel>

        
      </li>
    </ul>

  </div>
</template>


<script>
import Painel from '../shared/painel/Painel.vue';
import imagemResponsiva from '../shared/imagem-responsiva/imagemResponsiva.vue'

export default {

  components:{
    'meu-painel' : Painel,
    'imagemresponsiva' :  imagemResponsiva
  },

    data(){

        return{

            titulo: 'foda',
            imagens: [],
            filtro: ''
        }
    },

    computed: {
      fotosComFiltro(){
        if(this.filtro){
          let exp = new RegExp(this.filtro.trim(), 'i');
          return this.imagens.filter(foto => exp.test(foto.titulo));
        }else{
          return this.imagens;
        }
        
      }

    },

    created(){
      this.$http.get('http://localhost:3000/v1/fotos')
        .then(res => res.json())
        .then(imagens => this.imagens = imagens, err => console.log(err));
    }
}
</script>

<style>

  .centralizado{
    text-align: center;
  }

  .lista-fotos{
    list-style: none;
  }

  .lista-fotos .lista-fotos-item{
    display: inline-block;
  }

  .imagem-responsiva {
    width: 100%;
  }

  .filtro{
    display: block;
    width: 20%;
        
  }
 
</style> 