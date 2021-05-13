function data {
//IMPORTING DATA
  d3.csv("/static/data/final_data.csv").then(function(finalData) {

  
    finalData.forEach(function(data) {
      data.category = +data.category;
      data.tracks = +data.tracks;

    var xScale = d3.scaleBand()
      .domain([20, d3.max(finalData, d => d.category)])
      .range([0, chartWidth])
      .padding(0.1);

    var yScale = d3.scaleLinear()
      .domain([0, d3.max(finalData, d => d.tracks)])
      .range([chartHeight, 0]);
 
    var bottomAxis = d3.axisBottom(xScale);
    var leftAxis = d3.axisLeft(yScale);

    }
  }
// svg container
  var height = 600;
  var width = 1000;

// margins
  var margin = {
    top: 50,
    right: 50,
    bottom: 50,
    left: 50
  };

// chart area minus margins
  var chartHeight = height - margin.top - margin.bottom;
  var chartWidth = width - margin.left - margin.right;

// create svg container
  var svg = d3.select("body").append("svg")
      .attr("height", height)
      .attr("width", width);

// shift everything over by the margins
  var chartGroup = svg.append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);


// create axes
  var yAxis = d3.axisLeft(yScale);
  var xAxis = d3.axisBottom(xScale);

// set x to the bottom of the chart
  chartGroup.append("g")
      .attr("transform", `translate(0, ${chartHeight})`)
      .call(xAxis);

// set y to the y axis
  chartGroup.append("g")
      .call(yAxis);

// Create the rectangles using data binding
  var barsGroup = chartGroup.selectAll("rect")
      .data(yScale)
      .enter()
      .append("rect")
      .attr("x", (d, i) => xScale(xScale[i]))
      .attr("y", d => yScale(d))
      .attr("width", xScale.bandwidth())
      .attr("height", d => chartHeight - yScale(d))
      .attr("fill", "green");

// Create the event listeners with transitions
  barsGroup.on("mouseover", function() {
    d3.select(this)
              .transition()
              .duration(500)
              .attr("fill", "red");
})
      .on("mouseout", function() {
        d3.select(this)
              .transition()
              .duration(500)
              .attr("fill", "green");
      }
    }
  }
} 