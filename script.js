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
    evening: createIcon('evening', 'black'),
    child: L.icon({
        className: 'custom-icon',
        iconUrl: "img/Pin.png",
        shadowUrl: "img/shadow.png",
        iconSize: [50, 60],  // これはアイコンの大きさに応じて調整する必要があるかもしれません
        iconAnchor: [25, 30],  // こちらもアイコンの大きさに応じて中心点を調整
        popupAnchor: [0, -10]
    }),

};


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
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
        if (!entry["経度"] || !entry["緯度"]) return;


        let icon;
        icon = icons.child;
        const marker = L.marker([entry["緯度"], entry["経度"]], { icon: icon });

        marker.on('click', function () {
            const sidebarContent = document.getElementById('sidebar-content');
            sidebarContent.innerHTML =
                `
                    <div class="info">
                    <h4>${entry["名称"]}（${entry["名称_カナ"]}）</h4>
                        <div>${entry["画像"] ? "<img src='" + entry["画像"] + "'>" : ""}</div>

                        <p>住所：${entry["住所"] ? entry["住所"] : "記載なし"}　${entry["方書"] ? entry["方書"] : ""}</p>
                        <p>URL：${entry["URL"] ? entry["URL"] : "記載なし"}</p>
                        <p>運営団体名：${entry["運営団体名"] ? entry["運営団体名"] : "記載なし"}</p>
                        <p>開催頻度：${entry["開催頻度"] ? entry["開催頻度"] : "記載なし"}</p>
                        
                        <p>開催曜日：${entry["開催曜日"] ? entry["開催曜日"] : "記載なし"}</p>
                        <p>開催時間：${entry["開催開始時間"] ? entry["開催開始時間"] : ""}〜${entry["開催終了時間"] ? entry["開催終了時間"] : ""}</p>
                        <p>${entry["開催日時特記事項"] ? "(" + entry["開催日時特記事項"] + ")" : "記載なし"}</p>
                        <p>実施支援の主な区分：${entry["実施支援の主な区分"] ? entry["実施支援の主な区分"] : "記載なし"}</p>

                        <p>予約方法：${entry["予約方法"] ? entry["予約方法"] : "記載なし"}</p>
                        <p>予約特記事項：${entry["予約特記事項"] ? entry["予約特記事項"] : "記載なし"}</p>
                        <p>定員：${entry["定員"] ? entry["定員"] : "記載なし"}</p>
                        <p>フードパントリー実施：${entry["フードパントリー実施"] ? entry["フードパントリー実施"] : "記載なし"}</p>  
                        <p>テイクアウト実施：${entry["テイクアウト実施"] ? entry["テイクアウト実施"] : "記載なし"}</p>
                        <p>学区：${entry["学区"] ? entry["学区"] : "記載なし"}</p>
                        <p>ネットワークの加入：${entry["ネットワークの加入"] ? entry["ネットワークの加入"] : "記載なし"}</p>
                        <p>参加条件：${entry["参加条件"] ? entry["参加条件"] : "記載なし"}</p>

                    <h4>参加費</h4> 
                        <table>
                            <tr>
                                <th>幼児</th><th>小学生</th><th>中学生</th><th>高校生</th><th>大人</th>
                            </tr>
                            <tr>
                                <td>${entry["参加費_幼児"] ? entry["参加費_幼児"] + "円" : "--"}</td>
                                <td>${entry["参加費_小学生"] ? entry["参加費_小学生"] + "円" : "--"}</td>
                                <td>${entry["参加費_中学生"] ? entry["参加費_中学生"] + "円" : "--"}</td>
                                <td>${entry["参加費_高校生"] ? entry["参加費_高校生"] + "円" : "--"}</td>
                                <td>${entry["参加費_大人"] ? entry["参加費_大人"] + "円" : "--"}</td>
                            </tr>
                        </table>
                    <small>${entry["参加費特記事項"] ? "※" + entry["参加費特記事項"] : ""}</small>
                    </div>`;
        });
        markers.addLayer(marker);

    });
    map.addLayer(markers);
}
