// Read in CSV file
d3.csv("../static/db/Clean_data.csv", function(error, data) {
    if (error) throw error;
  
  // Trace 1 - Garage Size(#Cars) & SalePrice using train dataset
  
  var trace1 = {
    x:data.map(row => row.GarageCars_train),
    y:data.map(row => row.SalePrice_train),
    name: "Train",
    mode: "markers"
  };
  
  // Trace 2 - Garage Size(#Cars) & SalePrice using test dataset
  
  var trace2 = {
    x:data.map(row => row.GarageCars_train),
    y:data.map(row => row.SalePrice_test),
    name: "Test",
    mode: "markers"
  };
  
  
  // Convert trace to an array so PLotly can understand it and plot it appropriately
  var data = [trace1, trace2];
  
  // Layout
  var layout = {
    title: "Garage Size(No. of Cars) vs. Sale Price",
    xaxis: {
      title: {
        text: "Garage Size(No.of Cars)",
      },
    },
    yaxis: {
      title: {
        text: "Sale Price USD",
      },
    },
  };
  
  // Render the plot to the div tag with the id "chart"
  Plotly.newPlot("chart", data, layout);
  
  });
  