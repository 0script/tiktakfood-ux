<template>
    <div class="column">

        <div class="field">
            <label class="label">{{titleCase(name)}}</label>
            <div class="control has-icons-left has-icons-right">
            <input :class="{'is-danger':hasError}"  class="input" :type="type" :placeholder="placeholder">
            <span class="icon is-small is-left">
                <font-awesome-icon :icon="icon" />
            </span>
            </div>
            <p v-if="hasError" class="help is-danger">Error , {{titleCase(name)}} is required !</p>
        </div>
    </div>
</template>

<script>
    export default({
        name:'BaseInput',
        props:{
            'modelValue':String,
            'name':String,
            'type':String,
            'icon':String,
            'placeholder':String,
            'hasError':Boolean,
            },
        emits:['update:modelValue'],
        methods:{
            titleCase(str){
                str = str.toLowerCase().split(' ');
                for (var i = 0; i < str.length; i++) {
                    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
                }
                return str.join(' ');
            }
        }
    })
</script>

