import React from 'react';

const Wrapper = (props) => {
    return(
    <div className='d-flex flex-column align-items-center'>
        { props.children }
    </div>
    )
}

export default Wrapper;