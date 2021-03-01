/**
 * 利用es6模块化导入导出为引用地址特性？
 * 实现多组件间的数据共享
 */
import { ref } from 'vue'
import {getEmr} from '@/services'

// 为何这里需要ref将其变成响应式
// 不ref会如何？
let emrData = ref({
  mainSuit: '',
  pesentIllness: ''
})

async function getData(){
  let {data} = await getEmr()
  emrData.value = data
}

export {
  emrData,
  getData
}