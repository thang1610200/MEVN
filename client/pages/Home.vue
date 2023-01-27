<template>
    <div class="my-4">
        <h1 class="text-center text-3xl" v-if="!auth">FULLSTACK MEVN</h1>

        <h1 class="text-center text-3xl" v-else>Welcome, {{ user.name }}</h1>
    </div>
</template>

<script>

</script>