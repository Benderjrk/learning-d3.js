//
// Associated Html needed with script tag at top declaring d3.js and this script file
//
d3.selectAll("div").text("Select All");

d3.select("div").text("Select");

let videoData = [
  { title: "Despacito", amount: 5.68 },
  { title: "Shape of You", amount: 3.89 },
  { title: "See You Again", amount: 3.85 },
  { title: "Uptown Funk", amount: 3.32 },
  { title: "Masha and the Bear: Recipe for Disaster", amount: 3.31 },
  { title: "Gangam Style", amount: 3.23 },
  { title: "Sorry", amount: 3.03 },
  { title: "Sugar", amount: 2.8 },
  { title: "Shake it Off", amount: 2.67 },
  { title: "Roar", amount: 2.65 },
  { title: "Bailando", amount: 2.63 },
  { title: "Thinking Out Loud", amount: 2.53 },
  { title: "Counting Stars", amount: 2.51 },
  { title: "Dark Horse", amount: 2.46 },
  { title: "Lean On", amount: 2.43 },
];

let divSelection = d3.select("body").selectAll("div");
divSelection.data(videoData).text(function (d) {
  return d;
});

let videoData = [
  { title: "Despacito", amount: 5.68 },
  { title: "Shape of You", amount: 3.89 },
  { title: "See You Again", amount: 3.85 },
  { title: "Uptown Funk", amount: 3.32 },
  { title: "Masha and the Bear: Recipe for Disaster", amount: 3.31 },
  { title: "Gangam Style", amount: 3.23 },
  { title: "Sorry", amount: 3.03 },
  { title: "Sugar", amount: 2.8 },
  { title: "Shake it Off", amount: 2.67 },
  { title: "Roar", amount: 2.65 },
  { title: "Bailando", amount: 2.63 },
  { title: "Thinking Out Loud", amount: 2.53 },
  { title: "Counting Stars", amount: 2.51 },
  { title: "Dark Horse", amount: 2.46 },
  { title: "Lean On", amount: 2.43 },
];

let divSelection = d3.select("body").selectAll("div");

divSelection.data(videoData).text(function (d) {
  return `${d.title}: ${d.amount} views`;
});

let videoData = [
  { title: "Despacito", amount: 5.68 },
  { title: "Shape of You", amount: 3.89 },
  { title: "See You Again", amount: 3.85 },
  { title: "Uptown Funk", amount: 3.32 },
  { title: "Masha and the Bear: Recipe for Disaster", amount: 3.31 },
  { title: "Gangam Style", amount: 3.23 },
  { title: "Sorry", amount: 3.03 },
  { title: "Sugar", amount: 2.8 },
  { title: "Shake it Off", amount: 2.67 },
  { title: "Roar", amount: 2.65 },
  { title: "Bailando", amount: 2.63 },
  { title: "Thinking Out Loud", amount: 2.53 },
  { title: "Counting Stars", amount: 2.51 },
  { title: "Dark Horse", amount: 2.46 },
  { title: "Lean On", amount: 2.43 },
];

let divSelection = d3.select("body").selectAll("div");

divSelection
  .data(videoData)
  .attr("class", function (d) {
    return "bar";
  })
  .style("width", function (d) {
    return d.amount * 50 + "px";
  })
  .text(function (d) {
    return d.title + ": " + d.amount + " views";
  });

let videoData = [
  { title: "Despacito", amount: 5.68 },
  { title: "Shape of You", amount: 3.89 },
  { title: "See You Again", amount: 3.85 },
  { title: "Uptown Funk", amount: 3.32 },
  { title: "Masha and the Bear: Recipe for Disaster", amount: 3.31 },
  { title: "Gangam Style", amount: 3.23 },
  { title: "Sorry", amount: 3.03 },
  { title: "Sugar", amount: 2.8 },
  { title: "Shake it Off", amount: 2.67 },
  { title: "Roar", amount: 2.65 },
  { title: "Bailando", amount: 2.63 },
  { title: "Thinking Out Loud", amount: 2.53 },
  { title: "Counting Stars", amount: 2.51 },
  { title: "Dark Horse", amount: 2.46 },
  { title: "Lean On", amount: 2.43 },
];

let divSelection = d3.select("body").selectAll("div");

divSelection
  .data(videoData)
  .enter()
  .append("div")
  .text(function (d) {
    return d.title + ": " + d.amount + " views";
  })
  .attr("class", "bar")
  .style("width", function (d) {
    return 50 * d.amount + "px";
  });

let videoData = [
  { title: "Despacito", amount: 5.68 },
  { title: "Shape of You", amount: 3.89 },
  { title: "See You Again", amount: 3.85 },
  { title: "Uptown Funk", amount: 3.32 },
  { title: "Masha and the Bear: Recipe for Disaster", amount: 3.31 },
  { title: "Gangam Style", amount: 3.23 },
  { title: "Sorry", amount: 3.03 },
  { title: "Sugar", amount: 2.8 },
  { title: "Shake it Off", amount: 2.67 },
  { title: "Roar", amount: 2.65 },
  { title: "Bailando", amount: 2.63 },
  { title: "Thinking Out Loud", amount: 2.53 },
  { title: "Counting Stars", amount: 2.51 },
  { title: "Dark Horse", amount: 2.46 },
  { title: "Lean On", amount: 2.43 },
];

let divSelection = d3.select("body").selectAll("div");

divSelection
  .data(videoData)
  .enter()
 .append("div")
  .text(function (d) {
    return d.title + ": " + d.amount + " views";
  })
  .attr("class", "bar")
  .style("width", function (d) {
    return d.amount * 50 + "px";
  });

  // You’ve learned the basic d3 design pattern of:

  // Creating a selection
  // Associating data with that selection
  // Appending elements to the DOM
  // Modifying the elements based on the data 

  let poemVerses = ["Always","in the middle", "of our bloodiest battles", "you lay down your arms","like flowering mines","to conquer me home."];

  d3.select("#viz")
    .selectAll("p")
    .data(poemVerses)
    .enter()
    .append("p")
    .text("Click Me!")
    .on('click', function(d, i) {
      d3.select(this).text(d);
     });
  

// how elements are added to the DOM and data is associated with them:

// Selections are array-like data structures that include a reference to the elements with D3 methods and their hierarchy in the DOM. You can create a selection with .selectAll() or a single-item selection with .select()
// The .data(), .enter() and .append() methods all work in unison to create elements and associate their corresponding data with the existing DOM
// The d parameter inside functions used in a D3 context represents the datum associated with the element at hand
// The .attr() and .style() methods allow you to customize the appearance of each element based on data.
// The .on() method can bind an event listener on the elements in the selection.


let videoData = [{title: "Despacito", amount: 5.68},
         {title: "Shape of You", amount: 3.89},
         {title: "See You Again", amount: 3.85},
         {title: "Uptown Funk", amount: 3.32},
         {title: "Masha and the Bear: Recipe for Disaster", amount: 3.31},
         {title: "Gangam Style", amount: 3.23},
         {title: "Sorry", amount: 3.03},
         {title: "Sugar", amount: 2.80},
         {title: "Shake it Off", amount: 2.67},
         {title: "Roar", amount: 2.65},
         {title: "Bailando", amount: 2.63},
         {title: "Thinking Out Loud", amount: 2.53},
         {title: "Counting Stars", amount: 2.51},
         {title: "Dark Horse", amount: 2.46},
         {title: "Lean On", amount: 2.43}
 ];

let divSelection = d3.select("body") 
    .selectAll("div");

 divSelection
    .data(videoData)
    .enter()
  .append('div')
    .text(function(d) { 
       return d.title + ": " + d.amount + " views";
	  })
    .attr("class", "bar")
    .on("mouseover", function(d,i) {
      d3.select(this).style("width", function(d) { return d.amount * 50 + "px"; })
    });


