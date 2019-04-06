// Read in csv file
d3.csv("../static/db/Clean_data.csv", function(error, data) {
    if (error) throw error;

// Trace 1 - TotalBsmtSF & SalePrice using train dataset

var trace1 = {
    x:data.map(row => row.TotalBsmtSF_train),
    y:data.map(row => row.SalePrice_train),
    name: "Train",
    type: "scatter",
    mode:"markers"
};

// Trace 2 - TotalBsmtSF & SalePriceusing test dataset

var trace2 = {
    x:data.map(row => row.TotalBsmtSF_train),
    y:data.map(row => row.SalePrice_test),
    name: "Test",
    type: "scatter",
    mode:"markers"
};


// Convert trace to an array so Plotly can understand it and plot appropriately
var data = [trace1, trace2];

// Layout
var layout = {
    title: "Sale Price vs. Total Basement Square Footage",
    xaxis: {
        title: {
          text: "Total Basement Square Footage",
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








