import React from 'react'

const WeatherForecast = () => {
    return (
        <div>
            <table class="table text-center">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">Day</th>
                    <th scope="col">
                        Temperature
                        <th>Average</th>
                        <th>Minimum</th>
                        <th>Maximum</th>
                    </th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>
                        <td>Mark</td>
                        <td>Jacob</td>
                        <td>Lucy</td>
                    </td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default WeatherForecast