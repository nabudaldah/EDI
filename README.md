edi
========

Lightweight and versatile Electronic Data Interchange (EDI / EDIFACT) parser

## Format

[EDI / EDIFACT](https://en.wikipedia.org/wiki/EDIFACT) is a standard text based data interchange format which is specific to each industry, such as banking or energy. It relies heavily on codelists which makes it difficult to read by humans. This parser acts as an easy to use intermediary between the EDI / EDIFACT files and your node application.

## Setup

Install from npm:

```
npm install edi
```

In your node application:

```
var EDI = require('edi');

var text = "UNA:+.? 'UNB+IATB:1+6XPPC+LHPPC+940101:0950+1'UNH+1+PAORES:93:1:IA'MSG+1:45'IFT+3+XYZCOMPANY AVAILABILITY'ERC+A7V:1:AMD'IFT+3+NO MORE FLIGHTS'ODI'TVL+240493:1000::1220+FRA+JFK+DL+400+C'PDI++C:3+Y::3+F::1'APD+74C:0:::6++++++6X'TVL+240493:1740::2030+JFK+MIA+DL+081+C'PDI++C:4'APD+EM2:0:1630::6+++++++DA'UNT+13+1'UNZ+1+1'";

var msg = new EDI(text);
var batches = msg.bsegments();
var batch = batches[0];
console.log('First batch in EDI message sent at ' + batch.bisotime() + ' from ' +  batch.bfrom() + ' to ' + batch.bto() + '.');

```

Which wil output:

	First batch in EDI message sent at 1994-01-01T09:50:00+01:00 from 6XPPC to LHPPC.

Note: I have shortened the EDI text in the example above for legibility.
