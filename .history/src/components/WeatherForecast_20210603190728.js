import React from 'react'

const WeatherForecast = () => {
    return (
        <div className="text-center p-2">
            <h3 className="h-3">Weather Forecast for Athens</h3>
            <div className="container">
                <div className="row">
                    <div className="col-sm-">
                        <p>Day</p>
                    </div>
                    <div className="col-sm-">
                        <image src="" alt='weather icon' />
                    </div>
                    <div className="col-3">
                        <div className="row">
                            <div className="col-sm-">
                                <p>Temperature</p>
                            </div>
                            <div className="col-sm-">
                                <p>High Temperature</p>
                            </div>
                            <div className="col-sm-">
                                <p>Low Temperature</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-">
                        <p>Humidity</p>
                    </div>
                    <div className="col-sm-">
                        <p></p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WeatherForecast