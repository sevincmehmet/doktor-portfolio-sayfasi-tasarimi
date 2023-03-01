
import { useEffect, useState } from "react";

const GoogleMaps = ({ dealer }) => {
  const [dealerCoordinates, setDealerCoordinates] = useState({});
  const [mapUrl, setMapUrl] = useState("");
  useEffect(() => {
    if (dealer && Object.keys(dealer).length > 0) {
      if (dealer.coordinateX && dealer.coordinateY) {
        setDealerCoordinates({
          X: dealer.coordinateX,
          Y: dealer.coordinateY,
        });

        setDealerCoordinates({
          X: "39.736700829199485", // X Koordinatı
          Y: "37.0328508", // Y Koordinatı
        });
      }
    } else {
      setDealerCoordinates({
        X: "39.736700829199485", // X Koordinatı
        Y: "37.0328508", // Y Koordinatı
      });
    }
  }, [JSON.stringify(dealer)]);

  useEffect(() => {
    setMapUrl(
      `https://www.google.com/maps/embed/v1/place?key=AIzaSyCc3zoz5TZaG3w2oF7IeR-fhxNXi8uywNk&q=${dealerCoordinates.X},${dealerCoordinates.Y}`
    );
  }, [dealerCoordinates]);
  return (
    <iframe

      src={mapUrl}
      width="100%"
      height="100%"
      allowFullScreen
      loading="lazy"
    />
  );
};

export default GoogleMaps;
