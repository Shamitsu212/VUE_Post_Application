<script setup>

    defineOptions({
        name: "Modal_UI",
    })

    const emit = defineEmits(["close"])

    function close() {
        emit("close")
    }

</script>

<template>

    <div @click="close" class="blur">

        <div @click.stop class="form">

            <slot></slot>

        </div>

    </div>

</template>

<style scoped>

    .blur{
        position: fixed;

        z-index: 999;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: rgba(0,0,0,0.5);

        width: 100vw;
        height: 100vh;
    }

    .form{
        background: #212121;

        padding: 10px;

        border: none;
        border-radius: 12px;
    }


</style>