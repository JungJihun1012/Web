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

var mapTypeControl = new kakao.maps.MapTypeControl();

// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);


let list = ['sacun', 'jungsan', 'junob', 'chunggu', 'seguan'];
let marker = {
    'sacun': {
        title: '[경상남도 사천시] 사천비토솔섬오토캠핑장',
        lating: new kakao.maps.LatLng(34.987395, 127.966222)
    },
    'jungsan' : {
        title: '[강원도 정선군] 동강전망휴양림오토캠핑장',
        lating: new kakao.maps.LatLng(37.260831,128.608007)
    }
};
for(var i=0; i<list.length; i++){
    var info = markers[list[i]];;
    var imageSize = new kakao.maps.Size(24, 35); 
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
       
     // 마커를 생성합니다
     var marker = new kakao.maps.Marker({
         map: map, // 마커를 표시할 지도
         position: info.latlng, // 마커를 표시할 위치
         title : info.title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
         image : markerImage // 마커 이미지 
       }); 
}
       
// 위치 이동
function move(key){
   var position = markers[key].latlng;
   map.setCenter(position);
}