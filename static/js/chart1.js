// Read in csv file
d3.csv("../static/db/Clean_data.csv", function(error, data) {
    if (error) throw error;

// Trace 1 - Yearbuilt & SalePrice using train dataset

var trace1 = {
    x:data.map(row => row.YearBuilt_train),
    y:data.map(row => row.SalePrice_train),
    name: "Train",
    mode: "markers"
};

// Trace 2 - Yearbuilt & SalePrice using test dataset

var trace2 = {
    x:data.map(row => row.YearBuilt_train),
    y:data.map(row => row.SalePrice_test),
    name: "Test",
    mode: "markers"
};


// Convert trace to an array so Plotly can understand it and plot appropriately
var data = [trace1, trace2];

// Layout
var layout = {
    title: "Sale Price vs. Year Built ",
    xaxis: {
        title: {
          text: "Year Built",
        },
      },
    yaxis: {
        title: {
          text: "Sale Price USD",
        },
      },
  };

// Render the plot to the div tag with id "chart"
Plotly.newPlot("chart", data, layout);

});








