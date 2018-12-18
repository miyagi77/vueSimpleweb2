import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        navList: [{
            name: '首页',
            path: '/'
        }, {
            name: '分类',
            path: '/classify'
        }, {
            name: '文档',
            path: '/dox'
        }, {
            name: '实例',
            path: '/livingExp'
        }]
    },
    mutations: {

    },
    actions: {

    }
})