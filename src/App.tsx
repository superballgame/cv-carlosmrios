import { useRef } from 'react';
import './App.css';
import html2pdf from 'html2pdf.js';


function App() {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    const element = contentRef.current;
    if (!element) return;

    const botonDescarga = document.getElementById("boton-descarga");
    const botonWhatsapp = document.getElementById("boton-whatsapp");

    // Oculta los botones antes de exportar
    if (botonDescarga) botonDescarga.style.visibility = "hidden";
    if (botonWhatsapp) botonWhatsapp.style.visibility = "hidden";

    const opt = {
      margin: 0,
      filename: 'cv-CarlosMarioRios.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: {
        scale: 1,
        useCORS: true,
        scrollY: 0,
        scrollX: 0,
        windowWidth: document.body.scrollWidth,
        windowHeight: document.body.scrollHeight,
      },
      jsPDF: {
        unit: 'px',
        format: [980, 2050],
        orientation: 'portrait',
      },
    };

    html2pdf()
      .set(opt)
      .from(element)
      .save()
      .then(() => {
        // Restaurar visibilidad de los botones
        if (botonDescarga) botonDescarga.style.visibility = "visible";
        if (botonWhatsapp) botonWhatsapp.style.visibility = "visible";
      });
  };


  return (
    <>
      <div ref={contentRef}>
        <div className='cv-container'>
          <header className='cabecera'>
            <h2>CARLOS MARIO RIOS C.</h2>
            <h4>INGENIERO CIVIL | Universidad Cooperativa de Colombia</h4>
            <h4>ARQUITECTO CONSTRUCTOR | Universidad Nacional de Colombia</h4>
            <div className="whatsapp-button" id="boton-whatsapp">
              <a
                href="https://wa.me/573164864593"
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
          <img src="./carlosmariorios.jpeg" alt="Foto" className="pic" />
        </div>
        <div className='container'>
          <div className='left'>

            <h3 className='titulo'>CONTACTO</h3>

            <div className="info-item">
              <div className="icon-circle">📞</div>
              <div className="info-text">
                <h4>Celular:</h4>
                <p>+57 3164864593</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-circle">✉️</div>
              <div className="info-text">
                <h4>Email:</h4>
                <p>camayo@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-circle">📍</div>
              <div className="info-text">
                <h4>Dirección:</h4>
                <p>Calle 50 A No 16A -42</p>
                <p>Medellín - Antioquia</p>
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
                { name: 'MS WORD', level: '80%' },
                { name: 'MS PROJECT', level: '90%'},
                { name: 'MS POWERPOINT', level: '80%' },
                { name: 'AUTOCAD', level: '90%'},
                { name: 'REVIT', level:'90%'},
                { name: 'PACO', level:'90%'},
                { name: 'SAO', level: '90%'},
                { name: 'COCO', level: '90%'},
                
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
              <div className='info-row'><span>Cédula:</span><span>71790626</span></div>
              <div className='info-row'><span>Fecha de Nac:</span><span>28/10/1977</span></div>
              <div className='info-row'><span>Nacionalidad:</span><span>Colombiano</span></div>
              <div className='info-row'><span>Idiomas:</span><span>Español</span></div>
              <div className='info-row'><span>Tarjeta Profesional:</span><span>05202099643ANT</span></div>
            </div>
            <div className="button-container" id="boton-descarga">
              <button onClick={handleDownload} className="btn descargar">
                📄 Descargar Hoja de Vida
              </button>
            </div>
          </div>

          <div className='right'>
            <section>
              <h3 className='section-title'>PERFIL PROFESIONAL</h3>
              <p>
                Ingeniero Civil con más de 20 años de experiencia en dirección, supervisión y ejecución de obras civiles y edificaciones. Especialista en Gerencia de Construcciones, con formación complementaria en arquitectura constructora y supervisión técnica. He liderado exitosamente múltiples proyectos residenciales, comerciales e institucionales, demostrando habilidades sólidas en gestión de obra, control de presupuesto, normativas de calidad (ISO 9001), y coordinación técnica.

Cuento con una trayectoria destacada en empresas reconocidas del sector constructor en Colombia, desempeñando cargos como Director de Obra, Residente y Representante Legal. Me caracterizo por mi compromiso, liderazgo, capacidad técnica y cumplimiento de metas en tiempos exigentes. Formación constante y manejo de herramientas especializadas para la planificación y control de obras.
              </p>
            </section>

            <section>
              <h3 className='section-title'>FORMACIÓN ACADÉMICA</h3>
              <ul>
                <li><strong>ESPECIALISTA EN GERENCIA DE CONSTRUCCIONES</strong> - Universidad de Medellín</li>
                <li><strong>DIPLOMATURA EN SUPERVISION TECNICA DE EDIFICACIONES</strong> - Universidad de Medellín</li>
                <li><strong>INGLES</strong> - Universidad Nacional de Colombia</li>
                <li><strong>SAO, PRESUPUESTO Y CONTROL PRESUPUESTAL</strong> - SAO</li>
                <li><strong>COCO.(CONTROL DE PRESUPUESTO)</strong> - OBRAS</li>
                <li><strong>PACO – Programa para la administración y control de obras civiles </strong> - OBRAS</li>
                <li><strong>FUNDAMENTOS DE LA NORMA NTC-ISO 9001:2000</strong> - Universidad de Antioquia</li>
                <li><strong>FUNDAMENTOS DE LA NORMA NTC-ISO 9001:2000 </strong>– Universidad de Antioquia</li>
                <li><strong>FORMACION DE AUDITORES INTERNOS BASADO EN LA NORMA NTC-ISO 9001:2000 Y
                NTC-ISO 19011:2000</strong> - Universidad de Antioquia</li>
              </ul>
            </section>

            <section>
              <h3 className='section-title'>EXPERIENCIA LABORAL</h3>

              <h4>Sector Privado:</h4>
              <ul className="list-disc pl-5 space-y-2 text-justify">
                <li>
                  <strong>CLR Construcción y Asesoría</strong> – Coordinador Técnico de Obra (Oct 2023 – Actualidad)  
                  Coordinación técnica y seguimiento de obras, garantizando calidad y cumplimiento de especificaciones.
                </li>
                <li>
                  <strong>Inversiones Editec SAS – MONTANA Casas Campestres</strong> – Director de Obra (Feb 2023 – Oct 2023)  
                  Dirección integral del proyecto de vivienda campestre, asegurando ejecución técnica y uso eficiente de recursos.
                </li>
                <li>
                  <strong>Constructora URCO SAS</strong> – Director de Obra (2017 – 2022)  
                  Liderazgo en obras residenciales (Lauret y Hojarasca), gestionando procesos desde inicio hasta entrega.
                </li>
                <li>
                  <strong>Conhogar SAS</strong> – Residente de Obra (Ene – Abr 2017)  
                  Supervisión técnica en obra, asegurando cumplimiento diario en calidad y acabados.
                </li>
                <li>
                  <strong>Viviendas del Norte SAS – Portón del Norte</strong> – Director de Obra (May 2016 – Ene 2017)  
                  Ejecución y entrega de proyecto multifamiliar bajo estándares técnicos y tiempos de obra.
                </li>
                <li>
                  <strong>Reserva del Rodeo SAS – Remanso del Rodeo</strong> – Residente de Obra (Ago 2015 – May 2016)  
                  Control técnico en procesos estructurales y acabados en obra residencial.
                </li>
                <li>
                  <strong>Inciviles S.A.</strong> – Director de Obra (Ene – Jul 2015)  
                  Dirección del proyecto de estabilización de tubería de acueducto de 42” para EPM.
                </li>
                <li>
                  <strong>GR Construcción S.A.S.</strong> – Representante Legal (Oct 2012 – Dic 2014)  
                  Gestión técnica y administrativa de proyectos bajo firma propia.
                </li>
                <li><strong>Fajardo Williamson S.A.</strong> – Varios cargos (Sep 2003 – Oct 2012)  
                  <ul className="list-disc pl-5">
                    <li><strong>Residente de Acabados</strong> – Edificio Pie del Bosque (Sep 2003 – Mar 2005)</li>
                    <li><strong>Residente de Obra</strong> – Edificio Cabo San Lucas (Abr 2005 – Oct 2005)</li>
                    <li><strong>Residente de Obra</strong> – Edificio Torre Ferrara – Escuela Las Playas (Oct 2005 – Dic 2006)</li>
                    <li><strong>Director de Obra</strong> – Centro Comercial Cauca Centro, Caucasia (Ene 2007 – Abr 2008)</li>
                    <li><strong>Director de Obra</strong> – Hacienda Santa Marta, Montelíbano (Jun 2007 – Dic 2007)</li>
                    <li><strong>Director de Obra</strong> – Edificio Bodegas Box (Abr 2008 – Jun 2008)</li>
                    <li><strong>Director de Obra</strong> – Parcelación Bosques de Sajonia, Rionegro (Jul 2010 – Ago 2011)</li>
                    <li><strong>Director de Obra</strong> – Edificio Massai Apartamentos (Jul 2008 – Oct 2012)</li>
                  </ul>
                  Gestión progresiva en cargos técnicos y directivos, liderando múltiples obras residenciales y comerciales con alto compromiso técnico y organizativo.
                </li>
                <li>
                  <strong>CON&PRO Construcciones y Proyectos</strong> – Director Estratificación (Ene 2002 – Ene 2003)  
                  Gestión técnica del proyecto de estratificación urbana en Medellín.
                </li>
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


