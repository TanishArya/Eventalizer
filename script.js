// Get form and event list elements
const eventForm = document.getElementById('eventForm');
const eventList = document.getElementById('eventList');

// Event listener for form submission
eventForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  const eventName = document.getElementById('eventName').value;
  const eventDate = document.getElementById('eventDate').value;
  const eventTime = document.getElementById('eventTime').value;
  const eventLocation = document.getElementById('eventLocation').value;
  const eventDescription = document.getElementById('eventDescription').value;

  // Create new event list item
  const li = document.createElement('li');
  li.innerHTML = `
    <h3>${eventName}</h3>
    <p><strong>Date:</strong> ${eventDate}</p>
    <p><strong>Time:</strong> ${eventTime}</p>
    <p><strong>Location:</strong> ${eventLocation}</p>
    <p><strong>Description:</strong> ${eventDescription}</p>
  `;

  // Add new event to the list
  eventList.appendChild(li);

  // Clear form fields
  eventForm.reset();
});
