$(function() {

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

  // All of this was handcrafted based roughly on a px width of 1030, so to
  // make it more dynamic, an offset needs to be used.
  var offset = window.innerWidth - 1030;
  // Create an array of arcs and circles that make up the decorations.
  var arcPaper = Raphael("strings", window.innerWidth, 200),
          arcs = [],
          circles = [[], [], []];
  // On load, the arcs should be created.
  createArcs();

  /**
   * Removes existing arcs.
   */
  function removeArcs() {
    for (var i = 0; i < arcs.length; i++) {
      for (var j = 0; j < circles[i].length; j++) {
        // Remove the circle.
        circles[i][j].remove();
      }
      // Remove the arc.
      arcs[i].remove();
    }
  }
  
  /** Updates arcs. **/
  function updateArcs() {
    removeArcs();
    // @TODO Recreate (or move) arcs.
  }

  /**
   * Create the arcs and circles.
   */
  function createArcs() {
    // Create the "first" arc path (right corner, left positioned). Offset the
    // X coordinates as they were constructed by hand based on a certain window
    // width.
    arcs[0] = arcPaper.path('M ' + (1073 + offset) + ',74 A 163,52 0 1 1 ' + (558 + offset) + ',-11');
    arcs[0].attr("stroke", "#fff");
    arcs[0].attr("opacity", "0.5");

    // Create the "second" arc path (right corner, right positioned). Offset the
    // X coordinates as they were constructed by hand based on a certain window
    // width.
    arcs[1] = arcPaper.path('M ' + (1101 + offset) + ',114 A 113,73 0 1 1 ' + (799 + offset) + ',-66');
    arcs[1].attr("stroke", "#fff");
    arcs[1].attr("opacity", "0.4");

    // Create the "third" arc path (left corner positioned). Unlike the other
    // arcs, this one does not need to be offset as it is left-based.
    arcs[2] = arcPaper.path('M 225,-109 A 4,-1 0 1 1 -54,75');
    arcs[2].attr("stroke", "#fff");
    arcs[2].attr("opacity", "0.3");

    // Definte the set of circles that belongs to the first arc. Offset the each
    // circle's X axis just as the arc is offset.
    circles[0][0] = arcPaper.circle(545 + offset, 50, 10);
    circles[0][1] = arcPaper.circle(540 + offset, 70, 7);
    circles[0][2] = arcPaper.circle(562 + offset, 70, 7);
    circles[0][3] = arcPaper.circle(570 + offset, 92, 11);
    circles[0][4] = arcPaper.circle(590 + offset, 85, 5);
    circles[0][5] = arcPaper.circle(595 + offset, 100, 7);
    circles[0][6] = arcPaper.circle(607 + offset, 89, 7);
    circles[0][7] = arcPaper.circle(616 + offset, 110, 11);
    circles[0][8] = arcPaper.circle(637 + offset, 90, 15);
    circles[0][9] = arcPaper.circle(641 + offset, 110, 4);
    circles[0][10] = arcPaper.circle(653 + offset, 117, 7);
    circles[0][11] = arcPaper.circle(673 + offset, 103, 9);
    circles[0][12] = arcPaper.circle(675 + offset, 121, 8);
    circles[0][13] = arcPaper.circle(705 + offset, 100, 15);
    circles[0][14] = arcPaper.circle(695 + offset, 120, 5);
    circles[0][15] = arcPaper.circle(715 + offset, 129, 9);
    circles[0][16] = arcPaper.circle(732 + offset, 112, 8);
    circles[0][17] = arcPaper.circle(747 + offset, 135, 12);
    circles[0][18] = arcPaper.circle(765 + offset, 114, 9);
    circles[0][19] = arcPaper.circle(775 + offset, 127, 4);
    circles[0][20] = arcPaper.circle(790 + offset, 130, 6);
    circles[0][21] = arcPaper.circle(813 + offset, 135, 11);
    circles[0][22] = arcPaper.circle(827 + offset, 110, 15);
    circles[0][23] = arcPaper.circle(839 + offset, 130, 6);
    circles[0][24] = arcPaper.circle(855 + offset, 112, 10);
    circles[0][25] = arcPaper.circle(870 + offset, 134, 11);
    circles[0][26] = arcPaper.circle(885 + offset, 115, 7);
    circles[0][27] = arcPaper.circle(905 + offset, 135, 15);
    circles[0][28] = arcPaper.circle(913 + offset, 107, 11);
    circles[0][29] = arcPaper.circle(930 + offset, 120, 5);
    circles[0][30] = arcPaper.circle(941 + offset, 106, 7);
    circles[0][31] = arcPaper.circle(950 + offset, 123, 9);
    circles[0][32] = arcPaper.circle(969 + offset, 101, 8);
    circles[0][33] = arcPaper.circle(985 + offset, 121, 15);
    circles[0][34] = arcPaper.circle(999 + offset, 91, 10);
    circles[0][35] = arcPaper.circle(1017 + offset, 103, 5);

    // Define the set of circles that belongs to the second arc. Offset the each
    // circle's X axis just as the arc is offset.
    circles[1][0] = arcPaper.circle(740 + offset, 55, 9);
    circles[1][1] = arcPaper.circle(758 + offset, 60, 5);
    circles[1][2] = arcPaper.circle(750 + offset, 80, 11);
    circles[1][3] = arcPaper.circle(774 + offset, 79, 8);
    circles[1][4] = arcPaper.circle(768 + offset, 105, 13);
    circles[1][5] = arcPaper.circle(790 + offset, 100, 7);
    circles[1][6] = arcPaper.circle(797 + offset, 120, 5);
    circles[1][7] = arcPaper.circle(810 + offset, 108, 10);
    circles[1][8] = arcPaper.circle(835 + offset, 142, 6);
    circles[1][9] = arcPaper.circle(858 + offset, 137, 6);
    circles[1][10] = arcPaper.circle(859 + offset, 159, 15);
    circles[1][11] = arcPaper.circle(885 + offset, 160, 8);
    circles[1][12] = arcPaper.circle(916 + offset, 170, 13);
    circles[1][13] = arcPaper.circle(930 + offset, 145, 9);
    circles[1][14] = arcPaper.circle(948 + offset, 151, 4);
    circles[1][15] = arcPaper.circle(955 + offset, 169, 11);
    circles[1][16] = arcPaper.circle(970 + offset, 147, 7);
    circles[1][17] = arcPaper.circle(990 + offset, 160, 7);
    circles[1][18] = arcPaper.circle(1000 + offset, 140, 11);
    circles[1][19] = arcPaper.circle(1025 + offset, 163, 15);

    // Definte the set of circles that belong to the third arc. Offset the each
    // circle's X axis just as the arc is offset.
    circles[2][0] = arcPaper.circle(5, 96, 15);
    circles[2][1] = arcPaper.circle(12, 71, 8);
    circles[2][2] = arcPaper.circle(35, 90, 9);
    circles[2][3] = arcPaper.circle(45, 75, 5);
    circles[2][4] = arcPaper.circle(60, 91, 13);
    circles[2][5] = arcPaper.circle(80, 66, 15);
    circles[2][6] = arcPaper.circle(95, 89, 7);
    circles[2][7] = arcPaper.circle(109, 73, 7);
    circles[2][8] = arcPaper.circle(135, 96, 15);
    circles[2][9] = arcPaper.circle(143, 73, 7);
    circles[2][10] = arcPaper.circle(165, 90, 10);
    circles[2][11] = arcPaper.circle(175, 65, 13);
    circles[2][12] = arcPaper.circle(190, 85, 7);
    circles[2][13] = arcPaper.circle(199, 72, 4);
    circles[2][14] = arcPaper.circle(205, 80, 4);
    circles[2][15] = arcPaper.circle(217, 66, 9);
    circles[2][16] = arcPaper.circle(232, 85, 11);
    circles[2][17] = arcPaper.circle(242, 65, 7);
    circles[2][18] = arcPaper.circle(250, 75, 4);
    circles[2][19] = arcPaper.circle(265, 62, 9);
    circles[2][20] = arcPaper.circle(290, 77, 11);
    circles[2][21] = arcPaper.circle(310, 50, 15);
    circles[2][22] = arcPaper.circle(335, 65, 9);

    // Make each circle we've defined for every arc uniqe.
    for (var i = 0; i < arcs.length; i++) {
      for (var j = 0; j < circles[i].length; j++) {
        // Remove default SVG outline.
        circles[i][j].attr("stroke", "none");
        // Set a random color.
        circles[i][j].attr("fill", getColor());
        // Set a random opacity.
        circles[i][j].attr("opacity", getOpacity());
      }
    }
  }

});
