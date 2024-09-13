import React from "react";
import './ServiceSection.css'
import cardServiceImage from '../../assets/image/logotipo.png'
import cardServiceImage2 from '../../assets/image/teste.png'

function ServiceSection() {
    return (
        <>
            <section id="service-s">
                <div className="container-fluid">
                    <div className="container py-5  text-capitalize service">

                        <div className="row">
                            <h1 className="heading mt-lg-5 mt-md-3 mt-sm-3 text-center">serviços</h1>
                            <hr />
                        </div>

                        <div className="row">
                            <p id="paragrafo-service" className="pb-4">
                                Na JM-tecnologias, a segurança, a tecnologia e a inovação convergem para criar soluções abrangentes e personalizadas. Somos especialistas em oferecer uma gama diversificada de serviços, desde a venda e montagem de sistemas de vigilância, vedações elétricas e controles de acesso até a comercialização de artigos eletrônicos de última geração. Além disso, destacamo-nos no desenvolvimento de soluções customizadas e softwares, bem como na criação de websites que refletem a excelência e a visão única de cada cliente.
                            </p>
                        </div>
                        <div className="row row-cols-1 row-cols-md-3 g-4">

                            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">

                                <div className="card">
                                    
                                    <a href="#" className="service-link text-center">
                                        <img src={cardServiceImage2} className="" id="card-img-top-service" alt="..." />
                                        <div className="card-body" id="card-body">
                                            <h5 className="card-title" id="card-title">
                                                segurança digitais
                                            </h5>
                                            <p className="card-text" id="card-text">
                                                <strong>alterar conteudo deste paragrafo para falar de seguranca digital </strong>
                                                Transformamos ideias em experiências digitais notáveis. Oferecemos um serviço especializado de desenvolvimento de websites que vai além da criação de páginas online — construímos plataformas envolventes, funcionais e visualmente impactantes que elevam a presença digital de sua marca
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                <div className="card">
                                    <a href="#" className="service-link">
                                        <img src={cardServiceImage} className="card-img-top" alt="..." />
                                        <div className="card-body" id="card-body">
                                            <h5 className="card-title" id="card-title">
                                                Softwares e websites
                                            </h5>
                                            <strong>resumir os dois paragrafos abaixo para um unico paragrafo</strong>
                                            <p className="card-text" id="card-text">
                                                A inovação é a base do que fazemos. Oferecemos um serviço de desenvolvimento de softwares que vai muito além de linhas de código; criamos soluções personalizadas e eficientes que impulsionam o crescimento do seu negócio.
                                            </p>
                                            <p className="card-text" id="card-text">
                                                Transformamos ideias em experiências digitais notáveis. Oferecemos um serviço especializado de desenvolvimento de websites que vai além da criação de páginas online — construímos plataformas envolventes, funcionais e visualmente impactantes que elevam a presença digital de sua marca
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                <div className="card">
                                    <a href="#" className="service-link">
                                        <img src={cardServiceImage} className="card-img-top" alt="..." />
                                        <div className="card-body" id="card-body">
                                            <h5 className="card-title" id="card-title">
                                                segurança eletrónica e automação
                                            </h5>
                                            <p className="card-text" id="card-text">
                                                Eleve a segurança de seu espaço a novos patamares com nosso serviço especializado de montagem de cercas elétricas. Oferecemos uma solução robusta e eficaz para proteger sua propriedade, combinando tecnologia avançada com instalação profissional.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                <div className="card">
                                    <a href="#" className="service-link">
                                        <img src={cardServiceImage} className="card-img-top" alt="..." />
                                        <div className="card-body" id="card-body">
                                            <h5 className="card-title" id="card-title">
                                                Impressão gráfica
                                            </h5>
                                            <p className="card-text" id="card-text">
                                                <strong>alterar conteudo deste paragrafo para falar de Impressão gráfica</strong>
                                                Eleve a segurança de seu espaço a novos patamares com nosso serviço especializado de montagem de cercas elétricas. Oferecemos uma solução robusta e eficaz para proteger sua propriedade, combinando tecnologia avançada com instalação profissional.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>




                            {/* <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                <div className="card">
                                    <img src={cardServiceImage} className="card-img-top" alt="..." />
                                    <div className="card-body" id="card-body">
                                        <h5 className="card-title" id="card-title">
                                            Cercas Elétricas
                                        </h5>
                                        <p className="card-text" id="card-text">
                                            Eleve a segurança de seu espaço a novos patamares com nosso serviço especializado de montagem de cercas elétricas. Oferecemos uma solução robusta e eficaz para proteger sua propriedade, combinando tecnologia avançada com instalação profissional.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                <div className="card">
                                    <img src={cardServiceImage} className="card-img-top " alt="..." />
                                    <div className="card-body" id="card-body">
                                        <h5 className="card-title" id="card-title">
                                            Portões Automáticos
                                        </h5>
                                        <p className="card-text" id="card-text">
                                            Dê as boas-vindas à conveniência e segurança com nosso serviço especializado de montagem de portões automáticos na JM-Segurança e automação.
                                            Oferecemos soluções personalizadas que unem design elegante, funcionalidade eficiente e automação inteligente para a entrada da sua propriedade.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                <div className="card">
                                    <img src={cardServiceImage} className="card-img-top" alt="..." />
                                    <div className="card-body" id="card-body">
                                        <h5 className="card-title" id="card-title">
                                            Controlo de Acesso
                                        </h5>
                                        <p className="card-text" id="card-text">
                                            No coração da segurança eficiente está o controlo de acesso inteligente. Nosso serviço de controlo de acesso oferece uma abordagem inovadora para proteger seu espaço, combinando tecnologia avançada com facilidade de uso. Coloque o poder de quem entra e sai nas suas mãos, garantindo a segurança do seu ambiente de maneira eficaz
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                <div className="card">
                                    <img src={cardServiceImage} className="card-img-top" alt="..." />
                                    <div className="card-body" id="card-body">
                                        <h5 className="card-title" id="card-title">
                                            Alarmes deIntrusão

                                        </h5>
                                        <p className="card-text" id="card-text">
                                            Na vanguarda da proteção, nosso serviço de montagem de alarmes de intrusão oferece a tranquilidade que seu espaço merece. Combinando tecnologia de ponta e instalação profissional, criamos uma barreira eficaz contra intrusos, proporcionando segurança inigualável.
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                <div className="card">
                                    <img src={cardServiceImage} className="card-img-top" alt="..." />
                                    <div className="card-body" id="card-body">
                                        <h5 className="card-title" id="card-title">
                                            Automação Residencial
                                        </h5>
                                        <p className="card-text" id="card-text">
                                            Transforme sua casa em um espaço inteligente e eficiente com nosso serviço de automação residencial e melhorias elétricas. Na JM-Tecnologias , combinamos inovação tecnológica com expertise elétrica para criar ambientes mais seguros, confortáveis e energeticamente eficientes.
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                <div className="card">
                                    <img src={cardServiceImage} className="card-img-top" alt="..." />
                                    <div className="card-body" id="card-body">
                                        <h5 className="card-title" id="card-title">
                                            Cameras
                                        </h5>
                                        <p className="card-text" id="card-text">
                                            Elevando a segurança ao próximo nível, nosso serviço de montagem de cameras oferece uma solução abrangente para proteger o que é mais importante para você. Com uma equipe especializada e dedicada, garantimos a instalação precisa e eficiente de sistemas de vigilância de última geração.
                                        </p>
                                    </div>
                                </div>
                            </div> */}




                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default ServiceSection
