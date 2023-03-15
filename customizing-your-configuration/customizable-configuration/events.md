# Events

Settings for any events that happened, for now it only have these events:

* `onSuspended`: Triggered every any bot account is suspended.

#### onSuspended

{% hint style="warning" %}
You need to enable `changeBot` by setting it to `true` to enable the feature auto change bot if suspended.
{% endhint %}

Any of these settings only need 1 feature enabled, otherwise the script will not correctly and may causes bugs.

#### Example

```lua
events = {
    onSuspended = {
        removeAllBot = false,
        changeBot = false,
        removeBot = true
    }
}
```
