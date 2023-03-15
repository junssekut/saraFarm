# Bot Credential

You need to specify your bot credential in order for auto-login to work and the entire script work correctly.

#### Guest Account

{% hint style="info" %}
Set the password to empty for guest accounts.
{% endhint %}

You can use guest account, the script support using guest account and skipping the tutorial by itself. If you do not wish to use any name, the bot will randomize the name 8 letter.

#### Example Random Guest Account

```lua
credential = {
    name = '',
    password = ''
}
```

#### Example Guest Account

```lua
credential = {
    name = 'botsekut1',
    password = ''
}
```

#### Example

```lua
credential = {
    name = 'botsekut1',
    password = 'sekut'
}
```
