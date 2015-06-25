
var EDI = require('../EDI.js');
//var text = "UNA:+.? 'UNB+UNOC:3+9999999999918:14+9999999999925:14+120520:1652+11 ... ";
var text = "UNA:+.? 'UNB+IATB:1+6XPPC+LHPPC+940101:0950+1'UNH+1+PAORES:93:1:IA'MSG+1:45'IFT+3+XYZCOMPANY AVAILABILITY'ERC+A7V:1:AMD'IFT+3+NO MORE FLIGHTS'ODI'TVL+240493:1000::1220+FRA+JFK+DL+400+C'PDI++C:3+Y::3+F::1'APD+74C:0:::6++++++6X'TVL+240493:1740::2030+JFK+MIA+DL+081+C'PDI++C:4'APD+EM2:0:1630::6+++++++DA'UNT+13+1'UNZ+1+1'";
var msg = new EDI(text);
var batches = msg.bsegments();
var batch = batches[0];
console.log('First batch in EDI message sent at ' + batch.bisotime() + ' from ' +  batch.bfrom() + ' to ' + batch.bto() + '.');
