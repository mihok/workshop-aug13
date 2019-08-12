window.DATA = {};

// We apply an arbitrary shift amount (135 to weight, 66 to height) so our data 
// is easier to deal with, typically you would shift based on the mean.
//  Name, Weight (lbs), Height (in), Gender
window.DATA.whg = [
  // { name: "Alice",   weight: 133,  height: 65, gender: F },
  { name: "Alice",   weight: -2,  height: -1, gender: 1 },
  // { name: "Bob",     weight: 160,  height: 72,  gender: M },
  { name: "Bob",     weight: 25,  height: 6,  gender: 0 },
  // { name: "Charlie", weight: 152,  height: 70,  gender: M },
  { name: "Charlie", weight: 17,  height: 4,  gender: 0 },
  // { name: "Diana",   weight: 120, height: 60, gender: F },
  { name: "Diana",   weight: -15, height: -6, gender: 1 },
];
