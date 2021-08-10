import React, {useContext, useEffect, useRef} from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

import { AppContext } from '../../context';

import mark from "../../assets/images/map_point.svg";

function LocationMap({points}) {
    const {
        order,
        mapZoom,
        setMapZoom,
        mapCenterCoord,
        setMapCenter,
        mapPointsCoord,
        setMapPointsCoord
    } = useContext(AppContext);

    const maps = useRef();

    useEffect(() => {
        if (maps.current) {
            if (!order.point) {
                maps.current.geocode(order.town)
                .then(result => setMapCenter(
                    result.geoObjects.get(0).geometry.getCoordinates()
                ));
                setMapZoom(11);
            } else {
                maps.current.geocode(`${order.town} ${order.point}`)
                .then(result => setMapCenter(
                    result.geoObjects.get(0).geometry.getCoordinates()
                ));
                setMapZoom(15);
            }
        }
        //eslint-disable-next-line
    }, [order.town, order.point]);

    useEffect(() => {
        if(points && points.length) {      
            const newPointsArr = [];
            points.map(item => (
                maps.current.geocode(`${order.town} ${item}`)
                    .then(result => newPointsArr.push(
                        result.geoObjects.get(0).geometry.getCoordinates()
                    ))
            ));

            setMapPointsCoord(newPointsArr);
        }
        //eslint-disable-next-line
    }, [points]);

    const mapState = {
        center: mapCenterCoord,
        zoom: mapZoom,
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
                    {mapPointsCoord.map(
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