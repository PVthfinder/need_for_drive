import React, {useState, useEffect, useRef} from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

import mark from "../../assets/images/map_point.svg";

function LocationMap({town, point, points}) {
    const [zoom, setZoom] = useState(3)
    const [centerCoord, setCenterCoord] = useState([64.010196, 98.911043]);
    const [pointsCoord, setPointsCoord] = useState([]);

    const maps = useRef();

    useEffect(() => {
        if (maps.current) {
            if (!point) {
                maps.current.geocode(town)
                .then(result => setCenterCoord(
                    result.geoObjects.get(0).geometry.getCoordinates()
                ));
                setZoom(11);
            } else {
                maps.current.geocode(`${town} ${point}`)
                .then(result => setCenterCoord(
                    result.geoObjects.get(0).geometry.getCoordinates()
                ));
                setZoom(15);
            }
        }
        //eslint-disable-next-line
    }, [town, point]);

    useEffect(() => {
        if(points) {      
            const newPointsArr = [];
            points.map(item => (
                maps.current.geocode(`${town} ${item}`)
                    .then(result => newPointsArr.push(
                        result.geoObjects.get(0).geometry.getCoordinates()
                    ))
            ));

            setPointsCoord(newPointsArr);
        }
        //eslint-disable-next-line
    }, [points]);

    const mapState = {
        center: centerCoord,
        zoom: zoom,
      };

    return (
        <div className="map">
            <YMaps
                query={{
                    ns: "use-load-option",
                    apikey: "8c90fd8a-c183-4c74-8251-ef9e96797de6"
                }}>
                <p className="map__heading">Выбрать на карте</p>
                <Map 
                    instanceRef={maps}
                    state={mapState}
                    height="100%"
                    width="100%"
                    modules={[
                        "geocode", 
                        "templateLayoutFactory", 
                        "layout.ImageWithContent"
                    ]}
                    onLoad={(ymaps) => maps.current = ymaps}
                >
                    {pointsCoord.map(
                        point => 
                            <Placemark 
                                key={point} 
                                geometry={point} 
                                modules={[
                                    "geoObject.addon.hint"
                                ]}
                                options={{
                                    iconLayout: "default#imageWithContent",
                                    iconImageHref: mark,
                                    iconImageSize: [18, 18]
                                }}
                            />
                    )}
                </Map>
            </YMaps>
        </div>
    )
}

export default LocationMap;