# Trash

Trash process will happens every after put and break process.

#### Minimum

The minimum item count before getting trashed.

#### Except

Whitelisted item id so the item is not getting trashed by the bot. See below for item database.

{% embed url="https://github.com/junssekut/saraItemDatabase/blob/main/ItemDatabase.lua" %}
Item Database
{% endembed %}

#### Example

```lua
trash = {
    minimum = 130,
    except = { 7188, 5480 }
}
```
