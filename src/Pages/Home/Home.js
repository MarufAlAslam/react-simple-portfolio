import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';

const Home = () => {
    return (
        <div className="container py-5">
        <h1 className="fw-bold ">
            John Doe
        </h1>
        <h3 className="mb-4">
            Developer, Designer
        </h3>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam libero nunc, ullamcorper eu consequat sit amet, pellentesque ut augue. Fusce at accumsan mi. Nunc pretium vel lectus ut dignissim. Aenean quam justo, sodales sit amet ipsum in, viverra lobortis orci. Quisque porttitor eget tellus vitae auctor. Nam fermentum vel sem vel sagittis. Duis condimentum sollicitudin feugiat. Pellentesque augue dui, aliquam nec risus eget, finibus molestie tortor.
<br/><br/>
Nulla in ullamcorper urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus consequat arcu sed varius. Vestibulum iaculis tellus in nisi mollis, eget consectetur libero lacinia. Donec ac mauris id ligula eleifend.
        </p>

        <div className="d-flex mt-5">
            <a href="" className="btn btn-dark rounded-pill me-3 d-inline-flex justify-content-center align-items-center">
                <FaFacebookF/>
            </a>
            <a href="" className="btn btn-dark rounded-pill me-3 d-inline-flex justify-content-center align-items-center">
                <FaLinkedinIn/>
            </a>
            <a href="" className="btn btn-dark rounded-pill me-3 d-inline-flex justify-content-center align-items-center">
                <FaGithub/>
            </a>
            <a href="" className="btn btn-dark rounded-pill me-3 d-inline-flex justify-content-center align-items-center">
                <FaTwitter/>
            </a>
        </div>
        </div>
    );
};

export default Home;