import React from 'react'

const Form = () => {
    return (
        <div>
            <form>
                <div class="form-group">
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="City Name" />
                </div>
                <div class="form-group">
                   <label for="exampleFormControlSelect1">How many days?</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Form