<template>
    <div class="search">
        <input :value="value" @input="$emit('input', $event.target.value)" type="text" placeholder="Filtrar"> <img src="search_icon.png" alt="">
    </div>
</template>

<script>
  export default {
    name: "SearchComponent",
    props: ['value']
  }
</script>

<style lang="scss" scoped>
    .search {
        background: black;
        color: white;
        text-align: right;
        padding: 1em;

        input {
            border: 0;
            background: none;
            border-bottom: solid 1px #959595;
            color: white;
            font-size: 1em;
            width: 50%;

            &:focus {
                outline: none;
            }
        }

        img {
            height: 1em;
            //margin-left: -40px;
            opacity: .8;
        }
    }
</style>
