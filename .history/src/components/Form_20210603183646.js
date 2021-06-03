import React from 'react'

const Form = () => {
    return (
        <div>
            <form>
                <div className="form-group">
                    <input type="text" className="form-control border-secondary rounded-pill" id="exampleFormControlInput1" placeholder="City Name" />
                </div>
                <div className="form-group d-flex p-2">
                   <label for="exampleFormControlSelect1">Number of days</label>
                    <select className="form-control border-secondary rounded-pill" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <input className="btn btn-primary mt-1" type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Form