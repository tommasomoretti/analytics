# TO DO:

## Crossdomain tracking
Broadcast Channel API
The Broadcast Channel API allows communication between Tabs, Windows, Frames, Iframes, and Web Workers. One Tab can create and post to a channel as follows.

const channel = new BroadcastChannel('app-data');
channel.postMessage(data);
And other Tabs can listen to channel as follows.

const channel = new BroadcastChannel('app-data');
channel.addEventListener ('message', (event) => {
 console.log(event.data);
});
This way, Browser contexts (Windows, Tabs, Frames, or Iframes) can communicate. Even though this is a convenient way of communication between Browser Tabs, safari and IE does not support this. You can find more details in MDN documentation for BroadcastChannel.


## Timing data su page_info
Time to DOM Interactive
<pre><code>console.log(performance.timing.responseStart)</pre></code>

Time to DOM Complete
<pre><code>console.log(performance.timing.responseStart)</pre></code>

Page Render Time
<pre><code>console.log(performance.timing.domLoading)</pre></code>

Total Page Load Time
<pre><code>console.log(performance.timing.navigationStart)</pre></code>

Event listener
<pre><code>window.addEventListener('DOMContentLoaded', (event) => {
  // Send timing data
})</pre></code>


## Session start event
Quando crea il sessionStorage con i dati della sessione

## Session end event
Event listener
<pre><code>window.addEventListener('beforeunload', (event) => {
  // Send timing data
})</pre></code>
