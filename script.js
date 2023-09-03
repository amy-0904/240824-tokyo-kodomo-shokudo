
const map = L.map('map').setView([35.85695,139.64912], 10);  // 東京を中心に設定
map.locate({setView: true, maxZoom: 13});


const createIcon = (iconClass, color) => {
  return L.divIcon({
      className: 'custom-icon',
      html: `<i class="fas ${iconClass}" style="color:${color};"></i>`,
      iconSize: [20, 20],  // これはアイコンの大きさに応じて調整する必要があるかもしれません
      iconAnchor: [10, 10],  // こちらもアイコンの大きさに応じて中心点を調整
      popupAnchor: [0, -10]
  });
}

const icons = {
  morning: createIcon('fa-sun', 'orange'),
  afternoon: createIcon('fa-cloud-sun', 'blue'),
  evening: createIcon('fa-moon', 'black')
};


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
}).addTo(map);



function filterData() {
    const selectedDays = [];
    const selectedTimes = [];

    document.querySelectorAll('input[type="checkbox"]:checked').forEach((checkbox) => {
        if (['日', '月', '火', '水', '木', '金', '土'].includes(checkbox.value)) {
            selectedDays.push(checkbox.value);
        } else {
            selectedTimes.push(checkbox.value);
        }
    });

    // マーカーを一旦削除
    map.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
            map.removeLayer(layer);
        }
    });


  
    data.forEach((entry) => {
        let dayMatches = selectedDays.some(day => entry.days.includes(day));
        let timeMatches = false;

        const entryStartHour = parseInt(entry.startTime.split(":")[0]);
        const entryEndHour = parseInt(entry.endTime.split(":")[0]);

        if (selectedTimes.includes("朝") && entryStartHour < 12) timeMatches = true;
        if (selectedTimes.includes("昼") && entryStartHour >= 12 && entryEndHour < 16) timeMatches = true;
        if (selectedTimes.includes("夜") && entryStartHour >= 16) timeMatches = true;

        if (dayMatches && timeMatches) {

          let icon;
          if (entryStartHour < 12) {
              icon = icons.morning;
          } else if (entryStartHour >= 12 && entryEndHour < 18) {
              icon = icons.afternoon;
          } else {
              icon = icons.evening;
          }

          const marker = L.marker([entry.lat, entry.lon], { icon: icon }).addTo(map);

          marker.on('click', function() {
              const sidebarContent = document.getElementById('sidebar-content');
              sidebarContent.innerHTML = `
              <b>${entry.name}</b><br>
              ${entry.city}　${entry.address}<br>
              ${entry.days} ${entry.startTime}-${entry.endTime}

              `;
          });        }
    });
}

// 初期表示
filterData();
