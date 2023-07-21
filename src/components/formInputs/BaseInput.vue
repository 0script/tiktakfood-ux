<template>
    <div class="column">

        <div class="field">
            <label class="label">{{titleCase(name)}}</label>
            <div class="control has-icons-left has-icons-right">
            <input 
                class="input" 
                :class="{'is-danger':hasError}" 
                :value="modelValue" 
                @input="updateValue"
                :type="type" 
                :placeholder="placeholder" 
            />
            <span class="icon is-small is-left">
                <font-awesome-icon :icon="icon" />
            </span>
            </div>
            <p v-if="hasError" class="help is-danger">{{titleCase(name)}} is required !</p>
        </div>
    </div>
</template>

<script>
    export default({
        name:'BaseInput',
        props:{
            'name':String,
            'modelValue':String,
            'type':String,
            'icon':String,
            'placeholder':String,
            'hasError':Boolean,
            },
        data(){
            return{
                value:''
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
            updateValue(e){
                this.$emit('update:modelValue',e.target.value)
            }
        }
    })
</script>

