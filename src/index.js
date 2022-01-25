
 var dg = ['zero','one','two','three','four', 'five','six','seven','eight','nine'];
 var tn = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
 var tw = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
 var dgNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
 var tnNum = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
 var twNum = [20, 30, 40, 50, 60, 70, 80, 90];
    
 module.exports = function toReadable (number) {
    let num = number;
    let result = '';  
    if (number > 99) {
        const hun = Number(num.toString().slice(0,1));
        num = Number(num.toString().slice(1));
        result = dg[hun] + ' hundred';
    }

    if (result != '' && num === 0) {
        return result;
    } else if (result != '' && num !== 0) {
        result = result + ' ';
    }

    if (dgNum.includes(num)) {
        result = result + dg[num];
    } else if (tnNum.includes(num)) {
        result = result + tn[num - 10];       
    } else if (twNum.includes(num)) {
        result = result + tw[num/10-2];
    } else {
        const fDg = Number(num.toString().slice(0,1));
        const sDg = Number(num.toString().slice(1));
        result = result + tw[fDg-2] + ' ' + dg[sDg];    
    }
    return result;

}
