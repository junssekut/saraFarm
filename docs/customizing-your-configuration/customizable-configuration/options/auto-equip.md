# Auto Equip

You can add up unlimited items to auto equipped by the bot before they are rotating the farms.

{% embed url="https://github.com/junssekut/saraItemDatabase/blob/main/ItemDatabase.lua" %}
Item Database
{% endembed %}

#### Example Disabling Auto Equip

```lua
autoEquip = {}
```

#### Example Auto Equip

```lua
autoEquip = {
    { item = 98, storage = { world = 'sekutpickaxe1', id = 'pick' } }
}
```

#### Example Multiple Auto Equip

```lua
autoEquip = {
    { item = 98, storage = { world = 'sekutpickaxe1', id = 'pick' } },
    { item = 5788, storage = { world = 'sekutpickaxe1', id = 'pick' } }
}
```
