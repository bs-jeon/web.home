import React from 'react'
import {Marker, NaverMap, RenderAfterNavermapsLoaded} from 'react-naver-maps'

function NaverMapMarkers(props) {
  const navermaps = window.naver.maps;
  const data = props.stationInfo;

  if (data !== undefined) {
    const station_list = data.map( (station) =>
      (<div><Marker
        key={1*station.uninqueID}
        title={station.uninqueID}
        position={new navermaps.LatLng(1*station.loc_lat, 1*station.loc_lon)}
        animation={0}
        onClick={() => {alert('여기는 N서울타워입니다.');}}
      /></div>));

      return (
        <div>{station_list}</div>
      // <div><Marker
      //   key={1*station.uninqueID}
      //   title={station.uninqueID}
      //   position={new navermaps.LatLng(1*station.loc_lat, 1*station.loc_lon)}
      //   animation={0}
      //   onClick={() => {alert('여기는 N서울타워입니다.');}}
      // /></div>);
      );
  } else {
    return (<div></div>);
  }
}

function NaverMapView(props) {
    const navermaps = window.naver.maps;
    console.log("NaverMapView"+JSON.stringify(props.stationInfo));
    return (
        <NaverMap
            mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
            style={{
                width: '100%', // 네이버지도 가로 길이
                height: '85vh' // 네이버지도 세로 길이
            }}
            defaultCenter={{ lat: 37.554722, lng: 126.970833 }} // 지도 초기 위치
            defaultZoom={13} // 지도 초기 확대 배율
        >
            < NaverMapMarkers stationInfo = {props.stationInfo}/>
        </NaverMap>
  );
}

function MapLoader(props) {
    const envNcpClientId = process.env.REACT_APP_NAVER_API_KEY;

    return (
        <RenderAfterNavermapsLoaded
          ncpClientId={envNcpClientId}// 자신의 네이버 계정에서 발급받은 Client ID
          error={<p>Maps Load Error</p>}
          loading={<p>Maps Loading...</p>}
        >
          <NaverMapView 
          stationInfo = {props.stationInfo}/>
        </RenderAfterNavermapsLoaded>
      );
}

export default MapLoader;