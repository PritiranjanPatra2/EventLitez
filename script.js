document.getElementById('eventForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const eventName = document.getElementById('eventName').value;
    const eventDate = document.getElementById('eventDate').value;
    const eventTime = document.getElementById('eventTime').value;
    const eventLocation = document.getElementById('eventLocation').value;

    if (eventName && eventDate && eventTime && eventLocation) {
        const eventList = document.getElementById('eventsList');
        const listItem = document.createElement('li');

        listItem.innerHTML = `
            <h3>${eventName}</h3>
            <p>Date: ${eventDate}</p>
            <p>Time: ${eventTime}</p>
            <p>Location: ${eventLocation}</p>
        `;

        eventList.appendChild(listItem);

        // Clear form fields after submission
        document.getElementById('eventForm').reset();
    } else {
        alert('Please fill in all fields');
    }
});
