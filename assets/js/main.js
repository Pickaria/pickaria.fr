const times = {
	year: 31536000,
	month: 2592000,
	week: 10080,
	day: 86400,
	hour: 3600,
	minute: 60,
	second: 0,
};

const rft = new Intl.RelativeTimeFormat("fr", {
	localeMatcher: "best fit", // other values: "lookup"
	numeric: "auto", // other values: "auto"
	style: "long", // other values: "short" or "narrow"
});

/**
 * Format duration since date using the biggest unit
 * @param {Date} date
 * @returns {string}
 */
function timeSince(date) {
	let duration = (date.getTime() - Date.now()) / 1000;

	for (const key in times) {
		if (times.hasOwnProperty(key)) {
			const time = times[key];
			if (Math.abs(duration) > time) {
				return rft.format(Math.trunc(duration / time), key);
			}
		}
	}
}

document.querySelectorAll("time.dt-published-ago").forEach(time => {
	const date = new Date(time.getAttribute("datetime"));
	time.innerText = timeSince(date);
});