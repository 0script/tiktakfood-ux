<template>    
  
  <div>
    <section class="section is-centered">
      <h1 class="title">Create An Account</h1>
      <h2 class="subtitle">
        Register a user account on the site.
      </h2>
      <vue-tel-input :value="phone" @input="onInput"></vue-tel-input>
      <button @click="clicking()">Clicking </button>
    </section>

    <div class="columns is-multiline">
      <base-input
        v-model="name"
        name="first name"
        type="text"
        placeholder="Enter first name"
        icon="fa-solid fa-user"
        :has-error="error"
      >
      </base-input>
      <base-input
        v-model="surname"
        name="last name"
        type="text"
        placeholder="Enter first name"
        icon="fa-solid fa-user"
        :has-error="error"
      >
      </base-input>
    </div>

    <div class="columns is-multiline">
      
      <check-box-input
        
      ></check-box-input>

      <div class="column">
        <div class="field">
          <label class="label">Birthday</label>
          <div class="control has-icons-left has-icons-right">
            <input id="birthday"  class="input" type="date" placeholder="Enter Email">
            <span class="icon is-small is-left">
<font-awesome-icon :icon="['fas', 'calendar-day']" />
            </span>
          </div>
          <p class="help is-danger"></p>
        </div>
      </div>
    
    
    </div>
  </div>

</template>

<script>
import BaseInput from '../components/formInputs/BaseInput.vue';
import CheckBoxInput from '../components/formInputs/CheckBoxInput.vue';

export default {
  components: { BaseInput },
  name: "LoginView",
  data() {
    return {
      name:'',
      surname:'',
      phone: "+79991234567",
      errror:false
    };
  },
  methods: {
    clicking(){
      console.log(this.phone)
    },

    onInput(phone, phoneObject, input) {
      if (phoneObject?.formatted) {
        this.phone = phoneObject.formatted;
      }
    },
  },
};
</script>

<style scoped>
    section{
        margin-top: 100px;
    }

    @media only screen and (max-width: 1160px) {
        section{
            margin-top: 120px;
        }   
    }
  div.contain{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  *,*::before,*::after{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  /* input[type="radio"]{
    -webkit-appearance: none;
  } */

  label{
   margin-left: 5px;
   margin-right: 5px;
   border-radius: 10px;
   position: relative;
   transition: 0.5s;
  }


</style>