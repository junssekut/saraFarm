# Check Jammed

If this feature is enabled, the bot will check if the world is jammed or not, if it is jammed then it will skip the world and send webhook message `NOT_JAMMED`.

{% hint style="info" %}
For better usage, this feature require webhook status ( edit ) to be enabled.
{% endhint %}

{% hint style="info" %}
This feature will also send message to debug webhook.
{% endhint %}

#### Example

```lua
checkJammed = true
```
