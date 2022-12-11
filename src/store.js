import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)


export default new Vuex.Store({

    state(){

        return{

            wishList:[],

            problemsCount:0,

            solvedProblems:0,

        }

    },
    mutations:{

        checkState(state,task){

            state.solvedProblems++

            state.problemsCount--

            state.wishList.splice(task,1)

        },



    },
    getters:{

        wishList(state){

           return  state.wishList

        },

        problemsCount(state){

            return state.problemsCount

        },

        solvedProblems(state){

            return state.solvedProblems

        }

    }
    // ,
    //
    // actions:{
    //
    //     popup(context){
    //         setTimeout(()=>{
    //
    //         },1000)
    //     }
    // }

})