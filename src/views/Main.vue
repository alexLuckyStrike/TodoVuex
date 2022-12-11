<template>
<div class="Main">
  <h1 class="title">TaskList</h1>

  <button  @click="AskQuestion" class="Main-Question">AskQuestion</button>

   <div class="Main-problems">
     <h2>количество поставленных задач:{{$store.getters.problemsCount}}</h2>
   </div>

  <div class="Main-solved">
   <h2>Количество решенных задач:{{$store.getters.solvedProblems}}</h2>
  </div>

  <button  v-on:click="addTask" class="Main__insert">{{button}}</button>

  <ul class="Main__list">

    <MainItem
        v-for = "(item,index) in $store.getters.wishList"
        :key="index"
        v-bind:item = "item"
        v-bind:task="index"
    >

    </MainItem>

  </ul>

</div>

</template>

<script>


import MainItem from "../components/MainItem";


export default {

components:{MainItem},

data(){

  return{
    btnTitle:'Задача выполнена',
    button:'Добавить необходимые задачи'
  }
},

  methods:{

  addTask(){

    this.$router.push('./form')

  },

   AskQuestion(){

     this.$store.commit('popup')

   }

 }

}


</script>

<style scoped>

.Main{
  text-align: center;
}

.Main-Question{
  display: block;
  margin:auto;
}


.title{
  color: grey;
  margin-top: 20px;
}

.Main__list{
  display: block;
  margin:auto;
  width: 80%;
}


.Main__insert{
  display: block;
  min-height: 50px;
  outline: none;
  background-color: green;
  color:white;
  margin:20px auto;
  border:none;
  width: 30%;
  border-radius:5px;
  cursor:pointer;
}



.Main-problems,
.Main-solved{
  width: 30%;
  min-height: 50px;
  background-color: rgb(255,255,255);
  border-radius:5px;
  margin: 10px auto 0;
  line-height: 50px;
}

.Main-problems h2,
.Main-solved h2{
  background-color: rgb(255,255,255);
}

</style>