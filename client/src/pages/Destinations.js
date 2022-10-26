import React from 'react'
import Destination from "../components/DestinationCard";

function Destinations({ destinations, singleDestination }) {
  const destination_components = destinations.map(destination => <Destination key={destination.id} destination={destination} singleDestination={singleDestination}/>);

  return (
    <div>
      {destination_components}
    </div>
  )
}

export default Destinations