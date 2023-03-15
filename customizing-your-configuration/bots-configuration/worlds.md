# Worlds

You must specify your worlds manually or use an worlds configurator from us.

{% hint style="info" %}
Ordered world easy syntax format is worldname\[min]-\[max], `worldname1-3` is basically the same as `worldname1, worldname2, worldname3`
{% endhint %}

#### Example Basic Worlds

```lua
worlds = {
    'worldsekut1',
    'worldsekut2-3'
}
```

#### Example URL Worlds

{% hint style="warning" %}
Using worlds via URL is needed to be in **RAW** format.
{% endhint %}

<figure><img src="../../.gitbook/assets/URL Worlds.png" alt=""><figcaption><p>Example URL Worlds</p></figcaption></figure>

```lua
worlds = 'https://rentry.org/exsaraFarmWorlds/raw'
```
