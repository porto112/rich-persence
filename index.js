var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
	client.request('SET_ACTIVITY', {
		pid: process.pid,
		activity : {
			details : "Game in development state. Game about buses in fictitious city.",
			assets : {
				large_image : "pmg_youtube_s",
				large_text : "PMG_youtube's Bus Simulator"
			},
			buttons : [{label : "🚌 Game 🚌" , url : "https://www.roblox.com/games/12864822258/PMG-youtube-s-Bus-Simulator-BETA"},{label : "🌍 Server 🌍" , url : "https://discord.gg/Fen6xe9KJh"}]
		}
	})
})
client.login({ clientId : "1109537253530796034" }).catch(console.error);
