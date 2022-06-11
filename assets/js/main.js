function timeSince(date) {
    const seconds = Math.floor((new Date() - date) / 1000);

    let interval = seconds / 31536000;

    if (interval > 1) {
        return Math.floor(interval) + " ans";
    }

    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " mois";
    }

    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " jours";
    }

    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " heures";
    }

    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutes";
    }

    return Math.floor(seconds) + " secondes";
}

document.querySelectorAll("time.dt-published-ago").forEach(time => {
    const date = new Date(time.getAttribute("datetime"));

    time.innerText = timeSince(date);
});

const copyAddress = document.getElementById("copyAddress");

if (copyAddress) {
    copyAddress.addEventListener("click", function () {
        const innerText = this.innerText;
        this.innerText = "Adresse copiée !";
        navigator.clipboard.writeText("pickaria.fr");

        setTimeout(() => {
            this.innerText = innerText;
        }, 1000);
    }, { passive: true, });
}