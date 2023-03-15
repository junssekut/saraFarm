# Reconnect

Reconnect setting that will apply every time the bot is trying to connect into the server.

#### Spam Connect ( Bypassing Server Overload )

{% hint style="info" %}
Spam connect is designed to bypass the server overload so that your bots will not be hold for so long that you could wait like 2+ hours just so that your bots get logged in back.&#x20;
{% endhint %}

This feature spam connect will keep spamming connect in the safe method where it will try to connect until it's limit is reached ( x8 ), if it is then it will wait for `time` minutes before trying to connect again.

#### Example

```lua
reconnect = {
    spamConnect = true,
    limiter = 8,
    time = 5
}
```
