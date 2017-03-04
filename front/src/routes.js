import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const router = new VueRouter({
       

	routes: [
       {
       	  path: "/login",
       	  component: require('./components/Authentication/login.vue'),
       	  meta: {
       	  	forVisitors: true
       	  }
       },
       {
       	  path: "/register",
       	  component: require('./components/Authentication/register.vue'),
       	  meta: {
       	  	forVisitors: true
       	  }
       },

       {
       	path: "/feed",
       	component: require('./components/Feed.vue'),
       	meta: {
       		forAuth: true
       	}
       },

       {
              path: "/products/create",
              component: require('./components/product/Create.vue'),
              meta: {
                     forAuth: true
              }
       }


	],

       linkActiveClass: 'active'

})


export default router