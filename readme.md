# dockerode-ts

[Dockerode](https://github.com/apocas/dockerode) wrapped in TypeScript

## Why?
The dockerode library is great and has quite a large API surface.  
I found myself frequently referring to the source code of `dockerode` since the documentation is not complete.  
This is an effort to statically type that API surface which is another form of documentation.

## Where are the types?
You can view them [here](https://github.com/Seikho/dockerode-ts/blob/master/dockerode.d.ts)

## Requirements
- TypeScript (1.8+)
- NodeJS

## Installation
```
npm install dockerode-ts
```

## Usage
```ts
import * as Dockerode from 'dockerode-ts';
// or...
import Dockerode = require('dockerode-ts');

const docker = new Dockerode({ /** options... */ });
```

## TODOs
- Most callbacks are typed as `any`. These should be typed correctly.

## License
MIT