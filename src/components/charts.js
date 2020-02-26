import React, {Component} from 'react';
import {Line, Bar} from 'react-chartjs-2';

const getHours = () => {
  const hours = [];
  for (let i = 0; i <= 24; i += 2)
    hours.push (i + 'h');

  return hours;
};

const getLastSevenDays = () => {
  let days = 7;
  let dates = [];
  while (days > 0) {
    let date = new Date ();
    let last = new Date (date.getTime () - days * 24 * 60 * 60 * 1000);

    dates.push (last.toLocaleDateString ());

    days--;
  }

  return dates;
};

const Chart = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 chart">
          <Line
            data={{
              labels: getHours (),
              datasets: [
                {
                  label: 'A sensor',
                  data: [-2, -2, 0, 4, 6, 8, 8, 9, 9, 7, 3, 2, 0],
                  borderColor: '#7dba41',
                  fill: false,
                  backgroundColor: '#7dba41',
                },
                {
                  label: 'B sensor',
                  data: [-3, -2.5, -0.5, 4, 7, 9, 9, 10, 8.5, 7.5, 1, 0, -2],
                  borderColor: '#3A86FF',
                  fill: false,
                  backgroundColor: '#3A86FF',
                },
              ],
            }}
            options={{
              title: {
                display: true,
                text: 'Temperature variation last day',
                fontSize: 20,
              },
              legend: {
                display: true,
                labels: {
                  fontSize: 16,
                },
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      stepSize: 2,
                      suggestedMin: -5,
                      suggestedMax: 20,
                      padding: 10,
                      fontSize: 14,
                    },
                  },
                ],
                xAxes: [
                  {
                    ticks: {
                      padding: 25,
                      fontSize: 14,
                    },
                  },
                ],
              },
              maintainAspectRatio: false,
            }}
          />
        </div>
        <div className="col-md-6">
          <Bar
            data={{
              labels: getLastSevenDays (),
              datasets: [
                {
                  label: 'A sensor',
                  data: [5.2, 4.7, 4.5, 4.6, 5, 4.9, 4.5],
                  borderColor: '#7dba41',
                  fill: false,
                  backgroundColor: '#7dba41',
                },
                {
                  label: 'B sensor',
                  data: [5.3, 4.5, 4.6, 4.8, 5, 4.7, 4.6],
                  borderColor: '#3A86FF',
                  fill: false,
                  backgroundColor: '#3A86FF',
                },
              ],
            }}
            options={{
              title: {
                display: true,
                text: 'Last week daily average temperature',
                fontSize: 20,
              },
              legend: {
                display: true,
                labels: {
                  fontSize: 16,
                },
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      stepSize: 1,
                      suggestedMin: 0,
                      suggestedMax: 10,
                      padding: 10,
                      fontSize: 14,
                    },
                  },
                ],
                xAxes: [
                  {
                    ticks: {
                      padding: 25,
                      fontSize: 14,
                    },
                  },
                ],
              },
              maintainAspectRatio: false,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Chart;
