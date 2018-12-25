function ajax (options) {
  options = options || {}
  options.type = (options.type || 'GET').toUpperCase()
  options.dataType = options.dataType || 'json'
  options.token = options.token || ''
  let params = formatParams(options.data)
  let xhr
  let time = new Date().getTime()
  // 创建 - 第一步 
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest()
  } else if (window.ActiveObject) {
    // IE6及以下
    xhr = new ActiveXObject('Microsoft.XMLHTTP')
  }

  // 连接 和 发送 - 第二步
  if (options.type == 'GET') {
    xhr.open('GET', options.url + '?' + params+'_&='+time, true)
    // 设置表单提交时的内容类型
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    // 如果需要token，则设置token
    if(options.token){
        xhr.setRequestHeader('token', options.token)
    }
    xhr.send(null)
  } else if (options.type == 'POST') {
    xhr.open('POST', options.url+'?_&='+time, true)
    // 设置表单提交时的内容类型
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    // 如果需要token，则设置token
    if(options.token){
        xhr.setRequestHeader('token', options.token)
    }
    xhr.send(params)
  }

  // 接收 - 第三步
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      let status = xhr.status
      if ((status >= 200 && status < 300) || status == 304) {
          if(xhr.responseText){
            options.success && options.success(JSON.parse(xhr.responseText))
          }else{
            options.success && options.success({code:1005,msg:'响应失败'})
          }
      } else {
        options.error && options.error(status)
      }
    }
  }
}

// 格式化参数
function formatParams (data) {
  var arr = []
  for (var name in data) {
    arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]))
  }
  return arr.join('&')
}
