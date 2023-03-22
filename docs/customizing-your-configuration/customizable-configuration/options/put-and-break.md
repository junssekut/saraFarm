# Put and Break

#### Fixed Position

This is useful for handling lock system in your farm world, if you enable this option then the bot will only put and break at fixed position ( 0, 1 ).

#### Upgrade Backpack

The bot will automatically upgrade their backpack if it's still not exceeding `maximumSlots`.

#### Show Animation

If this feature is enabled it will make the bot show punch or place animation like any real Growtopia player.

#### Example

```lua
pnb = {
    showAnimation = true,
    fixedPos = false,
    upgradeBackpack = {
        enabled = true,
        maximumSlots = 66
    }
}
```
