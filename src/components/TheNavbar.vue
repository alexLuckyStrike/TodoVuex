<template>
  <div class="TheNavbar">
    <nav class = "navigation">
      <ul class = "navigation__menu">
        <li class = "navigation__menuItem">
          <router-link to = "/main">Главная страница</router-link>
        </li>
        <li class = "navigation__menuItemRef">
          <router-link to ="/form">Форма заполнения</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
name: "TheNavbar"
}
</script>


<style scoped>

.TheNavbar{
  min-height: 100px;
}

.navigation,
.navigation__menu,
.navigation__menuItem,
.navigation__menuItemRef{
  min-height: inherit;
}

.navigation__menuItemRef,
.navigation__menuItem{
  display: flex;
  justify-content:center;
  align-items: center;
}

.navigation__menu{
  display: flex;
  justify-content: space-evenly;
}



</style>