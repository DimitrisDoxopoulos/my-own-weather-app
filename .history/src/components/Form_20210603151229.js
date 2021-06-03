import React from 'react'

const Form = () => {
    return (
        <div>
            <form>
                <div class="form-group">
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="City Name" />
                </div>
                <div class="form-group">
                   <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Number of days" />
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Form