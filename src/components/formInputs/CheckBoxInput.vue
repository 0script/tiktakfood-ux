<template>
    <div class="column">
        <div class="field">
          <label class="label">{{ titleCase(name) }}</label>
          <div class="control has-icon-lef">
            <div class="cotain" @click="returnSexe()">
              <input type="radio" :name="name" id="male" value="M" v-model="this.sex" >
              <label class="icon-radio" for="male">
                  <font-awesome-icon :icon="['fass', 'person']" />
                  <span>Male</span>
              </label>
              <input type="radio" :name="name" id="female" value="F" v-model="this.sex" >
              <label for="female">
                  <font-awesome-icon :icon="['fass', 'person-dress']" />
                  <span>Female</span>
              </label>       
            </div>

          </div>
        </div>
    </div>

</template>

<script>
    export default({
        name:'CheckBoxInput',
        props:{
            'modelValue':CharacterData,
            'name':String,
            },
        emits:['update:modelValue'],
        data(){
            return {
                sex:''
            }
        },
        methods:{
            titleCase(str){
                str = str.toLowerCase().split(' ');
                for (var i = 0; i < str.length; i++) {
                    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
                }
                return str.join(' ');
            },
            returnSex(){
                this.emits('radio-checked',this.sex)
            }
        }
    })
</script>

