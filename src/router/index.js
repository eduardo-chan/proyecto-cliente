import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
    {
    //ruta base
    path: '/',
    redirect: '/inicio'
},
//rutas aspociadas a los compomentes
{
    path: '/',
    component: {
        render(c) {
            //renderizar
            return c('router-view');
        },
    },
    //los componentes que se renderizan en router view
    children: [
        {
            path: '/inicio',
            name: 'inicio',
            component: () => import('../components/inicio1/Inicio.vue')
        },
        {
            path: '/main',
            name: 'main',
            component: () => import('../components/inicio2/Main.vue')
        },
        {
            path: '/tercero',
            name: 'tercero',
            component: () => import('../components/Tercero.vue')
        },
        {
            path: '/rentatuespacio',
            name: 'rentatuespacio',
            component: () => import('../components/inicio1/RentaTuEspacio.vue')
        },
        {
            path: '/informacionespacio',
            name: 'informacionespacio',
            component: () => import('../components/inicio1/InformacionEspacio.vue')
        },
        {
            path: '/ofertarespacio',
            name: 'ofertarespacio',
            component: () => import('../components/inicio1/OfertarEspacio.vue')
        },
        {
            path: '/rentarespacio',
            name: 'rentarespacio',
            component: () => import('../components/inicio2/RentarEspacio.vue')
        },
        {
            path: '/catalogoespacios',
            name: 'catalogoespacios',
            component: () => import('../components/inicio2/CatalogoEspacios.vue')
        },
        {
            path: '/detallesespacio',
            name: 'detallesespacio',
            component: () => import('../components/inicio2/DetallesEspacio.vue')
        },
        {
            path: '/form',
            name: 'form',
            component: () => import('../components/Form.vue')
        },

    ]
}
]

const router = new VueRouter ({routes, })
export default router;

