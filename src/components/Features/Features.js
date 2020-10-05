import React from 'react';
import './Features.css'

const Features = (props) => {
    const features = props.feature;
    // console.log(props);
    // console.log(features);

    return (
        <div className="features">
            <ul>
                <li>{features.description} : {features.value}</li>
            </ul>
            
        </div>
    );
};

export default Features;