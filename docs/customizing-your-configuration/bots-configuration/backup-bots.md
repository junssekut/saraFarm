# Backup Bots

This section is **OPTIONAL** and you can either use it or not, if you do not wish to use this feature then you can leave it like it is.

{% hint style="warning" %}
You can not use guest account on backup bots.
{% endhint %}

#### Example No Backup Bots

```lua
backup = { }
```

#### Example Using Backup Bots

{% hint style="info" %}
The format for the backup bot is `name:password` or `name`.
{% endhint %}

```lua
backup = { 'botsekutbackup1:sekut', 'botsekutbackup2:sekut' }
```

If you wish to not specify the password manually, you can use only the bot name and it will use the credential password above it.

```lua
backup = { 'botsekutbackup1', 'botsekutbackup2' }
```
