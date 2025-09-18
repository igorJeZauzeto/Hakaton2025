import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DrugSearch from "../components/DrugSearch";
import { getDrugById } from "../services/drugService";
import { translateMessage } from "../services/openAI";



function formatText(input) {
  return input
    .replace(/\u00AE/g, '')   
    .replace(/\s+/g, '-')    
    .toLowerCase();          
}

const LijekDetalji = () => {
  const { id } = useParams();
  const [lijek, setLijek] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [srbINN, setSrbINN] = useState(null);

   const [imgIndex, setImgIndex] = useState(0);
  const extensions = ['png', 'jpg', 'webp']; // moguće ekstenzije


  useEffect(() => {
    const fetchLijek = async () => {
      try {
        const foundLijek = await getDrugById(id);
        if (foundLijek) {
          setSrbINN(await translateMessage(foundLijek.INN));
          setLijek(foundLijek);
        } else {
          setError("Lijek nije pronađen.");
        }
      } catch (err) {
        setError("Došlo je do greške prilikom dohvatanja podataka.");
      } finally {
        setLoading(false);
      }
    };
    fetchLijek();
  }, [id]); // Pokreni efekat svaki put kada se ID u URL-u promijeni

  if (loading) {
    return <div className="container mt-5">Učitavam detalje...</div>;
  }

  if (error) {
    return <div className="container mt-5">{error}</div>;
  }
  
  // Ostatak koda se prikazuje samo ako je lijek uspješno pronađen
  const searchTerm = lijek.INN.split(',')[0].trim();


  const imgSrc = imgIndex < extensions.length
    ? `/drug-imgs/${formatText(lijek.name)}.${extensions[imgIndex]}`
    : `/emergency-3.webp`;

const handleImgError = () => {
  if (imgIndex < extensions.length - 1) {
    console.log(`/drug-imgs/${formatText(lijek.name)}.${extensions[imgIndex]}`);
    setImgIndex(imgIndex + 1);
  } else {
    setImgIndex(extensions.length); // prelazak van opsega da prikaže default
  }
};




  return (
    <section id="featured-departments" className="featured-departments section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>{lijek.name}</h2>
      </div>
      {/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="departments-showcase">
          <div
            className="featured-department"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="row">
              <div className="col-lg-6 order-lg-1">
                <div className="department-content">
                  <p><strong>Aktivne supstance lijeka:</strong> {srbINN}</p>
                  <p><strong>Farmaceutski oblik:</strong> {lijek.description}</p>
                  <p><strong>Režim izdavanja:</strong> {lijek.available}</p>
                  <p><strong>Maksimalna cijena: </strong>{lijek.maxPrice ? `${lijek.maxPrice} €` : 'Nije dostupna'}</p>
                  <DrugSearch defaultTerm={searchTerm}></DrugSearch>
                </div>
              </div>
              <div className="col-lg-6 order-lg-2">
                <div className="department-visual">
                  <div className="image-wrapper">
                    

       <img
                      src={imgSrc}
                      alt={lijek.name}
                      onError={handleImgError}
                      style={{ maxWidth: '100%' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LijekDetalji;