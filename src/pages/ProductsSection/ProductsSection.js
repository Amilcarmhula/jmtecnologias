import React from "react";
import './ProductsSection.css'
import cardServiceImage from '../../assets/image/logotipo.png'


function ProductsSection() {
    return (
        <>
            <section id="product-s">
                <div className="container text-capitalize product py-5">
                    <div className="row">
                        <h1 className="heading mt-lg-5 mt-md-3 mt-sm-3 text-center">Productos</h1>
                        <hr />
                    </div>
                    <div className="row">
                        <strong>criar conteudo para este paragrafo, resumindo a diversos produtos aqui vendidos</strong>
                        <strong>criar conteudo para este paragrafo, resumindo a diversos produtos aqui vendidos</strong>
                        <strong>criar conteudo para este paragrafo, resumindo a diversos produtos aqui vendidos</strong>
                        <strong>criar conteudo para este paragrafo, resumindo a diversos produtos aqui vendidos</strong>
                    </div>
                    <div className="row m-3">
                        <div className="col">
                            <div className="card-body">
                                <h5 className="card-title" id="product-header">Material de escritório</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="col" id="prod-1">
                            {/* <img src={cardServiceImage} className="card-img-top" alt="..." /> */}
                        </div>
                    </div>
                    <div className="row m-3">
                        <div className="col" id="prod-2">
                            {/* <img src={cardServiceImage} className="card-img-top" alt="..." /> */}
                        </div>
                        <div className="col">
                            <div className="card-body">
                                <h5 className="card-title"  id="product-header">Consumíveis de segurança e automação </h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="row m-3">
                        <div className="col">
                            <div className="card-body">
                                <h5 className="card-title" id="product-header">Diversos Eletrónicos consumíveis </h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="col" id="prod-3">
                            {/* <img src={cardServiceImage} className="card-img-top" alt="..." /> */}
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default ProductsSection