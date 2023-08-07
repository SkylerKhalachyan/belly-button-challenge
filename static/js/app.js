// Use the D3 library to read samples.json from the url
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
    console.log(data);
  });

// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual. 

function update_map(id)
{
    d3.json(url).then(function(data) {
        console.log(data.samples);
        let samples = data.samples 
        let result = samples.filter(samp=>samp.id==id)[0]
        console.log(result[0])
        sample_values = result.sample_values
        otu_ids = result.otu_ids
        otu_labels = result.otu_labels  
        
        // Trace1 for the Greek Data
        let trace1 = {
            x: sample_values.slice(0, 10).reverse(),
            y: otu_ids.map(object => `OTU ${object}`).slice(0, 10).reverse(),
            text: otu_labels.slice(0, 10).reverse(),
            name: "Greek",
            type: "bar",
            orientation: "h"
        };
        
        // Data array
        // `data` has already been defined, so we must choose a new name here:
        let traceData = [trace1];
        
        // Apply a title to the layout
        let layout = {
            title: "Greek gods search results",
            margin: {
            l: 100,
            r: 100,
            t: 100,
            b: 100
            }
        };
        
        // Render the plot to the div tag with id "plot"
        // Note that we use `traceData` here, not `data`
        Plotly.newPlot("bar", traceData, layout);

      }); 
}
update_map("940")
