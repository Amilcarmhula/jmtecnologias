import './marcas&clientes.css'
import logo from '../../assets/image/logotipo.png'
import hard from '../../assets/image/hardware.jpg'
import rede from '../../assets/image/redes.jpg'

function MarksClients() {
    return (
        <section id="marks-clients">
            <div className="container" id='mark-container'>

                <div className="marks-container">
                    <a href="#">
                        <img src={logo} className="mark-img " alt="..." width={200} height={200} />
                    </a>
                </div>
                <div className="marks-container">
                    <a href="#">
                        <img src={logo} className="mark-img " alt="..." width={200} height={200} />
                    </a>
                </div>
                <div className="marks-container">
                    <a href="#">
                        <img src={logo} className="mark-img " alt="..." width={200} height={200} />
                    </a>
                </div>
                <div className="marks-container">
                    <a href="#">
                        <img src={logo} className="mark-img " alt="..." width={200} height={200} />
                    </a>
                </div>
                <div className="marks-container">
                    <a href="#">
                        <img src={logo} className="mark-img " alt="..." width={200} height={200} />
                    </a>
                </div>
                
                
                
                
            </div>
        </section>
    );
}

export default MarksClients