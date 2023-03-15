# Control

The check for every command is every plant process, available control commands are:

* `online`: Set your bots to online if it's status before is `offline`.
* `offline`: Make your bots disconnected and wait for the next status per 30 seconds.
* `stop`: Stop the script.

#### Example

{% hint style="warning" %}
Using control needed to be in **RAW** format.
{% endhint %}

<figure><img src="../../.gitbook/assets/URL Control.png" alt=""><figcaption><p>Example URL Control</p></figcaption></figure>

```lua
control = 'https://rentry.org/exsaraFarmControl/raw'
```
