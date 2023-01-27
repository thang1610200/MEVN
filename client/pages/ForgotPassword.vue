<template>
    <div class="container my-12 w-full h-12 mx-auto">
        <div class="max-w-sm mx-auto h-12">
            <h2 class="text-center text-4xl text-amber-600">Forgot Password</h2>

            <div class="bg-white drop-shadow rounded-sm mt-5 p-8">

            <Form v-slot="{ handleSubmit,errors }" ref="myForm">
                <text-input
                type="email"
                name="email"
                :value="model.email"
                v-model="model.email"
                placeholder="Enter your email"
                v-on:update:value="model.email= $event"
                rules="required|email"
                :error="errors.email"
                />

                <btn 
                label="Send Password Reset Link"
                :disbled="loading"
                :loading="loading"
                @click="handleSubmit($event,forgot)" />
            </Form>
            </div>
        </div>
    </div>
</template>

<script>   
    import {Form} from 'vee-validate';
    import {POST_FORGOT_PASSWORD} from '../store/auth/actions.js'
    import mixin from '../mixins/form.js'

    export default {
    mixins: [mixin],
    data: () => ({
        model: {
            email: "",
            password: ""
        }
    }),
    components: {
        Form
    },
    methods: {
        forgot() {
            this.toogleLoading();
            this.$store.dispatch(POST_FORGOT_PASSWORD,this.model)
                .then(response => {
                    this.toogleLoading()

                    this.$router.push('/')
                })
                .catch(error => {
                    this.toogleLoading();

                    this.$refs.myForm.setFieldError('email',error.response.data['email']);
                })
        }
    }
}
</script>