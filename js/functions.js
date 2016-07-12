function findValue(ratio,LR){
	var Resistor_value = [1.0, 1.05, 1.1, 1.2, 1.21, 1.24, 1.27, 1.3, 1.33, 1.37, 1.4, 1.43, 1.47, 1.5, 1.54, 1.58, 1.6, 1.62, 1.65, 1.69, 1.74, 1.8, 1.82, 1.87, 1.91, 1.96, 2.0, 2.05, 2.1, 2.15, 2.2, 2.21, 2.26, 2.32, 2.4, 2.43, 2.49, 2.55, 2.61, 2.67, 2.7, 2.74, 2.8, 2.87, 3.0, 3.01, 3.09, 3.16, 3.24, 3.3, 3.32, 3.4, 3.48, 3.57, 3.6, 3.65, 3.74, 3.83, 3.9, 3.92, 4.02, 4.12, 4.22, 4.3, 4.32, 4.42, 4.53, 4.7, 4.75, 4.87, 4.99, 5.1, 5.11, 5.6, 5.62, 5.76, 5.9, 6.04, 6.19, 6.2, 6.8, 7.15, 7.32, 7.5, 8.06, 8.2, 8.66, 9.0, 9.09, 9.1, 9.53, 10.0, 10.2, 10.5, 10.7, 11.0, 11.3, 11.5, 12.0, 12.1, 12.4, 12.7, 13.0, 13.3, 13.7, 14.0, 14.3, 14.7, 15.0, 15.4, 15.8, 16.0, 16.2, 16.5, 16.9, 17.4, 17.8, 18.0, 18.2, 18.7, 19.1, 19.6, 20.0, 20.5, 21.0, 21.5, 22.0, 22.1, 22.6, 23.2, 23.7, 24.0, 24.3, 24.9, 25.5, 26.1, 26.7, 27.0, 27.4, 28.0, 28.7, 29.4, 30.0, 30.1, 30.9, 31.6, 32.4, 33.0, 33.2, 34.0, 34.8, 35.7, 36.0, 36.5, 37.4, 38.3, 39.0, 39.2, 40.2, 41.2, 42.2, 43.0, 43.2, 44.2, 45.3, 46.4, 47.0, 47.5, 48.7, 49.9, 51.0, 51.1, 52.3, 53.6, 54.9, 56.0, 56.2, 57.6, 59.0, 60.4, 61.9, 62.0, 63.4, 64.9, 66.5, 68.0, 68.1, 69.8, 71.5, 73.2, 75.0, 76.8, 78.7, 80.6, 82.0, 82.5, 84.5, 86.6, 88.7, 90.0, 90.9, 91.0, 93.1, 95.3, 97.6, 100.0, 102.0, 105.0, 107.0, 110.0, 113.0, 115.0, 118.0, 120.0, 121.0, 124.0, 127.0, 130.0, 133.0, 137.0, 140.0, 143.0, 147.0, 150.0, 154.0, 158.0, 160.0, 162.0, 165.0, 169.0, 174.0, 178.0, 180.0, 182.0, 187.0, 191.0, 196.0, 200.0, 205.0, 210.0, 215.0, 220.0, 221.0, 226.0, 232.0, 237.0, 240.0, 243.0, 249.0, 255.0, 260.0, 261.0, 267.0, 270.0, 274.0, 280.0, 287.0, 294.0, 300.0, 301.0, 309.0, 316.0, 324.0, 330.0, 332.0, 340.0, 348.0, 357.0, 360.0, 365.0, 374.0, 383.0, 390.0, 392.0, 402.0, 412.0, 422.0, 430.0, 432.0, 442.0, 453.0, 464.0, 470.0, 475.0, 487.0, 499.0, 510.0, 511.0, 523.0, 536.0, 549.0, 560.0, 562.0, 576.0, 590.0, 604.0, 619.0, 620.0, 634.0, 649.0, 665.0, 680.0, 681.0, 698.0, 715.0, 732.0, 750.0, 768.0, 787.0, 806.0, 820.0, 825.0, 845.0, 866.0, 887.0, 900.0, 909.0, 910.0, 931.0, 953.0, 976.0, 1000.0, 1020.0, 1050.0, 1070.0, 1100.0, 1130.0, 1150.0, 1180.0, 1200.0, 1210.0, 1240.0, 1270.0, 1300.0, 1330.0, 1370.0, 1400.0, 1430.0, 1470.0, 1500.0, 1540.0, 1580.0, 1600.0, 1620.0, 1650.0, 1690.0, 1740.0, 1780.0, 1800.0, 1820.0, 1870.0, 1910.0, 1960.0, 2000.0, 2050.0, 2100.0, 2150.0, 2160.0, 2200.0, 2210.0, 2260.0, 2320.0, 2370.0, 2400.0, 2430.0, 2490.0, 2550.0, 2610.0, 2670.0, 2700.0, 2740.0, 2800.0, 2870.0, 2940.0, 3000.0, 3010.0, 3090.0, 3160.0, 3240.0, 3300.0, 3320.0, 3400.0, 3480.0, 3570.0, 3600.0, 3650.0, 3740.0, 3830.0, 3900.0, 3920.0, 4000.0, 4019.9999999999995, 4120.0, 4220.0, 4300.0, 4320.0, 4420.0, 4530.0, 4640.0, 4700.0, 4750.0, 4870.0, 4990.0, 5000.0, 5100.0, 5110.0, 5230.0, 5360.0, 5490.0, 5600.0, 5620.0, 5760.0, 5900.0, 6040.0, 6190.0, 6200.0, 6340.0, 6490.0, 6650.0, 6800.0, 6810.0, 6980.0, 7150.0, 7320.0, 7500.0, 7680.0, 7870.0, 8060.000000000001, 8200.0, 8250.0, 8450.0, 8660.0, 8870.0, 9000.0, 9090.0, 9100.0, 9310.0, 9530.0, 9760.0, 10000.0, 10200.0, 10500.0, 10700.0, 11000.0, 11300.0, 11500.0, 11800.0, 12000.0, 12100.0, 12400.0, 12700.0, 13000.0, 13300.0, 13700.0, 14000.0, 14300.0, 14700.0, 15000.0, 15400.0, 15800.0, 16000.0, 16200.0, 16500.0, 16900.0, 17400.0, 17800.0, 18000.0, 18200.0, 18700.0, 19100.0, 19600.0, 20000.0, 20500.0, 21000.0, 21500.0, 22000.0, 22100.0, 22600.0, 23200.0, 23700.0, 24000.0, 24300.0, 24900.0, 25500.0, 26100.0, 26700.0, 27000.0, 27400.0, 28000.0, 28700.0, 29400.0, 29600.0, 30000.0, 30100.0, 30600.0, 30900.0, 31600.0, 32400.0, 33000.0, 33200.0, 34000.0, 34800.0, 35700.0, 36000.0, 36500.0, 37400.0, 38300.0, 39000.0, 39200.0, 40000.0, 40200.0, 41200.0, 42200.0, 43000.0, 43200.0, 44200.0, 45300.0, 46400.0, 47000.0, 47500.0, 48700.0, 49900.0, 50000.0, 51000.0, 51100.0, 52300.0, 53600.0, 54900.0, 56000.0, 56200.0, 57600.0, 59000.0, 60400.0, 61900.0, 62000.0, 63400.0, 64900.00000000001, 66500.0, 68000.0, 68100.0, 69800.0, 71500.0, 73200.0, 75000.0, 76800.0, 78700.0, 80600.0, 82000.0, 82500.0, 84500.0, 86600.0, 88700.0, 90000.0, 90600.0, 90900.0, 91000.0, 93100.0, 95300.0, 97600.0, 100000.0, 102000.0, 105000.0, 107000.0, 110000.0, 113000.0, 115000.0, 118000.0, 120000.0, 121000.0, 124000.0, 127000.0, 130000.0, 133000.0, 137000.0, 140000.0, 143000.0, 147000.0, 150000.0, 154000.0, 158000.0, 160000.0, 162000.0, 165000.0, 169000.0, 174000.0, 178000.0, 180000.0, 182000.0, 187000.0, 191000.0, 196000.0, 200000.0, 205000.0, 210000.0, 215000.0, 220000.0, 221000.0, 226000.0, 232000.0, 237000.0, 240000.0, 243000.0, 249000.0, 255000.0, 261000.0, 267000.0, 270000.0, 274000.0, 280000.0, 287000.0, 294000.0, 300000.0, 301000.0, 309000.0, 316000.0, 324000.0, 330000.0, 332000.0, 340000.0, 348000.0, 352000.0, 357000.0, 360000.0, 365000.0, 374000.0, 383000.0, 390000.0, 392000.0, 400000.0, 402000.0, 412000.0, 422000.0, 430000.0, 432000.0, 442000.0, 453000.0, 464000.0, 470000.0, 475000.0, 487000.0, 499000.0, 500000.0, 510000.0, 511000.0, 523000.0, 536000.0, 548000.0, 549000.0, 560000.0, 562000.0, 576000.0, 590000.0, 604000.0, 619000.0, 620000.0, 634000.0, 649000.0, 665000.0, 680000.0, 681000.0, 698000.0, 715000.0, 732000.0, 750000.0, 768000.0, 787000.0, 806000.0, 820000.0, 825000.0, 845000.0, 866000.0, 887000.0, 900000.0, 909000.0, 910000.0, 931000.0, 953000.0, 976000.0, 990000.0, 1000000.0, 1020000.0, 1050000.0, 1100000.0, 1150000.0, 1180000.0, 1200000.0, 1210000.0, 1240000.0, 1270000.0, 1300000.0, 1330000.0, 1370000.0, 1400000.0, 1500000.0, 1600000.0, 1620000.0, 1800000.0, 2000000.0, 2200000.0, 2260000.0, 2400000.0, 2490000.0, 2700000.0, 3000000.0, 3010000.0, 3300000.0, 3400000.0, 3600000.0, 3900000.0, 4019999.9999999995, 4300000.0, 4700000.0, 4990000.0, 5100000.0, 5600000.0, 6200000.0, 6800000.0, 7500000.0, 8200000.0, 9100000.0, 10000000.0, 18000000.0, 20000000.0, 22000000.0];
	var i;
	var j;
    var start_index;
    for (i = 0; i < Resistor_value.length ;i++) {
    	if( Resistor_value[i]>LR){
    		start_index = i;
    		break;
    	}
    }


    for (i = start_index; i < Resistor_value.length ;i++) {
        var a = Resistor_value[i];
        for (j = start_index; j < Resistor_value.length ;j++) {
			var b = Resistor_value[j];
			var ratio_test = (a+b)/a;
			var error = (Math.abs(ratio_test-ratio)/ratio);
			if (error<0.05) {
               
				//console.log(ratio_test);
				//console.log(error);
				return [a,b];
			}
        }
    }
    return [0,0];
}
function readable_format(r){
    if (r>100000) {
        return String(r/100000)+"M";
    }
    if (r>1000) {
        return String(r/1000)+"K";
    }
    return r;
}
function myFunction() {
	
	var x = document.getElementById("frm1");
    for (i = 0; i < x.length ;i++) {
        console.log(x.elements[i].value);
    }
    var ratio = parseFloat(x.elements[0].value);
    var LR =  parseFloat(x.elements[1].value);

    var a = findValue(ratio,LR);
    console.log(a);
    var output_string = "Error:電阻不存在"
    if (a[0]!=0) {
        var output_string = "R1: "+readable_format(a[0])+"歐姆  "+" R2: "+readable_format(a[1])+"歐姆\n"
    }
    document.getElementById("Output").innerHTML = output_string;
}