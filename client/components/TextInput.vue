<template>
   <Field :rules="rules" 
   :type="type" 
   :name="name" 
   class="w-full bg-slate-300 p-2 focus:outline-none mb-3" 
   :placeholder="placeholder" 
   :value="value"
    @input="$emit('update:value', $event.target.value)"
    @focus="$emit('focus')"
    @blur="$emit('blue')"
    @change="$emit('update:value', $event.target.value)"
    />
</template>

<script>
    import {Field} from "vee-validate"
    export default {
        props: {
            placeholder: {
                type: String,
                required: true
            },
            type: {
                type: String,
                required: true,
                default: ''
            },
            value: {
                type: String,
                required: false,
                default:''
            },
            name: {
                type: String,
                required: true
            },
            rules:{
                type: String
            }
        },
        components:{
            Field
        }
    }
</script>