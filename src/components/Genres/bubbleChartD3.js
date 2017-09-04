import * as d3 from 'd3'

export default function renderChart({genresList, artistsTotal}, handleClick){

  // Main source: https://medium.freecodecamp.org/a-gentle-introduction-to-d3-how-to-build-a-reusable-bubble-chart-9106dc4f6c46

  // Set up chart dimensions and keys to access data, in case they change
  const data = genresList
  const width = 800;
  const height = 800;
  const columnForColors = "name";
  const columnForRadius = "count";
  const selection = d3.select("#data-container")

  // Remove any and all children of the div that will hold the chart
  // Necessary because this chart is created/appended in a component.render()
  const containerNode = document.getElementById("data-container")
  if (containerNode){
    while (containerNode.firstChild) {
      containerNode.removeChild(containerNode.firstChild);
    }
  }

  // Select div.data-container and append an svg of the specified dimensions
  var svg = selection
    .append("svg")
    .attr('width', width)
    .attr('height', height);

  // Create tooltips for each data point
  var tooltip = selection
    .data(data)
    .append("div")
    .style("position", "absolute")
    .style("visibility", "hidden")
    .style("color", "white")
    .style("padding", "8px")
    .style("background-color", "#626D71")
    .style("border-radius", "6px")
    .style("text-align", "left")
    .style("width", "auto")
    .text("");

  // Give Circles X and Y positions:
  // Simulate physics of the circles when they are created
  // Positive strength causes nodes (data) to attract; negative repels
  const simulation = d3.forceSimulation(data)
    .force("charge", d3.forceManyBody().strength([-50]))
    .force("x", d3.forceX()) // drags the circles towards the 0 position
    .force("y", d3.forceY()) // drags the circles towards the 0 position
    .on("tick", ticked);

  // This updates the positions of the circles - d3.forceManyBody() updates the
  // x and y position of each node, while ticked() updates the DOM with the x
  // and y coordinates
  function ticked(e) {
    node.attr("cx", function(d) {
      return d.x;
    })
      .attr("cy", function(d) {
        return d.y;
      });
    }

  // Create array to choose colors from; taken from iwanthue.com
  var colorCircles = d3.scaleOrdinal(["#00bb5a","#b1a27d","#357c00","#ebff92","#84ca96"]);

  // Assign radii to each circle proporitional to its count with d3.scaleLinear()
  // Domain accepts the min and max values of the data (taken from d3.min() and d3.max())
  // Range sets the min and max output values of the scale: smallest circle will
  // have radius 5; largest will have radius 20
  var scaleRadius = d3.scaleLinear().domain([d3.min(data, function(d) {
      return +d[columnForRadius];
  }), d3.max(data, function(d) {
      return +d[columnForRadius];
  })]).range([5, 20])

  // Create circles from the data
  var node = svg.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr('r', function(d) {
      // scale radius of each circle
      return scaleRadius(d[columnForRadius])
    })
    .style("fill", function(d, i) {
      // assign it a color (taken from colorCircles array based on its index
      // since there are too many genres to assign a unique color to each)
      return colorCircles(d[columnForColors])
    })
    // Move each circle to the middle of the selection
    .attr('transform', 'translate(' + [width / 2, height / 2] + ')')
    .on("mouseover", function(d) {
      d3.select(this).style("fill", "gold")
      // Get genre count as proportion of all artist genres - thank you JS for your crazy math...
      let proportion = Math.round((d[columnForRadius]/(artistsTotal*1.0))*1000) / 10
      tooltip.html(`Genre: ${d[columnForColors]}<br>
                    Artists: ${d[columnForRadius]}<br>
                    Proportion: ${proportion}%`);
      return tooltip.style("visibility", "visible");
    })
    .on("mousemove", function() {
      return tooltip.style("top", (d3.event.pageY - 150) + "px").style("left", (d3.event.pageX + 25) + "px");
    })
    .on("mouseout", function() {
      d3.select(this).style("fill", function(d) { return colorCircles(d[columnForColors]) })
      return tooltip.style("visibility", "hidden");
    })
    .on("click", function(d){
      handleClick(d["artists"])
    });
}
