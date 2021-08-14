import React, {useState, useEffect, useRef} from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

import mark from "../../assets/images/map_point.svg";

function LocationMap({town, choosenPoint, points}) {
    const defaultTownCoord = [54.314192, 48.403132];
    const defaultZoom = 11;
    const ymapsQuery = {
        ns: "use-load-option",
        apikey: "8c90fd8a-c183-4c74-8251-ef9e96797de6"
    };

    const [zoom, setZoom] = useState(defaultZoom)
    const [centerCoord, setCenterCoord] = useState(defaultTownCoord);
    const [pointsCoord, setPointsCoord] = useState([]);

    const maps = useRef();

    useEffect(() => {
        if (maps.current) {
            if (!town) {
                setCenterCoord(defaultTownCoord);
                setZoom(defaultZoom);
            } else {
                maps.current.geocode(town)
                .then(result => setCenterCoord(
                    result.geoObjects.get(0).geometry.getCoordinates()
                ));
                setZoom(defaultZoom);
            }
        }
        //eslint-disable-next-line
    }, [town]);

    useEffect(() => {
        const newPointsArr = [];
            points.map(item => (
                maps.current.geocode(`${town} ${item.address}`)
                    .then(result => newPointsArr.push(
                        result.geoObjects.get(0).geometry.getCoordinates()
                    ))
            ));    
        setPointsCoord(newPointsArr);
        //eslint-disable-next-line
    }, [points]);

    useEffect(() => {
        if (town) {
            if(choosenPoint) {      
                maps.current.geocode(`${town} ${choosenPoint}`)
                    .then(result => setCenterCoord(
                        result.geoObjects.get(0).geometry.getCoordinates()
                    ));
                setZoom(15);
            } else {
                maps.current.geocode(town)
                .then(result => setCenterCoord(
                    result.geoObjects.get(0).geometry.getCoordinates()
                ));
                setZoom(defaultZoom);
            }
        }
        //eslint-disable-next-line
    }, [choosenPoint]);

    const mapState = {
        center: centerCoord,
        zoom: zoom,
      };

    return (
        <div className="map">
            <YMaps
                query={ymapsQuery}>
                <p className="map__heading">Выбрать на карте</p>
                <Map 
                    instanceRef={maps}
                    state={mapState}
                    height="100%"
                    width="100%"
                    modules={[
                        "geocode", 
                        "templateLayoutFactory", 
                        "layout.ImageWithContent", 
                        "geolocation"
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
