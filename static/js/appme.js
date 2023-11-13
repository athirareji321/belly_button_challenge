// Defining the URL to be callled by D3
const bellybuttonUrl = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Initialising the dashboard
function init() {
  // Creating the dropdown menu
  d3.json(bellybuttonUrl).then(data => {
    const names = data.names;
    const dropdown = d3.select("#selDataset");

    names.forEach(name => {
      dropdown.append("option").text(name).property("value", name);
    });

    // Show the chart for th first id
    optionChanged(names[0]);
  });
}

// Function to change the data displayed when the test subject id changes
function optionChanged(selectedName) {
  // Fetch data for the first id
  d3.json(bellybuttonUrl).then(data => {
    const samples = data.samples;
    const metadata = data.metadata;

    const selectedSample = samples.find(sample => sample.id === selectedName);
    const selectedMetadata = metadata.find(item => item.id === parseInt(selectedName));

    // Update demographic info
    updateDemographicInfo(selectedMetadata);

    // Update all the charts and guage
    updateBarChart(selectedSample);
    updateBubbleChart(selectedSample);
    updateGaugeChart(selectedMetadata.wfreq);
  });
}

// Function to update demographic info
function updateDemographicInfo(metadata) {
  const metadataPanel = d3.select("#sample-metadata");
  metadataPanel.html("");

  Object.entries(metadata).forEach(([key, value]) => {
    metadataPanel.append("p").text(`${key}: ${value}`);
  });
}

// Function to update the bar chart
function updateBarChart(sample) {
  const barChart = d3.select("#bar");
  
  // Sorting the sample values in descending order
  const sortedData = sample.sample_values.slice(0, 10).sort((a, b) => b - a);

  // Defining the trace
  const trace = {
    x: sortedData,
    y: sortedData.map((value, index) => `OTU ${sample.otu_ids[index]}`),
    type: "bar",
    orientation: "h",
    text: sample.otu_labels.slice(0, 10)
  };

  const layout = {
    title: "Top 10 OTUs",
    xaxis: { title: "Sample Values" },
    yaxis: { title: "OTU IDs" },
    width: 500,
    height: 470,
    margin: { t: 40 },
    plot_bgcolor: "#f8f8f8", 
  };

  Plotly.newPlot("bar", [trace], layout);
}

// Function to update the bubble chart
function updateBubbleChart(sample) {
  const bubbleChart = d3.select("#bubble");

  // Defining the trace 
  const trace = {
    x: sample.otu_ids,
    y: sample.sample_values,
    mode: "markers",
    marker: {
      size: sample.sample_values,
      color: sample.otu_ids,
    },
    text: sample.otu_labels,
  };

  const layout = {
    title: "Bubble Chart for Samples",
    xaxis: { title: "OTU IDs" },
    yaxis: { title: "Sample Values" },
    width: 1236,
    height: 470,
    margin: { t: 40 },
    plot_bgcolor: "#f8f8f8", 
  };

  Plotly.newPlot("bubble", [trace], layout);
}

// Function to update the gauge chart
function updateGaugeChart(wfreq) {
  const gaugeChart = d3.select("#gauge");

  // Define the trace for the gauge chart
  const trace3 = {
    
    value: wfreq,
    title: { text: "Belly Button Washing Frequency" },
    type: "indicator",
    mode: "gauge+number",
    gauge: {
      axis: { range: [null, 9], tickwidth: 1, tickcolor: "darkblue" },
      bar: { color: "darkblue" },
      bgcolor: "white",
      borderwidth: 2,
      bordercolor: "gray",
      steps: [
        { range: [0, 1], color: "rgb(248, 243, 236)" },
        { range: [1, 2], color: "rgb(244, 241, 229)" },
        { range: [2, 3], color: "rgb(233, 230, 202)" },
        { range: [3, 4], color: "rgb(229, 231, 179)" },
        { range: [4, 5], color: "rgb(213, 228, 157)" },
        { range: [5, 6], color: "rgb(183, 204, 146)" },
        { range: [6, 7], color: "rgb(140, 191, 136)" },
        { range: [7, 8], color: "rgb(138, 187, 143)" },
        { range: [8, 9], color: "rgb(133, 180, 138)" },
      ],
      threshold: {
        line: { color: "red", width: 4 },
        thickness: 0.75,
        value: wfreq
      }
    },
  };

  const layout = { width: 475, height: 390, margin: { t: 0, b: 0 },paper_bgcolor: "#f8f8f8",  font: { color: "darkblue", family: "Arial" } };

  // Plot the gauge chart
  Plotly.newPlot("gauge", [trace3], layout);
}

// Initialize the dashboard
init();
