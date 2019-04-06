// Read in CSV file
d3.csv("../static/db/Clean_data.csv", function(error, data){
    if (error) throw error;

// Trace 1 - First Floor Square Feet & SalePrice using train dataset

var trace1 = {
    x:data.map(row => row.FrstFlrSF_train),
    y:data.map(row => row.SalePrice_train),
    name: "Train",
    mode: "markers",
    type: "scatter"
};

// Trace 2 - First Floor Square Feet & SalePrice using test dataset

var trace2 = {
    x:data.map(row => row.FrstFlrSF_train),
    y:data.map(row => row.SalePrice_test),
    name: "Test",
    mode: "markers",
    type: "scatter"
};


// Convert trace to an array so Plotly can understand it and plot appropiately
var data = [trace1, trace2];

// Layout
var layout = {
    title: "Sale Price vs. First Floor Square Feet",
    xaxis: {
        title: {
            text: "First Floor Square Feet",
        },
      },
    yaxis: {
        title:{
            text: "Sale Price USD",
        },
      },
    };
// Render the plot to the div tag with id "chart"
Plotly.newPlot("chart", data, layout);

});