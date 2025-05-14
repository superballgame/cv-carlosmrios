import { useRef } from 'react';
import './App.css';
import html2pdf from 'html2pdf.js';


function App() {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    const element = contentRef.current;
    if (!element) return;

    const opt = {
      margin: 0,
      filename: 'cv-JuanGRios.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 1, // Disminuye esto si quieres comprimir más el contenido
        useCORS: true,
        scrollY: 0,
        scrollX: 0,
      },
      jsPDF: {
        unit: 'px',
        format: [1650, 2350], // A4 exacto en px
        orientation: 'portrait',
      },
      // pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <>
      <div ref={contentRef}>
        <div className='cv-container'>
          <header className='cabecera'>
            <h2>JUAN GUILLERMO RIOS C.</h2>
            <h4>INGENIERO DE SISTEMAS | Universidad Cooperativa de Colombia</h4>

            <div className="whatsapp-button">
              <a
                href="https://wa.me/573116209170"
                target="_blank"
                rel="noopener noreferrer"
                title="Chatear por WhatsApp"
              >
                🟢 WhatsApp
              </a>
            </div>
          
          </header>
        </div>
        <div className="image-wrapper">
          <img src="./foto_juan.png" alt="Foto" className="pic" />
        </div>
        <div className='container'>
          <div className='left'>

            <h3 className='titulo'>CONTACTO</h3>

            <div className="info-item">
              <div className="icon-circle">📞</div>
              <div className="info-text">
                <h4>Celular:</h4>
                <p>+57 3116209170</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-circle">✉️</div>
              <div className="info-text">
                <h4>Email:</h4>
                <p>guiguirios@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-circle">📍</div>
              <div className="info-text">
                <h4>Dirección:</h4>
                <p>Carrera 42D No 45 C Sur - 124</p>
                <p>Envigado - Antioquia</p>
              </div>
            </div>

            <hr className='divider' />

            <div className='skills-section'>
              <h3 className='section-title'>HABILIDADES</h3>
              {['LIDERAZGO', 'COMUNICACIÓN', 'ANÁLISIS', 'ORGANIZACIÓN', 'PLANIFICACIÓN', 'RESOLUCIÓN'].map((skill) => (
                <div className='skill' key={skill}>
                  <span>{skill}</span>
                  <div className='bar full'></div>
                </div>
              ))}
            </div>

            <div className='skills-section'>
              <h3 className='section-title'>COMPUTACIÓN</h3>
              {[
                { name: 'MS EXCEL', level: '80%' },
                { name: 'MS WORD', level: '70%' },
                { name: 'MS POWERPOINT', level: '60%' },
                { name: 'SQL', level: '50%' },
                { name: 'REACT JS', level: '60%' },
                { name: 'PHOTOSHOP', level: '50%' },
              ].map(({ name, level }) => (
                <div className='skill' key={name}>
                  <span>{name}</span>
                  <div className='bar'>
                    <div className='fill' style={{ width: level }}></div>
                  </div>
                </div>
              ))}
            </div>

            <div className='personal-section'>
              <h3 className='section-title'>PERSONAL</h3>
              <div className='info-row'><span>Cédula:</span><span>71730200</span></div>
              <div className='info-row'><span>Fecha de Nac:</span><span>06/03/1972</span></div>
              <div className='info-row'><span>Nacionalidad:</span><span>Colombiano</span></div>
              <div className='info-row'><span>Idiomas:</span><span>Español</span></div>
              <div className='info-row'><span>Tarjeta Profesional:</span><span>05255237793ANT</span></div>
            </div>
            <div className="button-container">
              <button onClick={handleDownload} className="btn descargar">
                📄 Descargar Hoja de Vida
              </button>
            </div>
          </div>

          <div className='right'>
            <section>
              <h3 className='section-title'>PERFIL PROFESIONAL</h3>
              <p>
                Ingeniero de Sistemas con sólida formación académica y amplia experiencia tanto en el sector público como en el privado. A lo largo de mi trayectoria he desempeñado funciones clave en áreas como logística, análisis predial, gestión de inventarios y soporte técnico en hardware y software. Mi vocación por el conocimiento me ha llevado a ejercer la docencia en niveles de secundaria y educación superior, desarrollando una buena capacidad para comunicar de forma clara y efectiva. Profesional leal, proactivo y comprometido, con un fuerte sentido de responsabilidad y trabajo en equipo. Casado y padre de dos hijos, combino mi vida familiar con una constante búsqueda de crecimiento personal y profesional.
              </p>
            </section>

            <section>
              <h3 className='section-title'>FORMACIÓN ACADÉMICA</h3>
              <ul>
                <li><strong>INGENIERIA DE SISTEMAS</strong> - Universidad Cooperativa de Colombia</li>
                <li><strong>FUNDAMENTOS DE PYTHON</strong> - PLATZY</li>
                <li><strong>PYTHON FUNCIONES Y ERRORES</strong> - PLATZY</li>
                <li><strong>FUNDAMENTOS DE BASE DE DATOS</strong> - PLATZY</li>
                <li><strong>ORACLE SQL</strong> - ORACLE UNIVERSITY</li>
                <li><strong>ORACLE DBA</strong> - ORACLE UNIVERSITY</li>
                <li><strong>REACT JS</strong> - Autoaprendizaje</li>
              </ul>
            </section>

            <section>
              <h3 className='section-title'>EXPERIENCIA LABORAL</h3>

              <h4>Sector Público:</h4>
              <ul>
                <li>
                  <strong>Alcaldía de Itagüí (2010 – 2012) – Analista de Datos:</strong><br />
                  Encargado de depurar y corregir inconsistencias en la base de datos del impuesto predial tras una migración fallida desde una plataforma antigua al sistema actual. Apoyo en procesos de validación y limpieza de datos catastrales y tributarios.
                </li>
                <li>
                  <strong>Alcaldía de Bello (2012 – 2016) – Analista de Datos / Webmaster:</strong><br />
                  Durante los primeros dos años, responsable de la identificación y corrección de errores en la migración de datos hacia un sistema Oracle. Posteriormente, desarrolle desde cero el sitio web oficial y la intranet de la Alcaldía utilizando Joomla. Además, cree dos app en la Intranet para la consulta de pagos rechazados por contratistas por errores en la cuenta de cobro.
                </li>
              </ul>

              <h4>Sector Privado:</h4>
              <ul>
                <li>
                  <strong>Compujunior LTDA (1995-1996)– Soporte Técnico:</strong><br />
                  Docente / Soporte Técnico: Empresa especializada en capacitación tecnológica y tercerización de servicios informáticos, donde me desempeñé como docente en cursos de sistemas operativos y ofimática, además de brindar soporte técnico en hardware y software, incluyendo instalación, mantenimiento y atención de requerimientos técnicos para clientes internos y externos.
                </li>
                <li>
                  <strong>Macro S.A. (1996-1999)– Asistente de Servicio al Cliente / Operador Logístico / Supervisor de Control Final:</strong><br />
                  Ingresó como asistente en servicio al cliente, brindando apoyo en procesos de devolución de productos y atención directa al cliente. Fue ascendido a operador logístico, donde estuve encargado de los sistemas informáticos de la tienda y de organizar la logística para los inventarios generales, incluyendo el diseño del layout cada seis meses. Posteriormente, fue promovido a supervisor de control final, siendo responsable de coordinar y supervisar los procesos relacionados con las cajas de registro y la recaudación diaria y el manejo de personal organizando turnos y descansos.
                </li>
                <li>
                  <strong>Ferrocarril S.A. (2001-2002)– Soporte Técnico:</strong><br />
                  Empresa del sector textil con enfoque en exportación de prendas. Encargado del soporte técnico a los sistemas informáticos y a la red de la empresa. Adquiri formación especializada en Oracle SQL y Oracle DBA, ya que la empresa contaba con un CRM propio desarrollado en Oracle utilizando SQL y PL/SQL.
                </li>
              </ul>

              <h4>Docencia:</h4>
              <ul>
                <li>Instituto Metropolitano de Educacion- IME (1996) | Docente de Bachillerato.</li>
                <li>Microtec de Colombia LTDA (1999) | Docente de Sistemas Operativos, Ofimatica.</li>
                <li>Parroquia Nuestra Señora del Buen Consejo (2009) | Docente de Bachillerato. </li>
                <li>Universidad Cooperativa de Colombia (2011-2012) | Docente de Ingenieria de sistemas, Asesor de Tesis de Grado. </li>
              </ul>

              <h4>Consultorías:</h4>
              <ul>
                <li>Celular2000 Comunicaciones (2005-)</li>
                <li>DIMAC IT</li>
              </ul>

              <h4>Negocios Diversos:</h4>
              <ul>
                <li>Ingreso al negocio de comercialización e instalación de equipos de computo y redes.</li>
                <li>Creacion de sitios web y Community Manager.</li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      {/* <div className="button-container">
        <button onClick={handleDownload} className="btn descargar">
          📄 Descargar Hoja de Vida
        </button>
      </div> */}
    </>
  );
}

export default App;


