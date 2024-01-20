$(document).ready(function () {
  // Update the current day using Day.js
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'))

  function generateTimeBlocks () {
    const container = $('.container')
    const workHours = [
      '9 AM',
      '10 AM',
      '11 AM',
      '12 PM',
      '1 PM',
      '2 PM',
      '3 PM',
      '4 PM',
      '5 PM'
    ]

    // Get the current hour using Day.js
    const currentHour = dayjs().hour()

    // Loop through work hours and create time blocks
    workHours.forEach((hour, index) => {
      const timeBlock = $('<div>').addClass('row time-block')
      const hourCol = $('<div>').addClass('col-md-1 hour').text(hour)
      const textAreaCol = $('<textarea>').addClass('col-md-10 description')

      // Set the background color based on past, present, or future
      if (index + 9 < currentHour) {
        textAreaCol.addClass('past')
      } else if (index + 9 === currentHour) {
        textAreaCol.addClass('present')
      } else {
        textAreaCol.addClass('future')
      }

      // Load saved event from local storage
      const savedEvent = localStorage.getItem(hour)
      if (savedEvent) {
        textAreaCol.val(savedEvent)
      }

      const saveBtnCol = $('<div>').addClass('col-md-1 saveBtn')
      const saveBtn = $('<i>').addClass('fas fa-save')

      // Save button click event
      saveBtn.on('click', function () {
        const eventText = textAreaCol.val()
        localStorage.setItem(hour, eventText)
      })

      saveBtnCol.append(saveBtn)

      // Append elements to the time block
      timeBlock.append(hourCol, textAreaCol, saveBtnCol)

      // Append the time block to the container
      container.append(timeBlock)
    })
  }

  generateTimeBlocks()
})
