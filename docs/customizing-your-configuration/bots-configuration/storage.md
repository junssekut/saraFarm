# Storage

You must specify your storage world in order for the script to work correctly.

{% hint style="info" %}
If the storage is multi world, then the bot will choose randomly from the list from time to time.
{% endhint %}

{% hint style="info" %}
The format for storage world is world:id
{% endhint %}

#### Example Storage

```lua
storage = {
    seed = { 'sekutseed1:seed' },
    pack = { 'sekutpack1:pack' }
}
```

#### Example Multi Storage

```lua
storage = {
    seed = { 'sekutseed1:seed', 'sekutseed2:seed' },
    pack = { 'sekutpack1:pack', 'sekutpack2:pack' }
}
```

#### Example URL Worlds

{% hint style="warning" %}
Using worlds via URL is needed to be in **RAW** format.
{% endhint %}

<figure><img src="../../.gitbook/assets/URL Seed.png" alt=""><figcaption><p>Example URL Storage Seed</p></figcaption></figure>

<figure><img src="../../.gitbook/assets/URL Pack.png" alt=""><figcaption><p>Example URL Storage Pack</p></figcaption></figure>

```lua
storage = {
    seed = 'https://rentry.org/exsaraFarmStorageSeed/raw',
    pack = 'https://rentry.org/exsaraFarmStoragePack/raw'
}
```
