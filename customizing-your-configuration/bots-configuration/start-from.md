# Start From

You can specify start from worlds if you needed to. If the start from value is not `0` then after 1 rotation the script itself will reset the start from back to 1.

#### Example Using Auto Start From

{% hint style="info" %}
If the value is set to `0` the script will determine itself where to start from, example if the bot is currently inside the world `worldsekut2` and the world list is `worldsekut1, worldsekut2, worldsekut3` it will start at `worldsekut2`_._
{% endhint %}

```lua
startFrom = 0
```

#### Example Using Start From

```lua
startFrom = 3
```
