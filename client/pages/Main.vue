<template>
    <div>
        <div class="h-2 w-full bg-amber-200"></div>
        <div class="h-14 w-full flex items-center justify-between px-5" >
            <router-link to="/" class="text-amber-400 font-bold">MEVN</router-link>
            <div v-if="!auth">
                <router-link class="text-gray-400" to="/auth/login">Sign In</router-link>
                <router-link class="text-gray-400 border-4 px-3 py-2 hover:text-black hover:border-black rounded-full border-gray-400 ml-2" to="/auth/register">Join Now</router-link>
            </div>
            <div v-else>
                <span class="cursor-pointer text-gray-400 hover:text-black" @click="unsetAuth">Logout</span>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script></script>