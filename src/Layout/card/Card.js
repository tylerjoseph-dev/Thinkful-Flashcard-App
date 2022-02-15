import React from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import { deleteCard } from "../../utils/api";

export default function Card({ card, id }) {
  // grabs the current url in the browser
  const { url } = useRouteMatch();
  // obtains access to browser history controls
  const history = useHistory();
  
  // handles the deletion of card then refreshes the page if elected to delete
  const handleDelete = (id) => {
    const result = window.confirm("Are you sure you want to delete this card?");
    if (result) {
      deleteCard(id).then(history.go(0));
    }
  };

  // HTML return that displays information relevant to the current card.
  return (
    <li key={card.id}>
      <div className="card" style={{ width: "500px" }}>
        <div className="card-body container">
          <div className="row">
            <div className="col">
              <p className="card-text">{card.front}</p>
            </div>
            <div className="col">
              <p className="card-text">{card.back}</p>
              <Link to={`${url}/cards/${id}/edit`}>
                <button className="btn btn-secondary">Edit</button>
              </Link>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
