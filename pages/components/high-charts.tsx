import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface Event {
    id: string
    value: number
    timestamp: number
}

export default function HighchartsComp(props: { events: [] }) {

    let eventArr: [[number, number]] = [[1635266070, 1]] //Initialise Events Array

    props.events.forEach((item: Event) => {
        eventArr.push([item.timestamp, item.value])
    })

    const options = {
        chart: {
            type: 'scatter',
            zoomType: 'xy',
            plotBorder: '2px solid',
            width: null,
            height: 520
        },
        title: {
            text: 'Value Versus Time of Logged Events'
        },
        subtitle: {
            text: 'Source: Addinex 2021'
        },
        xAxis: {
            type: 'datetime',
            title: {
                enabled: true,
                text: 'Timestamp (hrs)'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true,
            gridLineWidth: 1,
            gridLineDashStyle: 'longdash',
        },
        yAxis: {
            title: {
                text: 'Value (Int)'
            },
            gridLineWidth: 1,
            gridLineDashStyle: 'longdash'
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 70,
            y: 0,
            floating: true,
            backgroundColor: 'aliceblue',
            borderWidth: 0,
            borderRadius: '8px',
            shadow: {
                color: 'black',
                width: 2,
                offsetX: 1,
                offsetY: 1
            }
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    xDateFormat: '%H:%M:%S',
                    headerFormat: '<b>{series.name}</b><br><br>',
                    pointFormat: '<i>Val</i> = {point.y}<br> <i>Timestamp</i> = {point.x: %H:%M:%S} hrs'
                }
            }
        },
        series: [
            {
                name: 'Event',
                color: 'rgba(78, 166, 243, 0.897)',
                pointStart: Date.UTC(2012, 0, 1),
                pointInterval: 24 * 3600 * 1000,
                data: eventArr
            }
        ]
    };

    // if (props) {
    return (
        <HighchartsReact highcharts={Highcharts} options={options} />
    )
    // } else return <>Loading...</>
}