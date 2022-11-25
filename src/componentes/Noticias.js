import React from "react";

const Noticias = props => {
    return (
        <div>
            {/*<!--Section: Content-->*/}
            <section>
                <div className="row gx-lg-5">
                    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        {/*<!-- News block -->*/}
                        <div>
                            {/*<!-- Featured image -->*/}
                            <div className="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4"
                                data-mdb-ripple-color="light">
                                <img src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp" className="img-fluid" />
                                <a href="#!">
                                    <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                                </a>
                            </div>

                            {/*<!-- Article data -->*/}
                            <div className="row mb-3">
                                <div className="col-6">
                                    <a href="" className="text-info">
                                        <i className="fas fa-plane"></i>
                                        Travels
                                    </a>
                                </div>

                                <div className="col-6 text-end">
                                    <u> 15.07.2020</u>
                                </div>
                            </div>

                            {/*<!-- Article title and description -->*/}
                            <a href="" className="text-dark">
                                <h5>This is title of the news</h5>

                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, iste aliquid. Sed
                                    id nihil magni, sint vero provident esse numquam perferendis ducimus dicta
                                    adipisci iusto nam temporibus modi animi laboriosam?
                                </p>
                            </a>

                            <hr />

                            {/*<!-- News -->*/}
                            <a href="" className="text-dark">
                                <div className="row mb-4 border-bottom pb-2">
                                    <div className="col-3">
                                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
                                            className="img-fluid shadow-1-strong rounded" alt="Hollywood Sign on The Hill" />
                                    </div>

                                    <div className="col-9">
                                        <p className="mb-2"><strong>Lorem ipsum dolor sit amet</strong></p>
                                        <p>
                                            <u> 15.07.2020</u>
                                        </p>
                                    </div>
                                </div>
                            </a>

                            {/*<!-- News -->*/}
                            <a href="" className="text-dark">
                                <div className="row mb-4 border-bottom pb-2">
                                    <div className="col-3">
                                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp"
                                            className="img-fluid shadow-1-strong rounded" alt="Palm Springs Road" />
                                    </div>

                                    <div className="col-9">
                                        <p className="mb-2"><strong>Lorem ipsum dolor sit amet</strong></p>
                                        <p>
                                            <u> 15.07.2020</u>
                                        </p>
                                    </div>
                                </div>
                            </a>

                            {/*<!-- News -->*/}
                            <a href="" className="text-dark">
                                <div className="row mb-4 border-bottom pb-2">
                                    <div className="col-3">
                                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp"
                                            className="img-fluid shadow-1-strong rounded" alt="Los Angeles Skyscrapers" />
                                    </div>

                                    <div className="col-9">
                                        <p className="mb-2"><strong>Lorem ipsum dolor sit amet</strong></p>
                                        <p>
                                            <u> 15.07.2020</u>
                                        </p>
                                    </div>
                                </div>
                            </a>

                            {/*<!-- News -->*/}
                            <a href="" className="text-dark">
                                <div className="row mb-4 border-bottom pb-2">
                                    <div className="col-3">
                                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
                                            className="img-fluid shadow-1-strong rounded" alt="Skyscrapers" />
                                    </div>

                                    <div className="col-9">
                                        <p className="mb-2"><strong>Lorem ipsum dolor sit amet</strong></p>
                                        <p>
                                            <u> 15.07.2020</u>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        {/*<!-- News block -->*/}
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        {/*<!-- News block -->*/}
                        <div>
                            {/*<!-- Featured image -->*/}
                            <div className="bg-image hover-overlay shadow-1-strong rounded-5 ripple mb-4"
                                data-mdb-ripple-color="light">
                                <img src="https://mdbcdn.b-cdn.net/img/new/fluid/city/011.webp" className="img-fluid"
                                    alt="Brooklyn Bridge" />
                                <a href="#!">
                                    <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                                </a>
                            </div>

                            {/*<!-- Article data -->*/}
                            <div className="row mb-3">
                                <div className="col-6">
                                    <a href="" className="text-danger">
                                        <i className="fas fa-chart-pie"></i>
                                        Business
                                    </a>
                                </div>

                                <div className="col-6 text-end">
                                    <u> 15.07.2020</u>
                                </div>
                            </div>

                            {/*<!-- Article title and description -->*/}
                            <a href="" className="text-dark">
                                <h5>This is title of the news</h5>

                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, iste aliquid. Sed
                                    id nihil magni, sint vero provident esse numquam perferendis ducimus dicta
                                    adipisci iusto nam temporibus modi animi laboriosam?
                                </p>
                            </a>

                            <hr />

                            {/*<!-- News -->*/}
                            <a href="" className="text-dark">
                                <div className="row mb-4 border-bottom pb-2">
                                    <div className="col-3">
                                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/031.webp"
                                            className="img-fluid shadow-1-strong rounded" alt="Five Lands National Park" />
                                    </div>

                                    <div className="col-9">
                                        <p className="mb-2"><strong>Lorem ipsum dolor sit amet</strong></p>
                                        <p>
                                            <u> 15.07.2020</u>
                                        </p>
                                    </div>
                                </div>
                            </a>

                            {/*<!-- News -->*/}
                            <a href="" className="text-dark">
                                <div className="row mb-4 border-bottom pb-2">
                                    <div className="col-3">
                                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/032.webp"
                                            className="img-fluid shadow-1-strong rounded" alt="Paris - Eiffel Tower" />
                                    </div>

                                    <div className="col-9">
                                        <p className="mb-2"><strong>Lorem ipsum dolor sit amet</strong></p>
                                        <p>
                                            <u> 15.07.2020</u>
                                        </p>
                                    </div>
                                </div>
                            </a>

                            {/*<!-- News -->*/}
                            <a href="" className="text-dark">
                                <div className="row mb-4 border-bottom pb-2">
                                    <div className="col-3">
                                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/033.webp"
                                            className="img-fluid shadow-1-strong rounded" alt="Louvre" />
                                    </div>

                                    <div className="col-9">
                                        <p className="mb-2"><strong>Lorem ipsum dolor sit amet</strong></p>
                                        <p>
                                            <u> 15.07.2020</u>
                                        </p>
                                    </div>
                                </div>
                            </a>

                            {/*<!-- News -->*/}
                            <a href="" className="text-dark">
                                <div className="row mb-4 border-bottom pb-2">
                                    <div className="col-3">
                                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/034.webp"
                                            className="img-fluid shadow-1-strong rounded" alt="Times Square" />
                                    </div>

                                    <div className="col-9">
                                        <p className="mb-2"><strong>Lorem ipsum dolor sit amet</strong></p>
                                        <p>
                                            <u> 15.07.2020</u>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        {/*<!-- News block -->*/}
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        {/*<!-- News block -->*/}
                        <div>
                            {/*<!-- Featured image -->*/}
                            <div className="bg-image hover-overlay shadow-1-strong rounded-5 ripple mb-4"
                                data-mdb-ripple-color="light">
                                <img src="https://mdbcdn.b-cdn.net/img/new/fluid/city/018.webp" className="img-fluid"
                                    alt="Golden Gate National Recreation Area" />
                                <a href="#!">
                                    <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                                </a>
                            </div>

                            {/*<!-- Article data -->*/}
                            <div className="row mb-3">
                                <div className="col-6">
                                    <a href="" className="text-warning">
                                        <i className="fas fa-code"></i>
                                        Technology
                                    </a>
                                </div>

                                <div className="col-6 text-end">
                                    <u> 15.07.2020</u>
                                </div>
                            </div>

                            {/*<!-- Article title and description -->*/}
                            <a href="" className="text-dark">
                                <h5>This is title of the news</h5>

                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, iste aliquid. Sed
                                    id nihil magni, sint vero provident esse numquam perferendis ducimus dicta
                                    adipisci iusto nam temporibus modi animi laboriosam?
                                </p>
                            </a>

                            <hr />

                            {/*<!-- News -->*/}
                            <a href="" className="text-dark">
                                <div className="row mb-4 border-bottom pb-2">
                                    <div className="col-3">
                                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/011.webp"
                                            className="img-fluid shadow-1-strong rounded" alt="Brooklyn Bridge" />
                                    </div>

                                    <div className="col-9">
                                        <p className="mb-2"><strong>Lorem ipsum dolor sit amet</strong></p>
                                        <p>
                                            <u> 15.07.2020</u>
                                        </p>
                                    </div>
                                </div>
                            </a>

                            {/*<!-- News -->*/}
                            <a href="" className="text-dark">
                                <div className="row mb-4 border-bottom pb-2">
                                    <div className="col-3">
                                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/012.webp"
                                            className="img-fluid shadow-1-strong rounded" alt="Hamilton Park" />
                                    </div>

                                    <div className="col-9">
                                        <p className="mb-2"><strong>Lorem ipsum dolor sit amet</strong></p>
                                        <p>
                                            <u> 15.07.2020</u>
                                        </p>
                                    </div>
                                </div>
                            </a>

                            {/*<!-- News -->*/}
                            <a href="" className="text-dark">
                                <div className="row mb-4 border-bottom pb-2">
                                    <div className="col-3">
                                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/013.webp"
                                            className="img-fluid shadow-1-strong rounded" alt="Perdana Botanical Garden Kuala Lumpur" />
                                    </div>

                                    <div className="col-9">
                                        <p className="mb-2"><strong>Lorem ipsum dolor sit amet</strong></p>
                                        <p>
                                            <u> 15.07.2020</u>
                                        </p>
                                    </div>
                                </div>
                            </a>

                            {/*<!-- News -->*/}
                            <a href="" className="text-dark">
                                <div className="row mb-4 border-bottom pb-2">
                                    <div className="col-3">
                                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/014.webp"
                                            className="img-fluid shadow-1-strong rounded" alt="Perdana Botanical Garden" />
                                    </div>

                                    <div className="col-9">
                                        <p className="mb-2"><strong>Lorem ipsum dolor sit amet</strong></p>
                                        <p>
                                            <u> 15.07.2020</u>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        {/*<!-- News block -->*/}
                    </div>
                </div>
            </section>
            {/*<!--Section: Content-->*/}
        </div>
    );
};

export default Noticias;