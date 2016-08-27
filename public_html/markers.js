// -*- mode: javascript; indent-tabs-mode: nil; c-basic-offset: 8 -*-
"use strict";

// From the original planeObject.js:
var _generic_plane_svg = "M 0,0 " +
        "M 1.9565564,41.694305 C 1.7174505,40.497708 1.6419973,38.448747 " +
        "1.8096508,37.70494 1.8936398,37.332056 2.0796653,36.88191 2.222907,36.70461 " +
        "2.4497603,36.423844 4.087816,35.47248 14.917931,29.331528 l 12.434577," +
        "-7.050718 -0.04295,-7.613412 c -0.03657,-6.4844888 -0.01164,-7.7625804 " +
        "0.168134,-8.6194061 0.276129,-1.3160905 0.762276,-2.5869575 1.347875," +
        "-3.5235502 l 0.472298,-0.7553719 1.083746,-0.6085497 c 1.194146,-0.67053522 " +
        "1.399524,-0.71738842 2.146113,-0.48960552 1.077005,0.3285939 2.06344," +
        "1.41299352 2.797602,3.07543322 0.462378,1.0469993 0.978731,2.7738408 " +
        "1.047635,3.5036272 0.02421,0.2570284 0.06357,3.78334 0.08732,7.836246 0.02375," +
        "4.052905 0.0658,7.409251 0.09345,7.458546 0.02764,0.04929 5.600384,3.561772 " +
        "12.38386,7.805502 l 12.333598,7.715871 0.537584,0.959688 c 0.626485,1.118378 " +
        "0.651686,1.311286 0.459287,3.516442 -0.175469,2.011604 -0.608966,2.863924 " +
        "-1.590344,3.127136 -0.748529,0.200763 -1.293144,0.03637 -10.184829,-3.07436 " +
        "C 48.007733,41.72562 44.793806,40.60197 43.35084,40.098045 l -2.623567," +
        "-0.916227 -1.981212,-0.06614 c -1.089663,-0.03638 -1.985079,-0.05089 -1.989804," +
        "-0.03225 -0.0052,0.01863 -0.02396,2.421278 -0.04267,5.339183 -0.0395,6.147742 " +
        "-0.143635,7.215456 -0.862956,8.845475 l -0.300457,0.680872 2.91906,1.361455 " +
        "c 2.929379,1.366269 3.714195,1.835385 4.04589,2.41841 0.368292,0.647353 " +
        "0.594634,2.901439 0.395779,3.941627 -0.0705,0.368571 -0.106308,0.404853 " +
        "-0.765159,0.773916 L 41.4545,62.83158 39.259237,62.80426 c -6.030106,-0.07507 " +
        "-16.19508,-0.495041 -16.870991,-0.697033 -0.359409,-0.107405 -0.523792," +
        "-0.227482 -0.741884,-0.541926 -0.250591,-0.361297 -0.28386,-0.522402 -0.315075," +
        "-1.52589 -0.06327,-2.03378 0.23288,-3.033615 1.077963,-3.639283 0.307525," +
        "-0.2204 4.818478,-2.133627 6.017853,-2.552345 0.247872,-0.08654 0.247455," +
        "-0.102501 -0.01855,-0.711959 -0.330395,-0.756986 -0.708622,-2.221756 -0.832676," +
        "-3.224748 -0.05031,-0.406952 -0.133825,-3.078805 -0.185533,-5.937448 -0.0517," +
        "-2.858644 -0.145909,-5.208974 -0.209316,-5.222958 -0.06341,-0.01399 -0.974464," +
        "-0.0493 -2.024551,-0.07845 L 23.247235,38.61921 18.831373,39.8906 C 4.9432155," +
        "43.88916 4.2929558,44.057819 3.4954426,43.86823 2.7487826,43.690732 2.2007966," +
        "42.916622 1.9565564,41.694305 z";

// Rescaled from "Helicopter bottom view silhouette"
// http://www.flaticon.com/free-icon/helicopter-bottom-view-silhouette_26901
// by Freepik (http://www.flaticon.com/authors/freepik)
// licensed under CC BY 3.0 (https://creativecommons.org/licenses/by/3.0/)

// 44x64
var _rotorcraft_svg =
        "M 43.89309,0.4301 c -0.60546,-0.60546 -1.62623,-0.56506 -2.2813,0.0897 L 25.82444,16.3061 C 24.95171,-1.27473 21.64491,1.24212 21.64491,1.24212 c 0,0 -3.20153,-2.80873 -4.13518,14.07519 L 2.71103,0.51862 C 2.05636,-0.13606 1.03533,-0.17646 0.43,0.42902 c -0.60546,0.6052 -0.56506,1.6261 0.0896,2.28104 l 16.81957,16.81931 c -0.0454,1.63425 -0.072,3.41089 -0.0796,5.34281 l -0.90497,0.90496 h -1.94113 v 1.94113 L 0.51882,41.61319 c -0.6548,0.65454 -0.69533,1.67531 -0.09,2.28077 0.60533,0.60546 1.62636,0.5648 2.28104,-0.0896 L 14.41335,32.10074 v 1.94073 h 3.09928 c 0,0 1.25961,6.97312 2.03417,8.65159 0.77495,1.67913 0.032,17.17487 2.09799,17.17487 0.38346,0 0.66928,-0.53374 0.88615,-1.41331 l 6.34515,-2.71897 v -1.03314 h -5.85155 c 0.34017,-4.67077 0.24161,-10.97316 0.71942,-12.00945 0.77416,-1.67847 2.03285,-8.65159 2.03285,-8.65159 h 3.09928 v -2.974 l 12.73545,12.73689 c 0.65507,0.65442 1.67584,0.69495 2.2813,0.0896 0.60546,-0.60533 0.56479,-1.62623 -0.0901,-2.28077 L 28.876,26.68527 v -0.90813 h -0.90799 l -1.94284,-1.9431 c -0.009,-1.15407 -0.0263,-2.25524 -0.0496,-3.29693 l 17.82849,-17.826 c 0.65389,-0.65494 0.69442,-1.67702 0.0891,-2.28103 z " +
        "M 18.80421,51.60336 h -0.5165 c -0.42794,0 -0.77495,0.34754 -0.77495,0.77521 v 10.84709 c 0,0.42768 0.34701,0.77469 0.77495,0.77469 h 0.5165 c 0.42768,0 0.77469,-0.34701 0.77469,-0.77469 V 52.37857 c 0,-0.42781 -0.34701,-0.77521 -0.77469,-0.77521 z";

// Modified version of "Beechcraft Bonanza V35B"
// https://commons.wikimedia.org/wiki/File:Beechcraft_Bonanza_V35B.svg
// by Kaboldy (https://commons.wikimedia.org/wiki/User:Kaboldy)
// licensed under CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0/deed.en)

// 64x49
var _beechcraft_svg = 
        "m 31.9375,0.21875 c -0.06777,0.0107988 -0.115451,0.0391469 -0.15625,0.0625 C 31.672725,0.37187346 31.571656,0.508205 31.5,0.625 c -0.03614,0.0602071 -0.06208,0.095702 -0.09375,0.15625 -0.07403,0.15902301 -0.135583,0.3268225 -0.1875,0.5 -0.04551,0.1172902 -0.09299,0.229501 -0.125,0.34375 C 31.061962,1.7428305 31.051772,1.8837099 31.03125,2 31.013723,2.1172825 31.001884,2.2232944 31,2.34375 a 0.050005,0.050005 0 0 0 0,0.03125 0.050005,0.050005 0 0 0 0,0.03125 c -0.0082,0.022808 -0.04473,0.016331 -0.0625,0.03125 -0.02369,0.019892 -0.05403,0.050775 -0.09375,0.0625 -0.07944,0.02345 -0.16785,0.042313 -0.25,0.0625 -0.142298,0.027931 -0.321549,0.011037 -0.5,0.03125 -0.178451,0.020213 -0.362341,0.079026 -0.5,0.1875 -0.232524,0.2710695 -0.269126,0.6354569 -0.375,0.9375 -0.515728,1.9222735 -0.692683,3.8981369 -0.8125,5.875 -0.0025,0.039801 -0.0291,0.08613 -0.03125,0.125 -5.12e-4,0.00925 5.69e-4,0.022042 0,0.03125 l -3.75,1.59375 -0.03125,0 -0.03125,0 L 1.03125,13.125 1,13.125 a 0.050005,0.050005 0 0 0 -0.03125,0 c -0.0142757,0.0014 -0.0171094,0.02929 -0.03125,0.03125 -0.49350918,0.06826 -0.88359986,0.49922 -0.90625,1 A 0.050005,0.050005 0 0 0 0,14.1875 c -2.5577425e-5,0.01009 -2.9111128e-4,0.02111 0,0.03125 A 0.050005,0.050005 0 0 0 0,14.25 l 0,5.0625 a 0.050005,0.050005 0 0 0 0,0.03125 0.050005,0.050005 0 0 0 0,0.03125 c 2.7397524e-4,0.0076 0.03048716,-0.0075 0.03125,0 a 0.050005,0.050005 0 0 0 0,0.03125 0.050005,0.050005 0 0 0 0.03125,0 c 0.02951574,0.118004 0.10643771,0.204628 0.21875,0.25 0.008119,0.0033 -0.008332,0.02849 0,0.03125 a 0.050005,0.050005 0 0 0 0,0.03125 c 0.007096,0.0018 0.0240449,-0.0015 0.03125,0 a 0.050005,0.050005 0 0 0 0.03125,0 L 28.4375,24.3125 c 0.07632,1.73868 0.196986,3.45307 0.375,5.1875 0.345732,3.673262 0.848433,7.32759 1.4375,10.96875 l -6.96875,1.375 -0.0625,0 a 0.050005,0.050005 0 0 0 -0.03125,0 0.050005,0.050005 0 0 0 0,0.03125 c -0.291266,0.06923 -0.590135,0.19983 -0.78125,0.4375 -0.282641,0.328422 -0.401461,0.745626 -0.46875,1.15625 -0.09612,0.640251 -0.04006,1.301405 0.03125,1.9375 0.08652,0.703658 0.205326,1.376189 0.375,2.0625 0.02,0.08426 0.07303,0.168374 0.09375,0.25 a 0.050005,0.050005 0 0 0 0,0.03125 0.050005,0.050005 0 0 0 0,0.03125 0.050005,0.050005 0 0 0 0,0.03125 0.050005,0.050005 0 0 0 0.03125,0 l 0.0625,0 4.59375,0.46875 0,0.1875 0,0.03125 a 0.050005,0.050005 0 0 0 0,0.03125 0.050005,0.050005 0 0 0 0.03125,0.03125 l 0.03125,0 3.96875,0.375 0.0625,0 a 0.050005,0.050005 0 0 0 0.03125,0 0.050005,0.050005 0 0 0 0,-0.03125 0.050005,0.050005 0 0 0 0,-0.03125 0.050005,0.050005 0 0 0 0,-0.03125 l 0.28125,-1.125 c 0.08761,0.449359 0.164528,0.858018 0.25,1.28125 0.002,0.01 -0.002,0.02127 0,0.03125 0.0054,0.0158 0.0258,0.01691 0.03125,0.03125 0.02181,0.05737 0.03806,0.120629 0.0625,0.15625 0.03055,0.04453 0.07454,0.09409 0.125,0.09375 0.05046,-3.37e-4 0.09462,-0.04919 0.125,-0.09375 0.0243,-0.03565 0.04084,-0.09925 0.0625,-0.15625 0.0054,-0.01425 0.02586,-0.01557 0.03125,-0.03125 a 0.050005,0.050005 0 0 0 0,-0.03125 l 0.25,-1.28125 0.28125,1.125 a 0.050005,0.050005 0 0 0 0,0.03125 l 0,0.03125 a 0.050005,0.050005 0 0 0 0,0.03125 0.050005,0.050005 0 0 0 0.03125,0 l 0.0625,0 3.96875,-0.375 a 0.050005,0.050005 0 0 0 0.03125,0 0.050005,0.050005 0 0 0 0.03125,-0.03125 0.050005,0.050005 0 0 0 0,-0.03125 l 0,-0.03125 0,-0.21875 4.59375,-0.4375 a 0.050005,0.050005 0 0 0 0.03125,0 0.050005,0.050005 0 0 0 0.03125,0 0.050005,0.050005 0 0 0 0.03125,0 0.050005,0.050005 0 0 0 0,-0.03125 0.050005,0.050005 0 0 0 0,-0.03125 0.050005,0.050005 0 0 0 0,-0.03125 c 0.09927,-0.372978 0.201637,-0.747919 0.28125,-1.125 0.09782,-0.502873 0.206978,-1.018007 0.25,-1.53125 8.56e-4,-0.01021 -8.2e-4,-0.02104 0,-0.03125 0.04501,-0.499379 0.03422,-1.031912 -0.03125,-1.53125 -0.06791,-0.423874 -0.1758,-0.848192 -0.46875,-1.1875 -0.191021,-0.237794 -0.489803,-0.368516 -0.78125,-0.4375 -0.01389,-0.0033 -0.01729,-0.02834 -0.03125,-0.03125 l -0.0625,0 -7,-1.375 c 0.578605,-3.59278 1.088587,-7.220459 1.4375,-10.84375 0.185606,-1.784156 0.327336,-3.55267 0.40625,-5.34375 l 28.09375,-4.5625 a 0.050005,0.050005 0 0 0 0.03125,0 c 0.01603,-0.0032 0.01585,-0.02623 0.03125,-0.03125 a 0.050005,0.050005 0 0 0 0,-0.03125 c 0.113013,-0.04503 0.18958,-0.131349 0.21875,-0.25 0.0077,-0.03145 0.06397,-0.02794 0.0625,-0.0625 a 0.050005,0.050005 0 0 0 0,-0.03125 l 0,-5.0625 0,-0.03125 c 6.4e-4,-0.02413 -0.03014,-0.03866 -0.03125,-0.0625 -0.02337,-0.501664 -0.410965,-0.931701 -0.90625,-1 -0.0096,-0.0013 -0.02158,0.001 -0.03125,0 a 0.050005,0.050005 0 0 0 0,-0.03125 0.050005,0.050005 0 0 0 -0.03125,0 l -0.03125,0 -23.53125,-1.78125 -0.03125,0 -0.03125,0 -3.78125,-1.5625 0,-0.03125 C 35.517489,8.2805897 35.403194,6.8282343 35.15625,5.375 34.999455,4.539239 34.823204,3.7020107 34.5,2.90625 34.396263,2.7291587 34.223707,2.6576159 34.03125,2.625 33.838793,2.5923841 33.615271,2.5934384 33.46875,2.5625 33.373159,2.539039 33.279419,2.5226169 33.1875,2.5 33.095581,2.4773831 33.02499,2.4607373 33,2.375 c 2e-5,-0.010496 1.57e-4,-0.020774 0,-0.03125 -0.0022,-0.1473663 -0.0087,-0.2950936 -0.03125,-0.4375 -0.02326,-0.1199278 -0.06228,-0.2252731 -0.09375,-0.34375 -0.04357,-0.1647004 -0.09116,-0.3418053 -0.15625,-0.5 -0.04566,-0.13569283 -0.124489,-0.25424267 -0.1875,-0.375 -0.04296,-0.0733644 -0.0692,-0.1478646 -0.125,-0.21875 C 32.363928,0.40814747 32.294741,0.35866921 32.25,0.3125 32.21883,0.28842774 32.193993,0.26948756 32.15625,0.25 c -0.02455,-0.0127106 -0.06329,0.007373 -0.09375,0 -0.01015,-0.002458 -0.02048,0.001121 -0.03125,0 a 0.050005,0.050005 0 0 0 0,-0.03125 c -0.01089,-8.0895e-4 -0.01977,-9.7401e-4 -0.03125,0 4.14e-4,-4.837e-5 -0.01894,5.0367e-4 -0.03125,0 -0.01231,-5.0367e-4 -0.01037,-0.0122022 -0.03125,0 z";

// From https://commons.wikimedia.org/wiki/File:Silhouette_An-124.svg
// (which puts the original SVG in the public domain)
var _heavy_svg =
        "m28.64874,12.035023l0,8.801421l-4.585627,3.066495c0.126825,-0.257055 0.094102,-0.531839 0.095802,-0.802796l-0.015437,-3.087446l-2.230453,-0.012673l0.019009,3.599141c0.000513,0.577993 0.076338,0.923195 0.589296,1.241956l-5.533809,3.630512c0.166511,-0.256275 0.153699,-0.551367 0.153699,-0.841892l-0.005929,-3.270195l-2.160751,-0.012672l-0.006337,3.637159c0.016349,0.5301 0.096662,1.090947 0.576623,1.419379l-11.976014,7.825597c-2.106287,1.48859 -1.705322,3.044253 -1.56512,4.587637l26.645047,-9.048544l0,13.750239l0.722364,5.062875l-8.681027,6.387208c-1.239945,1.059417 -1.080616,2.171837 -0.842757,3.256969l11.278998,-2.946479c0.130159,3.116897 1.559821,3.171571 1.780561,0.006336l11.278998,2.94648c0.23786,-1.085133 0.397189,-2.197552 -0.842756,-3.256969l-8.681026,-6.387207l0.722362,-5.062875l0,-13.750239l26.645048,9.042207c0.140203,-1.543381 0.541167,-3.092711 -1.56512,-4.581301l-11.976015,-7.825597c0.47996,-0.328434 0.553938,-0.889279 0.570286,-1.419379l0,-3.63716l-2.160751,0.012673l-0.005378,3.328244c-0.002334,0.294243 0.007077,0.545056 0.178191,0.817583l-5.565189,-3.664251c0.512962,-0.318761 0.59512,-0.663963 0.595633,-1.241956l0.019009,-3.599141l-2.230454,0.012673l-0.015793,3.100403c0.001462,0.282341 -0.019949,0.535579 0.124839,0.794638l-4.614307,-3.071294l0,-8.801421c-1.111672,-11.152869 -5.489391,-11.217579 -6.735717,-0.006336z";

// From https://discussions.flightaware.com/ads-b-flight-tracking-f21/some-custom-svg-plane-icons-t37783.html
// by Peter Lowden
// licensed under CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/)

// NB: scaled so that 1 pixel is about 1.33m (0.75px = 1m)
var _a320 = {
        key: "a320",
        scale: 0.60 * 0.75,
        size: [64, 64],
        anchor: [32, 28],
        path: "m 32,1 2,1 2,3 0,18 4,1 0,-4 3,0 0,5 17,6 0,3 -15,-2 -9,0 0,12 -2,6 7,3 0,2 -8,-1 -1,2 -1,-2 -8,1 0,-2 7,-3 -2,-6 0,-12 -9,0 -15,2 0,-3 17,-6 0,-5 3,0 0,4 4,-1 0,-18 2,-3 2,-1z"
};

var _b777 = {
        key: "b777",
        scale: 1.15 * 0.75,
        size: [64, 64],
        anchor: [32, 32],
        path: "m 32,1 2,1 1,2 0,20 4,4 0,-4 3,0 0,4 -1,2 17,12 0,2 -16,-5 -7,0 0,13 -1,5 7,5 0,2 -8,-2 -1,2 -1,-2 -8,2 0,-2 7,-5 -1,-5 0,-13 -7,0 -16,5 0,-2 17,-12 -1,-2 0,-4 3,0 0,4 4,-4 0,-20 1,-2 2,-1z"
};

var _dash8 = {
        key: "dash8",
        scale: 0.52 * 0.75,
        size: [64, 64],
        anchor: [32, 30],
        path: "m 32,1 3,4 0,20 4,0 0,-5 1,-1 1,1 0,5 17,2 0,3 -17,2 0,3 -1,1 -1,-1 0,-3 -4,0 0,15 -1,8 6,0 1,1 0,3 -8,0 -1,1 -1,-1 -8,0 0,-3 1,-1 6,0 -1,-8 0,-15 -4,0 0,3, -1,1 -1,-1 0,-3 -17,-2 0,-3 17,-2 0,-5 1,-1 1,1 0,5 4,0 0,-20 3,-4z"
};

var _b200 = {
        key: "b200",
        scale: 0.31 * 0.75,
        size: [64, 64],
        anchor: [32, 19],
        path: "m 32,1 1,0 1,2 1,4 0,5 5,0 0,-5 -1,-1 2,-2 2,2 -1,1 0,5 17,2 0,3 -17,3 0,1 -2,0 0,-1 -5,0 0,5 -2,8 6,3 0,2 -6,-1 -1,0 -6,1 0,-2 6,-3 -2,-8 0,-5 -5,0 0,1, -2,0 0,-1 -17,-3 0,-3 17,-2 0,-5 -1,-1 2,-2 2,2 -1,1 0,5 5,0 0,-5 1,-4 1,-2 z"
};

var _g650 = {
        key: "g650",
        scale: 0.58 * 0.75,
        size: [64, 64],
        anchor: [32, 26],
        path: "m 32,1 1,0 1,2 1,4 0,10 21,17 0,5 -2,-2 -16,-8 -3,0 0,3 2,0 1,1 0,5 -1,1 0,3 -2,0 0,1 7,5 0,3 -9,-3 -1,0 -9,3 0,-3 7,-5 0,-1 -2,0 0,-3 -1,-1 0,-5 1,-1 2,0 0,-3 -3,0 -16,8 -2,2 0,-5 21,-17 0,-10 1,-4 1,-2z"
};

var _c130 = {
        key: "c130",
        scale: 0.75 * 0.75,
        size: [64, 64],
        anchor: [32, 17],
        path: "m 31,1 1,0 1,1 1,2 0,8 3,0 0,-3 1,-1 1,1 0,3 6,0 0,-3 1,-1 1,1 0,3 10,1 0,2 -1,1 -17,3 -5,0 0,10 -1,1 8,2 0,1 -1,1 -8,0 -1,1 -1,-1 -8,0 -1,-1 0,-1 8,-2 -1,-1 0,-10 -5,0 -17,-3 -1,-1 0,-2 10,-1 0,-3 1,-1 1,1 0,3 6,0 0,-3 1,-1 1,1 0,3 3,0 0,-8 1,-2 1,-1 z"
};

var TypeIcons = {
        'A320': _a320,

        'B772': _b777, // all pretty similar except for length
        'B77W': _b777,
        'B773': _b777,
        'B77L': _b777,

        'DH8D': _dash8,

        'BE20': _b200,

        'GLF5': _g650, // close enough
        'GLF6': _g650,

        'C130': _c130,
        'C30J': _c130
};

var CategoryIcons = {
        "A1" : {
                key : "A1",
                scale : 0.30,
                size : [64, 64],
                anchor : [32, 25],
                path : _beechcraft_svg
        },

        "A2" : {
                key : "A2",
                scale : 0.35,
                size : [64, 64],
                anchor : [32, 32],
                path : _generic_plane_svg
        },

        "A3" : {
                key : "A3",
                scale : 0.40,
                size : [64, 64],
                anchor : [32, 32],
                path : _generic_plane_svg
        },

        "A5" : {
                key : "A5",
                scale : 0.73,
                size : [64, 64],
                anchor : [32, 32],
                path : _heavy_svg
        },

        "A7" : {
                key : "A7",
                scale : 0.50,
                size : [64, 64],
                anchor : [22, 32],
                path : _rotorcraft_svg
        }
};

var DefaultIcon = {
        key : "default",
        scale : 0.4,
        size : [64, 64],
        anchor : [32, 32],
        path : _generic_plane_svg
};

function getBaseMarker(category, type) {
        if (type in TypeIcons) {
                return TypeIcons[type];
        }

        if (category in CategoryIcons) {
                return CategoryIcons[category];
        }

        return DefaultIcon;
}

function svgPathToSvg(path, size, stroke, width, fill) {
        var svg = '<svg width="' + size[0] + 'px" height="' + size[1] + 'px" version="1.1" xmlns="http://www.w3.org/2000/svg">';
        svg += '<path d="' + path + '"';
        if (stroke !== null) {
                svg += ' stroke="' + stroke + '"';
        }
        if (width !== null) {
                svg += ' stroke-width="' + width + '"';
        }
        if (fill !== null) {
                svg += ' fill="' + fill + '"';
        }
        svg += '/></svg>';
        return svg;
}


function svgPathToURI(path, size, stroke, width, fill) {
        return "data:image/svg+xml;base64," + btoa(svgPathToSvg(path, size, stroke, width, fill));
}
