# Webhook

Different from webhook setting before, this type of webhook is the setting of which the information to send by the edit webhook.

{% hint style="info" %}
If notifyEveryone is set to `true` then you need to enable debug webhook too to see if any bot get disconnected, everyone will get tagged.
{% endhint %}

#### Debug Webhook

Debug webhook is non-edit webhook and will display message as an logger for your bot. The available placeholders are:

* `%{status}`: Bot status ( online, offline, login fail, etc ).
* `%{world}`: Bot current world.
* `%{name}`: Bot name.
* `%{message}`: Message information.

#### Nuked Webhook

The bot will send any nuked worlds it try to warp and if `notifyEveryone` is enabled then it will tag everyone.

#### Suspended Webhook

If the bot is suspended, before continue to do any event they will send a message and if `notifyEveryone` is enabled then it will tag everyone.

#### Example

```lua
webhook = {
    enabled = true,
    showPing = false,
    showGems = false,
    notifyEveryone = true,
    maximumWorlds = 10,
    
    debug = {
        enabled = false,
        format = '[%{status}][%{world}] %{name}: %{message}',
        url = 'https://discord.com/api/webhooks/etc8',
    },
    
    nuked = {
        enabled = false,
        url = 'https://discord.com/api/webhooks/etc9'
    },
    
    suspended = {
        enabled = false,
        url = 'https://discord.com/api/webhooks/etc10'
    }
}
```
