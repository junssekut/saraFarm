# Change Bot

{% hint style="danger" %}
This feature is still in **BETA**.
{% endhint %}

{% hint style="danger" %}
You need to specify your backup bot credentials inside your bot config. [backup-bots.md](../../bots-configuration/backup-bots.md "mention")
{% endhint %}

#### World Change

The bot will try to change account every `perWorld` amount of world done.

#### Level Up

The bot will try to change account every `perLevel` level.

#### Example

```lua
changeBot = {
    worldChange = {
        enabled = true,
        perWorld = 1
    },
    
    levelUp = {
        enabled = false,
        perLevel = 1
    }
}
```
