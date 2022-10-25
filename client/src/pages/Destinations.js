import React from 'react'
import Destination from "./Destination";

function Destinations({ destinations }) {
  const destination_components = destinations.map(destination => <Destination key={destination.id} destination={destination} />);

  return (
    <div>
      {destination_components}
    </div>
  )
}

export default Destinations