# General

General settings are mostly will get deleted in the future as it's default setting is best.

#### Break Tile

Break tile currently only support 1 tile only because of not efficiency issue on other tiles since it's not really that good.

#### Block Maximum

{% hint style="info" %}
If the block amount in bot's inventory is more than or equal to the `blockMaximum` then it will trigger put and break process.
{% endhint %}

This option will make the [put-and-break.md](options/put-and-break.md "mention") process triggered, maybe in the future there is onPutAndBreak.

#### Seed Maximum

{% hint style="info" %}
If the bot is still doing put and break or not doing anything at the moment and it got more than or equal to 190 seeds in it's inventory, then it will trigger the planting process.
{% endhint %}

This option will make the planting process triggered, maybe in the future there is onPlant.

#### Store Maximum

This is the sub-process after the planting process is triggered, it will check whether or not the bot has more than or equal to 130 seeds in it's inventory, if it is then it will store the seeds automaticly.

#### Collect Range

The collect range for the bots, sadly that this option is basically unusable or useless because it's collect range is hard-coded in the script itself at the moment ( saraFarm v0.5.3c. )

#### Example

<pre class="language-lua"><code class="lang-lua"><strong>general = {
</strong><strong>    breakTile = 1,
</strong><strong>    blockMaximum = 190,
</strong><strong>    seedMaximum = 190,
</strong><strong>    storeMaximum = 130,
</strong><strong>    collectRange = 3
</strong><strong>}
</strong></code></pre>
