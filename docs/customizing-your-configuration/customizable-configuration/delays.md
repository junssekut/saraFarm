# Delays

Delay settings are best to keep it as default value because it's already tested and worked by our Developer Team.

{% hint style="info" %}
Delay values are in milliseconds ( 1000 Milliseconds = 1 Second ).
{% endhint %}

|    Key    |            Description           | Default Value |
| :-------: | :------------------------------: | ------------- |
|   login   |         Delay after login        | 5000          |
| skipWorld |    Delay before skipping world   | 15000         |
|  buyPack  |     Delay after buying a pack    | 1750          |
|   punch   | Delay after sending punch packet | 165           |
|   place   | Delay after sending place packet | 115           |
|   trash   |   Delay after trashing an item   | 250, 1500     |
|  harvest  |   Delay after harvesting a tree  | 50, 100       |
|   plant   |    Delay after planting a tree   | 60, 50        |
|    drop   |   Delay after dropping an item   | 250, 1250     |

#### Example

<pre class="language-lua"><code class="lang-lua"><strong>delays = {
</strong><strong>    login = 5000,
</strong><strong>    skipWorld = 15000,
</strong><strong>    buyPack = 1750,
</strong><strong>    punch = 165,
</strong><strong>    place = 115,
</strong><strong>    trash = {
</strong><strong>        before = 250,
</strong><strong>        after = 1500
</strong><strong>    },
</strong><strong>    harvest = {
</strong><strong>        pathfinding = 50,
</strong><strong>        tree = 100
</strong><strong>    },
</strong><strong>    plant = {
</strong><strong>        pathfinding = 60,
</strong><strong>        tree = 50
</strong><strong>    },
</strong><strong>    drop = {
</strong><strong>        before = 250,
</strong><strong>        after = 1250
</strong><strong>    }
</strong><strong>}
</strong></code></pre>
