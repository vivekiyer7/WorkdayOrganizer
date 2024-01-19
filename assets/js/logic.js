document.addEventListener('DOMContentLoaded', function () {
  //Display current date in format Thrusday, September 5th
  const currentDateEl = document.getElementById('currentDay')
  const currentDate = new Date()
  const currentDateString = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  })
  currentDateEl.textContent = currentDateString
});
