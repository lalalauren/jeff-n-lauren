$(function() {
  function getOpacity() {
    return (Math.floor(Math.random() * 50) + 10) / 100;
  }
  function getColor() {
    var shades = ["D1", "D6", "E0", "E6", "EB", "F0", "F5", "FA", "FF", // More white/light yellow
    "99", "A3", "AD", "B8", "C2", "CC", "D6", "E0", "EB", "F5"]; // More yellow
    return "#FFFF" + shades[Math.floor(Math.random() * shades.length)];
  }
  var originalWidth = 1030;
  var paper2 = Raphael("strings", window.innerWidth, 200);
  console.log(window.innerWidth);
  //var arcPath = paper.path("M200,200 v-150 a150,150 0 0,0 -150,150");
  var difference = window.innerWidth - 1030;
  console.log(difference);
  var arcPath = paper2.path('M 1073,74 A 163,52 0 1 1 558,-11');
  //var arcPath = paper2.path('M 1155,74 A 163,52 0 1 1 640,-11');
  arcPath.attr("stroke", "#fff");
  arcPath.attr("opacity", "0.5");
  
  var arcPath2 = paper2.path('M 1101,114 A 113,73 0 1 1 799,-66');
  arcPath2.attr("stroke", "#fff");
  arcPath2.attr("opacity", "0.4");
  //var arcPath3 = paper2.path('M 506,74 A 60,-10 0 1 1 185,76');
  var arcPath3 = paper2.path('M 225,-109 A 4,-1 0 1 1 -54,75');
  arcPath3.attr("stroke", "#fff");
  arcPath3.attr("opacity", "0.3");
  

  var circles = [], circles2 = [], circles3 = [];
  circles[0] = paper2.circle(545, 50, 10);
  circles[1] = paper2.circle(540, 70, 7);
  circles[2] = paper2.circle(562, 70, 7);
  circles[3] = paper2.circle(570, 92, 11);
  circles[4] = paper2.circle(590, 85, 5);
  circles[5] = paper2.circle(595, 100, 7);
  circles[6] = paper2.circle(607, 89, 7);
  circles[7] = paper2.circle(616, 110, 11);
  circles[8] = paper2.circle(637, 90, 15);
  circles[9] = paper2.circle(641, 110, 4);
  circles[10] = paper2.circle(653, 117, 7);
  circles[11] = paper2.circle(673, 103, 9);
  circles[12] = paper2.circle(675, 121, 8);
  circles[13] = paper2.circle(705, 100, 15);
  circles[14] = paper2.circle(695, 120, 5);
  circles[15] = paper2.circle(715, 129, 9);
  circles[16] = paper2.circle(732, 112, 8);
  circles[17] = paper2.circle(747, 135, 12);
  circles[18] = paper2.circle(765, 114, 9);
  circles[19] = paper2.circle(775, 127, 4);
  circles[20] = paper2.circle(790, 130, 6);
  circles[21] = paper2.circle(813, 135, 11);
  circles[22] = paper2.circle(827, 110, 15);
  circles[23] = paper2.circle(839, 130, 6);
  circles[24] = paper2.circle(855, 112, 10);
  circles[25] = paper2.circle(870, 134, 11);
  circles[26] = paper2.circle(885, 115, 7);
  circles[27] = paper2.circle(905, 135, 15);
  circles[28] = paper2.circle(913, 107, 11);
  circles[29] = paper2.circle(930, 120, 5);
  circles[30] = paper2.circle(941, 106, 7);
  circles[31] = paper2.circle(950, 123, 9);
  circles[32] = paper2.circle(969, 101, 8);
  circles[33] = paper2.circle(985, 121, 15);
  circles[34] = paper2.circle(999, 91, 10);
  circles[35] = paper2.circle(1017, 103, 5);
  /*
  circles2[0] = paper2.circle(740, 55, 9);
  circles2[1] = paper2.circle(758, 60, 5);
  circles2[2] = paper2.circle(750, 80, 11);
  circles2[3] = paper2.circle(774, 79, 8);
  circles2[4] = paper2.circle(768, 105, 13);
  circles2[5] = paper2.circle(790, 100, 7);
  circles2[6] = paper2.circle(797, 120, 5);
  circles2[7] = paper2.circle(810, 108, 10);
  circles2[8] = paper2.circle(835, 142, 6);
  circles2[9] = paper2.circle(858, 137, 6);
  circles2[10] = paper2.circle(859, 159, 15);
  circles2[11] = paper2.circle(885, 160, 8);
  circles2[12] = paper2.circle(916, 170, 13);
  circles2[13] = paper2.circle(930, 145, 9);
  circles2[14] = paper2.circle(948, 151, 4);
  circles2[15] = paper2.circle(955, 169, 11);
  circles2[16] = paper2.circle(970, 147, 7);
  circles2[17] = paper2.circle(990, 160, 7);
  circles2[18] = paper2.circle(1000, 140, 11);
  circles2[19] = paper2.circle(1025, 163, 15);
  
  circles3[0] = paper2.circle(5, 96, 15);
  circles3[1] = paper2.circle(12, 71, 8);
  circles3[2] = paper2.circle(35, 90, 9);
  circles3[3] = paper2.circle(45, 75, 5);
  circles3[4] = paper2.circle(60, 91, 13);
  circles3[5] = paper2.circle(80, 66, 15);
  circles3[6] = paper2.circle(95, 89, 7);
  circles3[7] = paper2.circle(109, 73, 7);
  circles3[8] = paper2.circle(135, 96, 15);
  circles3[9] = paper2.circle(143, 73, 7);
  circles3[10] = paper2.circle(165, 90, 10);
  circles3[11] = paper2.circle(175, 65, 13);
  circles3[12] = paper2.circle(190, 85, 7);
  circles3[13] = paper2.circle(199, 72, 4);
  circles3[14] = paper2.circle(205, 80, 4);
  circles3[15] = paper2.circle(217, 66, 9);
  circles3[16] = paper2.circle(232, 85, 11);
  circles3[17] = paper2.circle(242, 65, 7);
  circles3[18] = paper2.circle(250, 75, 4);
  circles3[19] = paper2.circle(265, 62, 9);
  circles3[20] = paper2.circle(290, 77, 11);
  circles3[21] = paper2.circle(310, 50, 15);
  circles3[22] = paper2.circle(335, 65, 9);
*/
  for (var i = 0; i < circles.length; i++) {
    circles[i].attr("fill", getColor());
    circles[i].attr("stroke", "none");
    circles[i].attr("opacity", getOpacity());
  }
  
  for (var j = 0; j < circles2.length; j++) {
    circles2[j].attr("fill", getColor());
    circles2[j].attr("stroke", "none");
    circles2[j].attr("opacity", getOpacity());
  }
  
  for (var k = 0; k < circles3.length; k++) {
    circles3[k].attr("fill", getColor());
    circles3[k].attr("stroke", "none");
    circles3[k].attr("opacity", getOpacity());
  }

}
);