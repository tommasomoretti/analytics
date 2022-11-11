// Send hits
function sendData(full_endpoint, secret_key, payload, data) {  
  payload.user_agent = navigator.userAgent;
  payload.browser = detectBrowser();
  payload.browser_language = navigator.language; 
  payload.device = detectDevice();
  payload.screen_resolution = window.screen.width + 'x' + window.screen.height;
  
  if(data.enable_logs){console.log('👉 Request payload:', payload);}
  if(data.enable_logs){console.log('🟢 Analytics consent granted. Sending request...');}

  fetch(full_endpoint, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(payload)
  })
  .then((response) => response.json())
  .then((response_json) => {
    if(data.enable_logs){console.log(response_json.response)}
    if (response_json.status_code === 200)
      return data.gtmOnSuccess()
    else return data.gtmOnFailure()
  })
  .catch((error) => {
    if(data.enable_logs){console.log(error)}
    return data.gtmOnFailure()
  })
}

function detectBrowser(){
  let userAgent = navigator.userAgent;
  let browserName;

  if(userAgent.match(/chrome|chromium|crios/i)){
      browserName = "chrome";
    } else if(userAgent.match(/firefox|fxios/i)){
      browserName = "firefox";
    }  else if(userAgent.match(/safari/i)){
      browserName = "safari";
    }else if(userAgent.match(/opr\//i)){
      browserName = "opera";
    } else if(userAgent.match(/edg/i)){
      browserName = "edge";
    } else{
      browserName="unknown";
    }
  return browserName;
}

function detectDevice(){
  let userAgent = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) {
    return "Tablet";
  }
  else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(userAgent)) {
    return "Mobile";
  }
  return "Desktop";
}


// --------------------------------------------------------------------------------------------------------------------------------------------------------


// Add event listener for page closed
function page_closed (full_endpoint) {
  var payload = {
    event_name: 'page_closed',
    user_data: {client_id: 1234},
    session_data: {session_id: "1234_4567"},
    page_data: {page_location: "/"},
    event_data: {event_timestamp: '1234567890123'},
    user_agent: navigator.userAgent,
    browser: detectBrowser(),
    browser_language: navigator.language, 
    device: detectDevice(),
    screen_resolution: window.screen.width + 'x' + window.screen.height
  }
  
  fetch(full_endpoint, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(payload)
  })
  .then(() => {
  })
  .catch((error) => {
    console.log(error)
  })
}

function addPageClosedListener(full_endpoint, mode, secret_key){  
  if (mode === 'add') { 
    window.addEventListener("beforeunload", page_closed(full_endpoint), true)
  } else if (mode === 'remove') {
    window.removeEventListener("beforeunload", page_closed(full_endpoint), true)
  } 
}
