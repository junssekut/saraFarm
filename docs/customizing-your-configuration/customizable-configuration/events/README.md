---
description: Settings for any events that happened inside the script.
---

# Events

{% hint style="info" %}
Still in progress of moving all settings into events.
{% endhint %}

#### Example

```lua
events = {
    onSuspended = {
        removeAllBot = false,
        changeBot = false,
        removeBot = true
    },
    onPreFarm = {
        minimumSeeds = 98
    },
    onFarming = {
        plant = true
    }
}
```
