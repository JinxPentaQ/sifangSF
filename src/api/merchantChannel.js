

import request from '@/utils/request'

// 获取商户通道配置列表
export function getsBusinessChannelConfig(data) {
  return request({
    url: 'App/Platform_PlatformChannelController/GetsPlatformChannelConfig',
    method: 'post',
    data
  })
}

// 添加商户通道配置
export function addBusinessChannelConfig(data) {
  return request({
    url: 'App/Platform_PlatformChannelController/AddPlatformChannelConfig',
    method: 'post',
    data
  })
}
// 修改商户通道配置
export function modBusinessChannelConfig(data) {
  return request({
    url: 'App/Platform_PlatformChannelController/ModPlatformChannelConfig',
    method: 'post',
    data
  })
}
