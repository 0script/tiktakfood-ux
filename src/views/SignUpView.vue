<template>
    <section class="section is-centered">
      <h1 class="title">Create An Account</h1>
      <h2 class="subtitle">
        Register a user account on the site.
      </h2>


      <form @submit.prevent="submitForm" class="container" >

        <div class="columns is-multilines">

          <base-input
            v-model="this.first_name"
            name="first name"
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


          <div class="column">

            <div class="field">
              <label class="label">Phone</label>
              <div class="control has-icons-left has-icons-right" style="border=none;" >
                
                <!-- <input :class="{'is-danger':this.errors.phone}" v-model="phone" class="input" type="text" placeholder="Enter Phone"> -->
                <span class="ml-1 icon is-small is-left">
                  <font-awesome-icon :icon="['fas', 'phone']" />
                </span>
                <div id="phone-input" class="input" style="border: none;">
                  <vue-tel-input :value="phone" @input="onInput" mode="international" defaultCountry="Rw"></vue-tel-input>
                </div>
                
              </div>
              <p v-if="this.errors.phone" class="help is-danger">{{ this.errors.phone }}</p>
            </div>
          
          </div>


          <div class="column">

            <div class="field">
              <label class="label">Address</label>
              <div class="control has-icons-left has-icons-right">
                <input :class="{'is-danger':this.errors.address}" v-model="address" class="input" type="text" placeholder="Enter Address">
                <span class="icon is-small is-left">
                  <font-awesome-icon :icon="['fas', 'location-dot']" />
                </span>
              </div>
              <p v-if="this.errors.address" class="help is-danger">{{ this.errors.address }}</p>
            </div>

          </div>

        </div>

        <div class="columns is-multiline">

          <div class="column">

            <div class="field">
              <label class="label">Password</label>
              <div class="control has-icons-left has-icons-right">
                <input :class="{'is-danger':this.errors.password}" v-model="password" class="input" type="password" placeholder="Enter Password">
                <span class="icon is-small is-left">
                  <font-awesome-icon :icon="['fas', 'lock']" />
                </span>
              </div>
            </div>
            <p v-if="this.errors.password" class="help is-danger">{{ this.errors.password }}</p>
          </div>


          <div class="column">

            <div class="field">
              <label class="label">Repeat Password</label>
              <div class="control has-icons-left has-icons-right">
                <input :class="{'is-danger':this.errors.password1}" v-model="password1" class="input" type="password" placeholder="Repeat Password">
                <span class="icon is-small is-left">
                  <font-awesome-icon :icon="['fas', 'lock']" />
                </span>
              </div>

              <p v-if="this.errors.password1" class="help is-danger">{{ this.errors.password1 }}</p>
            </div>
          </div>

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

  export default {
  components: { BaseInput },
    name: 'SignUpView',
    data(){
      return{
        first_name:'',
        last_name:'',
        username:'',
        email:'',
        phone:'',
        address:'',
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
        
        this.errors= _.mapValues(this.errors, () => false);

        if(this.first_name===''){
          console.log(this.first_name)
          this.errors.first_name='First name is requiered !ok'
        }

        if(this.last_name===''){
          this.errors.last_name='Last name is requiered !'
        }

        if(this.username===''){
          this.errors.username='Username is requiered !'
        }

        if(this.email===''){
          this.errors.email='Email is requiered !'
        }

        if(this.phone===''){
          this.errors.phone='Phone is requiered !'
        }

        if(this.address===''){
          this.errors.address='Address is requiered !'
        }

        if(this.password===''){
          this.errors.password='Password is requiered !'
        }

        if(this.password!==this.password1){
          this.errors.password1='Password do not match !'
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


        
      },
      clicking(){
        console.log(this.phone)
      }
    }
    // mounted(){
    //   this.getCountry()
    // }
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