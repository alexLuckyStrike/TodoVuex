<template>

<div class="Form">

  <form @submit.prevent="onSubmit" class="Form__form" action="">

    <label class="Form__formText">
      <input
          type="text"
          placeholder="Write Down The Task"
          v-model = "form.task"
      >
    </label>

    <label class="Form__formSubmit">
      <input type="submit" value="Записать">
    </label>

  </form>

</div>

</template>

<script>

export default {

 data(){
  return{
   form:{
     task:''

   }
  }
 },

  methods:{
   onSubmit(){
    this.$store.state.wishList.unshift(this.form.task)
     console.log(this.$store.state.wishList)
     this.$store.state.problemsCount++
     this.form.task = ''
     this.$router.push('/main')
   }

  }

}

</script>


<style scoped>


.Form__form{
  width: 40%;
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  margin: 50px auto;
}

.Form__formText{
  min-height: inherit;
  width: 70%;
}

.Form__formText input{
  display: block;
  min-height: inherit;
  box-shadow: 0 0 3px 1px black;
  width: 100%;
  outline: none;
  padding-left: 10px;
}


.Form__formSubmit{
  min-height: inherit;
  width: 20%;
}

.Form__formSubmit input{
  display: block;
  width: 100%;
  min-height: inherit;
  box-shadow: 0 0 3px 1px black;
  outline: none;
  cursor: pointer;
}

</style>