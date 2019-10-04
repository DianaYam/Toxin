
$(document).ready(function () {

    // let options = {
    //     animationEnabled: true,
    //     data: [{
    //         type: "doughnut",
    //         innerRadius: "90%",
    //         showInLegend: true,
    //         legendText: "{label}",
    //         indexLabel: "",
    //         dataPoints: [
    //             { label: "Великолепно", y: 130 },
    //             { label: "Хорошо", y: 65 },
    //             { label: "Удовлетворительно", y: 65 },
    //             { label: "Разочарован", y: 0 }
    //         ]
    //     }]
    // };
    //
    // $("#chartContainer").CanvasJSChart(options);


    // new Chartist.Pie('.ct-chart', {
    //     series: [65, 65, 130, 0]
    // }, {
    //     donut: true,
    //     donutWidth: 20,
    //     startAngle: 0,
    //     total: 260,
    //     donutSolid: true,
    //     showLabel: false
    // });


    // google.charts.load("current", {packages:["corechart"]});
    // google.charts.setOnLoadCallback(drawChart);
    // function drawChart() {
    //     let data = google.visualization.arrayToDataTable([
    //         ['Впечатления', 'Число отзывов'],
    //         ['Разочарован', 0],
    //         ['Удовлетворительно', 65],
    //         ['Хорошо', 65],
    //         ['Великолепно',  130]
    //     ]);
    //
    //     let options = {
    //         pieHole: 0.91,
    //         colors: [
    //             '#636981',
    //             '#B99CFF',
    //             '#6ECFA4',
    //             '#FFE39C',
    //         ],
    //         legend: {
    //             position: 'none'
    //         },
    //         pieSliceText: 'none',
    //         enableInteractivity: true,
    //         tooltip: {
    //             showColorCode: true,
    //             trigger: 'none'
    //         }
    //     };

        // chartArea: {
        //     left: 0,
        //         top: 0,
        //         height: '120'
        // },
        // width: '200',
        // height: '120'
        // reverseCategories: true,

        // let chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        // chart.draw(data, options);
        //
        // chart.getChartLayoutInterface().getHAxisValue(100);
    // }

    // let pie = new d3pie("pieChart", { });
    
    // let pie = new d3pie("pieChart", {
    //     "header": {
    //         "title": {
    //             "text": "260",
    //             "color": "#bc9cff",
    //             "fontSize": 24
    //         },
    //         "subtitle": {
    //             "text": "голосов",
    //             "color": "#bc9cff",
    //             "fontSize": 12
    //         },
    //         "location": "pie-center",
    //         "titleSubtitlePadding": 5
    //     },
    //     "footer": {
    //         "text": "* This was curious. We're not sure why several people regard Winnipeg as a Top 15 Fear.",
    //         "color": "#999999",
    //         "fontSize": 10,
    //         "font": "open sans",
    //         "location": "bottom-left"
    //     },
    //     "size": {
    //         "canvasHeight": 200,
    //         "canvasWidth": 200,
    //         "pieInnerRadius": "92%",
    //         "pieOuterRadius": "69%"
    //     },
    //     "data": {
    //         "sortOrder": "label-desc",
    //         "content": [
    //             {
    //                 "label": "Spiders",
    //                 "value": 2,
    //                 "color": "#333333"
    //             },
    //             {
    //                 "label": "Mother-in-laws",
    //                 "value": 10,
    //                 "color": "#444444"
    //             },
    //             {
    //                 "label": "Sharks",
    //                 "value": 8,
    //                 "color": "#555555"
    //             },
    //             {
    //                 "label": "Alien invasion",
    //                 "value": 8,
    //                 "color": "#666666"
    //             },
    //             {
    //                 "label": "Learning Objective-C",
    //                 "value": 5,
    //                 "color": "#777777"
    //             },
    //             {
    //                 "label": "Public speaking",
    //                 "value": 3,
    //                 "color": "#888888"
    //             },
    //             {
    //                 "label": "Donald Trump",
    //                 "value": 4,
    //                 "color": "#999999"
    //             },
    //             {
    //                 "label": "The Zombie Apocalypse",
    //                 "value": 4,
    //                 "color": "#cb2121"
    //             },
    //             {
    //                 "label": "The City of Winnipeg *",
    //                 "value": 3,
    //                 "color": "#830909"
    //             },
    //             {
    //                 "label": "IE 6",
    //                 "value": 2,
    //                 "color": "#923e99"
    //             },
    //             {
    //                 "label": "Planes with/out snakes",
    //                 "value": 5,
    //                 "color": "#ae83d5"
    //             },
    //             {
    //                 "label": "Off-by-one errors",
    //                 "value": 3,
    //                 "color": "#111111"
    //             },
    //             {
    //                 "label": "Chickadees",
    //                 "value": 4,
    //                 "color": "#050505"
    //             },
    //             {
    //                 "label": "Owning a cat",
    //                 "value": 1,
    //                 "color": "#646464"
    //             },
    //             {
    //                 "label": "Canada",
    //                 "value": 4,
    //                 "color": "#747474"
    //             }
    //         ]
    //     },
    //     "labels": {
    //         "outer": {
    //             "format": "none",
    //             "pieDistance": 20
    //         },
    //         "inner": {
    //             "format": "none"
    //         },
    //         "mainLabel": {
    //             "fontSize": 11
    //         },
    //         "percentage": {
    //             "color": "#999999",
    //             "fontSize": 11,
    //             "decimalPlaces": 0
    //         },
    //         "value": {
    //             "color": "#cccc43",
    //             "fontSize": 11
    //         },
    //         "lines": {
    //             "enabled": true,
    //             "color": "#777777"
    //         },
    //         "truncation": {
    //             "enabled": true
    //         }
    //     },
    //     "effects": {
    //         "pullOutSegmentOnClick": {
    //             "effect": "linear",
    //             "speed": 400,
    //             "size": 8
    //         }
    //     },
    //     "misc": {
    //         "colors": {
    //             "segmentStroke": "#000000"
    //         }
    //     }
    // });

});
