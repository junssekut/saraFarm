# Bots Configuration

You can add **unlimited** amount of bots config inside **one** script! This script is designed to be one long running and automated all sort of boring stuff that you don't need to do yourself.

{% hint style="info" %}
You can use `'` or `"` for string, it's basically the same.
{% endhint %}

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
```
