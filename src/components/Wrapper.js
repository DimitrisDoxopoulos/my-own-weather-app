import React from 'react';

const Wrapper = (props) => {
    return(
    <div className='container d-flex flex-column justify-content-center align-items-center'>
        { props.children }
    </div>
    )
}

export default Wrapper;