$(function() {
  // All of this was handcrafted based roughly on a px width of 1030, so to
  // make it more dynamic, an offset needs to be used.
  var offset = window.innerWidth - 1030;
  
  /**
   * Gets a random opacity level.
   * 
   * @returns {Number}
   *   Opacity level.
   */
  function getOpacity() {
    return (Math.floor(Math.random() * 50) + 10) / 100;
  }
  
  /**
   * Get a random color from a set of approved colors.
   * 
   * @returns {String}
   *   Hex color.
   */
  function getColor() {
    var shades = ["D1", "D6", "E0", "E6", "EB", "F0", "F5", "FA", "FF", // More white/light yellow
    "99", "A3", "AD", "B8", "C2", "CC", "D6", "E0", "EB", "F5"]; // More yellow
    return "#FFFF" + shades[Math.floor(Math.random() * shades.length)];
  }
  
  
  var paper2 = Raphael("strings", window.innerWidth, 200);
  
  
  // Create the "first" arc path (right corner, left positioned).
  var arcPath = paper2.path('M ' + (1073 + offset) + ',74 A 163,52 0 1 1 ' + (558 + offset) + ',-11');
  arcPath.attr("stroke", "#fff");
  arcPath.attr("opacity", "0.5");
  
  // Create the "second" arc path (right corner, right positioned).
  var arcPath2 = paper2.path('M ' + (1101 + offset) + ',114 A 113,73 0 1 1 ' + (799 + offset) + ',-66');
  arcPath2.attr("stroke", "#fff");
  arcPath2.attr("opacity", "0.4");
  
  // Create the "third" arc path (left corner positioned).
  // NOTE: Since this arc is all the way to the left, we don't really need to
  // consider offsetting it.
  var arcPath3 = paper2.path('M 225,-109 A 4,-1 0 1 1 -54,75');
  arcPath3.attr("stroke", "#fff");
  arcPath3.attr("opacity", "0.3");
  
  // For each arc that was created, we will definite 3 arrays of circles to be
  // created.
  var circles = [], circles2 = [], circles3 = [];
  
  // Definte the set of circles that belongs to the first arc.
  // NOTE: These need to be offset, just as the first arc is.
  circles[0] = paper2.circle(545 + offset, 50, 10);
  circles[1] = paper2.circle(540 + offset, 70, 7);
  circles[2] = paper2.circle(562 + offset, 70, 7);
  circles[3] = paper2.circle(570 + offset, 92, 11);
  circles[4] = paper2.circle(590 + offset, 85, 5);
  circles[5] = paper2.circle(595 + offset, 100, 7);
  circles[6] = paper2.circle(607 + offset, 89, 7);
  circles[7] = paper2.circle(616 + offset, 110, 11);
  circles[8] = paper2.circle(637 + offset, 90, 15);
  circles[9] = paper2.circle(641 + offset, 110, 4);
  circles[10] = paper2.circle(653 + offset, 117, 7);
  circles[11] = paper2.circle(673 + offset, 103, 9);
  circles[12] = paper2.circle(675 + offset, 121, 8);
  circles[13] = paper2.circle(705 + offset, 100, 15);
  circles[14] = paper2.circle(695 + offset, 120, 5);
  circles[15] = paper2.circle(715 + offset, 129, 9);
  circles[16] = paper2.circle(732 + offset, 112, 8);
  circles[17] = paper2.circle(747 + offset, 135, 12);
  circles[18] = paper2.circle(765 + offset, 114, 9);
  circles[19] = paper2.circle(775 + offset, 127, 4);
  circles[20] = paper2.circle(790 + offset, 130, 6);
  circles[21] = paper2.circle(813 + offset, 135, 11);
  circles[22] = paper2.circle(827 + offset, 110, 15);
  circles[23] = paper2.circle(839 + offset, 130, 6);
  circles[24] = paper2.circle(855 + offset, 112, 10);
  circles[25] = paper2.circle(870 + offset, 134, 11);
  circles[26] = paper2.circle(885 + offset, 115, 7);
  circles[27] = paper2.circle(905 + offset, 135, 15);
  circles[28] = paper2.circle(913 + offset, 107, 11);
  circles[29] = paper2.circle(930 + offset, 120, 5);
  circles[30] = paper2.circle(941 + offset, 106, 7);
  circles[31] = paper2.circle(950 + offset, 123, 9);
  circles[32] = paper2.circle(969 + offset, 101, 8);
  circles[33] = paper2.circle(985 + offset, 121, 15);
  circles[34] = paper2.circle(999 + offset, 91, 10);
  circles[35] = paper2.circle(1017 + offset, 103, 5);
  
  // Define the set of circles that belongs to the second arc.
  // NOTE: These need to be offset, just as the first arc is.
  circles2[0] = paper2.circle(740 + offset, 55, 9);
  circles2[1] = paper2.circle(758 + offset, 60, 5);
  circles2[2] = paper2.circle(750 + offset, 80, 11);
  circles2[3] = paper2.circle(774 + offset, 79, 8);
  circles2[4] = paper2.circle(768 + offset, 105, 13);
  circles2[5] = paper2.circle(790 + offset, 100, 7);
  circles2[6] = paper2.circle(797 + offset, 120, 5);
  circles2[7] = paper2.circle(810 + offset, 108, 10);
  circles2[8] = paper2.circle(835 + offset, 142, 6);
  circles2[9] = paper2.circle(858 + offset, 137, 6);
  circles2[10] = paper2.circle(859 + offset, 159, 15);
  circles2[11] = paper2.circle(885 + offset, 160, 8);
  circles2[12] = paper2.circle(916 + offset, 170, 13);
  circles2[13] = paper2.circle(930 + offset, 145, 9);
  circles2[14] = paper2.circle(948 + offset, 151, 4);
  circles2[15] = paper2.circle(955 + offset, 169, 11);
  circles2[16] = paper2.circle(970 + offset, 147, 7);
  circles2[17] = paper2.circle(990 + offset, 160, 7);
  circles2[18] = paper2.circle(1000 + offset, 140, 11);
  circles2[19] = paper2.circle(1025 + offset, 163, 15);
  
  // Definte the set of circles that belong to the third arc.
  // NOTE: These do NOT need to be offset as this is in the left corner.
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