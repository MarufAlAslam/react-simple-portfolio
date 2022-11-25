import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const Skills = () => {
    return (
        <div className="py-5 container">
            <h3 className="text-center fw-bold">
            Skills
            </h3>
            
            <div className='row mt-4'>
                <div className='col-md-6 p-3'>
                    <div className='d-flex justify-content-between align-items-center'>
                    <h5 className='fw-bold'>
                        Photoshop
                    </h5>
                    <h5 className='fw-bold text-end'>
                        90%
                    </h5>
                    </div>
                    <ProgressBar now={90} className="mt-3 bg-dark progress-bar-animated" />
                </div>


                <div className='col-md-6 p-3'>
                    <div className='d-flex justify-content-between align-items-center'>
                    <h5 className='fw-bold'>
                        jQuery
                    </h5>
                    <h5 className='fw-bold text-end'>
                        75%
                    </h5>
                    </div>
                    <ProgressBar now={75} className="mt-3 bg-dark progress-bar-animated" />
                </div>

                <div className='col-md-6 p-3'>
                    <div className='d-flex justify-content-between align-items-center'>
                    <h5 className='fw-bold'>
                        HTML5
                    </h5>
                    <h5 className='fw-bold text-end'>
                        85%
                    </h5>
                    </div>
                    <ProgressBar now={85} className="mt-3 bg-dark progress-bar-animated" />
                </div>

                <div className='col-md-6 p-3'>
                    <div className='d-flex justify-content-between align-items-center'>
                    <h5 className='fw-bold'>
                        CSS3
                    </h5>
                    <h5 className='fw-bold text-end'>
                        80%
                    </h5>
                    </div>
                    <ProgressBar now={80} className="mt-3 bg-dark progress-bar-animated" />
                </div>

                <div className='col-md-6 p-3'>
                    <div className='d-flex justify-content-between align-items-center'>
                    <h5 className='fw-bold'>
                        Wordpress
                    </h5>
                    <h5 className='fw-bold text-end'>
                        60%
                    </h5>
                    </div>
                    <ProgressBar now={60} className="mt-3 bg-dark progress-bar-animated" />
                </div>

                <div className='col-md-6 p-3'>
                    <div className='d-flex justify-content-between align-items-center'>
                    <h5 className='fw-bold'>
                        PHP
                    </h5>
                    <h5 className='fw-bold text-end'>
                        68%
                    </h5>
                    </div>
                    <ProgressBar now={68} className="mt-3 bg-dark progress-bar-animated" />
                </div>
            </div>
        </div>
    );
};

export default Skills;