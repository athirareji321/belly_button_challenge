🖥️# Belly Button Biodiversity Dashboard

This interactive dashboard allows users to explore the microbial diversity found in human navels using data from [Belly Button Biodiversity](https://robdunnlab.com/projects/belly-button-biodiversity/). The dataset reveals the presence of microbial species (operational taxonomic units, or OTUs) in human navels, with some species being common in more than 70% of people.

Follow the steps below to use and deploy the dashboard:

### 1. Data Source

Use the D3 library to read the data from `samples.json` available at [Belly Button Biodiversity URL](https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json).

### 2. Bar Chart

Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in an individual. Use the following data:
- Values: `sample_values`
- Labels: `otu_ids`
- Hovertext: `otu_labels`

### 3. Bubble Chart

Create a bubble chart that displays each sample with the following data:
- X values: `otu_ids`
- Y values: `sample_values`
- Marker size: `sample_values`
- Marker colors: `otu_ids`
- Text values: `otu_labels`

### 4. Display Sample Metadata

Display the sample metadata, i.e., an individual's demographic information.

### 5. Display Key-Value Pairs

Display each key-value pair from the metadata JSON object somewhere on the page.

### 6. Update Plots

Update all the plots when a new sample is selected. Customize the layout of your dashboard.

### 7. Deployment on GitHub Pages

Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repository. Ensure your repository has regular commits and a thorough README.md file.

### 8. Advanced Challenge

Adapt the Gauge Chart from [Plotly Guage Chart](https://plotly.com/javascript/gauge-charts/) to plot the weekly washing frequency of the individual. Modify the gauge chart code to account for values ranging from 0 through 9. Update the chart whenever a new sample is selected.

▶️## Result

### 1. Link to GitHub repo holding files: [GitHub Repo](https://github.com/athirareji321/belly_button_challenge)  

### 2. Snapshot of the Dashboard 
![Dashboard](https://github.com/athirareji321/belly_button_challenge/blob/main/README_Images/Dashboard.png)

### 3. Link to GitHub Pages: [GitHub Pages](https://athirareji321.github.io/belly_button_challenge/)  
![GitHub Pages](https://github.com/athirareji321/belly_button_challenge/blob/main/README_Images/Github_pages.png)
