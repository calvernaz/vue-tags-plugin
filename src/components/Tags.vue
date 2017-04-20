<template>
    <ul class="taggly_list">
        <li class="taggly" v-for="tag in tags">
            <span class="taggly_text">{{ tag | lowercase }}</span>
            <button class="close">×</button>
        </li>
        <slot></slot>
    </ul>

</template>

<script>
  export default {
    name: 'tag',
    props: ['tags'],
    filters: {
      lowercase (val) {
        return val.toLowerCase()
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
            font-size: 1.1rem;
            position: absolute;
            top: 5px;
            right: 3px;
            text-decoration: none;
            padding-left: 2px;
            padding-top: 3px;
            line-height: 75%;
            color: #ccc;
            color: rgba(0, 0, 0, .2);
            padding-bottom: 4px;
            display: none;
            border: 0;
            background: 0 0;
            cursor: pointer;
        }

        .taggly {
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

            span.taggly_text {
                display: block;
                max-width: 514px;
                word-wrap: break-word;
            }
        }

        .taggly:hover {
            color: white;
            background-color: crimson;
        }
    }
    /*

        }

    } */
</style>
