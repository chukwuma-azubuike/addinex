import Highcharts, { dateFormat, Point, Series } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import moment from 'moment-timezone';
import { timeComv } from '../utils/time-conv';


interface Event {
    id: string
    value: number
    timestamp: number
}

export default function HighchartsComp(props: { events: [] }) {

    let eventArr: object[] = [];

    if (props.events) {
        props.events.forEach((item: Event) => {
            eventArr.push({ x: item.timestamp * 1000, y: item.value })
        })
    }

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
                text: 'Time (hrs)'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true,
            gridLineWidth: 1,
            gridLineDashStyle: 'longdash',
        },
        yAxis: {
            title: {
                text: 'Event Value (int)'
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
                    pointFormat: '<i>Val</i> = {point.y}<br> <i>Timestamp</i> = {point.x: %H:%M:%S, %A, %b %e, %Y} hrs'
                }
            }
        },
        time: {
            useUTC: false
        },
        series: [
            {
                name: 'Event',
                color: 'rgba(78, 166, 243, 0.45)',
                pointStart: Date.UTC(2012, 0, 1),
                pointInterval: 24 * 3600 * 1000,
                data: eventArr,
            }
        ]
    };

    console.log(Highcharts)

    return (
        <HighchartsReact highcharts={Highcharts} options={options} />
    )
}