function updateTime() {
    const now = new Date();
    
    // Format hours, minutes, seconds to always have two digits
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // Update HTML elements
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    
    // Format date efficiently
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').textContent = now.toLocaleDateString(undefined, options);
}

// Initial call to avoid delay
updateTime();

// Update every second (1000 ms)
setInterval(updateTime, 1000);
