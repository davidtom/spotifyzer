import * as d3 from 'd3'

export default function appendChart(data){
  var width = 360;
  var height = 360;
  var radius = Math.min(width, height) / 2;
  var donutWidth = 75;

  // var color = d3.scaleOrdinal(d3.schemeCategory20b)
  var color = d3.scaleOrdinal(["#00bb5a","#b1a27d","#357c00","#ebff92","#84ca96"])

  var svg = d3.select('#data-container')
    .append("svg")
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')');

  var arc = d3.arc()
    .innerRadius(radius - donutWidth)
    .outerRadius(radius);

  var pie = d3.pie()
    .value(function(d) { return d.count; })
    .sort(null);

  var path = svg.selectAll('path')
    .data(pie(data.genresList))
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function(d, i) {
      return color(i)
    })
}
