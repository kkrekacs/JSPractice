/* Generál egy 1000 elemű véletlen egész számokkal feltöltött tömböt, majd az arraygenerator osztályú divbe kiírja az
 eredményt, ahonnan egyszerűen CTRL + C, CTRL + v segítségével bemásolhatod a tömb deklarációját.

function getRandomArray() {
  var randomArray = [];
  for (var i = 0; i < 1000; i++) {
    randomArray.push((Math.random() * 10000).toFixed());
  }
  var output = 'var mainArray = [';
  for (i = 0; i < randomArray.length - 1; i++) {
    output += `${randomArray[i]}, `;
  }
  output += `${randomArray[randomArray.length - 1]}];`;

  return output;
}

document.querySelector('.arraygenerator').innerHTML = getRandomArray(); */

var mainArray = [2467, 511, 7985, 8284, 2226, 4369, 880, 366, 5234, 7056, 894, 6923, 6602, 3009, 610, 8792, 2277, 8391,
  1006, 2529, 8834, 580, 283, 964, 8105, 3416, 8954, 2974, 5136, 8847, 9930, 82, 8980, 8137, 8043, 1358, 7855, 9320,
  8988, 2939, 7243, 607, 6993, 3568, 9497, 4362, 3991, 3847, 5417, 6175, 2416, 5800, 2333, 3632, 8566, 2071, 1175, 7030,
  623, 6339, 3524, 332, 4436, 2137, 1312, 7552, 2835, 9669, 1725, 8833, 917, 7646, 7197, 8849, 1568, 9469, 4627, 3768,
  8125, 109, 844, 6702, 4485, 807, 6810, 2729, 6992, 6779, 2769, 2070, 254, 1149, 2370, 6281, 3121, 9134, 9066, 7748,
  1086, 9377, 3748, 8315, 7469, 5995, 9691, 759, 1384, 1617, 9118, 1226, 5495, 307, 1422, 4767, 3729, 7956, 8313, 7981,
  6212, 3153, 8180, 2546, 3732, 8280, 5229, 8030, 949, 4562, 1620, 2295, 767, 6408, 9607, 1809, 3212, 4822, 3750, 8514,
  7833, 2889, 4023, 9942, 2376, 5545, 2597, 9891, 3113, 1970, 4885, 7847, 1225, 4427, 1290, 7713, 594, 2338, 7723, 6600,
  9245, 7578, 8321, 6060, 2365, 4824, 2506, 5599, 4811, 6361, 9109, 2515, 384, 3240, 6791, 1310, 9830, 6712, 7118, 9058,
  5836, 1240, 9735, 5520, 1091, 6598, 9849, 3037, 2469, 2220, 7847, 5867, 8670, 6628, 9555, 6418, 209, 2998, 2225, 56,
  7220, 7017, 2489, 1336, 6208, 6459, 8891, 4272, 552, 7490, 7434, 8154, 5550, 7383, 7665, 4485, 4530, 4884, 4673, 2041,
  4303, 9643, 1334, 1299, 23, 7412, 5467, 9103, 9610, 3181, 1836, 2313, 4869, 2596, 4686, 2706, 5238, 9062, 8091, 7859,
  2716, 9721, 2300, 8760, 4221, 2324, 6831, 9224, 5106, 2790, 1754, 8266, 5908, 8781, 1135, 9310, 7054, 2426, 2294,
  8234, 1458, 4106, 8498, 7056, 8847, 7251, 2939, 9501, 1895, 9653, 457, 3333, 2601, 3093, 1355, 3295, 6900, 7800, 5350,
  7605, 2157, 3746, 4436, 9957, 1295, 2968, 7985, 8752, 9245, 6290, 6677, 9467, 6171, 4557, 802, 6104, 3913, 9359, 4329,
  3168, 3747, 4969, 5585, 3245, 374, 9874, 8343, 117, 5858, 3711, 9130, 9278, 3034, 8969, 2710, 9223, 1387, 9436, 7060,
  1769, 3721, 8825, 5487, 1985, 1204, 1529, 1769, 6727, 3421, 602, 7746, 4609, 420, 4198, 2148, 6235, 1535, 462, 39,
  3177, 1800, 4622, 5589, 7813, 3060, 6809, 8270, 5174, 8002, 953, 8964, 7821, 8383, 5981, 978, 7285, 8037, 7134, 9391,
  4652, 3239, 8286, 3630, 459, 1613, 7362, 1973, 4131, 4552, 5613, 4510, 8636, 1086, 4361, 4673, 4893, 5555, 3395, 4303,
  8514, 6215, 7650, 1021, 3327, 754, 8725, 5920, 5600, 6130, 882, 9137, 4888, 8763, 1811, 3462, 5935, 7678, 1979, 4738,
  2849, 6549, 399, 6116, 9551, 5993, 4766, 4337, 3402, 9185, 3360, 3043, 2931, 446, 9345, 9312, 6306, 4053, 7418, 3075,
  677, 8542, 3273, 215, 835, 1899, 5507, 8470, 3895, 5535, 4950, 5297, 6765, 6569, 7146, 1220, 3530, 8854, 8698, 5643,
  7689, 8269, 583, 9252, 4977, 8787, 6162, 1127, 3739, 1760, 7744, 3402, 760, 4431, 2770, 7893, 4861, 1314, 8297, 3156,
  3945, 8005, 514, 9123, 4677, 8731, 203, 2997, 8356, 2076, 4897, 373, 9551, 183, 3381, 6961, 4371, 4528, 7444, 4931,
  6077, 5079, 8790, 5253, 2698, 300, 3810, 3073, 969, 2899, 5109, 2320, 363, 7773, 8179, 735, 2951, 9161, 4247, 7298,
  611, 8774, 925, 2549, 842, 6668, 6694, 6464, 4081, 2655, 592, 8967, 5186, 7526, 9126, 4893, 8523, 6043, 3372, 202,
  8931, 4081, 5908, 9951, 3419, 8600, 6085, 8552, 6071, 4679, 9066, 8882, 1637, 694, 1366, 9537, 4172, 7358, 9913, 2518,
  3381, 354, 3618, 8439, 1343, 6542, 4656, 9032, 8217, 3917, 6744, 9894, 5332, 7017, 1417, 3042, 5944, 7770, 8717, 2177,
  5460, 4276, 1474, 3927, 2000, 4653, 6657, 1200, 1622, 8484, 2184, 5256, 2076, 9245, 8899, 7510, 7724, 7707, 1454, 315,
  8293, 6630, 8378, 3044, 6068, 8716, 2344, 9516, 982, 5776, 5965, 7410, 2149, 1457, 896, 1032, 399, 6747, 2686, 1753,
  7274, 4083, 3806, 7142, 9937, 3473, 9861, 3517, 3883, 3934, 2463, 5247, 8631, 7075, 8890, 1006, 4014, 184, 2898, 1786,
  2628, 2285, 330, 7606, 7080, 1388, 887, 9944, 567, 953, 3181, 6377, 1058, 6166, 8066, 7474, 8210, 7387, 1703, 788,
  6452, 5753, 6403, 8227, 534, 1626, 4052, 3503, 7890, 1581, 3612, 6900, 6120, 8514, 5155, 3327, 9055, 5121, 4285, 666,
  3704, 8176, 2495, 7567, 9996, 7475, 9781, 3417, 5835, 7184, 6218, 2114, 2414, 304, 9366, 629, 6735, 2020, 5995, 3183,
  6300, 6517, 2606, 5440, 9906, 3005, 8723, 975, 5309, 3379, 128, 2195, 5179, 6651, 4688, 3169, 7641, 6758, 6803, 5340,
  3688, 8480, 7481, 8320, 2519, 224, 1887, 8523, 8380, 83, 1292, 1660, 7764, 4049, 7050, 8959, 3436, 6576, 8266, 2548,
  8660, 4086, 9965, 8430, 4626, 6607, 5521, 8379, 9449, 1345, 9303, 1219, 3394, 6166, 5333, 6791, 8647, 1656, 3700,
  9114, 937, 2540, 7774, 8060, 7872, 8060, 1556, 249, 8616, 3322, 93, 2153, 9021, 8800, 2577, 5233, 5382, 9497, 2385,
  7477, 1291, 7069, 7635, 6033, 3205, 9207, 6557, 8738, 2502, 3828, 3769, 5733, 6371, 1105, 8686, 4800, 4841, 9399,
  1871, 4909, 1789, 7086, 9952, 9358, 8298, 7854, 5873, 7449, 9872, 2180, 2963, 6596, 3411, 527, 2832, 1828, 9403,
  3516, 4758, 68, 6859, 7333, 2897, 7962, 9535, 9820, 6359, 2807, 6695, 3863, 4765, 4942, 7461, 8373, 7524, 2001, 8053,
  4170, 8338, 7930, 5645, 279, 6564, 8321, 2373, 4979, 505, 1437, 4071, 1304, 9627, 2466, 4514, 7613, 5484, 838, 4503,
  6109, 3341, 4536, 9843, 5427, 2654, 4946, 6433, 3755, 4363, 1638, 9190, 5088, 7897, 2516, 15, 748, 4344, 8700, 6922,
  9776, 6487, 498, 9155, 9449, 7303, 2783, 8544, 2349, 9733, 3614, 4542, 2166, 5993, 8743, 3646, 9734, 7488, 8032, 4529,
  1809, 5536, 6709, 705, 4783, 2136, 6281, 9999, 5550, 315, 4833, 8216, 7987, 1979, 4260, 2732, 7113, 3833, 9470, 1666,
  1692, 8342, 6560, 2462, 5096, 8155, 2853, 7796, 594, 8999, 5339, 2085, 1541, 1708, 229, 6014, 3389, 9346, 1295, 6178,
  914, 6356, 7663, 6806, 1683, 6785, 2092, 7655, 8824, 306, 6020, 7597, 1563, 7281, 9083, 679, 5625, 1655, 3874, 6295,
  2997, 3844, 1832, 9970, 9428, 5779, 6268, 4482, 6167, 5137, 8461, 3385, 5388, 4529, 9454, 1135, 5732, 2850, 7091,
  8881, 9732, 8145, 9193, 6784, 7407, 5235, 1166, 5169, 8908, 6109, 6851, 3325, 6852, 3454, 9737, 6039, 7241, 7657, 955,
  2322, 5131, 7125, 1005, 1382, 1320, 4782, 2807, 9351, 563, 1753, 9319, 9115, 7372, 3177, 9943, 2382, 9960, 9322, 1756,
  9115, 453, 6480, 3678, 1865, 6263, 9106];

/* 1. Feladat: Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb legkisebb elemét! */
function getMinValueOfArray(parameterArray) {
  var tempArray = parameterArray.slice();
  var minItem = tempArray[0];

  for (var i = 1; i < tempArray.length; i++) {
    if (minItem > tempArray[i]) {
      minItem = tempArray[i];
    }
  }

  return minItem;
}

document.querySelector('.feladat1').innerHTML = `A tömb legkisebb eleme: ${getMinValueOfArray(mainArray)}`;
/* 1. Feladat vége*/

/* 2. Feladat: Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb legnagyobb elemét! */
function getMaxValueOfArray(parameterArray) {
  var tempArray = parameterArray.slice();
  var maxItem = tempArray[0];

  for (var i = 1; i < tempArray.length; i++) {
    if (maxItem < tempArray[i]) {
      maxItem = tempArray[i];
    }
  }

  return maxItem;
}

document.querySelector('.feladat2').innerHTML = `A tömb legnagyobb eleme: ${getMaxValueOfArray(mainArray)}`;
/* 2. Feladat vége*/

/* 3. Feladat: Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb átlagát! */
function getTotalAverageOfArray(parameterArray) {
  var totalAverage = 0;
  for (var i = 0; i < parameterArray.length; i++) {
    totalAverage += parameterArray[i];
  }
  totalAverage /= parameterArray.length;

  return totalAverage;
}

document.querySelector('.feladat3').innerHTML = `A tömb elemeinek átlaga: ${getTotalAverageOfArray(mainArray)}`;
/* 3. Feladat vége */

/* 4. Feladat: Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb összegét!
Igazából ha az ember ezt írná meg először, akkor szépen fel lehetne használni az átlagszámításhoz */
function getSumOfArrayItems(parameterArray) {
  var totalSum = 0;
  for (var i = 0; i < parameterArray.length; i++) {
    totalSum += parameterArray[i];
  }

  return totalSum;
}

document.querySelector('.feladat4').innerHTML = `A tömb elemeinek összege: ${getSumOfArrayItems(mainArray)}`;
/* 4. Feladat vége */
