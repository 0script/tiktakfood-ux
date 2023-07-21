<template>

    <div class="column">

        <div class="field">
            <label class="label">{{ titleCase(name) }}</label>
            <div :class="{'is-danger':hasError}" class="control has-icons-left has-icons-right" style="border=none;" >
                
                <span class="ml-1 icon is-small is-left">
                    <font-awesome-icon :icon="['fas', 'phone']" />
                </span>
                <div id="phone-input" class="input" style="border: none;">
                    <vue-tel-input :value="modelValue" @input="onInput" mode="international" defaultCountry="Rw"></vue-tel-input>
                </div>
            </div>
            <p v-if="hasError" class="help is-danger">{{ titleCase(name) }} is required !</p>
        </div>
          
    </div>
</template>

<script>
    export default({
        name:'PhoneInput',
        props:{
            'modelValue':String,
            'name':String,
            'hasError':Boolean,
            },
        data(){
            return{
                phone:''
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
            onInput(phone,phoneObject,input){
                if(phoneObject?.formatted){
                    this.phone=phoneObject.formatted
                    this.$emit('update:modelValue',this.phone)
                }
            }
        }
    })
</script>

