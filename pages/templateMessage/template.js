// pages/templateMessage/template.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

    // 发送
  testSubmit: function(e){
    console.log('点击了按钮');
    // wx.login({
    //   success (res) {
    //     if (res.code) {
    //       //发起网络请求
    //       wx.request({
    //         url: 'https://test.com/onLogin',
    //         data: {
    //           code: res.code
    //         }
    //       })
    //     } else {
    //       console.log('登录失败！' + res.errMsg)
    //     }
    //   }
    // })

    // wx.request({
    //   url: 'https://cff.mynatapp.cc/wxXcx/sendMessage',
    //   method: 'POST',
    //   data: { },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success(res) {
    //     console.log(res)
    //   }
    // })

    wx.requestSubscribeMessage({
      tmplIds: [
        'MUtLwsw0xCndRULTgNHiXwGDyHJ-ZwAFL-b3kALcl0c','FQAiSMdR5xibmnWL7zzIK26Px7vnHFY-40Oemx2rbOQ'], // 此处可填写多个模板 ID，但低版本微信不兼容只能授权一个
      success (res) {
        console.log('已授权接收订阅消息')
      }
    })
    
  },
  
  // 小程序 appID 和 appSecret 获取 token
  getAccessToken: function ($appid, $appsecret) {
    var appId = '';
    var appSecret = '';
    var url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + appId + '&secret=' + appSecret;

  },


  sendMessage () {
    const cloud = require('wx-server-sdk')
cloud.init()
exports.main = async (event, context) => {
  try {
    const result = await cloud.openapi.subscribeMessage.send({
        touser: 'OPENID',
        page: 'index',
        data: {
          name3: {
            value: '我是玖柒后'
          },
          thing4: {
            value: 'Hello World!'
          },
          phrase1: {
            value: "发送成功！"
          },
          date5: {
            value: "发送成功！"
          },
          thing2: {
            value: "1024 身体健康！"
          }
        },
        templateId: 'TEMPLATE_ID'
      })
    console.log(result)
    return result
  } catch (err) {
    console.log(err)
    return err
  }
}
  }

  

  }

})
