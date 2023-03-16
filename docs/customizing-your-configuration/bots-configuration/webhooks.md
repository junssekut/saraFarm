# Webhooks

Webhook edit for your bot information and events that is happening on your bot.

{% hint style="danger" %}
**WEBHOOK STATUS:** Only 1 webhook link for 1 bot, do not use more than one webhook link for multiple bots as it will conflict to edit the webhook information.
{% endhint %}

{% hint style="info" %}
**WEBHOOK SEED OR PACK:** You can use 1 webhook link for a lot of bots with the same storage worlds, as it will update correctly and will not conflict.
{% endhint %}

#### Creating Discord Webhook

{% embed url="https://hookdeck.com/webhooks/platforms/how-to-get-started-with-discord-webhooks" %}
Creating Discord Webhook
{% endembed %}

#### Example

{% hint style="warning" %}
You do not need to specify the message id, the script will create an message id by itself automaticly!
{% endhint %}

```lua
webhooks = {
    status = 'https://discord.com/api/webhooks/etc',
    seed = 'https://discord.com/api/webhooks/etc2',
    pack = 'https://discord.com/api/webhooks/etc3',
}
```
