<template>
  <li class="Main__listItem">

    <span> Задача №:{{task}}</span>   <strong>{{item}}</strong>

    <button v-on:click="checkState">{{btn}}</button>

  </li>
</template>

<script>

export default {

  props:['item','task'],

  data(){

    return{

      btn:'Задача решена'

    }
  },

  methods:{

    checkState(){

      this.$store.commit('checkState')

    }
  }
}

</script>

<style scoped>
.Main__listItem {
  min-height: 50px;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  margin-top: 20px;
  line-height: 50px;
  display: flex;
  justify-content: space-evenly;
  }


.Main__listItem span {
  background-color: rgb(255,255,255);
}

.Main__listItem strong {
  background-color: rgb(255,255,255);
}

.Main__listItem button{
  display: block;
  outline: none;
  background-color: red;
  border-radius: 5px;
  cursor:pointer;
  height: 35px;
  margin-top: 7px;
}


</style>