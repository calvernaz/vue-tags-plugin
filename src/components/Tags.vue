<template>
    <ul class="taggly_list">
        <li class="tag" v-for="(tag, index) in tags">
            <span class="taggly_text">{{ tag | lowercase }}</span>
            <button class="close" @click="remove(index)">×</button>
        </li>
        <slot></slot>
    </ul>
</template>

<script>
  export default {
    name: 'tag',
    props: ['tags', 'index'],
    filters: {
      lowercase (val) {
        return val.toLowerCase()
      }
    },
    methods: {
      remove (index) {
        this.$emit('remove', index)
      }
    }

  }
</script>

<style lang="scss">
    .taggly_list {

        li {
            float: left;
            display: inline-block;
            font-weight: 500;
            margin-bottom: 5px;
        }

        .close {
            position: absolute;
            top: 0;
            left: 0;
            text-decoration: none;
            color: rgba(0, 0, 0, 0);
            border: 0;
            background: 0 0;
            cursor: pointer;
            height: 100%;
            width: 100%;
        }

        .tag {
            margin-right: 8px;
            background: #eee;
            padding: 0 20px 0 20px;
            border-radius: 3px;
            position: relative;
            cursor: pointer;
            color: #999;
            transition: all .3s;
            animation-duration: 1s;
            animation-fill-mode: both;
            line-height: 26px;

            .taggly_text {
                display: block;
                max-width: 514px;
                word-wrap: break-word;
            }

            &:hover {
                color: white;
                background-color: crimson;
            }
        }
    }
</style>
