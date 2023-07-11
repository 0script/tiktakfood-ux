<template>
  <div id="app">
    <nav
      id="navbar-sticky"
      class="navbar is-fixed-top has-shadow is-transparent"
      :class="{'sticky':stickyNavbar}"
      role="navigation"
      aria-label="main navigation"
    >

      <div class="navbar-start">
        <font-awesome-icon 
          :icon="['fas', 'bars']" 
          class=" button navbar-item side-menu-btn"
          @click="sideMenu = true"
        />
      </div>

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
              <router-link to="/log-in" class="button is-warning">
                <span>
                  <font-awesome-icon :icon="['fas', 'right-to-bracket']" />
                  <!-- <font-awesome-icon icon="fa-solid fa-cart-shopping" /> -->
                </span>
                <span>  Log in</span>
              </router-link>
              <router-link to="sign-up" class="button is-light">
                Sign Up
              </router-link>  
            </div>
          </div>
        </div>
      </div>

          <aside 
            id="section-nav" 
            class="menu section has-background-grey-lighter p-3" 
            :class="{'visible':sideMenu}"
          >

            <p class="menu-label mb-3">
              TikTakFood
            </p>
            
            <ul>
                <font-awesome-icon 
                  :icon="['fas', 'xmark']" 
                  class="button is-danger mb-4"
                  @click="sideMenu = false" 
                />
            </ul>

            <ul class="menu-list mb-5 ">
              <li><a class="button m-1">Add Restaurant</a></li>
              <li><a class="button m-1">Add Business</a></li>
              <li><a class="button m-1">Register To deliver</a></li>
            </ul>

            <ul class="menu-list mt-5">
              <li><router-link to="log-in" class="button is-warning is-one-quarter m-1">Login</router-link></li>
              <li><router-link to="sign-up" class="button is-primary is-one-quarter m-1">Sign Up</router-link></li>
            </ul>

          </aside>

    </nav>
    <router-view/>

  </div>
  
</template>

<script >

  import axios from 'axios'
  import ref, { onMounted } from 'vue'


  export default{
    name:'App',
    data(){
      return {
        showMobileMenu:false,
        stickyNavbar:false,
        sideMenu:false
      }
    },
    methods: {
      handleNavbar() {
        this.stickyNavbar = window.scrollY==0 ? false : true 
      }
    },

    created(){
      window.addEventListener("scroll", this.handleNavbar);
    }
  }

</script>


<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  nav {

    display: block;
    padding: 20px;
    transition: width 2s;
    margin-bottom: 1rem;
    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }

  }

  #navbar-sticky.sticky{
    padding:10px;
    box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.3)

  }

  aside#section-nav{
    position: fixed;
    z-index: 10;
    height: 100%;
    width: 40%;
    top: 0;
    left: 0;
    overflow-x: hidden;
    transition: 0.6s;
    display: none;
  }

  aside#section-nav.visible{
    display: block;
    box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.3)
  }

  @media only screen and (max-width: 600px) {

    aside#section-nav{
      width: 90%;
    }
  } 

</style>
