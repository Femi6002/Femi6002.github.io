document.addEventListener("DOMContentLoaded", function() {
    function updateTime() {
        const now = new Date();
        const utcTime = now.toUTCString().split(" ")[4];
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDay = days[now.getUTCDay()];

        document.getElementById("utcTime").textContent = utcTime;
        document.getElementById("dayOfWeek").textContent = currentDay;
    }

    function setImageNaturalDimensions() {
        const img = document.querySelector('img[data-testid="slackProfilePicture"]');
        img.onload = function() {
            img.width = img.naturalWidth;
            img.height = img.naturalHeight;
        }
    }

    updateTime();
    setInterval(updateTime, 1000);
    setImageNaturalDimensions();

});
