<template>
    <div class="column">
        <div class="field">
          <label class="label">{{ titleCase(name) }}</label>
          <div class="control has-icon-lef">
            <div class="cotain">
                <input 
                    type="radio" 
                    name="sexe" 
                    id="male" 
                    @click="updateValue"
                    
                >
                <label class="icon-radio" for="male">
                    <font-awesome-icon :icon="['fass', 'person']" />
                    <span>Male</span>
                </label>
                
                <span class="m-1"> </span>
                
                <input 
                    type="radio" 
                    name="sexe" 
                    id="female" 
                    @click="updateValue"
                >
                <label class="icon-radio" for="female">
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
            'modelValue':String,
            'name':String,
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
                let sex='M'
                if(e.target.checked && e.target.id==='female'){
                    this.$emit('update:modelValue','F')
                }
                if(e.target.checked && e.target.id==='male'){
                    this.$emit('update:modelValue','M')
                }
            }
        }
    })
</script>

