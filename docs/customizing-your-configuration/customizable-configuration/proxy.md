# Proxy

You need to set this feature carefully because it's the most optional required thing in this script, as it could cause force close by the Pandora itself if it's not setted up correctly.&#x20;

{% hint style="danger" %}
You need to **DISABLE** this feature if you do not wish to use this feature.
{% endhint %}

#### Limit

{% hint style="info" %}
If your limit is 3, for bot 1 to 3 it will use the proxy number 1, then for bot 4 to 6 it will use the proxy number 2, etc.
{% endhint %}

Limit is for auto-assign proxy, for example if your limit is `3`then the proxy assigner will handle it using the formula `( bot_index / limit ) + 1`.

#### Backup Proxy

{% hint style="info" %}
The usage of backup proxy is the same as default proxy, it will follow the index of the current bot.
{% endhint %}

Backup proxy will trigger after bot disconnected for more than 3 hours, it will switch back and forth from default proxy to backup proxy over time to time.

#### Use Local

{% hint style="info" %}
This is an useful setting if you have your Remote Desktop Connection IP Address non blocked.
{% endhint %}

The auto-assign proxies system will use your local Remote Desktop Connection ( RDP ) IP Address.&#x20;

#### Example

```lua
proxy = {
    enabled = true,
    limit = 3,
    useLocal = true,
    proxies = {
        '1.1.1.1:1111:usr:psw',
        '1.1.1.1:1111:usr:psw',
    },
    
    backup = {
        enabled = true,
        limit = 6,
        time = 7200,
        proxies = {
            '1.1.1.1:1111:usr:psw',
            '1.1.1.1:1111:usr:psw',
            '1.1.1.1:1111:usr:psw',
        }
    }
}
```
