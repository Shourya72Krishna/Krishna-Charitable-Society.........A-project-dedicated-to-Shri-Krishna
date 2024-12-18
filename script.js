

// Function to display the current date and time
function displayDateTime() {
    const dateTimeContainer = document.getElementById('date-time-container');
    const currentDateTimeElement = document.getElementById('current-date-time');
    
    // Get the current date and time
    const currentDate = new Date();
    const formattedDateTime = currentDate.toLocaleString();  // Localized date and time format
    
    // Display the current date and time in the paragraph
    currentDateTimeElement.textContent = formattedDateTime;
    
    // Show the date-time container
    dateTimeContainer.style.display = 'block';
}

// Function to hide the date and time container
function hideDateTime() {
    const dateTimeContainer = document.getElementById('date-time-container');
    dateTimeContainer.style.display = 'none';
}

// Event listener for the "Show Date and Time" button
document.getElementById('showDateTimeButton').addEventListener('click', displayDateTime);

// Event listener for the "Hide" button
document.getElementById('hideDateTimeButton').addEventListener('click', hideDateTime);
