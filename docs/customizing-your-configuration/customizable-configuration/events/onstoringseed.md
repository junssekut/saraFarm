---
description: Triggered every time when your bot is storing seeds.
---

# onStoringSeed

#### Keep

If this option is enabled then the bot will keep the seeds inside the world at fixed position ( 0, 0 ), this is useful where you could avoid subserver problem between warping worlds.

#### Example

```lua
onStoringSeed = {
    keep = false
}
```
