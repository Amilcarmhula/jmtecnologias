import './ContactSection.css'

function ContactSection() {
    var elemento = document.getElementById('input-service')
    console.log(elemento)  
    // console.log(elemento.list.id)
    // elemento.list = 'lista-de-produtos' 
    return (
        <>
            <section id="contact-s">
                <div className="container text-capitalize contact py-5 " id='contact-container'>
                    <div className="row">
                        <h1 className="heading mt-lg-5 mt-md-3 mt-sm-3  text-center">contacte-nos</h1>
                        <hr />
                    </div>
                    <div className="row">
                        <p className='text-center'>
                            <strong>Criar conteudo para o paragrafo</strong>
                        </p>
                    </div>
                    <div className="form-box">
                        {/* <!----------------- Registration Form ----------------------> */}
                        <div className="registration-container" id="register-form">
                            <div className="two-forms ">
                                <div className="input-box ">
                                    <input type="text" className="input-fieldd" placeholder="Nome pessoal ou Nome da Empresa" />
                                    <i className="bi bi-person-fill"></i>
                                </div>
                                <div className="input-box">
                                    <input type="tel" className="input-fieldd" placeholder="Contact" />
                                    <i className="bi bi-telephone-fill"></i>
                                </div>
                            </div>
                            <div className="input-box">
                                <input type="email" className="input-fieldd" placeholder="E-mail" />
                                <i className="bi bi-envelope-fill"></i>
                            </div>
                            <div className="two-forms ">
                                <div className="input-box ">
                                    <input type="text" list='lista-de-assuntos' className="input-fieldd" placeholder="Assunto" />
                                    <i className="bi bi-fast-forward-btn-fill"></i>
                                </div>
                                <datalist id='lista-de-assuntos'>
                                    <option value="Agendar Consultoria"></option>
                                    <option value="Pedido de Cotação Serviço"></option>
                                    <option value="Pedir Serviço"></option>
                                    <option value="Info. Serviço"></option>
                                    <option value="Pedido de Cotação Produto"></option>
                                    <option value="Pedir Produto"></option>
                                    <option value="Info. Produto"></option>
                                </datalist>
                                <div className="input-box"> 
                                    <input type="tel" list='lista-de-servicos' className="input-fieldd" placeholder="Produto ou Serviço" id='input-service' />
                                    <i className="bi bi-fast-forward-btn-fill"></i>
                                </div>
                                <datalist id='lista-de-produtos'>
                                    <option value="Pedido de Cotação"></option>
                                    <option value="Agendar Consultoria"></option>
                                    <option value="Pedir Serviço"></option>
                                    <option value="Info. Serviço"></option>
                                    <option value="Pedir Produto"></option>
                                    <option value="Info. Produto"></option>
                                </datalist>
                                <datalist id='lista-de-servicos'>
                                    <option value="Serviços de Segurança digital"></option>
                                    <option value="Desenvolvimento de Softwares e Websites"></option>
                                    <option value="Implementação de segurança eletrónica e automação"></option>
                                    <option value="Serviços de impressão gráfica"></option>
                                </datalist>
                            </div>
                            <div className="input-box">
                                <textarea name="" id="" className="text-area-field" placeholder="Descrição"></textarea>
                                {/* <i className="bi bi-envelope-fill"></i> */}
                            </div>

                            <div className="two-forms ">
                                <div className="input-box">
                                    <input type="email" className="input-fieldd" placeholder="Como deseja ser respondido?" />
                                    {/* <i className="bi bi-envelope-fill"></i> */}
                                </div>
                                <div className="input-box">
                                    <input type="submit" className="submit" value="Register" />
                                </div>
                            </div>

                        </div>
                    </div>


                </div>

            </section>
        </>);
}
export default ContactSection