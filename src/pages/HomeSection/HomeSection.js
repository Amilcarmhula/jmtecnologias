import React from "react";
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.js'
import mainImage from '../../assets/image/bg1.jpg'
import redes from '../../assets/image/redes.jpg'
import web from '../../assets/image/web.jpg'
import hardware from '../../assets/image/hardware.jpg'
import './HomeSection.css'

function HomeSection() {
    return (
        <>
            <section id="home-s">
                <div className="container-fluid text-capitalize home">
                    <div className="container">
                        <div className="row">
                            <div className=" col-xl-6 col-lg-6 d-flex justify-content-center order-lg-2">
                                <div id="image-side" className="align-content-center">
                                    <div id="carouselExampleDark" className="carousel slide rounded-5" data-bs-ride="carousel">
                                        <div className="carousel-indicators">
                                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                        </div>
                                        <div className="carousel-inner rounded-5">
                                            <div className="carousel-item active" data-bs-interval="10000">
                                                <img src={redes} className="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-item" data-bs-interval="2000">
                                                <img src={web} className="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-item">
                                                <img src={hardware} className="d-block w-100" alt="..." />
                                            </div>
                                        </div>
                                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>


                                </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 d-flex order-lg-1">
                                <div id="text-side" className="align-content-center">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-6 col-sm-12">
                                            <p className="titulo">Você precisa de proteção, melhor comunicação, melhor desenpenho ou maior produtividade para sua empresa?</p>
                                            <p id="conteudo" className="">
                                                Garantimos a segurança da sua residência, empresa ou dados através da implementação de sistemas de segurança eletrónica e automação e, sistemas de segurança digitais robustos que atendam as suas necessidades.
                                                Desenvolvemos softwares sob medida, websites e uma vasta gama de sistemas com vista a melhorar a comunicação e produtividade das duas actividades.
                                            </p>
                                        </div>

                                        <div className="col-lg-12 col-md-6 col-sm-12 align-content-center">
                                            <div id="form-consultant" className="row">
                                                <h5 className="titulo">Marque uma consultoria já</h5>
                                                <div className="col-lg-4 ">
                                                    <input type="text" className="input-field w-100  p-1 " placeholder="Nome Apelido" />
                                                </div>
                                                <div className="col-lg-8">
                                                    <input type="text" className="input-field w-100 p-1" placeholder="E-mail e/ou Contacto" />
                                                </div>
                                            </div>
                                            <div id="div-btn" className="row justify-content-center">
                                                <button id="btn-send" className="w-50 ">Agendar consultoria</button>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeSection