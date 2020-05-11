// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//       if (request.requested == "createDiv"){
//           //Code to create the div
//           sendResponse({confirmation: "Successfully created div"});
//       }
//   });




// window.addEventListener('message', function () {console.log('0')});
chrome.runtime.onConnect.addListener((port) => {
  
  // port.onMessage.addListener(function(message,sender){
  //   if(message.greeting === "hello"){
  //     alert(message.greeting);
  //   }
  // });

  if(!document.getElementById('tapTapRecordersDiv')) {
    port.onMessage.addListener((msg) => {
      if (msg.function == 'html') {
      // console.log(document.documentElement.outerHTML)
  const startTapTapRecording = (e) => {
    chrome.runtime.sendMessage('startTapTapRecording')

    // // console.log(e)
    // port.postMessage({ type:'startRecording' });
  }
  const stopTapTapRecording = (e) => {
    chrome.runtime.sendMessage('stopTapTapRecording')
    div.style = ''
    div.innerHTML=''
    // // console.log(e)
    // port.postMessage({ type:'stopRecording' });
  }
  window.addEventListener('startTapTapRecording', startTapTapRecording);
  window.addEventListener('stopTapTapRecording', stopTapTapRecording);

  let div
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if(request.message === "startRecording"){

      div = document.createElement("div");
      var divStyles = document.createElement("div")
      var divJs = document.createElement("script")
      divStyles.innerHTML = `<link rel="stylesheet" href="${chrome.runtime.getURL('/record-session.html')}" type="text/css" />`
      divJs.innerHTML = `function myFunction() {window.dispatchEvent(new Event('startTapTapRecording'))} function myFunction2() {window.dispatchEvent(new Event('stopTapTapRecording'))}`
      document.body.appendChild(divStyles);
      document.body.appendChild(divJs);
      div.setAttribute("id", "tapTapRecordersDiv");
      div.style.width = "100%";
      div.style.height = "200px";
      div.style.position = "fixed";
      div.style.zIndex = "99999999";
      div.style.bottom = "0";
      // div.style.pointerEvents = "none";
      div.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.4))';
      div.innerHTML = `<div class="recordHome">
      <div class="controlsContainer">
        <div class="controlAudio" onclick='myFunction()'>
          <tul>
            <tli class="liIcon">
              <img class="microphoneIcon"
                   src="${chrome.runtime.getURL('/microphone-white.svg')}"
                   alt=""
              >
            </tli>
            <tli>Audio</tli>
          </tul>
        </div>
        <div class="controlDesktop">
          <tul>
            <tli class="liIcon"><img class="desktopIcon" src="${chrome.runtime.getURL('/tv-white.svg')}" alt=""></tli>
            <tli>Desktop</tli>
          </tul>
        </div>
        <div class="hr-line">
        </div>
        <div class="controlSnippet">
          <tul>
            <tli class="liIcon"><img class="snippetIcon" src="${chrome.runtime.getURL('/snippet-white.svg')}" alt=""></tli>
            <tli>Snippet</tli>
          </tul>
        </div>
        <div class="controlEnd" onclick='myFunction2()'>
          <tul>
            <tli class="liIcon"><img class="endIcon"  src="${chrome.runtime.getURL('/end.svg')}" alt=""></tli>
            <tli>End</tli>
          </tul>
        </div>
      </div>
    </div>`;
      document.body.appendChild(div);
      }
    })
  }
    });
  }
});