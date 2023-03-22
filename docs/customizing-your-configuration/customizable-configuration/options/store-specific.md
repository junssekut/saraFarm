# Store Specific

Store specific items so that your bot won't trash them and get them lost. Most of the time store specific are used for event items.

{% embed url="https://github.com/junssekut/saraItemDatabase/blob/main/ItemDatabase.lua" %}
Item Database
{% endembed %}

#### Example

```lua
storeSpecific = {
    enabled = true,
    backgroundID = 0,
    minimum = 130,
    items = { 242, 2978 },
    storage = {
        world = 'sekutitems1',
        id = 'sekut'
    }
}
```
