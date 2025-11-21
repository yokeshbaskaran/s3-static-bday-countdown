// Birthday date (5 May 2026)
const birthdayMonth = 4;
const birthdayDay = 5;

function updateTimes() {
  const now = new Date();

  document.getElementById("mumbai").textContent = now.toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
    hour12: false,
  });

  document.getElementById("utc").textContent = now.toLocaleString("en-US", {
    timeZone: "Etc/UTC",
    hour12: false,
  });

  document.getElementById("browser").textContent = now.toLocaleString();

  document.getElementById("newyork").textContent = now.toLocaleString("en-US", {
    timeZone: "America/New_York",
    hour12: false,
  });

  document.getElementById("london").textContent = now.toLocaleString("en-US", {
    timeZone: "Europe/London",
    hour12: false,
  });
}

function updateCountdown() {
  const now = new Date();
  let year = now.getFullYear();

  let birthday = new Date(year, birthdayMonth, birthdayDay);
  if (now > birthday) {
    birthday = new Date(year + 1, birthdayMonth, birthdayDay);
  }

  const diff = birthday - now;

  document.getElementById("days").textContent = Math.floor(
    diff / (1000 * 60 * 60 * 24)
  );
  document.getElementById("hours").textContent = Math.floor(
    (diff / (1000 * 60 * 60)) % 24
  );
  document.getElementById("minutes").textContent = Math.floor(
    (diff / (1000 * 60)) % 60
  );
  document.getElementById("seconds").textContent = Math.floor(
    (diff / 1000) % 60
  );
}

// Initialize
updateTimes();
updateCountdown();

// Run every second
setInterval(() => {
  updateTimes();
  updateCountdown();
}, 1000);
