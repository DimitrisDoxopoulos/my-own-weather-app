import React from 'react';

const Wrapper = (props) => {
    return(
    <div className='d-flex flex-column'>
        { props.children }
    </div>
    )
}

export default Wrapper;