/*
 * @Author: your name
 * @Date: 2021-07-01 21:48:33
 * @LastEditTime: 2021-07-05 16:05:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \daily-learning\study\study.js
 */

// 视频部分

  // 抓拍
  var video = document.querySelector('video');
  var btn = document.getElementById('btn');
  var canvas = document.querySelector('canvas');
  var ctx = canvas.getContext('2d');
  var localMediaStream = null;

  function snapshot() {
      console.log('------ 抓拍开始');
      if (localMediaStream) {
          ctx.drawImage(video, 0, 0);
          // “image/webp”对Chrome有效，
          // 其他浏览器自动降为image/png
          document.querySelector('img').src = canvas.toDataURL('image/webp');
      }
  }

  btn.addEventListener('click', snapshot, false);
  
  function onSuccess(stream) {
      var video = document.getElementById('webcam');
      try {   
          video.srcObject = stream;
          localMediaStream = stream;
      } catch (error) {
          video.src = window.URL.createObjectURL(stream);
      }

      video.autoplay = true; 
      video.play();
  }

  function onErrror(e) {

  }

  if (navigator.getUserMedia) {
      navigator.getUserMedia({video: true, audio: true}, onSuccess, onErrror);
  } else {
      document.getElementById('webcam').src = 'somevideo.mp4';
  }


  // 发送消息

    var seedBth = document.getElementById('sendBtn');
    seedBth.addEventListener('click', function(e) {
        let val =  document.getElementById('sendInput').value;
        console.log('------- parent', window.parent, 'val', val)
        window.parent.postMessage(val, '*');
    }, false);

  window.addEventListener('message', function(e) {
    let msgContainer = document.getElementById('showMessage');
    let newMsg = document.createElement('p');
    newMsg.innerHTML = e.data;
    msgContainer.appendChild(newMsg);
  },false);