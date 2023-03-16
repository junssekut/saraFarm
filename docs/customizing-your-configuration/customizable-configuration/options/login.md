# Login

Login setting that will apply every first time the bot is logging into the server.

#### Spam Login ( Bypassing Server Overload )

{% hint style="info" %}
Spam login is designed to bypass the server overload so that your bots will not be hold for so long that you could wait like 2+ hours just so that your bots get logged in.&#x20;
{% endhint %}

This feature spam login will keep spamming login in the safe method where it will try to connect until it's limit is reached ( x8 ), if it is then it will wait for `time` minutes before trying to login again.

#### Force Login

By default, force login is not really necessary since it will wait for your bot to get online. Thus this making the auto login process longer.

#### Example

```lua
login = {
    spamLogin = true,
    forceLogin = true,
    limiter = 8,
    time = 5
}
```
