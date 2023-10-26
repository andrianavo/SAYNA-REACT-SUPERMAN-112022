import { React, useState } from "react";
import ProductList from "../data/ProductList";
import "../styles/product.scss";

function Products() {
  const [data, setData] = useState(ProductList);
  return (
    <>
      {data.map((response) => {
        return (
          <>
            <div className="row">
              <div className="categorie col-md-4">
                <div className="articleCard" key={response.id}>
                  <div>
                    <img src={response.imageUrl} alt="article" />
                    <p>{response.nom}</p>
                    <p>{response.prix} $</p>
                  </div>
                  <bouton className="btn btn-primary">Ajouter au Panier</bouton>
                </div>
              </div>
              <div className="categorie col-md-4">
                <div className="articleCard" key={response.id}>
                  <div>
                    <img src={response.imageUrl} alt="article" />
                    <p>{response.nom}</p>
                    <p>{response.prix} $</p>
                  </div>
                  <bouton className="btn btn-primary">Ajouter au Panier</bouton>
                </div>
              </div>
              <div className="categorie col-md-4">
                <div className="articleCard" key={response.id}>
                  <div>
                    <img src={response.imageUrl} alt="article" />
                    <p>{response.nom}</p>
                    <p>{response.prix} $</p>
                  </div>
                  <bouton className="btn btn-primary">Ajouter au Panier</bouton>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Products;
