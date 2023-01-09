<template>
    <button :disabled="disabled" class="w-full mt-3 bg-green-300 py-3 text-2xl font-semibold text-white rounded-sm hover:bg-green-100">
            <loader v-if="loading" />
            <span v-else>{{ label }}</span>
    </button>
</template>

<script>
    export default {
        props: {
            disabled: {
                type: Boolean,
                required: false,
                default: false
            },
            label: {
                type: String,
                required: true
            },
            loading: {
                type: Boolean,
                required: false,
                default: false
            }
        }
    }
</script>