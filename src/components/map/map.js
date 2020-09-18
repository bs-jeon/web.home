import React from 'react'
import {Marker, NaverMap, RenderAfterNavermapsLoaded} from 'react-naver-maps'

function NaverMapView() {
    const navermaps = window.naver.maps;
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
            <Marker
                key={1}
                title={'서울타워?'}
                position={new navermaps.LatLng(37.554722, 126.970833)}
                animation={0}
                onClick={() => {alert('여기는 N서울타워입니다.');}}
            />
        </NaverMap>
  );
}

function MapLoader(pcpStationInfo) {
    const envNcpClientId = process.env.REACT_APP_NAVER_API_KEY;

    // if (pcpStationInfo != null) {
    //   let json_pcpStationInfo = JSON.stringify(pcpStationInfo); 
    //   for (let i = 0; i < json_pcpStationInfo.length; i++) {
    //     console.log(json_pcpStationInfo[i]);
    //   }
    // }

    return (
        <RenderAfterNavermapsLoaded
          ncpClientId={envNcpClientId}// 자신의 네이버 계정에서 발급받은 Client ID
          error={<p>Maps Load Error</p>}
          loading={<p>Maps Loading...</p>}
        >
          <NaverMapView 
          pcpStationInfo = {pcpStationInfo}/>
        </RenderAfterNavermapsLoaded>
      );
}

export default MapLoader;