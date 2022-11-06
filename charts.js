// admin pieChart
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Gampaha', 11],
        ['Colombo', 4],
        ['Galle', 5],
        ['Kandy TV', 2],
        ['Anuradhapura', 1],
        ['Rathnapura', 1]
    ]);

    var options = {
        title: 'Most Audience'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}


// admin barChart
google.charts.load('current', { 'packages': ['bar'] });
google.charts.setOnLoadCallback(drawChart2);

function drawChart2() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Smart Phones', 'Laptops', 'Desktops', 'Keyboard & Mouse', 'Speakers', 'Printers', 'Monitors','Other'],
        ['2021', 520, 720, 300, 650, 34, 43, 80, 165],
        ['2022', 830, 540, 350, 630, 62, 33, 25, 200]
    ]);

    var options = {
        chart: {
            title: 'Selling Category',
            subtitle: 'Average Sellings Category: Past year to Present',
        }
    };

    var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
}