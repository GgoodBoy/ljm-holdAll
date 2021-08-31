import Vue from 'vue'
export default {}.install = (Vue, options = {}) => {
  Vue.directive('loadmore', {
    inserted(el, binding) {
      // 获取element-ui定义好的scroll盒子
      const SELECTDOWN_DOM = el.querySelector('.el-select-dropdown .el-select-dropdown__wrap')
      SELECTDOWN_DOM.addEventListener('scroll', function() {
        const CONDITION = this.scrollHeight - this.scrollTop <= this.clientHeight
        if (CONDITION) {
          binding.value()
        }
      })
    }
  }),
  Vue.directive('loadmoreTable', {
    bind(el, binding) {
      const selectWrap = el.querySelector('.el-table__body-wrapper')
      selectWrap.addEventListener('scroll', function() {
        let sign = 1
        const scrollDistance = this.scrollHeight - this.scrollTop - this.clientHeight
        if (scrollDistance <= sign) {
          binding.value()
        }
      })
    }
  })
}