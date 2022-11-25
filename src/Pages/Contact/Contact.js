import React from 'react';

const Contact = () => {
    return (
        <div className="container py-5">
           <form className="w-75 mx-auto">
                <h3 className="text-center fw-bold mb-4">
                    Contact Me
                </h3>

                <div className="form-group my-2">
                    <label>
                        Name:
                    </label>
                    <input type="text" className="form-control mt-2 border-dark py-2" placeholder="Name Here"  />
                </div>
                <div className="form-group my-2">
                    <label>
                        Email:
                    </label>
                    <input type="email" className="form-control mt-2 border-dark py-2" placeholder="Email Here"  />
                </div>
                <div className="form-group my-2">
                    <label>
                        Message:
                    </label>
                    <textarea cols="30" rows="5" className="form-control mt-2 border-dark py-2" placeholder="Write your Message Here"></textarea>
                </div>

                <div className="text-end mt-3">
                    <button className="btn btn-dark px-4">
                        Submit
                    </button>
                </div>
           </form>
        </div>
    );
};

export default Contact;