import React from "react"

// import 'bootstrap/dist/css/bootstrap.css'
import './AboutSection.css'
import logo from '../../assets/image/logotipo.png'



function AboutSection() {
    return (
        <>
            <section id="about-s">
                <div className="container py-5 text-capitalize about">
                    <div className="row">
                        <h1 className="heading mt-lg-5 mt-md-3 mt-sm-3  text-center">Sobre Nós</h1>
                        <hr />
                    </div>

                    <div className="row">
                        <p className="paragrafo-about">
                            <strong>Rever este paragrafo</strong>
                            A JM-Tecnologias, fundada em 2022, tem como principal missão atender à crescente demanda por soluções tecnológicas inovadoras. Especializada no fornecimento de artigos eletrónicos, serviços eletrónicos e tecnológicos, bem como soluções customizadas de softwares e automação, a empresa destaca-se pela sua abordagem abrangente no universo tecnológico.
                        </p>
                    </div>
                    <div className="row p-3">
                        <div className="card " id="card-about">
                            <div className="row g-0">
                                <div className="col-md-4 d-flex justify-content-center">
                                    <img src={logo} className="img-fluid " id="img-fluid-card-about" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body" id="card-body-about">
                                        <h5 className="card-title" id="card-header">Titulo do diferencial</h5>
                                        <p className="paragrafo">
                                            O diferencial competitivo da JM-Tecnologias reside na entrega imediata de produtos e serviços, refletindo em uma sólida eficiência operacional. A empresa cultiva uma relação exemplar com seus clientes, reconhecendo a importância fundamental de uma parceria sólida e duradoura.
                                        </p>
                                        <p className="paragrafo">
                                            Além disso, a JM-Tecnologias demonstra sua agilidade ao se adaptar rapidamente às necessidades dinâmicas do mercado. Essa flexibilidade é vital no cenário tecnológico, onde a inovação e as demandas dos clientes evoluem de maneira constante.
                                        </p>
                                        <p className="paragrafo">
                                            Em síntese, a JM-Tecnologias destaca-se como uma empresa comprometida com a excelência, prontidão e inovação, proporcionando soluções tecnológicas de qualidade enquanto mantém uma conexão sólida e adaptativa com seus clientes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 order-lg-2 order-md-3"id="valor">
                            
                            {/* <div className="row"> */}
                            <h3 className="text-center header-m2v">
                                VALOR
                                <hr />
                            </h3>
                                <p className="conteudo-m2v cover">
                                    Orientamos nossas ações pelos valores fundamentais de inovação, qualidade, simplicidade, design e sustentabilidade. Buscamos constantemente superar expectativas, simplificar processos, valorizar o design em todas as nossas criações e garantir práticas sustentáveis em todas as nossas operações. Esses valores são a base do nosso compromisso com a ética, a excelência e a responsabilidade ambiental.
                                </p>
                            {/* </div> */}
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 order-lg-1 order-md-2" id="missao" >

                            {/* <div className="row"> */}
                                <h3 className="text-center header-m2v">
                                    MISSÃO
                                    <hr />
                                </h3>
                                <p className="conteudo-m2v  cover">
                                    Nossa missão é projetar produtos e oferecer serviços de excelência, proporcionando experiências excepcionais aos nossos clientes e liderando o setor de tecnologia por meio de inovações contínuas
                                </p>
                            {/* </div> */}
                        </div>
                        
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 order-lg-3 order-md-1" id="visao">
                            
                            {/* <div className="row "> */}
                            <h3 className="text-center header-m2v">
                                VISÃO
                                <hr />
                            </h3>
                                <p className="conteudo-m2v cover">
                                    Almejamos ser uma empresa que revoluciona o mundo por meio da tecnologia, impactando positivamente a sociedade e estabelecendo novos padrões de excelência e inovação.
                                </p>
                            {/* </div> */}

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutSection