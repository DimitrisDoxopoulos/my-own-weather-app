import React from 'react'

const Form = () => {
    return (
        <div>
            <form>
                <div className="form-group">
                    <input type="text" className="form-control border-secondary rounded-pill" id="exampleFormControlInput1" placeholder="City Name" />
                </div>
                <div className="form-group d-flex p-2">
                    <select className="form-control border-secondary rounded-pill text-center" id="exampleFormControlSelect1" placeholder="How many days?">
                        <option value="1">1 day</option>
                        <option value="2">2 days</option>
                        <option value="3">3 days</option>
                        <option value="4">4 days</option>
                        <option value="5">5 days</option>
                    </select>
                </div>
                <input className="btn btn-primary mt-1" type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Form