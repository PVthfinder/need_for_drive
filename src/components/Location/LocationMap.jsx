import React, {useContext, useEffect, useRef} from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

import { AppContext } from '../../context';

import mark from "../../assets/images/map_point.svg";

function LocationMap() {
    const {
        choosenTown,
        choosenPoint,
        mapZoom,
        mapCenterCoord,
        setMapCenter,
        points,
        mapPointsCoord,
        setMapPointsCoord
    } = useContext(AppContext);

    const maps = useRef();

    const ymapsQuery = {
        ns: "use-load-option",
        apikey: "8c90fd8a-c183-4c74-8251-ef9e96797de6"
    };

    useEffect(() => {
        if (maps.current) {
            if (!choosenTown) {
                setMapCenter();
            } else {
                maps.current.geocode(choosenTown.name)
                .then(result => setMapCenter(
                    result.geoObjects.get(0).geometry.getCoordinates()
                ));
            }
        }
        //eslint-disable-next-line
    }, [choosenTown]);

    useEffect(() => {
        const newPointsArr = [];
        points.map(item => 
            maps.current.geocode(`${item.cityId.name} ${item.address}`)
                .then(result => newPointsArr.push(
                    result.geoObjects.get(0).geometry.getCoordinates()
                ))
        );    
        setMapPointsCoord(newPointsArr);
        //eslint-disable-next-line
    }, [points]);

    useEffect(() => {
        if (choosenTown) {
            if(choosenPoint) {      
                maps.current.geocode(`${choosenPoint.cityId.name} ${choosenPoint.address}`)
                    .then(result => setMapCenter(
                        result.geoObjects.get(0).geometry.getCoordinates(), 15
                    ));
            } else {
                maps.current.geocode(choosenTown.name)
                    .then(result => setMapCenter(
                        result.geoObjects.get(0).geometry.getCoordinates()
                    ));
            }
        }
        //eslint-disable-next-line
    }, [choosenPoint]);

    const mapState = {
        center: mapCenterCoord,
        zoom: mapZoom,
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
                        "layout.ImageWithContent"
                    ]}
                    onLoad={(ymaps) => maps.current = ymaps}
                >
                    {mapPointsCoord && mapPointsCoord.map(
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