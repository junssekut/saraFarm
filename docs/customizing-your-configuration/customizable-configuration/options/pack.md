# Pack

You need to specify your own setting if other than world lock pack.

#### Background Id

{% hint style="info" %}
Set `0` to enable no background dropping.
{% endhint %}

The background id for dropping packs into.

#### Limiter

{% hint style="info" %}
Set to `0` to enable always buying.
{% endhint %}

Limiter for bot to buy pack if exceeded the limit amount.

#### Upgrade Backpack

Automaticly upgrade your bot backpack if it's backpack is full.

#### Auto Convert

Convert your dropped 100 world locks into 1 diamond lock instantly after drop.

#### Buy Put and Break

Try to buy packs after every put and break. Recommended if you want to save your world locks before the bot get suspended.

#### Data

The data of item pack you wish to buy for every bot.

{% embed url="https://github.com/junssekut/saraItemDatabase/blob/main/ItemDatabase.lua" %}
Item Database
{% endembed %}

#### Example

```lua
pack = {
    enabled = true,
    backgroundID = 0,
    limiter = 20000,
    upgradeBackpack = true,
    autoConvert = true,
    buyPutAndBreak = true,
    
    data = {
        name = 'world_lock_10_pack',
        price = 20000
        id = { 242 }
    }
}
```
