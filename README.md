# TO DO:

## Finire conteggio eventi localStorage
💩

## Timing data
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


## Session start
Quando crea il sessionStorage con i dati della sessione

## Session end
Event listener
<pre><code>window.addEventListener('beforeunload', (event) => {
  // Send timing data
})</pre></code>
