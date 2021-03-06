/* Generál egy 1000 elemű véletlen egész számokkal feltöltött tömböt, majd az arraygenerator osztályú divbe kiírja az
 eredményt, ahonnan egyszerűen CTRL + C, CTRL + v segítségével bemásolhatod a tömb deklarációját.

function getRandomIntArray() {
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

document.querySelector('.arraygenerator').innerHTML = getRandomIntArray(); */

/* Generál egy 1000 elemű véletlen számokkal feltöltött tömböt, majd az arraygenerator osztályú divbe kiírja az
 eredményt, ahonnan egyszerűen CTRL + C, CTRL + v segítségével bemásolhatod a tömb deklarációját.

function getRandomFloatArray() {
  var randomArray = [];
  for (var i = 0; i < 1000; i++) {
    randomArray.push((Math.random() * 10000).toFixed(2));
  }
  var output = 'var mainFloatArray = [';
  for (i = 0; i < randomArray.length - 1; i++) {
    output += `${randomArray[i]}, `;
  }
  output += `${randomArray[randomArray.length - 1]}];`;

  return output;
}

document.querySelector('.arraygenerator').innerHTML = getRandomFloatArray(); */

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

var mainFloatArray = [7918.79, 3188.71, 3518.16, 726.07, 498.94, 3330.42, 6703.00, 5302.10, 4332.38, 875.67, 1657.74,
  7674.62, 4988.80, 9548.35, 3814.54, 1579.62, 7329.47, 6158.15, 6496.95, 3410.89, 6937.81, 1545.27, 972.65, 3613.15,
  2473.94, 2943.99, 9621.24, 4771.42, 8421.40, 1386.69, 5556.69, 7872.74, 987.32, 5342.48, 4497.62, 664.21, 2082.33,
  7352.25, 7020.42, 2612.02, 5336.90, 873.75, 6720.14, 3739.81, 1168.16, 1510.43, 8922.78, 1276.67, 3194.59, 7787.94,
  2041.14, 5494.96, 3763.57, 1582.52, 5438.73, 5092.74, 8993.52, 6301.89, 6422.12, 9165.62, 7223.88, 5566.69, 8992.69,
  9314.04, 8654.88, 6254.07, 3739.78, 2327.88, 4991.28, 7089.80, 4565.97, 142.44, 8506.09, 4398.61, 7265.19, 7441.14,
  143.34, 7848.59, 505.95, 7817.61, 476.67, 1561.71, 6867.70, 5873.89, 5109.71, 7420.01, 7312.99, 2000.90, 3949.71,
  6292.56, 4558.52, 9684.57, 8499.42, 7537.54, 2997.99, 3327.45, 3862.76, 6886.66, 7841.67, 7931.23, 2923.13, 976.45,
  2085.35, 8861.03, 2502.68, 1686.24, 5208.11, 1025.00, 6470.44, 311.70, 2250.75, 346.86, 3851.59, 4583.22, 7193.90,
  892.64, 8139.78, 7263.02, 6404.53, 380.69, 1879.60, 8465.65, 1133.63, 3394.81, 4250.19, 9495.99, 1122.28, 5268.86,
  8636.78, 9297.90, 1962.40, 4871.99, 1014.66, 7386.70, 8467.34, 8427.68, 9482.81, 8352.39, 90.75, 7218.58, 3864.01,
  3811.77, 7754.12, 4999.25, 3812.82, 6128.05, 7746.99, 272.07, 7649.78, 6484.61, 4421.43, 9127.49, 5175.40, 4804.45,
  1056.09, 9135.92, 9483.24, 3399.74, 9296.88, 9852.35, 1057.89, 1205.54, 8311.51, 5253.10, 5566.53, 7554.47, 8123.14,
  9094.34, 9347.49, 8111.03, 1860.34, 5570.40, 3458.76, 5470.53, 17.59, 4251.45, 1989.13, 5455.93, 3258.28, 6764.43,
  9858.29, 5438.20, 5613.63, 7197.85, 9402.81, 9570.38, 9760.12, 1087.30, 690.91, 6368.55, 3206.81, 3335.73, 7790.08,
  5591.95, 4094.41, 9031.31, 3667.67, 6233.52, 2018.61, 9459.86, 7029.10, 5952.18, 3628.57, 87.89, 9221.90, 3896.51,
  4244.81, 9887.62, 5211.40, 4845.47, 9479.38, 9927.62, 3566.61, 2325.46, 7961.17, 8695.08, 4578.55, 4085.42, 1741.32,
  256.06, 2001.24, 3200.46, 2175.27, 7572.02, 5508.84, 5277.94, 7553.20, 583.83, 8436.78, 4661.73, 5351.02, 6597.34,
  1936.38, 992.30, 1675.32, 1706.48, 3398.78, 6394.49, 6161.89, 9326.70, 8482.86, 9238.03, 2072.80, 1432.47, 2098.57,
  5180.41, 9364.01, 9427.05, 5165.60, 2242.23, 5345.99, 2148.48, 7439.81, 7210.18, 7429.41, 9819.80, 183.82, 5120.07,
  6473.48, 5776.89, 2892.45, 3846.67, 2734.07, 1286.09, 5512.37, 2428.35, 7630.63, 8673.92, 2336.20, 959.03, 7920.67,
  7531.55, 5110.98, 5055.63, 362.92, 2108.59, 9113.74, 7796.35, 8733.30, 8208.70, 4770.32, 2082.13, 6429.95, 1655.36,
  8729.61, 4749.76, 2916.96, 1075.10, 5587.62, 6061.34, 1424.79, 314.57, 8534.45, 8485.82, 3521.84, 8977.58, 3333.37,
  6232.25, 3163.65, 6188.10, 6094.29, 4736.73, 3419.88, 4515.09, 1351.91, 7638.98, 1353.43, 6656.37, 1506.37, 8980.17,
  910.63, 3393.08, 291.32, 7605.02, 8234.57, 4731.67, 3483.70, 4350.08, 8547.56, 4678.43, 6488.57, 304.19, 3939.17,
  1320.68, 2302.14, 7479.52, 923.98, 4766.43, 6011.14, 4964.54, 6032.36, 8864.89, 913.87, 5776.54, 4891.11, 7167.41,
  4848.82, 7908.11, 3018.68, 9382.03, 5720.65, 4828.76, 4010.09, 2638.44, 2332.59, 4838.61, 8404.30, 275.50, 339.55,
  2869.13, 8868.43, 6112.26, 835.31, 865.80, 8735.42, 1093.20, 4804.26, 2364.72, 9497.39, 5359.32, 5022.18, 9998.82,
  727.82, 73.60, 4726.59, 884.81, 8241.21, 138.00, 363.58, 1816.00, 9334.13, 1377.91, 5605.37, 5333.55, 2149.82,
  9997.92, 7791.47, 7535.25, 5858.17, 426.36, 5774.24, 4968.41, 7454.01, 4463.81, 8800.74, 4872.16, 2779.37, 1773.88,
  2600.23, 217.28, 5254.12, 3586.65, 1229.14, 321.24, 2012.52, 3643.29, 7006.46, 7017.54, 4699.01, 3101.50, 7934.52,
  3711.69, 4431.58, 3832.67, 149.32, 41.92, 2718.64, 8483.01, 1490.86, 827.90, 8075.05, 9625.54, 4933.21, 5210.46,
  9059.94, 4659.97, 4481.03, 8082.74, 4479.93, 2240.19, 5569.78, 8669.82, 8597.55, 7201.89, 2290.88, 8243.26, 8129.30,
  844.19, 9282.39, 8071.56, 3224.40, 8666.90, 1203.99, 482.88, 1594.43, 9310.25, 1938.72, 4991.91, 4675.94, 5991.08,
  203.01, 1800.14, 9536.80, 7938.98, 1746.85, 6585.03, 1733.92, 6878.27, 5182.23, 9801.26, 8976.43, 6591.74, 4020.82,
  8198.79, 8497.76, 3447.45, 5563.49, 8303.81, 4987.02, 2220.21, 4295.38, 5287.12, 670.70, 2801.79, 528.25, 7196.18,
  7971.43, 8011.90, 5510.33, 8421.74, 2764.82, 1028.34, 6420.25, 5218.21, 5519.74, 4927.76, 7576.72, 9637.91, 3866.29,
  4934.55, 3490.14, 4658.44, 5251.95, 8694.69, 3673.19, 8616.96, 6457.82, 3826.47, 9837.60, 677.93, 8847.67, 2990.49,
  5341.70, 4408.35, 5707.31, 6069.91, 4811.53, 8648.66, 890.47, 8451.31, 7517.08, 7184.74, 5143.52, 2797.02, 1492.68,
  7978.41, 9305.09, 8499.23, 3113.48, 9247.04, 2766.82, 3761.82, 3149.76, 4679.13, 5364.85, 5190.63, 7765.30, 37.62,
  4408.88, 1280.02, 75.39, 801.25, 4635.23, 6358.56, 2580.90, 848.22, 5828.08, 6785.78, 7989.87, 9484.03, 7058.88,
  4175.75, 7288.16, 561.18, 1378.51, 9040.67, 6448.48, 6120.78, 9043.41, 166.49, 5627.66, 4028.81, 5156.25, 5664.56,
  3270.39, 4469.62, 8786.06, 1879.16, 3412.22, 9573.22, 3305.92, 1121.37, 9303.91, 8993.88, 9933.24, 9659.79, 7570.07,
  8881.40, 5682.15, 6488.91, 9456.08, 2204.74, 2169.50, 6271.81, 1562.74, 4226.98, 299.84, 579.70, 240.86, 2979.27,
  4452.29, 8051.24, 2597.85, 9780.74, 197.55, 5180.02, 4091.02, 1671.01, 8553.09, 4188.26, 7323.17, 8292.93, 5454.94,
  4009.56, 3476.40, 7721.54, 6757.36, 2688.25, 8090.65, 2140.37, 3437.99, 5820.83, 1484.93, 5257.12, 6822.57, 2167.13,
  2568.85, 236.85, 4112.35, 1773.79, 5443.73, 3815.90, 5190.10, 413.35, 317.25, 2388.86, 6166.11, 8274.06, 2990.47,
  3919.56, 1395.44, 1581.05, 7735.81, 9575.38, 7336.25, 3064.88, 1423.74, 3350.49, 7229.02, 8870.91, 1598.97, 8636.16,
  1379.44, 3488.38, 4760.87, 3495.01, 3422.79, 6807.25, 383.64, 8934.29, 9964.14, 8647.52, 3213.02, 6518.64, 4685.52,
  456.23, 5007.26, 6052.07, 3623.38, 5364.31, 1650.75, 2299.01, 6347.23, 2242.09, 7926.12, 706.79, 3309.36, 2945.75,
  2539.00, 7023.38, 5766.42, 537.02, 8788.64, 6101.57, 106.93, 2193.28, 7523.55, 4412.94, 8489.09, 9330.06, 3929.98,
  4510.69, 341.54, 6727.19, 5715.67, 9399.61, 3841.38, 3174.03, 7144.41, 7020.68, 9523.22, 6947.80, 7627.17, 8379.81,
  4352.96, 6820.69, 3365.78, 904.48, 1178.23, 2744.61, 9623.17, 2410.59, 2286.68, 6724.24, 9438.13, 9132.02, 1964.44,
  8008.80, 4761.32, 5328.72, 7838.35, 3977.95, 1521.62, 6565.90, 6855.99, 9810.92, 5570.35, 8502.27, 7627.15, 2575.84,
  112.11, 3580.02, 4934.90, 1326.38, 9618.87, 4339.26, 5045.81, 4802.20, 8256.44, 8928.31, 7796.92, 8480.98, 4726.26,
  1373.56, 5850.58, 8987.96, 484.46, 2096.74, 5808.00, 8388.85, 5572.93, 8709.64, 8283.97, 8316.66, 7571.39, 7763.91,
  4919.35, 2581.28, 7537.61, 7251.66, 5715.70, 7117.52, 11.88, 2904.66, 1852.49, 7905.05, 3777.39, 6835.25, 722.80,
  4027.73, 1328.32, 8371.61, 8280.58, 459.88, 7176.77, 5725.95, 6025.77, 2018.24, 7828.91, 2633.55, 5021.87, 6977.14,
  9989.56, 4143.29, 8496.36, 6611.59, 1935.49, 4487.75, 9403.55, 2081.78, 7361.35, 7546.68, 6520.91, 2673.68, 9247.83,
  7686.12, 1842.29, 7151.64, 2498.91, 6950.83, 6597.35, 9452.84, 1573.98, 8269.98, 3279.71, 8005.43, 3715.19, 3690.56,
  373.42, 2425.72, 5045.10, 3489.38, 418.71, 4346.75, 3475.05, 2101.05, 877.50, 3491.40, 8822.48, 8558.99, 5989.15,
  5486.47, 4487.67, 5522.98, 2983.57, 544.47, 9064.97, 7243.29, 8304.30, 8552.50, 3101.96, 9166.62, 730.00, 4853.82,
  7917.48, 9259.73, 8406.99, 3766.70, 154.01, 1309.53, 5073.65, 9977.71, 3274.68, 7455.59, 3741.23, 7130.17, 2616.89,
  769.55, 7887.11, 6551.97, 4990.46, 4383.45, 5618.25, 4509.12, 6036.18, 5683.67, 2982.78, 701.45, 4156.97, 7298.64,
  3406.40, 4609.79, 5250.31, 2913.87, 4286.55, 2908.94, 3083.26, 7297.64, 9067.45, 2126.24, 1761.24, 2379.85, 895.11,
  7530.58, 8816.02, 8630.44, 8302.59, 7996.78, 1551.34, 2226.92, 3000.77, 6737.99, 5841.17, 3495.38, 6009.80, 576.70,
  1754.43, 8758.93, 6047.08, 1067.61, 7863.03, 1867.34, 4457.28, 1297.38, 2055.59, 702.20, 1319.00, 214.97, 9081.38,
  6153.26, 7568.05, 9891.88, 2632.14, 4782.71, 6388.32, 5406.76, 3984.86, 2435.71, 9450.38, 328.94, 5935.53, 4355.33,
  4751.65, 4845.22, 4701.24, 3002.60, 3181.75, 4963.87, 7647.88, 7664.09, 4350.59, 5232.09, 5908.05, 6714.20, 7606.98,
  1788.06, 2453.96, 1491.68, 4333.56, 7327.66, 9576.52, 6190.75, 6872.00, 3353.09, 8560.10, 1722.72, 1301.93, 8871.08,
  4228.24, 8694.87, 2470.61, 1614.96, 7807.54, 5965.45, 9037.50, 9586.30, 2965.11, 1906.63, 9021.96, 5829.06, 4595.64,
  5519.54, 9736.81, 6371.72, 7026.04, 3684.16, 2959.94, 886.66, 1412.39, 695.29, 7294.21, 9385.00, 3803.43, 4842.37,
  2323.56, 5666.50, 8622.92, 1938.90, 4374.92, 2675.69, 7427.17, 2133.94, 9132.85, 69.50, 5837.51, 6300.55, 3172.71,
  4846.05, 6032.19, 8551.96, 310.65, 1711.06, 1417.44, 2109.08, 7417.34, 8506.35, 9385.43, 1450.01, 4176.85, 4532.02,
  8033.55, 7366.13, 7676.61, 5634.29, 2513.76, 8895.90, 7756.26, 9648.24, 6480.30, 8209.06, 3871.74, 2194.97, 3807.79,
  9725.26, 4672.37, 2503.38, 8583.56, 8656.97, 4523.96, 8419.50, 7729.96, 4337.66, 8262.48, 9429.21, 5059.19, 1609.26,
  6987.38, 9819.13, 277.00, 5160.83, 6317.27, 5958.52, 9007.09, 6704.00, 4092.77, 5707.03, 1119.24, 4470.92, 6213.20,
  1130.22];

var mixedTypeArray = [2467, 511, 7985, 8284, 2226, 4369, 880, 366, 5234, 7056, 894, 6923, 6602, 3009, 610, 8792, 2277,
  8391, 1006, 2529, 8834, 580, 283, 964, 8105, 3416, 8954, 2974, 5136, 8847, 9930, 82, 8980, 8137, 8043, 1358, 7855, 9320,
  8988, 2939, 7243, 607, 6993, 3568, 9497, 4362, 3991, 3847, 5417, 6175, 2416, 5800, 2333, 3632, 8566, 2071, 1175, 7030,
  623, 6339, 3524, 332, 4436, 2137, 1312, 7552, 2835, 9669, 1725, 8833, 917, 7646, 7197, 8849, 1568, 9469, 4627, 3768,
  8125, 109, 844, 6702, 4485, 807, 6810, 2729, 6992, 6779, 2769, 2070, 254, 1149, 2370, 6281, 3121, 9134, 9066, 7748,
  1086, 9377, 3748, 8315, 7469, 5995, 9691, 759, 1384, 1617, 9118, 1226, 5495, 307, 1422, 4767, 3729, 7956, 8313, 7981,
  6212, 3153, 8180, 2546, 3732, 8280, 5229, 8030, 949, 4562, 1620, 2295, 767, 6408, 844.19, 9282.39, 8071.56, 3224.40,
  8666.90, 1203.99, 482.88, 1594.43, 9310.25, 1938.72, 4991.91, 4675.94, 5991.08,  203.01, 1800.14, 9536.80, 7938.98,
  1746.85, 6585.03, 1733.92, 6878.27, 5182.23, 9801.26, 8976.43, 6591.74, 4020.82, 8198.79, 8497.76, 3447.45, 5563.49,
  8303.81, 4987.02, 2220.21, 4295.38, 5287.12, 670.70, 2801.79, 528.25, 7196.18, 7971.43, 8011.90, 5510.33, 8421.74,
  2764.82, 1028.34, 6420.25, 5218.21, 5519.74, 4927.76, 7576.72, 9637.91, 3866.29, 4934.55, 3490.14, 4658.44, 5251.95,
  8694.69, 3673.19, 8616.96, 6457.82, 3826.47, 9837.60, 677.93, 8847.67, 2990.49, 5341.70, 4408.35, 5707.31, 6069.91,
  4811.53, 'NeSAp', 'NBgVS', 'wPOEz', 'wGgYA', 'SAkGd', 'RvsDF', 'f3q9t', 'rKlPf', 'HdVRW', '8AgYc', 'n5edO', 'btrY3',
  '37enk', 'QRBSp', 'qnnp0', 'heV9Y', 'ycYbA',  '7LwGM', '9GIxV', 'baKdC', 'gkUJq', 'heZ5k', 'dC2hH', 'xaB4A', 'GP3US',
  'Rhu8q', 'gBSvY', '7XjS0', '90Hy1', 'KptUs', 'oJ41L', '3D5DV', 'CXDNd', '5dwv5', 'dm051', 'PWpxI', 'v8wKz', 'D1j6J',
  '5QnkC', 'qZWFT', 'JDr55', 'ZTZce', 'WIbKW', 'FtmQT', 'RWx06', 'jmsOV', 'aLl2B', 'cB8Ao', 'PwAfw', 'UlGLz', 'lO3z6',
  3704, 8176, 2495, 7567, 9996, 7475, 9781, 3417, 5835, 7184, 6218, 2114, 2414, 304, 9366, 629, 6735, 2020, 5995, 3183,
  6300, 6517, 2606, 5440, 9906, 3005, 8723, 975, 5309, 3379, 128, 2195, 5179, 6651, 4688, 3169, 7641, 6758, 6803, 5340,
  3688, 8480, 7481, 8320, 2519, 224, 1887, 8523, 8380, 83, 1292, 1660, 7764, 4049, 7050, 8959, 3436, 6576, 8266, 2548,
  8660, 4086, 9965, 8430, 7676.61, 5634.29, 2513.76, 8895.90, 7756.26, 9648.24, 6480.30, 8209.06, 3871.74, 2194.97,
  3807.79, 9725.26, 4672.37, 2503.38, 8583.56, 8656.97, 4523.96, 8419.50, 7729.96, 4337.66, 8262.48, 9429.21, 5059.19,
  1609.26, 6987.38, 9819.13, 277.00, 5160.83, 6317.27, 5958.52, 9007.09, 6704.00, 4092.77, 5707.03, 1119.24, 4470.92,
  6213.20, 1130.22];

var mixedTypeArrayAgain = [2467, 511, 7985, 'ycYbA', 8284, 2226, 'qnnp0', 'heV9Y', 4369, 'gBSvY', '7XjS0', '90Hy1',
  'KptUs', 880, 366, 5234, 7056, 'PwAfw', 'UlGLz', 'lO3z6'];

var arrayA = [1, 2, 3, 4, 5];
var arrayB = [3, 4, 5, 6, 7];

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

/* 5. Feladat: Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb páros elemeinek a számát! */
function getEvenItemsFromArray(parameterArray) {
  var numberOfEvenItems = 0;
  for (var i = 0; i < parameterArray.length; i++) {
    if (parameterArray[i] % 2 === 0) {
      numberOfEvenItems++;
    }
  }

  return numberOfEvenItems;
}

document.querySelector('.feladat5').innerHTML = `A tömbben ${getEvenItemsFromArray(mainArray)} páros szám van!`;
/* 5. Feladat vége */

/* 6. Feladat: Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb második legkisebb elemét!
Jobban járunk, ha általánosan írjuk meg a programot, x-ik legkisebb elemre. Ehhez persze elötte rendezni kell
a tömbünket */
function getNthMinOfArray(parameterArray, lookingForNthItem) {
  var nthItem = advancedBubbleSort(parameterArray)[lookingForNthItem - 1];

  return nthItem;
}

document.querySelector('.feladat6').innerHTML = `A tömb 2. legkisebb eleme: ${getNthMinOfArray(mainArray, 2)}`;
/* 6. Feladat vége */

/* 7. Feladat: Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb harmadik legnagyobb elemét
Hasonó az előző feladathoz, de most a tömb végéről kezdünk el számolni*/
function getNthMaxOfArray(parameterArray, lookingForNthItem) {
  var nthItem = advancedBubbleSort(parameterArray)[parameterArray.length - lookingForNthItem];

  return nthItem;
}

document.querySelector('.feladat7').innerHTML = `A tömb 3. legnagyobb eleme: ${getNthMaxOfArray(mainArray, 6)}`;
/* 7. Feladat vége*/

/* 8. feladat: Írd ki (igen vagy nem), hogy egy tetszőlegese elemszámú, bármilyen típusú elemeket tartalmazó tömb
 (feltételezzük, hogy beágyazott tömböt, objektumot nem tartalmaz) tartalmazza e a 23-as számot! Használj lineáris
  keresést!*/
function findItemInArray(parameterArray, lookingForItem) {
  var itemFound = false;
  var i = 0;
  while (!itemFound && i < parameterArray.length) {
    if (parameterArray[i] === lookingForItem) {
      itemFound = true;
    }
    i++;
  }

  return itemFound;
}

if (findItemInArray(mainArray, 23)) {
  document.querySelector('.feladat8').innerHTML = 'A tömb tartalmazza a keresett számot: 23!';
} else {
  document.querySelector('.feladat8').innerHTML = 'A tömb nem tartalmazza a keresett számot: 23!';
}
/* 8. Feladat vége*/

/* 9. Feladat: Írd ki (igen vagy nem), hogy egy tetszőlegese elemszámú, bármilyen típusú elemeket tartalmazó tömb
 (feltételezzük, hogy beágyazott tömböt, objektumot nem tartalmaz) tartalmazza e a 23-as számot! Használj logaritmikus
  keresést! */
function binaryFindItemInArray(parameterArray, lookingForItem) {
  var itemFound = false;
  var tempArray = advancedBubbleSort(parameterArray);
  var startIndex = 0;
  var endIndex = tempArray.length;
  var middleIndex;
  while (startIndex <= endIndex && !itemFound) {
    middleIndex = Math.floor((startIndex + endIndex) / 2);
    if (tempArray[middleIndex] === lookingForItem) {
      itemFound = true;
    }
    if (tempArray[middleIndex] < lookingForItem) {
      startIndex = middleIndex + 1;
    }
    if (tempArray[middleIndex] > lookingForItem) {
      endIndex = middleIndex - 1;
    }
  }

  return itemFound;
}

if (binaryFindItemInArray(mainArray, 23)) {
  document.querySelector('.feladat9').innerHTML = 'A tömb tartalmazza a keresett számot: 23!';
} else {
  document.querySelector('.feladat9').innerHTML = 'A tömb nem tartalmazza a keresett számot: 23!';
}
/* 9. feladat vége*/

/* 10. Feladat: Írd ki, hogy egy tetszőlegese elemszámú, bármilyen típusú elemeket tartalmazó tömb
 (feltételezzük, hogy beágyazott tömböt, objektumot nem tartalmaz) hányszor tartalmazza a 23-as számot! */
function countItemInArray(parameterArray, lookingForItem) {
  var itemCount = 0;
  for (var i = 0; i < parameterArray.length; i++) {
    if (parameterArray[i] === lookingForItem) {
      itemCount++;
    }
  }

  return itemCount;
}

document.querySelector('.feladat10').innerHTML = `A tömbben a keresett szám ${countItemInArray(mainArray, 23)} esetben 
található meg!`;
/* 10. Feladat vége */

/* 11. Feladat: Rendezd a javított buborékos rendezés algoritmus segítségével egy tetszőleges elemszámú, csak
 lebegőpontos számokat tartalmazó tömb elemeit növekvő sorrendbe! Írasd ki a rendezett tömböt!*/
function advancedBubbleSort(parameterArray) {
  var tempArray = parameterArray.slice();
  var endIndex = tempArray.length;
  var newEndIndex;
  while (endIndex > 0) {
    newEndIndex = 0;
    for (var i = 0; i < endIndex; i++) {
      if (tempArray[i] > tempArray[i + 1]) {
        [tempArray[i], tempArray[i + 1]] = [tempArray[i + 1], tempArray[i]];
        newEndIndex = i;
      }
    }
    endIndex = newEndIndex;
  }

  return tempArray;
}

document.querySelector('.feladat11').innerHTML = `A rendezett tömb:<br>${advancedBubbleSort(mainFloatArray)}`;
/* 11. Feladat vége*/

/* 12. Feladat: Rendezd a javított buborékos rendezés algoritmus segítségével egy tetszőleges elemszámú, beágyazott
 tömb, és objektum kivételével bármilyen típusú elemeket tartalmazó tömb elemeit csökkenő sorrendbe! A nem szám típusú
  elemeket rakd a tömb végére az eredeti sorrendbe. Írasd ki a rendezett tömböt!*/
function sortOnlyNumbersOfArray(parameterArray) {
  var tempArray = [];
  var tempArrayNaN = [];
  for (var i = 0; i < parameterArray.length; i++) {
    if (typeof parameterArray[i] === 'number') {
      tempArray.push(parameterArray[i]);
    } else {
      tempArrayNaN.push(parameterArray[i]);
    }
  }
  tempArray = advancedBubbleSort(tempArray);
  for (i = 0; i < tempArrayNaN.length; i++) {
    tempArray.push(tempArrayNaN[i]);
  }

  return tempArray;
}

document.querySelector('.feladat12').innerHTML = sortOnlyNumbersOfArray(mixedTypeArray);
/* 12. Feladat vége*/

/* 13. Feladat: Adott egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb. A tömb elemeit rendezzük növekvő
 sorrendbe. Ezután a felhasználótól kérjünk be egy számot (addig kérjünk be értéket, míg valóban egy véges egész számot
 ad meg). A számot szúrjuk be a tömbbe úgy, hogy a tömb továbbra is rendezett maradjon, tehát a megfelelő indexű helyre
 kerüljön be a plusz elem. */
function insertIntegerToArray(parameterArray) {
  var tempArray = parameterArray.slice();
  tempArray = advancedBubbleSort(tempArray);
  var isInteger = false;
  while (!isInteger) {
    var userInput = prompt('Melyik egész számot szúrjam be a rendezett tömbbe?: ');
    if (parseFloat(userInput) === parseInt(userInput, 10)) {
      isInteger = true;
      userInput = parseInt(userInput, 10);
    }
  }
  var i = 0;
  var inserted = false;
  do {
    if (tempArray[i] > userInput) {
      tempArray.splice(i, 0, userInput);
      inserted = true;
    }
    i++;
  } while (i < tempArray.length && !inserted);

  return tempArray;
}

document.querySelector('.feladat13').innerHTML += insertIntegerToArray(mainArray);
/* 13. Feladat vége */
/* 14. Feladat: Adott egy tömb, mely azonos darabú egész számot, és szöveget tartalmaz véletlenszerű sorrendben.
Rendezzük úgy a tömböt, hogy minden szám után egy string következzen! Írasd ki a rendezett tömböt!*/
function sortStringAfterNumber(parameterArray) {
  var sortedArray = [];
  var numberArray = [];
  var stringArray = [];
  for (var i = 0; i < parameterArray.length; i++) {
    if (typeof parameterArray[i] === 'number') {
      numberArray.push(parameterArray[i]);
    } else {
      stringArray.push(parameterArray[i]);
    }
  }
  for (i = 0; i < numberArray.length; i++) {
    sortedArray.push(numberArray[i]);
    sortedArray.push(stringArray[i]);
  }

  return sortedArray;
}

document.querySelector('.feladat14').innerHTML = sortStringAfterNumber(mixedTypeArrayAgain);
/* 14. Feladat vége */

/* 15. Feladat: Adott egy tetszőleges pozitív egész számokat tartalmazó tömb.  Válogassuk szét külön egy paros, és
paratlan nevezetű tömbbe a páros, és páratlan számokat! Írjuk ki a 2 tömböt!*/
function getEvenNumbersFromArray(parameterArray) {
  var evenNumbers = [];
  for (var i = 0; i < parameterArray.length; i++) {
    if (parameterArray[i] % 2 === 0) {
      evenNumbers.push(parameterArray[i]);
    }
  }
  return evenNumbers;
}

function getUnevenNumbersFromArray(parameterArray) {
  var unevenNumbers = [];
  for (var i = 0; i < parameterArray.length; i++) {
    if (parameterArray[i] % 2 === 1) {
      unevenNumbers.push(parameterArray[i]);
    }
  }
  return unevenNumbers;
}

document.querySelector('.feladat15ps').innerHTML = `Páros elemek: ${getEvenNumbersFromArray(mainArray)}`;
document.querySelector('.feladat15ptlan').innerHTML = `Páratlan elemek: ${getUnevenNumbersFromArray(mainArray)}`;
/* 15. Feladat vége*/

/* 16. Feladat: Adott két azonos elemszámú, csak egész számokat tartalmazó tömb. Külön tömbökbe készítsük el a két
tömb: metszetét, unióját, különbségét, és descartes szorzatát. Írassuk ki az új tömböket!*/
function getUnion(parameterArrayA, parameterArrayB) {
  var unionArray = [];
  for (var i = 0; i < parameterArrayA.length; i++) {
    unionArray.push(parameterArrayA[i]);
  }
  for (i = 0; i < parameterArrayB.length; i++) {
    var containsItem = false;
    for (var j = 0; j < unionArray.length; j++) {
      if (unionArray[j] === parameterArrayB[i]) {
        containsItem = true;
      }
    }
    if (!containsItem) {
      unionArray.push(parameterArrayB[i]);
    }
  }

  return unionArray;
}

function getIntersection(parameterArrayA, parameterArrayB) {
  var intersectionArray = [];
  for (var i = 0; i < parameterArrayA.length; i++) {
    for (var j = 0; j < parameterArrayB.length; j++) {
      if (parameterArrayA[i] === parameterArrayB[j]) {
        intersectionArray.push(parameterArrayA[i]);
      }
    }
  }

  return intersectionArray;
}

function getDiffernce(parameterArrayA, parameterArrayB) {
  var differenceArray = [];
  for (var i = 0; i < parameterArrayA.length; i++) {
    var containsItem = false;
    for (var j = 0; j < parameterArrayB.length; j++) {
      if (parameterArrayA[i] === parameterArrayB[j]) {
        containsItem = true;
      }
    }
    if (!containsItem) {
      differenceArray.push(parameterArrayA[i]);
    }
  }

  return differenceArray;
}

function getCartesian(parameterArrayA, parameterArrayB) {
  var cartesianPairs = [];
  for (var i = 0; i < parameterArrayA.length; i++) {
    cartesianPairs.push(`{${parameterArrayA[i]}, ${parameterArrayB[i]}}`);
  }

  return cartesianPairs;
}

document.querySelector('.feladat16unio').innerHTML = `A és B halmaz uniója: ${getUnion(arrayA, arrayB)}`;
document.querySelector('.feladat16metszet').innerHTML = `A és B halmaz metszete: ${getIntersection(arrayA, arrayB)}`;
document.querySelector('.feladat16kulonbseg').innerHTML = `A és B halmaz különbsége: ${getDiffernce(arrayA, arrayB)}`;
document.querySelector('.feladat16descartes').innerHTML = `A és B halmaz Descartes szorzata: ${getCartesian(arrayA, arrayB)}`;

/* 16. Feladat vége */
