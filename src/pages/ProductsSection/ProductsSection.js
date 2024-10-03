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
                    Bem-vindo à JM-tecnologias, onde a segurança, a tecnologia e a inovação convergem para criar soluções abrangentes e personalizadas. Somos especialistas em oferecer uma gama diversificada de serviços, desde a venda e montagem de sistemas de vigilância, vedações elétricas e controles de acesso até a comercialização de artigos eletrônicos de última geração. Além disso, destacamo-nos no desenvolvimento de soluções customizadas e softwares, bem como na criação de websites que refletem a excelência e a visão única de cada cliente.
                    </div>
                    <div className="row m-3">
                        <div className="col">
                            <div className="card-body">
                                <h5 className="card-title" id="product-header">Material de escritório</h5>
                                <p className="card-text">
                                Na JM-Tecnologias, não apenas oferecemos tecnologia de ponta para garantir a segurança e inovação dos seus negócios, mas também somos a sua melhor escolha quando se trata de equipar o seu escritório com eficiência e estilo. Disponibilizamos uma vasta gama de materiais e serviços para escritórios, projetados para otimizar a produtividade e atender às necessidades do dia a dia de sua equipe.
                                    </p>
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
                                <p className="card-text">
                                Um escritório moderno precisa de mais do que equipamentos de qualidade. Ele também precisa ser seguro, protegido contra ameaças e automatizado para proporcionar controle e conveniência. É por isso que, além dos nossos materiais e serviços para escritórios, oferecemos também uma linha completa de Consumíveis de Segurança e Automação, que integram perfeitamente as funcionalidades e a segurança que sua empresa necessita.
                                    </p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="row m-3">
                        <div className="col">
                            <div className="card-body">
                                <h5 className="card-title" id="product-header">Diversos Eletrónicos consumíveis </h5>
                                <p className="card-text">
                                A tecnologia desempenha um papel essencial em qualquer ambiente de trabalho moderno. Por isso, na JM-Tecnologias, oferecemos uma variedade de eletrônicos consumíveis que se integram perfeitamente ao seu escritório, oferecendo soluções que aumentam a conectividade e a produtividade.
                                    </p>
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