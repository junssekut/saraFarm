# Customizable Configuration

This configuration is located below the [bots-configuration](../bots-configuration/ "mention"), **Customizable Configuration** is an configuration which will be applied to all of the bots that has been set.

{% hint style="danger" %}
The config below may be outdated, please download it manually or edit it manually via your script.
{% endhint %}

```lua
local customizable = {
	language = 'en',
	parameter = '1-4',
	control = 'https://rentry.org/exsaraFarmControl/raw',

	proxy = {
		enabled = true,
		limit = 3,
		proxies = {
			'1.1.1.1:1111:jRJsk:pl13213',
			'1.1.1.1:1111:jRJsk:pl13213',
		},

		backup = {
			enabled = false,
			limit = 6,
			proxies = {
				'1.1.1.2:1111:jRJsk:pl13213',
				'1.1.1.2:1111:jRJsk:pl13213'
			}
		}
	},

	webhook = {
		enabled = true,
		showPing = false,
		showGems = false,
		notifyEveryone = true,
		maximumWorlds = 10,

		debug = {
			enabled = false,
			format = '[%{status}][%{world}] %{name}: %{message}',
			url = 'https://discord.com/api/webhooks/etc4',
		},

		nuked = {
			enabled = false,
			url = 'https://discord.com/api/webhooks/etc5'
		},

		suspended = {
			enabled = false,
			url = 'https://discord.com/api/webhooks/etc6'
		},
	},

	events = {
		onSuspended = {			
			removeAllBot = false,
			changeBot = false,
			removeBot = true
		}
	},

	options = {
		randomRow = false,
		checkJammed = true,
		checkFire = true,

		changeBot = {
			worldChange = {
				enabled = false,
				perWorld = 1
			},

			levelUp = {
				enabled = false,
				perLevel = 1
			}
		},

		pnb = {
			upgradeBackpack = {
				enabled = true,
				maximumSlots = 66
			},
			showAnimation = false
		},

		rotation = 0,

		trash = {
			minimum = 130,
			except = { 7188, 5480 }
		},

		seed = {
			backgroundID = 0
		},

		pack = {
			enabled = true,
			backgroundID = 0,
			limiter = 0,
			upgradeBackpack = true,
			autoConvert = true,
			buyPutAndBreak = false,

			data = {
				name = 'world_lock_10_pack',
				price = 20000,
				id = { 242 }
			}
		},

		rest = {

			world = {
				enabled = false,
				perWorld = 5,
				wait = 120
			},

			specific = {
				enabled = false,
				offset = 7,
				checkPutAndBreak = false,

				times = {
					{ off = '10:30', on = '22:00' }
				}
			},

			rotation = {
				enabled = false,
				perRotation = 1,
				wait = 120
			}
		},

		login = {
			spamLogin = true,
			forceLogin = true,
			limiter = 8,
			time = 5
		},

		reconnect = {
			spamConnect = false,
			limiter = 8,
			time = 5
		},

		blacklistTile = { 
			{ x = 0, y = 0 },
			{ x = 1, y = 0 },
		},

		randomWorld = {
			enabled = false,
			count = 0,
			delay = 8000
		},

		randomChat = {
			enabled = false,
			sentences = { 'lagggg', 'omg growtopia so lag', 'boring bro', 'don\'t be so mad', 'wtf', 'lol', 'gg lol', 'omg', '/love' }
		},

		storeSpecific = {
			enabled = false,
			minimum = 130,
			items = { 9439 },
			storage = {
				world = 'sekutitems1',
				id = 'items'
			}
		},

		autoEquip = {
			{
				item = 98,
				storage = {
					world = 'sekutpickaxe1',
					id = 'pick'
				}
			},
			{
				item = 99,
				storage = {
					world = 'sekutpickaxeseed1',
					id = 'pick'
				}
			},
		}

	},

	general = {
		breakTile = 1,
		blockMaximum = 190,
		seedMaximum = 190,
		storeMaximum = 130,
		collectRange = 3,
	},

	delays = {
		login = 5000,
		skipWorld = 5000,
		buyPack = 1750,
		punch = 165,
		place = 115,
		trash = {
			before = 250,
			after = 1500
		},
		harvest = {
			pathfinding = 50,
			tree = 100
		},
		plant = {
			pathfinding = 60,
			tree = 50
		},
		drop = {
			before = 250,
			after = 1250
		}
	}
}
```

