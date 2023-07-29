import request from '@/utils/request'

// 登录
export function login(data) {
  return request({
    url: 'App/Platform_PlatformController/Login',
    method: 'post',
    data
  })
}
// 绑定谷歌验证器
export function createGoogleAuth(params) {
  return request({
    url: 'App/Platform_PlatformController/CreateGoogleAuthenticator',
    method: 'post',
    params
  })
}
// 修改密码
export function modAdminPwd(params) {
  return request({
    url: 'App/Platform_PlatformController/ModPwd',
    method: 'post',
    params
  })
}

export function getInfo() {
  return request({
    url: 'App/Platform_PlatformController/GetPlatform',
    method: 'post'
  })
}

export function getHomeData(params) {
  return request({
    url: 'App/Platform_PlatformController/GetBusinessHome',
    method: 'post',
    params
  })
}
