# Auto Equip

You can add up unlimited items to auto equipped by the bot before they are rotating the farms.

{% embed url="https://github.com/junssekut/saraItemDatabase/blob/main/ItemDatabase.lua" %}
Item Database
{% endembed %}

#### Delayed Take

Enable this option so that your bot will have delay so they will not go into the specific world at the same time.

#### Limit

{% hint style="info" %}
You can set the limit to 0 to make the world have no limitation.
{% endhint %}

This option is useful to set a limit per worlds you have. For example, if you set it's limit to 30 then for bot with the index 1-30 will use the first world, 31-60 will use the second world, etc.

#### Example Disabling Auto Equip

```lua
autoEquip = {}
```

#### Example Auto Equip

```lua
autoEquip = {
    { 
        item = 98, 
        delayedTake = true, 
        limit = 30, 
        storages = { 'sekutpickaxe1:pick', 'sekutpickaxe2:pick' } 
    }
}
```

#### Example Multiple Auto Equip

```lua
autoEquip = {
    { 
        item = 98, 
        delayedTake = true, 
        limit = 30, 
        storages = { 'sekutpickaxe1:pick', 'sekutpickaxe2:pick' } 
    },
    {
        item = 99,
        delayedTake = true,
        limit = 0,
        storages = { 'sekutpickaxe1:pick' }
    }
}
```
