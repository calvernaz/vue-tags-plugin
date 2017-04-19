var initMixin = {
  mounted () {
    this.measurements.container.rect = this.$refs.textarea.getBoundingClientRect()
    this.measurements.container.style = window.getComputedStyle(this.$refs.textarea)
    this.measurements.container.fontSize = parseInt(this.$refs.sizer.style.fontSize, 10)

    const style = this.measurements.container.style
    const lpad = parseInt(style['padding-left'] || style.paddingLeft, 10)
    const rpad = parseInt(style['padding-right'] || style.paddingRight, 10)
    const lborder = parseInt(style['border-left-width'] || style.borderLeftWidth, 10)
    const rborder = parseInt(style['border-right-width'] || style.borderRightWidth, 10)

    this.measurements.container.padding = lpad + rpad + lborder + rborder
  }
}

export default initMixin
