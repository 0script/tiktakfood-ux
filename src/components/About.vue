<template>
    <section class="section">
        <h1 class="title">Section</h1>
        <h2 class="subtitle">
            A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
        </h2>
    </section>

    <section class="section is-medium">
    <h1 class="title">Medium section</h1>
    <h2 class="subtitle">
        A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
    </h2>
    </section>
</template>

<style scoped>
    section{
        margin-top: 100px;
    }

    @media only screen and (max-width: 1160px) {
        section{
            margin-top: 120px;
        }   
    }

</style>