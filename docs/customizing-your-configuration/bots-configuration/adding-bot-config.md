# Adding Bot Config

Adding bot config is as easy as smoking your lovely cigarette, all you need to do is copy the first format of the config ( there is one inside your script, it's better to use the latest one than this one , as it might get outdated ).

{% hint style="info" %}
You don't need to change the `bots[#bots + 1]` if you are using the format. There is alternative way by using the default format bots\[1], bots\[2], etc.
{% endhint %}

#### Example Using bots\[#bots + 1]

```lua
bots[#bots + 1] = {
	credential = {
		name = 'botsekut1',
		password = 'sekut'
	},
	backup = { 'botsekutbackup1:sekut', 'botsekutbackup2:sekut' },
	worlds = {
		'worldsekut1',
		'worldsekut2-3'
	},
	startFrom = 0,
	id = 'sekut',
	webhooks = {
		status = 'https://discord.com/api/webhooks/etc',
		seed = 'https://discord.com/api/webhooks/etc2',
		pack = 'https://discord.com/api/webhooks/etc3'
	},
	storage = {
		seed = { 'sekutseed1:seed' },
		pack = { 'sekutpack1:seed' }
	}
}

bots[#bots + 1] = {
	credential = {
		name = 'botsekut2',
		password = 'sekut'
	},
	backup = { 'botsekutbackup3:sekut', 'botsekutbackup4:sekut' },
	worlds = {
		'worldsekut4',
		'worldsekut5-16'
	},
	startFrom = 0,
	id = 'sekut',
	webhooks = {
		status = 'https://discord.com/api/webhooks/etc',
		seed = 'https://discord.com/api/webhooks/etc2',
		pack = 'https://discord.com/api/webhooks/etc3'
	},
	storage = {
		seed = { 'sekutseed1:seed' },
		pack = { 'sekutpack1:seed' }
	}
}
```

#### Example Using bots\[1], bots\[2]

```lua
bots[1] = {
	credential = {
		name = 'botsekut1',
		password = 'sekut'
	},
	backup = { 'botsekutbackup1:sekut', 'botsekutbackup2:sekut' },
	worlds = {
		'worldsekut1',
		'worldsekut2-3'
	},
	startFrom = 0,
	id = 'sekut',
	webhooks = {
		status = 'https://discord.com/api/webhooks/etc',
		seed = 'https://discord.com/api/webhooks/etc2',
		pack = 'https://discord.com/api/webhooks/etc3'
	},
	storage = {
		seed = { 'sekutseed1:seed' },
		pack = { 'sekutpack1:seed' }
	}
}

bots[2] = {
	credential = {
		name = 'botsekut2',
		password = 'sekut'
	},
	backup = { 'botsekutbackup3:sekut', 'botsekutbackup4:sekut' },
	worlds = {
		'worldsekut4',
		'worldsekut5-16'
	},
	startFrom = 0,
	id = 'sekut',
	webhooks = {
		status = 'https://discord.com/api/webhooks/etc',
		seed = 'https://discord.com/api/webhooks/etc2',
		pack = 'https://discord.com/api/webhooks/etc3'
	},
	storage = {
		seed = { 'sekutseed1:seed' },
		pack = { 'sekutpack1:seed' }
	}
}
```
