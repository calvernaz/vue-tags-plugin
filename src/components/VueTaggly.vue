<template>
    <div id="taggly" @click="click" :class="{ active: isActive }">
        <div class="input textarea clearfix" ref="textarea">
            <span class="taggly_placeholder" :style="{ opacity: showPlaceholder ? '1' : '0' }">Enter tags...</span>
            <tags :tags="tags">
                <li>
                    <input type="text" @focus="focus" @blur="blur" @keydown.enter="keydownEvents" @input="input"
                           @keydown.delete.stop="deleteTag" v-model.trim="tag" ref="input" class="taggly_input"
                           tabindex="1" :style="{ width: inputSize.width + 'px' }" />
                </li>
            </tags>
            <div class="taggly_sizer" ref="sizer" style="font-size: 16px;">{{ tag }}</div>
        </div>
    </div>
</template>

<script>
  import Tags from './Tags'
  import initMixin from './initMixin.js'

  export default {
    name: 'vue-taggle',
    mixins: [initMixin],
    components: { Tags },
    data () {
      return {
        tags: [],
        tag: '',
        inputSize: {
          width: 10,
          leftPos: 0,
          padding: 0
        },
        measurements: {
          container: {
            rect: '',
            style: '',
            padding: '',
            fontSize: ''
          }
        },
        settings: {
          delimeter: ','
        },
        pasting: false,
        isActive: false,
        showPlaceholder: true
      }
    },
    methods: {
      click () {
        this.$refs.input.focus()
      },
      focus () {
        this.isActive = true
        this.showPlaceholder = false
      },
      blur () {
        this.isActive = false
        if (!this.tags.length && !this.$refs.input.value) {
          this.showPlaceholder = true
        }
      },
      keydownEvents () {
        if (!this.tag) return
        this.tags.push(this.tag)
        this.tag = ''
      },
      input () {
        const divWidth = ~~this.$refs.sizer.getBoundingClientRect().width + ~~this.measurements.container.padding
        this.resizeInput(Math.min(divWidth + (this.measurements.container.fontSize * 2), 534))
        // y ^ ((x ^ y) & -(x < y))
      },
      deleteTag () {
        if (this.tag) return
        this.tags.pop()
        this.resizeInput(10)
      },
      resizeInput (width) {
        this.inputSize.width = width
      }
    }
  }
</script>

<style lang="scss">
    #taggly {
        font: 12px/1.5 'PT Sans', serif;
        padding: 0;
        margin: 0;
        box-sizing: border-box;

        textarea.input, .textarea.input {
            border: 0;
            background: #FDFDFD;
            box-shadow: inset 0 1px 2px rgba(0, 0, 0, .2), 0 1px 1px rgba(255, 255, 255, .7);
            min-height: 60px;
            padding: 8px;
            border-radius: 3px;
            color: #555;
            transition: all .25s;
            cursor: text;
            margin-bottom: 10px;
            position: relative;
            word-break: break-all;
            text-overflow: ellipsis;
            overflow: hidden;
        }

        .textarea.input, textarea.input {
            height: auto;
        }

        .clearfix:before, .clearfix:after {
            display: block;
            content: "";
            line-height: 0;
            clear: both;
        }

        ul, ol {
            font-size: 1em;
            line-height: 1em;
            margin: 0;
            padding: 0;
        }

        .taggly_placeholder {
            position: absolute;
            color: #CCC;
            top: 12px;
            left: 8px;
            transition: opacity, .25s;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
        }

        .taggly_input {
            border: 0;
            outline: 0;
            font-size: 16px;
            font-weight: 300;
        }

        .taggly_input {
            padding: 8px 8px 8px 0;
            float: left;
            margin-top: -5px;
            background: 0 0;
            width: 100%;
            max-width: 100%;
        }

        .taggly_sizer {
            padding: 0;
            margin: 0;
            position: absolute;
            top: -500px;
            z-index: -1;
            visibility: hidden;
            word-wrap: break-word;
            overflow-wrap: break-word;
            white-space: normal;
        }
    }
</style>
