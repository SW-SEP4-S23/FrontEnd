import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as chartjs } from "chart.js/auto";



function GraphDisplay( {data, dataName} ) {

    const [grafData, setGrafData] = useState({})

    useEffect(() => {
        setGrafData({
            labels: data.map(
              (data) => data.date.getDate() + "/" + (data.date.getMonth() + 1) + " " + data.date.getHours() + ":" + data.date.getMinutes()
            ),
            datasets: [
              {
                label: "label",
                data: data.map((data) => data.temperature),
                fill: false,
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgb(255, 99, 132)",
                borderWidth: 2,
                pointRadius: 0,
                pointHoverRadius: 6,
                pointBackgroundColor: "rgba(0,0,0,0)",

            },
            ],
            plugins: {
                legend: {
                  labels: {
                    font: {
                      size: 16,
                    },
                  },
                },
              },
              scales: {
                x: {
                  ticks: {
                    font: {
                      size: 14,
                    },
                  },
                  grid: {
                    display: true,
                    color: "rgba(0,0,0,0.1)",
                  },
                },
                y: {
                  ticks: {
                    font: {
                      size: 14,
                    },
                  },
                  grid: {
                    display: true,
                    color: "rgba(0,0,0,0.1)",
                  },
                },
              }
          });
    }, [])

    useEffect(() => {
    }, [grafData])

    return (
        <>
            {grafData.datasets?.length > 0 ? (
                <div style={{width: "100%"}}className="graf-box">
                    <Line data={grafData} />
                </div>) : null}
        </>
    )
}

export default GraphDisplay