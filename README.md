# pattern_match

> *WIP ! DON'T USE THIS OR AT YOUR OWN RISK !!!*

Based on [Pattern matching in JavaScript](https://www.bramstein.com/writing/pattern-matching.html<Paste>) and [Advanced Pattern Matching in JavaScript](https://www.bramstein.com/writing/advanced-pattern-matching.html) by [Bram Stein](https://www.bramstein.com/).

Example :

```js
> var fun = require('./lib/pattern_match').fun;
> var $ = require('./lib/pattern_match').$;
> var hello = fun(
... ['hello', function() { console.log("en"); }],
... ['bonjour', function() { console.log("fr"); }],
... [$, function() { console.log("??"); }]
... );
> hello("hola")
??
> hello("hello")
en
> hello("bonjour")
fr
```

Other example:

```js
> var fact = fun(
...   [0, function()  { return 1; } ],
...   [$, function(n) { return n * fact(n - 1); } ]
... );
> fact(10);
3628800
```

## Tests

```sh
npm test
```

## Licence

I don't know yet, since it's based on Bram's job, I need to see with him about the licence. So please before using this in your work, send me a message or contact Bram directly.

