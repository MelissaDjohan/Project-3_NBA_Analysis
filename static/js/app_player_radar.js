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

        var chartData = 
        [{"Salary" : salary},
        {"Points Per Salary" : ppg},]






});
