import * as d3 from 'd3'

export default function renderChart({recentTracks}, handleClick){

  // Main sources:
  // https://bl.ocks.org/mbostock/3885304
  // http://bl.ocks.org/Caged/6476579
  // https://stackoverflow.com/questions/10778573/multi-level-grouping-of-axis-labels-using-d3

  // NOTE: for styling, see Index.css

  // Set up chart data and dimensions
  // deep copy data so that date parsing does not cause issues on rerender
  const data = JSON.parse(JSON.stringify(recentTracks))
  const svgWidth = 800;
  const svgHeight = 417;
  const selection = d3.select("#data-container")

  // Remove any and all children of the div that will hold the chart before
  // rendering
  const containerNode = document.getElementById("data-container")

  if (containerNode){
    while (containerNode.firstChild) {
      containerNode.removeChild(containerNode.firstChild);
    }
  }

  // Select div.data-container and append an svg of the specified dimensions
  var svg = selection
    .append("svg")
    .attr('width', svgWidth)
    .attr('height', svgHeight);


  // Set chart margins
  var margin = {top: 20, right: 20, bottom: 70, left: 40},
      width = +svg.attr("width") - margin.left - margin.right,
      height = +svg.attr("height") - margin.top - margin.bottom;

  // Function to parse date and time
  var	parseDate = function(str){
    // split date str and save its components
    const splitStr = str.split(new RegExp('-|T'))
    const y = splitStr[0]
    const m = splitStr[1]
    const d = splitStr[2]
    const h = splitStr[3]
    // Create a new Date object, which converts automatically to local time
    const date = new Date(`${m}/${d}/${y} ${h}:00:00 UTC`)
    const dateString = date.toString()
    // remove time zone data to return the date string in following format: Mon Sep 11 2017 08:00

    // TODO: Remove day and make hour a full hour (ie 13:00) - also, prevent click from fucking up data!
    // Data is being altered by d3, and therefore when i click and change props, it passes it back down,
    // at which point the parseDate function above breaks

    return dateString.split(":")[0] + ":00"
  }

  // Set scale and formatting for x and y axes
  var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
      y = d3.scaleLinear().rangeRound([height, 0]);

  var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // remap data to format date and time
  data.forEach(function(d) {
      d.time = parseDate(d.time);
      d.count = +d.count;
  });

  x.domain(data.map(function(d) { return d.time; }));
  y.domain([0, d3.max(data, function(d) { return d.count; })]);

  // Append x and y axes to svg
  g.append("g")
    .attr("class", "axis axis--x")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  g.append("g")
    .attr("class", "axis axis--y")
    .call(d3.axisLeft(y).ticks())
    // TODO: this should create an axis lable, but is not working
    // .append("text")
    // .attr("transform", "rotate(90)")
    // .attr("y", 6)
    // .attr("dy", "1.5em")
    // .attr("text-anchor", "end")
    // .text("Count");

  // Create tooltips for each bar
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

  // Append data to svg
  g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.time); })
      .attr("y", function(d) { return y(d.count); })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.count); })
      .on("mouseover", function(d) {
      tooltip.html(`Time: ${d.time}<br>
                    ${d.count} tracks`);
        return tooltip.style("visibility", "visible");
      })
      .on("mousemove", function() {
        return tooltip.style("top", (d3.event.pageY - 150) + "px").style("left", (d3.event.pageX - 75) + "px");
      })
      .on("mouseout", function() {
        return tooltip.style("visibility", "hidden");
      })
      .on("click", function(d){
        handleClick(d)
      });
}
