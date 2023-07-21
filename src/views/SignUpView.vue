<template>
    <section class="section is-centered">
      <h1 class="title">Create An Account</h1>
      <h2 class="subtitle">{{this.first_name}}
        Register a user account on the site.
      </h2>


      <form @submit.prevent="submitForm" class="container" >

        <div class="columns is-multilines">

          <base-input
            name="first name"
            v-model="this.first_name"
            type="text"
            icon="fa-solid fa-user"
            placeholder="Enter First Name"
            :hasError="this.errors.first_name"
          ></base-input>

          <base-input
            v-model="this.last_name"
            name="last name"
            type="text"
            icon="fa-solid fa-user"
            placeholder="Enter Last Name"
            :hasError="this.errors.last_name"
          ></base-input>

        </div>

        <div class="columns is-multilines">
          
          <base-input
            v-model="this.username"
            name="username"
            type="text"
            icon="fa-solid fa-user"
            placeholder="Enter Username"
            :hasError="this.errors.username"
          ></base-input>

          <base-input
            v-model="this.email"
            name="email"
            type="text"
            icon="fa-solid fa-user"
            placeholder="Enter Last Name"
            :hasError="this.errors.last_name"
          ></base-input>
        
        </div>



        <div class="columns is-multiline">


          <phone-input

            v-model="this.phone"
            name="phone"
            :hasError="this.errors.phone"
          ></phone-input>

          <base-input
            v-model="this.address"
            name="address"
            type="text"
            icon="fa-solid fa-location-dot"
            placeholder="Enter Address"
            :hasError="this.errors.address"
          ></base-input>

        </div>

        <div class="columns is-multiline">

          <check-box-input
            v-model="this.sexe"
            name="gender"
          >
          </check-box-input>

          <base-input
            v-model="this.birthday"
            name="birthday"
            type="date"
            icon="fa-solid fa-calendar-day"
            placeholder="Enter Birthday"
            :hasError="this.errors.birthday"
          ></base-input>


        </div>

        <div class="columns is-multiline">
          
          <base-input
            v-model="this.password"
            name="password"
            type="password"
            icon="fa-solid fa-lock"
            placeholder="Enter Password"
            :hasError="this.errors.password"
          ></base-input>
          
          <base-input
            v-model="this.password1"
            name="repeat password"
            type="password"
            icon="fa-solid fa-lock"
            placeholder="Reapeat Password"
            :hasError="this.errors.password1"
          ></base-input>


        </div>

        <div class="columns is-multiline">
          <div class="field column">
            <div class="control">
              <label class="checkbox">
                <input type="checkbox">
                I agree to the <a href="#">terms and conditions</a>
              </label>
            </div>
          </div>

        </div>

        <div class="columns is-multiline">
            <div class="column field is-grouped">
              <div class="control">
                <button class="button is-link">Submit</button>
              </div>
              <div class="control">
                <button class="button is-link is-light" @click="clicking()">Cancel</button>
              </div>
            </div>

        </div>


      </form>
        
    </section>

</template>

<script>

  import axios from 'axios'
  import {toast} from 'bulma-toast'
  import { useAttrs } from 'vue'
  import BaseInput from '../components/formInputs/BaseInput.vue'
  import PhoneInput from '../components/formInputs/PhoneInput.vue'
  import CheckBoxInput from '../components/formInputs/CheckBoxInput.vue'

  export default {
  components: { BaseInput ,PhoneInput,CheckBoxInput},
    name: 'SignUpView',
    data(){
      return{
        first_name:'',
        last_name:'',
        username:'',
        email:'',
        phone:'',
        address:'',
        sexe:'M',
        birthday:'',
        password:'',
        password1:'',
        errors:{
          first_name:false,
          last_name:false,
          username:false,
          email:false,
          address:false,
          phone:false,
          sexe:false,
          age:false,
          password:false,
          password1:false
        },
      }
    },
    methods:{
      onInput(phone,phoneObject,input){
        if(phoneObject?.formatted){
          this.phone=phoneObject.formatted
        }
      },
      submitForm(){
        
        for(var i in this.errors) this.errors[i] = false;

        if(this.first_name===''){
          console.log(this.first_name)
          this.errors.first_name=true
        }

        if(this.last_name===''){
          this.errors.last_name=true
        }

        if(this.username===''){
          this.errors.username=true
        }

        if(this.email===''){
          this.errors.email=true
        }

        if(this.phone===''){
          this.errors.phone=true
        }

        if(this.address===''){
          this.errors.address=true
        }

        if(this.birthday===''){
          this.errors.birthday=true
        }

        if(this.password===''){
          this.errors.password=true
        }

        if(this.password!==this.password1){
          this.errors.password1=true
        }

        console.log('form check errors')
        if(!this.errors.length){

          const formData={
            first_name:this.first_name,
            last_name:this.last_name,
            username:this.username,
            email:this.email,
            phone:this.phone,
            address:this.address,
            sexe:this.sexe,
            birthday:this.birthday,
            password:this.password            
          }

          console.log(formData)

          axios
            .post('api/v1/accounts/register',formData)
            .then(response=>{
              toast({
                message:'Account created with success!',
                type:'is-success',
                dismissible:true,
                pauseOnHover:true,
                duration:2000,
                position:'bottom-right'
              })
            })
            .catch(error=>{
              if(error.response){
                this.errors.response=[]
                
                for(const property in error.response.data){
                  this.errors.response.push(`${property}: ${error.response.data[property]}`)
                }
                
                console.log(JSON.stringify(error.response.data))
              
              }else if(error.message){
                this.errors.response=[]
                this.errors.response.push('Something went wrong . Please try again')
                                
                // console.log(JSON.stringify(error))
              }
            })
        }
 
      }
    }
  }
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