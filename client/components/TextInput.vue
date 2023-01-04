<template>
    <div class="mb-3">
        <Field :rules="rules" 
        :type="type" 
        :name="name" 
        class="w-full bg-slate-300 p-2 focus:outline-none" 
        :placeholder="placeholder" 
        :value="value"
            @input="$emit('update:value', $event.target.value)"
            @focus="$emit('focus')"
            @blur="$emit('blue')"
            @change="$emit('update:value', $event.target.value)"/>

        <span v-if="error" class="text-xs text-red-400">{{ error }}</span>
    </div>
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
            },
            error: {
                type: String,
                required: false
            }
        },
        components:{
            Field
        }
    }
</script>