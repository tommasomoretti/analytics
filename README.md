// TO DO:

// Timing data
// Time to DOM Interactive
console.log(performance.timing.responseStart)
// Time to DOM Complete
console.log(performance.timing.responseStart)
// Page Render Time
console.log(performance.timing.domLoading)
// Total Page Load Time
console.log(performance.timing.navigationStart)

window.addEventListener('DOMContentLoaded', (event) => {
  // Send timing data
})


// Session start
// Quando crea il sessionStorage con i dati della sessione

// Session end
window.addEventListener('beforeunload', (event) => {
  // Send timing data
})
