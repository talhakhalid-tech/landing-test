let interval;
let timeLeft;
var background = chrome.extension.getBackgroundPage();
const { firebase } = background.window;
const bgWindow = background.window;
const { user } = bgWindow.myStore;

function MultiStreamsMixer(arrayOfMediaStreams,elementClass){function setSrcObject(stream,element){"srcObject"in element?element.srcObject=stream:"mozSrcObject"in element?element.mozSrcObject=stream:element.srcObject=stream}function drawVideosToCanvas(){if(!isStopDrawingFrames){var videosLength=videos.length,fullcanvas=!1,remaining=[];if(videos.forEach(function(video){video.stream||(video.stream={}),video.stream.fullcanvas?fullcanvas=video:remaining.push(video)}),fullcanvas)canvas.width=fullcanvas.stream.width,canvas.height=fullcanvas.stream.height;else if(remaining.length){canvas.width=videosLength>1?2*remaining[0].width:remaining[0].width;var height=1;3!==videosLength&&4!==videosLength||(height=2),5!==videosLength&&6!==videosLength||(height=3),7!==videosLength&&8!==videosLength||(height=4),9!==videosLength&&10!==videosLength||(height=5),canvas.height=remaining[0].height*height}else canvas.width=self.width||360,canvas.height=self.height||240;fullcanvas&&fullcanvas instanceof HTMLVideoElement&&drawImage(fullcanvas),remaining.forEach(function(video,idx){drawImage(video,idx)}),setTimeout(drawVideosToCanvas,self.frameInterval)}}function drawImage(video,idx){if(!isStopDrawingFrames){var x=0,y=0,width=video.width,height=video.height;1===idx&&(x=video.width),2===idx&&(y=video.height),3===idx&&(x=video.width,y=video.height),4===idx&&(y=2*video.height),5===idx&&(x=video.width,y=2*video.height),6===idx&&(y=3*video.height),7===idx&&(x=video.width,y=3*video.height),"undefined"!=typeof video.stream.left&&(x=video.stream.left),"undefined"!=typeof video.stream.top&&(y=video.stream.top),"undefined"!=typeof video.stream.width&&(width=video.stream.width),"undefined"!=typeof video.stream.height&&(height=video.stream.height),context.drawImage(video,x,y,width,height),"function"==typeof video.stream.onRender&&video.stream.onRender(context,x,y,width,height,idx)}}function getMixedStream(){isStopDrawingFrames=!1;var mixedVideoStream=getMixedVideoStream(),mixedAudioStream=getMixedAudioStream();mixedAudioStream&&mixedAudioStream.getTracks().filter(function(t){return"audio"===t.kind}).forEach(function(track){mixedVideoStream.addTrack(track)});var fullcanvas;return arrayOfMediaStreams.forEach(function(stream){stream.fullcanvas&&(fullcanvas=!0)}),mixedVideoStream}function getMixedVideoStream(){resetVideoStreams();var capturedStream;"captureStream"in canvas?capturedStream=canvas.captureStream():"mozCaptureStream"in canvas?capturedStream=canvas.mozCaptureStream():self.disableLogs||console.error("Upgrade to latest Chrome or otherwise enable this flag: chrome://flags/#enable-experimental-web-platform-features");var videoStream=new MediaStream;return capturedStream.getTracks().filter(function(t){return"video"===t.kind}).forEach(function(track){videoStream.addTrack(track)}),canvas.stream=videoStream,videoStream}function getMixedAudioStream(){Storage.AudioContextConstructor||(Storage.AudioContextConstructor=new Storage.AudioContext),self.audioContext=Storage.AudioContextConstructor,self.audioSources=[],self.useGainNode===!0&&(self.gainNode=self.audioContext.createGain(),self.gainNode.connect(self.audioContext.destination),self.gainNode.gain.value=0);var audioTracksLength=0;return arrayOfMediaStreams.forEach(function(stream){if(stream.getTracks().filter(function(t){return"audio"===t.kind}).length){audioTracksLength++;var audioSource=self.audioContext.createMediaStreamSource(stream);self.useGainNode===!0&&audioSource.connect(self.gainNode),self.audioSources.push(audioSource)}}),self.audioDestination=self.audioContext.createMediaStreamDestination(),self.audioSources.forEach(function(audioSource){audioSource.connect(self.audioDestination)}),self.audioDestination.stream}function getVideo(stream){var video=document.createElement("video");return setSrcObject(stream,video),video.className=elementClass,video.muted=!0,video.volume=0,video.width=stream.width||self.width||360,video.height=stream.height||self.height||240,video.play(),video}function resetVideoStreams(streams){videos=[],streams=streams||arrayOfMediaStreams,streams.forEach(function(stream){if(stream.getTracks().filter(function(t){return"video"===t.kind}).length){var video=getVideo(stream);video.stream=stream,videos.push(video)}})}var browserFakeUserAgent="Fake/5.0 (FakeOS) AppleWebKit/123 (KHTML, like Gecko) Fake/12.3.4567.89 Fake/123.45";!function(that){"undefined"==typeof RecordRTC&&that&&"undefined"==typeof window&&"undefined"!=typeof global&&(global.navigator={userAgent:browserFakeUserAgent,getUserMedia:function(){}},global.console||(global.console={}),"undefined"!=typeof global.console.log&&"undefined"!=typeof global.console.error||(global.console.error=global.console.log=global.console.log||function(){console.log(arguments)}),"undefined"==typeof document&&(that.document={documentElement:{appendChild:function(){return""}}},document.createElement=document.captureStream=document.mozCaptureStream=function(){var obj={getContext:function(){return obj},play:function(){},pause:function(){},drawImage:function(){},toDataURL:function(){return""},style:{}};return obj},that.HTMLVideoElement=function(){}),"undefined"==typeof location&&(that.location={protocol:"file:",href:"",hash:""}),"undefined"==typeof screen&&(that.screen={width:0,height:0}),"undefined"==typeof URL&&(that.URL={createObjectURL:function(){return""},revokeObjectURL:function(){return""}}),that.window=global)}("undefined"!=typeof global?global:null),elementClass=elementClass||"multi-streams-mixer";var videos=[],isStopDrawingFrames=!1,canvas=document.createElement("canvas"),context=canvas.getContext("2d");canvas.style.opacity=0,canvas.style.position="absolute",canvas.style.zIndex=-1,canvas.style.top="-1000em",canvas.style.left="-1000em",canvas.className=elementClass,(document.body||document.documentElement).appendChild(canvas),this.disableLogs=!1,this.frameInterval=10,this.width=360,this.height=240,this.useGainNode=!0;var self=this,AudioContext=window.AudioContext;"undefined"==typeof AudioContext&&("undefined"!=typeof webkitAudioContext&&(AudioContext=webkitAudioContext),"undefined"!=typeof mozAudioContext&&(AudioContext=mozAudioContext));var URL=window.URL;"undefined"==typeof URL&&"undefined"!=typeof webkitURL&&(URL=webkitURL),"undefined"!=typeof navigator&&"undefined"==typeof navigator.getUserMedia&&("undefined"!=typeof navigator.webkitGetUserMedia&&(navigator.getUserMedia=navigator.webkitGetUserMedia),"undefined"!=typeof navigator.mozGetUserMedia&&(navigator.getUserMedia=navigator.mozGetUserMedia));var MediaStream=window.MediaStream;"undefined"==typeof MediaStream&&"undefined"!=typeof webkitMediaStream&&(MediaStream=webkitMediaStream),"undefined"!=typeof MediaStream&&"undefined"==typeof MediaStream.prototype.stop&&(MediaStream.prototype.stop=function(){this.getTracks().forEach(function(track){track.stop()})});var Storage={};"undefined"!=typeof AudioContext?Storage.AudioContext=AudioContext:"undefined"!=typeof webkitAudioContext&&(Storage.AudioContext=webkitAudioContext),this.startDrawingFrames=function(){drawVideosToCanvas()},this.appendStreams=function(streams){if(!streams)throw"First parameter is required.";streams instanceof Array||(streams=[streams]),streams.forEach(function(stream){arrayOfMediaStreams.push(stream);var newStream=new MediaStream;if(stream.getTracks().filter(function(t){return"video"===t.kind}).length){var video=getVideo(stream);video.stream=stream,videos.push(video),newStream.addTrack(stream.getTracks().filter(function(t){return"video"===t.kind})[0])}if(stream.getTracks().filter(function(t){return"audio"===t.kind}).length){var audioSource=self.audioContext.createMediaStreamSource(stream);audioSource.connect(self.audioDestination),newStream.addTrack(self.audioDestination.stream.getTracks().filter(function(t){return"audio"===t.kind})[0])}})},this.releaseStreams=function(){videos=[],isStopDrawingFrames=!0,self.gainNode&&(self.gainNode.disconnect(),self.gainNode=null),self.audioSources.length&&(self.audioSources.forEach(function(source){source.disconnect()}),self.audioSources=[]),self.audioDestination&&(self.audioDestination.disconnect(),self.audioDestination=null),self.audioContext&&self.audioContext.close(),self.audioContext=null,context.clearRect(0,0,canvas.width,canvas.height),canvas.stream&&(canvas.stream.stop(),canvas.stream=null)},this.resetVideoStreams=function(streams){!streams||streams instanceof Array||(streams=[streams]),resetVideoStreams(streams)},this.name="MultiStreamsMixer",this.toString=function(){return this.name},this.getMixedStream=getMixedStream}"undefined"==typeof RecordRTC&&("undefined"!=typeof module&&(module.exports=MultiStreamsMixer),"function"==typeof define&&define.amd&&define("MultiStreamsMixer",[],function(){return MultiStreamsMixer}));

// bgWindow.console.log(bgWindow.myStore)

if (window.location == 'popup-home.html') {
  if (firebase.auth().currentUser) {
    window.location == 'credentials.html'
  }
}

let splittedNameArray = user.displayName.split(' ')
let letterOne = user.displayName[0];
let letterTwo = splittedNameArray.length > 1 ? splittedNameArray[1] : user.displayName[2]
'<div class="defaultLetters">NN</div>'
const displayStatus = function () { //function to handle the display of time and buttons
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const status = document.getElementById("status");
    const timeRem = document.getElementById("timeRem");
    const startButton = document.getElementById('start');
    const finishButton = document.getElementById('finish');
    const cancelButton = document.getElementById('cancel');
    //CODE TO BLOCK CAPTURE ON YOUTUBE, DO NOT DELETE
    // if(tabs[0].url.toLowerCase().includes("youtube")) {
    //   status.innerHTML = "Capture is disabled on this site due to copyright";
    // } else {
    chrome.runtime.sendMessage({ currentTab: tabs[0].id }, (response) => {
      if (response) {
        chrome.storage.sync.get({
          maxTime: 1200000,
          limitRemoved: false
        }, (options) => {
          if (options.maxTime > 1200000) {
            chrome.storage.sync.set({
              maxTime: 1200000
            });
            timeLeft = 1200000 - (Date.now() - response)
          } else {
            timeLeft = options.maxTime - (Date.now() - response)
          }
          status.innerHTML = "Tab is currently being captured";
          if (options.limitRemoved) {
            timeRem.innerHTML = `${parseTime(Date.now() - response)}`;
            interval = setInterval(() => {
              timeRem.innerHTML = `${parseTime(Date.now() - response)}`;
            });
          } else {
            timeRem.innerHTML = `${parseTime(timeLeft)} remaining`;
            interval = setInterval(() => {
              timeLeft = timeLeft - 1000;
              timeRem.innerHTML = `${parseTime(timeLeft)} remaining`;
            }, 1000);
          }
        });
        finishButton.style.display = "block";
        cancelButton.style.display = "block";
      } else {
        startButton.style.display = "block";
      }
    });
    // }
  });
}

const parseTime = function (time) { //function to display time remaining or time elapsed
  let minutes = Math.floor((time / 1000) / 60);
  let seconds = Math.floor((time / 1000) % 60);
  if (minutes < 10 && minutes >= 0) {
    minutes = '0' + minutes;
  } else if (minutes < 0) {
    minutes = '00';
  }
  if (seconds < 10 && seconds >= 0) {
    seconds = '0' + seconds;
  } else if (seconds < 0) {
    seconds = '00';
  }
  return `${minutes}:${seconds}`
}

//manipulation of the displayed buttons upon message from background
chrome.runtime.onMessage.addListener((request, sender) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const status = document.getElementById("status");
    const timeRem = document.getElementById("timeRem");
    const buttons = document.getElementById("buttons");
    const startButton = document.getElementById('start');
    const finishButton = document.getElementById('finish');
    const cancelButton = document.getElementById('cancel');
    if (request.captureStarted && request.captureStarted === tabs[0].id) {
      chrome.storage.sync.get({
        maxTime: 1200000,
        limitRemoved: false
      }, (options) => {
        if (options.maxTime > 1200000) {
          chrome.storage.sync.set({
            maxTime: 1200000
          });
          timeLeft = 1200000 - (Date.now() - request.startTime)
        } else {
          timeLeft = options.maxTime - (Date.now() - request.startTime)
        }
        status.innerHTML = "Tab is currently being captured";
        if (options.limitRemoved) {
          timeRem.innerHTML = `${parseTime(Date.now() - request.startTime)}`;
          interval = setInterval(() => {
            timeRem.innerHTML = `${parseTime(Date.now() - request.startTime)}`
          }, 1000);
        } else {
          timeRem.innerHTML = `${parseTime(timeLeft)} remaining`;
          interval = setInterval(() => {
            timeLeft = timeLeft - 1000;
            timeRem.innerHTML = `${parseTime(timeLeft)} remaining`;
          }, 1000);
        }
      });
      finishButton.style.display = "block";
      cancelButton.style.display = "block";
      startButton.style.display = "none";
    } else if (request.captureStopped && request.captureStopped === tabs[0].id) {
      status.innerHTML = "";
      finishButton.style.display = "none";
      cancelButton.style.display = "none";
      startButton.style.display = "block";
      timeRem.innerHTML = "";
      clearInterval(interval);
    }
  });
});


//initial display for popup menu when opened
// document.addEventListener('DOMContentLoaded', function() {
//   displayStatus();
//   const startKey = document.getElementById("startKey");
//   const endKey = document.getElementById("endKey");
//   const startButton = document.getElementById('start');
//   const finishButton = document.getElementById('finish');
//   const cancelButton = document.getElementById('cancel');
//   startButton.onclick = () => {chrome.runtime.sendMessage("startCapture")};
//   finishButton.onclick = () => {chrome.runtime.sendMessage("stopCapture")};
//   cancelButton.onclick = () => {chrome.runtime.sendMessage("cancelCapture")};
//   chrome.runtime.getPlatformInfo((info) => {
//     if(info.os === "mac") {
//       startKey.innerHTML = "Command + Shift + U to start capture on current tab";
//       endKey.innerHTML = "Command + Shift + X to stop capture on current tab";
//     } else {
//       startKey.innerHTML = "Ctrl + Shift + S to start capture on current tab";
//       endKey.innerHTML = "Ctrl + Shift + X to stop capture on current tab";
//     }
//   })
//   const options = document.getElementById("options");
//   options.onclick = () => {chrome.runtime.openOptionsPage()};
//   const git = document.getElementById("GitHub");
//   git.onclick = () => {chrome.tabs.create({url: "https://github.com/arblast/Chrome-Audio-Capturer"})};

// });
// console.log('RnadomLog')

const logout = () => {
  firebase.auth().signOut().then(function () {
    delete bgWindow.myStore;
    window.location = 'credentials.html'
  }, function (error) {
  });
}

const audioCheckValue = (event) => {
  if (!bgWindow.myStore.appSettings) {
    bgWindow.myStore.appSettings = {}
  }
  if(event.target.checked) {
    bgWindow.myStore.appSettings.recordAudio = true
  } else {
    bgWindow.myStore.appSettings.recordAudio = false
    document.getElementById("audioCheck").checked = false
  }

}
const videoCheckValue = (event) => {
  if (!bgWindow.myStore.appSettings) {
    bgWindow.myStore.appSettings = {}
  }
  if(event.target.checked) {
    bgWindow.myStore.appSettings.recordVideo = true
  } else {
    bgWindow.myStore.appSettings.recordVideo = false
    document.getElementById("videoCheck").checked = false
  }
}

let active=false

const startRecording = () => {
  if (!bgWindow.myStore.appSettings) {
    bgWindow.myStore.appSettings = {}
  }
  bgWindow.myStore.appSettings.recordingStarted = true
  chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    if(!active){
    chrome.tabs.sendMessage(activeTab.id, {"message": "startRecording",active})
    active = !active
  }
  })
  // window.location = 'record-session.html'
}

function connect() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {

    bgWindow.console.log('LOGGGING');
    const port = chrome.tabs.connect(tabs[0].id);
    port.postMessage({ function: 'html' });
    port.onMessage.addListener((response) => {
      if(type == 'startRecording') {
        
      }
      // html = response.html;
      // title = response.title;
      // description = response.description;
    });
  });
}


document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("logoutButton").addEventListener("click", logout);
  if (window.location == 'popup-home.html') {
  }
  if(bgWindow.myStore.appSettings && bgWindow.myStore.appSettings.recordAudio) {
    document.getElementById("audioCheck").checked = true
  }
  if(bgWindow.myStore.appSettings && bgWindow.myStore.appSettings.recordVideo) {
    document.getElementById("videoCheck").checked = true
  }
  document.getElementById("audioCheck").addEventListener("change", audioCheckValue)
  document.getElementById("videoCheck").addEventListener("change", videoCheckValue)
  document.getElementById("startRecording").addEventListener("click", startRecording)
  document.getElementById("user-name").innerHTML = `${user.displayName}`
  document.getElementById("profileName").style.background = `center / contain no-repeat url(${user.photoURL})`
  
  window.addEventListener('load', (event) => {
    chrome.tabs.executeScript(null, {
      file: './contentScript.js', //my content script  
     }, () => {
        connect() //this is where I call my function to establish a connection     });
    });
  });
}
)


// function myFunction(){
//   console.log('asd');
// }