import cadastro from './componentes/cadastro/cadastro.vue'
import home from './componentes/home/home.vue'

export const routes = [
    { path: '/', component: home, titulo: 'Home'},
    { path: '/cadastro', component: cadastro, titulo: 'Cadastro'}    
];

