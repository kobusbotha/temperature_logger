'use strict';

const JourneyIFrameClient = require('journey-iframe-client');
const moment = require('moment')
const Chart = require('chart.js')
const client = new JourneyIFrameClient();

initCheck();
async function initCheck() {
    let result = await client.post('initBridge');
    console.log(`Init Check Result: ${result}`);
}

async function fetchData() {
    let data = await client.post('getData');
    return data;
}

var timeFormat = 'MM/DD/YYYY HH:mm';

fetchData().then(function (value) {
    const GREEN = 'rgb(75, 192, 192)'
    var chartData = value;
    var color = Chart.helpers.color;

    var config = {
        type: 'line',
        data: {
            datasets: [{
                label: 'Temp (F)',
                backgroundColor: color(GREEN).alpha(0.5).rgbString(),
                borderColor: GREEN,
                fill: false,
                data: chartData,
            }]
        },
        options: {
            cubicInterpolationMode: 'default',
            scales: {
                xAxes: [{
                    type: 'time',
                    time: {
                        // parser: timeFormat,
                        // round: 'day'
                        tooltipFormat: 'll HH:mm'
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Date'
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Temp (F)'
                    }
                }]
            },
        }
    };

    var ctx = document.getElementById('canvas');
    new Chart(ctx, config);
});