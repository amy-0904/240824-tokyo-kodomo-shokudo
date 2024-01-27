const map = L.map('map').setView([35.85695, 139.64912], 10);  // 東京を中心に設定
map.locate({ setView: true, maxZoom: 13 });


const createIcon = (iconName, color) => {
    return L.icon({
        className: 'custom-icon',
        iconUrl: "img/" + iconName + ".png",
        shadowUrl: "img/shadow.png",
        iconSize: [35, 40],  // これはアイコンの大きさに応じて調整する必要があるかもしれません
        iconAnchor: [20, 20],  // こちらもアイコンの大きさに応じて中心点を調整
        popupAnchor: [0, -10]
    });
}

const icons = {
    morning: createIcon('morning', 'orange'),
    afternoon: createIcon('afternoon', 'blue'),
    evening: createIcon('evening', 'black')
};


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
}).addTo(map);

// データをcsvから読む
let data;
const csvFileName = "kodomo-shokudo.csv"
Papa.parse(csvFileName, {
    download: true,
    dynamicTyping: true,

    header: true,
    complete: function (results) {
        data = results.data;
        // console.log(data);
        filterData();

    }
});

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

    const markers = L.markerClusterGroup();

    data.forEach((entry) => {
        // 以下の要素がない行はスキップ
        if (!entry["開催曜日"] || !entry["開催開始時間"] || !entry["開催終了時間"] || !entry["経度"] || !entry["緯度"]) return;

        let dayMatches = selectedDays.some(day => entry["開催曜日"].includes(day));
        let timeMatches = false;

        const entryStartHour = parseInt(entry["開催開始時間"].split(":")[0]);
        const entryEndHour = parseInt(entry["開催終了時間"].split(":")[0]);

        if (selectedTimes.includes("朝") && entryStartHour < 12) timeMatches = true;
        if (selectedTimes.includes("昼") && entryStartHour >= 12 && entryStartHour < 18) timeMatches = true;
        if (selectedTimes.includes("夜") && entryStartHour >= 18) timeMatches = true;

        if (dayMatches && timeMatches) {

            let icon;
            if (entryStartHour < 12) {
                icon = icons.morning;
            } else if (entryStartHour >= 12 && entryStartHour < 18) {
                icon = icons.afternoon;
            } else {
                icon = icons.evening;
            }
            const marker = L.marker([entry["緯度"], entry["経度"]], { icon: icon });

            marker.on('click', function () {
                const sidebarContent = document.getElementById('sidebar-content');
                sidebarContent.innerHTML =
                    `
                    <div class="info">
                    <b>${entry["名称"]}</b><br>
                        ${entry["住所"]}<br>
                        ${entry["開催曜日"]} ${entry["開催開始時間"]}-${entry["開催終了時間"]}
                        ${entry["開催日時特記事項"] ? "(" + entry["開催日時特記事項"] + ")" : ""}<br>
                        ${entry["実施支援の主な区分"] ? "実施支援：" + entry["実施支援の主な区分"] : ""}<br>
                    <b>参加費</b> 
                    <table>
                        <tr>
                            <th>幼児</th>
                            <th>小学生</th>
                            <th>中学生</th>
                            <th>高校生</th>
                            <th>大人</th>
                        </tr>
                        <tr>
                            <td>${entry["参加費_幼児"] ? entry["参加費_幼児"] + "円" : "--"}</td>
                            <td>${entry["参加費_小学生"] ? entry["参加費_小学生"] + "円" : "--"}</td>
                            <td>${entry["参加費_中学生"] ? entry["参加費_中学生"] + "円" : "--"}</td>
                            <td>${entry["参加費_高校生"] ? entry["参加費_高校生"] + "円" : "--"}</td>
                            <td>${entry["参加費_大人"] ? entry["参加費_大人"] + "円" : "--"}</td>
                        </tr>
                    </table>
                    ${entry["参加費特記事項"] ? entry["参加費特記事項"] : ""}
                    </div>`;
            });
            markers.addLayer(marker);
        }

    });
    map.addLayer(markers);
}
