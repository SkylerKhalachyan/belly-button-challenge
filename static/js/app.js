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
        // capture the (3) requested values for the drop down
        sample_values = result.sample_values
        otu_ids = result.otu_ids
        otu_labels = result.otu_labels  
        
        // Trace1 for the Top 10 OTUs 
        let trace1 = {
            x: sample_values.slice(0, 10).reverse(),
            y: otu_ids.map(object => `OTU ${object}`).slice(0, 10).reverse(),
            text: otu_labels.slice(0, 10).reverse(),
            name: "OTU",
            type: "bar",
            orientation: "h"
        };
        
        // Data array 
        // trace and traceData should have corresponding numbers since we will have multiple visuals:
        let traceData1 = [trace1];
        
        // Apply a title and margins to the layout
        let layout = {
            title: "Top 10 OTUs",
            margin: {
            l: 100,
            r: 100,
            t: 100,
            b: 100
            }
        };
        
        // Render the plot to the div tag with id "bar"
        Plotly.newPlot("bar", traceData1, layout);

      }); 
}
// the "940" here will eventually change to a variable
update_map("940")
