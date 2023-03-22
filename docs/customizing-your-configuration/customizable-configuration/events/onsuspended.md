---
description: Triggered every time when your bot is suspended.
---

# onSuspended

#### Remove All Bot

{% hint style="info" %}
Only removes all bot in 1 pandora list.
{% endhint %}

When this option is set, everytime any of your bot get suspended it will remove all of the bots immediately.

#### Change Bot

{% hint style="warning" %}
You need to set your backup bots first, [backup-bots.md](../../bots-configuration/backup-bots.md "mention").
{% endhint %}

If your bot is getting the status `suspended` it will automatically change your bot into the next credential of your backup bots.

#### Remove Bot

This option will make any of your suspended bot removed from the list.

#### Example

```lua
onSuspended = {
    removeAllBot = true,
    changeBot = false,
    removeBot = false
}
```
