import React from 'react';

const Wrapper = (props) => {
    return(
    <div className='d-flex '>
        { props.children }
    </div>
    )
}

export default Wrapper;