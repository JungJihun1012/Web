var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
mapOption = {
    center: new kakao.maps.LatLng(34.987395, 127.966222), // 지도의 중심좌표
    level: 5, // 지도의 확대 레벨
    mapTypeId : kakao.maps.MapTypeId.ROADMAP // 지도종류
};

var map = new kakao.maps.Map(mapContainer, mapOption); 

// 지도에 마커를 생성하고 표시한다
var marker = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(34.987395, 127.966222), // 마커의 좌표
    map: map // 마커를 표시할 지도 객체
});
var marker2 = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.260831,128.608007),
    map: map
});
var marker3 = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(35.526101, 126.894482),
    map: map
});
var marker4 = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(36.975758, 128.020681),
    map: map
});
var marker5 = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.569737, 126.656825),
    map: map
});
var customOverlay = new kakao.maps.CustomOverlay({
    map: map,
    content: `
        <div style="padding:0 5px;background:#fff; text-align: center; font-weight: bold; border-top-left-radius: 6px; border-top-right-radius: 6px;">사천비토솔섬오토캠핑장</div>
        <div style="padding:0 5px; background-color: #fff;">경남 사천시 서포면 토끼로 245-29</div>
        <div style="padding: 0 5px; background-color: #fff; text-align: center; border-bottom-left-radius: 6px; border-bottom-right-radius:6px;">연락처 055-854-0404</div>
    `,
    position: new kakao.maps.LatLng(34.987395, 127.966222), // 커스텀 오버레이를 표시할 좌표
        xAnchor: 0.5, // 컨텐츠의 x 위치
        yAnchor: 1.5// 컨텐츠의 y 위치
});

var customOverlay2 = new kakao.maps.CustomOverlay({
    map: map,
    content: `
        <div style="padding: 0 5px;background-color:#fff;text-align:center;font-weight:bold;border-top-left-radius:6px;border-top-right-radius:6px;">동강전망휴양림오토캠핑장</div> 
        <div style="padding:0 5px; background-color: #fff;">강원 정선군 신동읍 동강로 916-212</div>
        <div style="padding: 0 5px; background-color: #fff; text-align: center; border-bottom-left-radius: 6px; border-bottom-right-radius:6px;">연락처 033-560-3464</div>
    `,
    position: new kakao.maps.LatLng(37.260831,128.608007),
        xAnchor: 0.5,
        yAnchor: 1.5
});

var customOverlay3 = new kakao.maps.CustomOverlay({
    map: map,
    content: `
        <div style="padding: 0 5px;background-color:#fff;text-align:center;font-weight:bold;border-top-left-radius:6px;border-top-right-radius:6px;">정읍시 내장산 국민여가캠핑장</div> 
        <div style="padding:0 5px; background-color: #fff;">전라북도 정읍시 내장산로 390</div>
        <div style="padding: 0 5px; background-color: #fff; text-align: center; border-bottom-left-radius: 6px; border-bottom-right-radius:6px;">연락처 063-538-7955</div>
    `,
    position: new kakao.maps.LatLng(35.526101, 126.894482),
        xAnchor: 0.5,
        yAnchor: 1.5
});

var customOverlay4 = new kakao.maps.CustomOverlay({
    map: map,
    content: `
        <div style="padding: 0 5px;background-color:#fff;text-align:center;font-weight:bold;border-top-left-radius:6px;border-top-right-radius:6px;">충주카누캠핑장</div> 
        <div style="padding:0 5px; background-color: #fff;">충북 충주시 동량면 지등로 1276-4</div>
        <div style="padding: 0 5px; background-color: #fff; text-align: center; border-bottom-left-radius: 6px; border-bottom-right-radius:6px;">연락처 010-4479-5587</div>
    `,
    position: new kakao.maps.LatLng(36.975758, 128.020681),
        xAnchor: 0.5,
        yAnchor: 1.5
});
var customOverlay5 = new kakao.maps.CustomOverlay({
    map: map,
    content: `
        <div style="padding: 0 5px;background-color:#fff;text-align:center;font-weight:bold;border-top-left-radius:6px;border-top-right-radius:6px;">수도권매립지 캠핑장</div> 
        <div style="padding:0 5px; background-color: #fff;">인천 서구 정서진로 500 (오류동)</div>
        <div style="padding: 0 5px; background-color: #fff; text-align: center; border-bottom-left-radius: 6px; border-bottom-right-radius:6px;">연락처 032-569-7847</div>
    `,
    position: new kakao.maps.LatLng(37.569737, 126.656825),
        xAnchor: 0.5,
        yAnchor: 1.5
});

var mapTypeControl = new kakao.maps.MapTypeControl();

// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
