<template>
  <div id="app">

    <header>
          
      <nav  class="navbar is-fixed-top has-shadow is-transparent" role="navigation" aria-label="main navigation">

        <div class="navbar-brand">
          <router-link to="/" class="navbar-item">
              <strong>TikTakFood</strong>
          </router-link>

          <a 
            role="button" 
            class="navbar-burger" 
            aria-label="menu" 
            aria-expanded="false" 
            data-target="navbar-menu"
            :class="{'is-active':showMobileMenu}"
            @click="showMobileMenu = !showMobileMenu"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>

        </div>

        <div :class="{'is-active':showMobileMenu}" id="navbar-menu" class="navbar-menu">
          
          <div class="navbar-end">
            
            <div class="navbar-item">
              
              <div class="buttons">
                
                <router-link to="log-in/" class="button is-warning">
                  
                  <span>Log in</span>
                  <span>
                    <font-awesome-icon :icon="['fas', 'right-to-bracket']" />
                    <!-- <font-awesome-icon icon="fa-solid fa-cart-shopping" /> -->
                  </span>
                </router-link>
                <router-link to="sign-up/" class="button is-light">
                  Sign In
                </router-link>  
              </div>
            </div>
          </div>
        </div>

      </nav>

      <div class="hero block is-medium is-danger pt-2">
        <div class="hero-body">
          <p class="title">
            Hero title
          </p>
          <p class="subtitle">
            Hero subtitle
          </p>
        </div>

      </div>
    </header>

  </div>

</template>

<script>

  import axios from 'axios'

  export default{
    name:'App',
    data(){
      return {
        showMobileMenu:false
      }
    }
  }

</script>


<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
