import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface Event {
    id: string
    value: number
    timestamp: number
}

export default function HighchartsComp(props: { events: [] }) {

    let eventArr: [[number, number]] = [[1635266070, 1]]

    props.events.forEach((item: Event) => {
        eventArr.push([item.timestamp, item.value])
    })

    const date = new Date()
    const day = date.getDay()
    const hours = date.getHours()
    const mins = date.getMinutes()
    const secs = date.getSeconds()

    console.log(day, hours, mins, secs)

    const options = {
        chart: {
            type: 'scatter',
            zoomType: 'xy',
            plotBorder: '2px solid',
            width: null,
            height: null
        },
        title: {
            text: 'Value Versus Time of Logged Events'
        },
        subtitle: {
            text: 'Source: Addinex 2021'
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Time (seconds)'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true,
            gridLineWidth: 1,
            gridLineDashStyle: 'longdash'
        },
        yAxis: {
            title: {
                text: 'Value (integer)'
            },
            gridLineWidth: 1,
            gridLineDashStyle: 'longdash'
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 0,
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
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: '{point.x} secs, {point.y} val'
                }
            }
        },
        series: [
            {
                name: 'Event',
                color: 'rgba(75, 199, 189, 0.897)',
                data: eventArr
            }
        ]
    };

    console.log(eventArr)

    // if (props) {
    return (
        <HighchartsReact highcharts={Highcharts} options={options} />
    )
    // } else return <>Loading...</>
}