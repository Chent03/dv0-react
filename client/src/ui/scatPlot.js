import React from 'react';
import { Scatter } from 'react-chartjs-2';


const scatPlot = (props) => {
    const options = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }],
        xAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
    const data = {
        labels: ['Annual Income', 'Interest Rate'],
        datasets: [
          {
            label: props.label,
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.4)',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: props.data
          }
        ]
      };
    return (
        <Scatter 
          data={data}
          options={options}
        />
    )
}

export default scatPlot;