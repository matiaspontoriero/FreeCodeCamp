const all = document.getElementById("AllStreamers");
const online = document.getElementById("OnlineStreamers");
const offline = document.getElementById("OfflineStreamers");

const streamers = [
	{ name: "ESL_SC2", status: "" },
	{ name: "OgamingSC2", status: "" },
	{ name: "cretetion", status: "" },
	{ name: "freecodecamp", status: "" },
	{ name: "storbeck", status: "" },
	{ name: "habathcx", status: "" },
	{ name: "RobotCaleb", status: "" },
	{ name: "noobs2ninjas", status: "" },
];

const getStreamerStatus = async (streamer) => {
	try {
		const url = `https://api.freecodecamp.org/api/twitch/${streamer.name}`;
		const response = await fetch(url);
		if (response.ok) {
			const data = await response.json();
			streamer.status = data.status;
			return data;
		} else {
			throw new Error("Network response was not ok.");
		}
	} catch (error) {
		console.error(error);
		streamer.status = "Error";
		return { error: "An error occurred" };
	}
};

const statusChecker = async () => {
	for (let i = 0; i < streamers.length; i++) {
		const data = await getStreamerStatus(streamers[i]);
		streamers[i].status = data.status;
	}
};

statusChecker().then(() => {
	all.innerHTML = streamers
		.map((streamer) => `<li>${streamer.name} - ${streamer.status}</li>`)
		.join("");
});
