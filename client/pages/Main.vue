<template>
    <div>
        <div class="h-2 w-full bg-amber-200"></div>
        <div class="h-12 w-full border border-red-600 flex items-center justify-between" >
            <div>MEVN</div>
            <div>
                <router-link class="text-red-800" to="/auth/login">Login</router-link>
                <router-link to="/auth/register">Register</router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>