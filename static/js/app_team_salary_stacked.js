d3.json("/player2").then(function (response) {
        var data = response;
        // console.log(data)
        var ages = data.map(d => d.age)
        var names = data.map(d => d.player)
        var teams = data.map(d => d.tm)
        // console.log(ages)
        var salary = data.map(d => d.salary_2019to2020)
        var height = data.map(d => d.height)
        var ppg = data.map(d => d.pts)
        // console.log(height)
        var position = data.map(d => d.position)

        var myConfig = {
                type: "bar",
                plot: {
                        stacked: true,
                        stackType: "100%"
                },
                scaleY: {
                        minValue: 0,
                        maxValue: 100
                },
                series: [
                        {
                                values: [20, 40, 25, 50, 15, 45, 33, 34]
                        },
                        {
                                values: [5, 30, 21, 18, 59, 50, 28, 33]
                        },
                        {
                                values: [30, 5, 18, 21, 33, 41, 29, 15]
                        }
                ]
        };

        zingchart.render({
                id: 'chart_here',
                data: myConfig,
                height: "100%",
                width: "100%"
        });

});













        // var trace1 = [{
        //         x: ppg,
        //         y: salary,

        //         // type: "scatter",
        //         text: names,
        //         mode: "markers",
        //         marker: {
        //                 size: salary / 1000000,
        //                 // sizeref: .0000001,
        //                 // sizemode: 'area',
        //                 color: salary
        //         },
        //         hovertemplate: '<i>Player:</i> %{text}' +
        //                 '<br><b>PPG</b>: %{x:.2f} Point Per Game<br>' +
        //                 '<b>Salary</b>: $%{y:,}',
        //         hoverinfo: "hello",
        //         name: ""
        // }]
        // var layout = {
        //         title: 'Salary v. Points Per Game',
        //         showlegend: false,
        //         height: 600,
        //         // width: 800,
        //         hovermode: 'closest',
        //         xaxis: {
        //                 title: {
        //                         text: 'Points Per Game',
        //                         font: {
        //                                 family: 'Courier New, monospace',
        //                                 size: 18,
        //                                 color: '#7f7f7f'
        //                         }

        //                 }
        //         },
        //         yaxis: {
        //                 title: {
        //                         text: 'Salary',
        //                         font: {
        //                                 family: 'Courier New, monospace',
        //                                 size: 18,
        //                                 color: '#7f7f7f'
        //                         }

        //                 }
        //         }
        // };

        // Plotly.plot('chart here', trace1, layout);

