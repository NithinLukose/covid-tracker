import React,{useEffect,useState} from 'react'
import {Line} from 'react-chartjs-2'
import numeral from "numeral";

const options = {
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    maintainAspectRatio: false,
    tooltips: {
      mode: "index",
      intersect: false,
      callbacks: {
        label: function (tooltipItem, data) {
          return numeral(tooltipItem.value).format("+0,0");
        },
      },
    },
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            parser: "MM/DD/YY",
            tooltipFormat: "ll",
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            // Include a dollar sign in the ticks
            callback: function (value, index, values) {
              return numeral(value).format("0a");
            },
          },
        },
      ],
    },
  };

function LineGraph({details,caseType,fetchdetails}) {
    //console.log(caseType)

    const [chartData,setChartData] = useState()

    useEffect(()=>{
        fetchdetails()
    },[fetchdetails])

    useEffect(()=>{
        const buildChartData = (data, casesType) => {
            let chartData = [];
            let lastDataPoint;
            for (let date in data.cases) {
              if (lastDataPoint) {
                let newDataPoint = {
                  x: date,
                  y: data[casesType][date] - lastDataPoint,
                };
                chartData.push(newDataPoint);
              }
              lastDataPoint = data[casesType][date];
            }
            return chartData;
        };
        setChartData(buildChartData(details,caseType))
    },[details,caseType])
    return (
        <div className="linegraph">
            {chartData?.length > 0 && (
                <Line
                data={{
                    datasets: [
                    {
                        backgroundColor: "rgba(204, 16, 52, 0.5)",
                        borderColor: "#CC1034",
                        data: chartData,
                    },
                    ],
                }}
                options={options}
                />
            )}
        </div>
    )
}

export default LineGraph
