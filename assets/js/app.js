(function () {
  var LAUNCH_ISO = "2026-09-15T08:00:00+02:00";
  var launchTime = new Date(LAUNCH_ISO).getTime();

  var countdownBox = document.getElementById("countdown-box");
  var liveBox = document.getElementById("live-box");
  var liveSub = document.getElementById("live-sub");

  var elDays = document.getElementById("cd-days");
  var elHours = document.getElementById("cd-hours");
  var elMinutes = document.getElementById("cd-minutes");
  var elSeconds = document.getElementById("cd-seconds");

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function showLive() {
    countdownBox.classList.add("hidden");
    liveBox.classList.remove("hidden");

    var elapsedMs = Date.now() - launchTime;
    var dayNumber = Math.max(1, Math.floor(elapsedMs / 86400000) + 1);
    liveSub.textContent = "Dag " + dayNumber + " af togtet — følg med lige nu på Twitch.";
  }

  function tick() {
    var diff = launchTime - Date.now();

    if (diff <= 0) {
      showLive();
      return;
    }

    var days = Math.floor(diff / 86400000);
    var hours = Math.floor((diff % 86400000) / 3600000);
    var minutes = Math.floor((diff % 3600000) / 60000);
    var seconds = Math.floor((diff % 60000) / 1000);

    elDays.textContent = pad(days);
    elHours.textContent = pad(hours);
    elMinutes.textContent = pad(minutes);
    elSeconds.textContent = pad(seconds);
  }

  tick();
  setInterval(tick, 1000);
})();
