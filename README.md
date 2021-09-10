# env

A simple environment variable wrapper for node. Uses `dotenv` under the hood to configure environment variables, and then provides a utility to easily access env variables and assign a fallback if necessary.

```js
require('@kerimhudson/env').config()
import env from '@kerimhudson/env'

const port = env('port', 3000) // key and fallback
```