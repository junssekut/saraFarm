# Rest

Resting option for the bot so it could avoid ban waves.

{% hint style="danger" %}
Only set 1 feature of rest to be set as `true` or it the script will not run correctly.
{% endhint %}

#### World

Bot will try to rest per `perWorld` done by the bot and wait for `wait` `minutes.`

#### Specific

{% hint style="info" %}
You do not need to set your offset again if your time is West Indonesian Time or _WIB_ as for West Indonesian Time offset is +7.
{% endhint %}

Bot will try to rest every time the current time is between time `off` or `on`, you need to specify your `offset` if you're not in UTC+7. Check below to check your UTC+ or UTC- value. If you wish to make the bot check every put and break ( by default is every plant ), then set `everyPutAndBreak` to `true`.

{% embed url="https://www.timeanddate.com/time/zone/timezone/utc" %}
UTC Time
{% endembed %}

#### Rotation

Rotation setting is best for rotation service seller or _jastip rotasi_. Where you can set how many rotation do you need before the bot will stop and wait itself. For example if you set the rotation to `3` then it will wait for `wait` minutes after `3` rotation is done, `1` rotation = `1` world list or `14` worlds. Then it would take ( `14*3` ) worlds before the bot wait for `wait` minutes.

#### Example

```lua
rest = {
    world = {
        enabled = false,
        perWorld = 5,
        wait = 120
    },
    
    specific = {
        enabled = true,
        offset = 7,
        checkPutAndBreak = false,
        
        times = {
            { off = '10:30', '22:00' },
            { off = '24:00', '27:00' }
        }
    },
    
    rotation = {
        enabled = false,
        perRotation = 1,
        wait = 120
    }
}
```
