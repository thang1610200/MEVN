<template>
    <div class="container my-12 w-full h-12 mx-auto">
        <div class="max-w-sm mx-auto h-12">
            <h2 class="text-center text-4xl text-amber-600">Log in</h2>

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

                <text-input
                type="password"
                name="password"
                :value="model.password"
                v-model="model.password"
                placeholder="Enter your password"
                v-on:update:value="model.password = $event"
                rules="required|min:6"
                :error="errors.password"
                />

                <btn 
                label="Sign In"
                :disbled="loading"
                :loading="loading"
                @click="handleSubmit($event,login)" />
            </Form>
            </div>
        </div>
    </div>
</template>

<script>   
    import {Form} from 'vee-validate';
    import {POST_LOGIN, SET_AUTH} from '../store/auth/actions.js'
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
        login() {
            this.toogleLoading();
            this.$store.dispatch(POST_LOGIN,this.model)
                .then(response => {
                    this.toogleLoading()

                    localStorage.setItem('auth', JSON.stringify(response.data))
                    this.$store.commit(SET_AUTH,response.data)

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