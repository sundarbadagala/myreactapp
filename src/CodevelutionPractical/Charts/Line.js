import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Sales for 2020',
      data: [12, 19, 3, 5, 2, 3],
      fill: true,
      backgroundColor: 'rgb(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
    {
      label: 'Sales for 2021',
      data: [8, 7, 12, 1, 20, 15],
      fill: true,
      backgroundColor: 'rgb(0, 128, 0, 0.2)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
      pointBackgroundColor:'yellow',
      pointBorderColor:'blue'
    },
  ],
};

const options = {
  title:{
    display:true,
    text:'Sales of products values'
  },
  scales: {
    yAxes: [
      {
        ticks: {
          // beginAtZero: true,
          min:0,
          max:0,
          stepSize:1
        },
      },
    ],
  },
};

const LineChart = () => (
  <>
    <Line data={data} options={options} />
  </>
);

export default LineChart;