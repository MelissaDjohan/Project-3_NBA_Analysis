// function buildChart(new_NBA_19) {
//  var NBA_Data = `/new_NBA_19/`;
// new_NBA_19.json.then(function(data)){
//     var trace1 = {
//     x_axis = data.age,
//     y_axis = data.salary_2019to2020,

//     type: "scatter",
//     bubbleChart = {x:x_axis, y:y_axis, 
//         text: text, 
//         mode:`markers`,
//         marker: {size: sizes}
// }
// var layout = {}

// var bubbleChart = {trace1};
// }
// }



 
// }

console.log(data)
var ages = data.map(d=>d.age)
console.log(ages)
var salary = data.map(d=>d.salary_2019to2020)
var height = data.map(d=>d.height)
console.log(height)
var trace1 = {
    x: height,
    y: salary,


    type: "scatter",
    
        // text: text, 
        mode:`markers`,
        marker: {size: ages} 
}
var layout = {}

var bubbleChart =  [trace1];
Plotly.plot('chart here', bubbleChart, layout);