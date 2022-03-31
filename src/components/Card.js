import React from "react";

const Card = (props) => {
  console.log(props);
  return (
    <div className="card">
      <img
        src={props.imageUrl}
        alt="tourist location"
        className="card--image"
      />
      <div className="card--content">
        <div className="card--location">
          <img
            src="/images/location.png"
            alt="map location"
            className="map-image"
          />
          <span className="card--country">{props.location}</span>
          <a
            href={props.googleMapsUrl}
            className="card--map-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="grey-text">View on Google Maps</span>
          </a>
        </div>
        <h1 className="card--name">{props.title}</h1>
        <p className="bold-text">
          {props.startDate} - {props.endDate}
        </p>
        <p className="card--details">{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
