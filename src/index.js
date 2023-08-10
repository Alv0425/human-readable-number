module.exports = function toReadable (num) {
    //start HRN task
    const numbers019 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const numbers20100 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let hrnum = '';
    if (typeof(num) != 'number') {
        return hrnum = 'Error: cannot define number';
    }
    let numstr = num + '';
    //handle not integer numbers
    let numarr = numstr.split(".");
    let numint='';
    let numrest='';   
    switch (numarr.length) {
        case 1:
            numint = numarr[0];
            numrest = '';
            break;
        case 2:
            numint = numarr[0];
            numrest = numarr[1];
            break;
        default:
            hrnum = 'Error: cannot define number';
            break;  
    }     
    //read integer part
    switch (numint.length) {
        case 1:
            hrnum = numbers019[numint*1];
            break;
        case 2:
            hrnum = numint*1 < 20 ? numbers019[numint*1] : numbers20100[Math.floor(numint*1/10)-2];
            if (numint[1]*1 > 0 && num > 20) {
                hrnum = hrnum + ' ' + numbers019[numint[1]*1];
            }
            break;
        case 3:
            hrnum = toReadable(numint[0]*1) + ' hundred';
            if (numint.substring(1,numint.length)*1 > 0) {
                hrnum = hrnum + ' ' + toReadable(numint.substring(numint.length-2,numint.length)*1);
            }
            break;
        case 4:
        case 5:
        case 6:
            hrnum = toReadable(numint.substring(0,numint.length-3)*1) + ' thousand' + (numint.substring(numint.length-3,numint.length)*1 > 0 ? ' ' : '') + toReadable(numint.substring(numint.length-3,numint.length)*1);
            break;
        case 7: 
        case 8:
        case 9:  
            hrnum = toReadable(numint.substring(0,numint.length-6)*1) + ' million' + (numint.substring(numint.length-6,numint.length)*1 > 0 ? ' ' : '') + toReadable(numint.substring(numint.length-6,numint.length)*1);
            break;
        case 10: 
        case 11:
        case 12:
            hrnum = toReadable(numint.substring(0,numint.length-9)*1) + ' billion' + (numint.substring(numint.length-9,numint.length)*1 > 0 ? ' ' : '') + toReadable(numint.substring(numint.length-9,numint.length)*1);
            break;  
        case 13: 
        case 14:
        case 16:
            hrnum = toReadable(numint.substring(0,numint.length-12)*1)+ ' trillion' + (numint.substring(numint.length-12,numint.length)*1 > 0 ? ' ' : '') + toReadable(numint.substring(numint.length-12,numint.length)*1);
            break;  
        default:
            hrnum = 'Error: cannot define number';
            break; 
    }
    //digits after point
    if (numrest != '') {
        hrnum = hrnum + ' point';
        for (let j = 0; j < numrest.length; j++) {
            hrnum += " " + numbers019[numrest[j]*1];
        }
    }
    return hrnum;
}
