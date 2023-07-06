<template>
    <section class="section is-centered">
      <h1 class="title">Create An Account</h1>
      <h2 class="subtitle">
        Register a user account on the site.
      </h2>


      <form class="container">
        <div class="columns is-multiline">

          <div class="column">

            <div class="field">
              <label class="label">First Name</label>
              <div class="control has-icons-left has-icons-right">
                <input class="input" type="text" placeholder="Enter your first name">
                <span class="icon is-small is-left">
                  <font-awesome-icon :icon="['fas', 'user']" />
                </span>
              </div>
            </div>
          </div>

          <div class="column">

            <div class="field">
              <label class="label">Last Name</label>
              <div class="control has-icons-left has-icons-right">
                <input class="input" type="text" placeholder="Enter your last name">
                <span class="icon is-small is-left">
                  <font-awesome-icon :icon="['fas', 'user']" />
                </span>
              </div>
            </div>
          </div>
        </div>


        <div class="columns is-multiline">


          <div class="column">

            <div class="field">
              <label class="label">Username</label>
              <div class="control has-icons-left has-icons-right">
                <input class="input" type="text" placeholder="Enter Username">
                <span class="icon is-small is-left">
                  <font-awesome-icon :icon="['fas', 'user']" />
                </span>
              </div>
            </div>
          </div>


          <div class="column">

            <div class="field">
              <label class="label">Email</label>
              <div class="control has-icons-left has-icons-right">
                <input class="input" type="text" placeholder="Enter Email">
                <span class="icon is-small is-left">
                  <font-awesome-icon :icon="['fas', 'envelope']" />
                </span>
              </div>
            </div>
          </div>

        </div>

        <div class="columns is-multiline">


          <div class="column">

            <div class="field">
              <label class="label">Phone</label>
              <div class="control has-icons-left has-icons-right">
                <input class="input" type="text" placeholder="Enter Phone">
                <span class="icon is-small is-left">
                  <font-awesome-icon :icon="['fas', 'phone']" />
                </span>
              </div>
            </div>
          </div>


          <div class="column">

            <div class="field">
              <label class="label">Address</label>
              <div class="control has-icons-left has-icons-right">
                <input class="input" type="text" placeholder="Enter Address">
                <span class="icon is-small is-left">
                  <font-awesome-icon :icon="['fas', 'location-dot']" />
                </span>
              </div>
            </div>
          </div>

        </div>

        <div class="columns is-multiline">

          <div class="column">

            <div class="field">
              <label class="label">Password</label>
              <div class="control has-icons-left has-icons-right">
                <input class="input" type="password" placeholder="Enter Password">
                <span class="icon is-small is-left">
                  <font-awesome-icon :icon="['fas', 'lock']" />
                </span>
              </div>
            </div>
          </div>


          <div class="column">

            <div class="field">
              <label class="label">Repeat Password</label>
              <div class="control has-icons-left has-icons-right">
                <input class="input" type="text" placeholder="Repeat Password">
                <span class="icon is-small is-left">
                  <font-awesome-icon :icon="['fas', 'lock']" />
                </span>
              </div>
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
                <button class="button is-link is-light">Cancel</button>
              </div>
            </div>

        </div>


      </form>
        
    </section>

</template>

<script>
  export default {
    name: 'SignUpView',
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