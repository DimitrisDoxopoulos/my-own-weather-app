import React from 'react'

const WeatherForecast = () => {
    return (
        <div>
            <table class="table text-center">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">Day</th>
                    <th scope="col">Temperature</th>
                    <th scope="col">Humidity</th>
                    <th scope="col">Wind Speed</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">25/6/2021</th>
                        <td>25&deg;C</td>
                        <td>60%</td>
                        <td>40km/h</td>
                    </tr>
                    <tr>
                        <th scope="row">26/6/2021</th>
                        <td>25&deg;C</td>
                        <td>60%</td>
                        <td>40km/h</td>
                    </tr>
                    <tr>
                        <th scope="row">27/6/2021</th>
                        <td>25&deg;C</td>
                        <td>60%</td>
                        <td>40km/h</td>
                    </tr>
                    <tr>
                        <th scope="row">28/6/2021</th>
                        <td>25&deg;C</td>
                        <td>60%</td>
                        <td>40km/h</td>
                    </tr>
                    <tr>
                        <th scope="row">29/6/2021</th>
                        <td>25&deg;C</td>
                        <td>60%</td>
                        <td>40km/h</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default WeatherForecast