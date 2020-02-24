
import React, {Component} from 'react';
import {Line,Bar} from 'react-chartjs-2';

const Chart=(props)=>{
    return(
        <div className="chart row">
            <div className="col-md-5 offset-1">
            <Line
                data={props.chartDataTemperature}
                options={{title:{
                    display:true,
                    text:'Temperature variation in last 7 days',
                    fontSize:20
                },
                    legend:{
                        display:true,
                    }}}
            />
            </div>
            <div className="col-md-5">
            <Line
                data={props.chartDataHumidity}
                options={{title:{
                    display:true,
                    text:'Humidity variation in last 7 days',
                    fontSize:20
                },
                    legend:{
                        display:true,
                    }}}
            />
            </div>
        </div>
    )
}

export default Chart;