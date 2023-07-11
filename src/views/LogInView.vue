<template>    
  <section class="section is-centered">
    <h1 class="title">Create An Account</h1>
    <h2 class="subtitle">
      Register a user account on the site.
    </h2>
    <vue-tel-input :value="phone" @input="onInput"></vue-tel-input>
    <button @click="clicking()">Clicking </button>
  </section>

</template>

<script>

export default {
  name: "LoginView",
  data() {
    return {
      phone: "+79991234567",
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

</style>