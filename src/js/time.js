(() => {
  var timeDisplay = document.getElementById('time');
  function refreshTime() {
    var dateString = new Date().toLocaleString('en-US', {
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
      timeZone: 'America/New_York',
    });
    var formattedString = dateString.replace(', ', ', ');
    timeDisplay.innerHTML = formattedString;
  }
  setInterval(refreshTime, 1000);
})();
