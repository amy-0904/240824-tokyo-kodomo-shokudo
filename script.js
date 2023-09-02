const map = L.map('map').setView([35.85695,139.64912], 10);  // 東京を中心に設定

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
}).addTo(map);

// 仮のデータセット
const data = [
    {
      "city": "さいたま市",
      "name": "大宮こども部　「みんなでごはんを食べる会」",
      "address": "さいたま市大宮区吉敷町4丁目223-2",
      "lat": 35.898348,
      "lon": 139.635748,
      "days": "金",
      "startTime": "18:00",
      "endTime": "21:00"
    },
    {
      "city": "さいたま市",
      "name": "じおんじこども食堂",
      "address": "さいたま市岩槻区慈恩寺904-1",
      "lat": 35.9800607,
      "lon": 139.7142502,
      "days": "火",
      "startTime": "17:30",
      "endTime": "19:00"
    },
    {
      "city": "さいたま市",
      "name": "こもれびごはん",
      "address": "さいたま市桜区大字大久保領家131-6",
      "lat": 35.86956,
      "lon": 139.608344,
      "days": "土",
      "startTime": "10:00",
      "endTime": "14:00"
    },
    {
      "city": "さいたま市",
      "name": "ミサコランド多世代食堂（大宮浅間町食堂）",
      "address": "さいたま市浅間町1-116-8 MSKビル1階",
      "lat": 35.905431,
      "lon": 139.634121,
      "days": "土",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "さいたま市",
      "name": "子供食堂にじいろ広場",
      "address": "さいたま市北区日進町3丁目437（日進三丁目自治会館）",
      "lat": 35.9376542,
      "lon": 139.602529,
      "days": "水",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "さいたま市",
      "name": "見沼はるかぜキッチン",
      "address": "さいたま市見沼区宮ヶ谷塔765（さいたま市春おか広場）",
      "lat": 35.9433746,
      "lon": 139.6706867,
      "days": "土",
      "startTime": "17:00",
      "endTime": "19:00"
    },
    {
      "city": "さいたま市",
      "name": "子ども食堂NEO",
      "address": "さいたま市南区文蔵2-24-7（文蔵サロン内）",
      "lat": 35.841605,
      "lon": 139.667974,
      "days": "土",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "さいたま市",
      "name": "てらこや食堂",
      "address": "さいたま市大宮区北袋町1-285",
      "lat": 35.8919084,
      "lon": 139.6407857,
      "days": "水",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "さいたま市",
      "name": "さいたま子ども食堂",
      "address": "さいたま市緑区原山3-20-9",
      "lat": 35.8729156,
      "lon": 139.6772396,
      "days": "月水金",
      "startTime": "14:00",
      "endTime": "17:00"
    },
    {
      "city": "さいたま市",
      "name": "東岩槻子ども食堂",
      "address": "さいたま市岩槻区東岩槻2-5-26　アライビル1F生活クラブ生協くらぶルームリアン",
      "lat": 35.9661525,
      "lon": 139.7079269,
      "days": "木",
      "startTime": "17:30",
      "endTime": "19:00"
    },
    {
      "city": "さいたま市",
      "name": "土呂こども食堂",
      "address": "さいたま市北区土呂町2-12-20　コスモスクエア4階及び6階",
      "lat": 35.9322184,
      "lon": 139.6326569,
      "days": "土",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "さいたま市",
      "name": "まんま亭",
      "address": "さいたま市緑区中尾3233",
      "lat": 35.8674204,
      "lon": 139.6884054,
      "days": "月火水木金",
      "startTime": "16:00",
      "endTime": "19:00"
    },
    {
      "city": "さいたま市",
      "name": "わいわいランチ",
      "address": "さいたま市西区指扇1100-2　医療生協さいたま　おおみや診療所",
      "lat": 35.912086,
      "lon": 139.5787998,
      "days": "土",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "さいたま市",
      "name": "楽しく食育クラブ（多世代交流会食）",
      "address": "さいたま市西区三橋2-20-20三橋公民館",
      "lat": 35.903961,
      "lon": 139.605047,
      "days": "土",
      "startTime": "9:30",
      "endTime": "12:00"
    },
    {
      "city": "さいたま市",
      "name": "♪こどもカフェ♪みんなで食べて楽しいね♪",
      "address": "さいたま市南区鹿手袋7-3-2　ヘルシーカフェのら",
      "lat": 35.847507,
      "lon": 139.636192,
      "days": "土",
      "startTime": "17:00",
      "endTime": "18:30"
    },
    {
      "city": "さいたま市",
      "name": "だがしカフェ夢はうす",
      "address": "さいたま市南区白幡4-13-3",
      "lat": 35.8425527,
      "lon": 139.6547946,
      "days": "金",
      "startTime": "17:00",
      "endTime": "19:00"
    },
    {
      "city": "さいたま市",
      "name": "おなかもこころもしあわせごはん",
      "address": "さいたま市見沼区深作1-5-1　春岡公民館",
      "lat": 35.950835,
      "lon": 139.66435,
      "days": "土",
      "startTime": "11:00",
      "endTime": "12:00"
    },
    {
      "city": "さいたま市",
      "name": "今羽のモリモリ食堂",
      "address": "さいたま市北区今羽町650-1",
      "lat": 35.9508621,
      "lon": 139.6254014,
      "days": "金",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "川越市",
      "name": "子ども食堂スマイリ（名細公民館）",
      "address": "川越市小堤662-1　名細公民館",
      "lat": 35.939657,
      "lon": 139.435293,
      "days": "木",
      "startTime": "17:00",
      "endTime": ""
    },
    {
      "city": "川越市",
      "name": "コミュニティカフェひだまり",
      "address": "川越市川鶴2-11-1　B-11",
      "lat": 35.9233395,
      "lon": 139.4109843,
      "days": "土",
      "startTime": "11:00",
      "endTime": "13:00"
    },
    {
      "city": "川越市",
      "name": "大黒屋食堂のこども食堂",
      "address": "川越市仲町5-2",
      "lat": 35.920512,
      "lon": 139.4826134,
      "days": "火",
      "startTime": "17:00",
      "endTime": "19:00"
    },
    {
      "city": "熊谷市",
      "name": "熊谷星川みんなの家　こども食堂",
      "address": "熊谷市筑波町2-36",
      "lat": 36.1421973,
      "lon": 139.3886907,
      "days": "月",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "熊谷市",
      "name": "多世代ふれあい食堂HAPPYくまここ",
      "address": "熊谷市上之3851-1　熊谷生協病院付属介護複合施設くまここ",
      "lat": 36.150466,
      "lon": 139.414483,
      "days": "土",
      "startTime": "12:00",
      "endTime": "13:00"
    },
    {
      "city": "川口市",
      "name": "たいむ☆こども食堂",
      "address": "川口市柳崎5丁目12-25",
      "lat": 35.8604772,
      "lon": 139.7052794,
      "days": "土",
      "startTime": "15:00",
      "endTime": "17:00"
    },
    {
      "city": "川口市",
      "name": "わいわい食堂",
      "address": "川口市桜町4丁目コンフォール東鳩ヶ谷集会所",
      "lat": 35.8400933,
      "lon": 139.7450848,
      "days": "土",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "川口市",
      "name": "ホープキッチン",
      "address": "川口市上青木6-7-17",
      "lat": 35.8357572,
      "lon": 139.7179653,
      "days": "土",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "川口市",
      "name": "川口夕暮れ子ども食堂",
      "address": "川口市芝3756-3",
      "lat": 35.8367215,
      "lon": 139.6865043,
      "days": "土",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "行田市",
      "name": "柿の木子ども食堂",
      "address": "行田市下須戸65-1",
      "lat": 36.1391784,
      "lon": 139.5096669,
      "days": "日",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "秩父市",
      "name": "はらいっぱい食堂（ゆいっこ）",
      "address": "秩父市下吉田3809",
      "lat": 36.0427146,
      "lon": 139.0342725,
      "days": "金",
      "startTime": "17:00",
      "endTime": "19:00"
    },
    {
      "city": "秩父市",
      "name": "秩父こども食堂",
      "address": "秩父市大宮4625",
      "lat": 35.9974393,
      "lon": 139.089409,
      "days": "日",
      "startTime": "16:30",
      "endTime": "17:30"
    },
    {
      "city": "所沢市",
      "name": "多世代参加型子ども食堂「さんとめキララ」",
      "address": "所沢市中富1622",
      "lat": 35.8150616,
      "lon": 139.4834444,
      "days": "土",
      "startTime": "12:00",
      "endTime": "13:00"
    },
    {
      "city": "所沢市",
      "name": "多世代参加型子ども食堂　桂の食卓～桂ん家",
      "address": "所沢市宮本町2-23-34",
      "lat": 35.7958169,
      "lon": 139.4607673,
      "days": "金",
      "startTime": "17:00",
      "endTime": "19:00"
    },
    {
      "city": "所沢市",
      "name": "子ども食堂増田さん家",
      "address": "所沢市宮本町1-9-7",
      "lat": 35.7934654,
      "lon": 139.4614271,
      "days": "木",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "所沢市",
      "name": "北秋津こども食堂",
      "address": "所沢市北秋津366",
      "lat": 35.7802555,
      "lon": 139.477765,
      "days": "水",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "所沢市",
      "name": "空ちゃん和ケ原",
      "address": "所沢市和ケ原3-286-12三ケ島13区集会所",
      "lat": 35.8061189,
      "lon": 139.4042906,
      "days": "木",
      "startTime": "16:00",
      "endTime": "19:00"
    },
    {
      "city": "東松山市",
      "name": "子ども食堂チ・アモ",
      "address": "東松山市石橋1747-16",
      "lat": 36.0387983,
      "lon": 139.3760743,
      "days": "金",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "東松山市",
      "name": "NPO法人比企聖学塾",
      "address": "東松山市松本町1-10-10",
      "lat": 36.0400752,
      "lon": 139.4106469,
      "days": "日",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "春日部市",
      "name": "かすかべ子ども食堂ひなた",
      "address": "春日部市大場1397-2",
      "lat": 35.949303,
      "lon": 139.765129,
      "days": "日",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "狭山市",
      "name": "みんなの食堂さといも",
      "address": "狭山市富士見1-11-15　生活クラブ館つなぐ",
      "lat": 35.8531678,
      "lon": 139.4160937,
      "days": "日",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "狭山市",
      "name": "シャローム食堂",
      "address": "狭山市狭山台4-19-14",
      "lat": 35.8487451,
      "lon": 139.4331972,
      "days": "金",
      "startTime": "17:00",
      "endTime": "18:00"
    },
    {
      "city": "狭山市",
      "name": "狭山ひまわりの里",
      "address": "狭山市北入曽686-3",
      "lat": 35.847181,
      "lon": 139.433475,
      "days": "日",
      "startTime": "14:00",
      "endTime": "20:30"
    },
    {
      "city": "狭山市",
      "name": "ＷＡＫＵ☆ＤＯＫＩはっぴー（水富公民館）",
      "address": "狭山市根岸2-17-13",
      "lat": 35.857771,
      "lon": 139.382265,
      "days": "土",
      "startTime": "10:00",
      "endTime": "13:00"
    },
    {
      "city": "狭山市",
      "name": "オリーブ食堂",
      "address": "狭山市入間川2-16-22　セブンスデー・アドベンチスト入間川キリスト教会",
      "lat": 35.863549,
      "lon": 139.414384,
      "days": "日",
      "startTime": "17:00",
      "endTime": "19:00"
    },
    {
      "city": "狭山市",
      "name": "にこにこ食堂",
      "address": "狭山市南入曽428-3　入曽地域交流センター",
      "lat": 35.832591,
      "lon": 139.431693,
      "days": "土",
      "startTime": "10:00",
      "endTime": "12:00"
    },
    {
      "city": "羽生市",
      "name": "みんなの食堂",
      "address": "羽生市桑崎1331-2",
      "lat": 36.1742467,
      "lon": 139.5221731,
      "days": "土日",
      "startTime": "11:00",
      "endTime": "14:00"
    },
    {
      "city": "鴻巣市",
      "name": "わいわい交流会",
      "address": "鴻巣市吹上富士見3-1-7",
      "lat": 36.0968471,
      "lon": 139.4570268,
      "days": "土",
      "startTime": "11:00",
      "endTime": "13:00"
    },
    {
      "city": "鴻巣市",
      "name": "まちのごはんやさん",
      "address": "鴻巣市中央23-10",
      "lat": 36.0628745,
      "lon": 139.5239826,
      "days": "金",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "上尾市",
      "name": "ホットほっとタイム子ども食堂",
      "address": "上尾市富士見2丁目15　こぱんあらぐさ",
      "lat": 35.96817,
      "lon": 139.583238,
      "days": "金",
      "startTime": "17:45",
      "endTime": ""
    },
    {
      "city": "上尾市",
      "name": "みんめし",
      "address": "上尾市上町1丁目6-6",
      "lat": 35.9763481,
      "lon": 139.5899429,
      "days": "日",
      "startTime": "8:00",
      "endTime": "9:00"
    },
    {
      "city": "草加市",
      "name": "草加松原子ども食堂",
      "address": "草加市栄町2-7-34",
      "lat": 35.8421707,
      "lon": 139.8043958,
      "days": "木土",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "越谷市",
      "name": "せんげん台こども食堂",
      "address": "越谷市千間台西1-9-9",
      "lat": 35.935387,
      "lon": 139.770573,
      "days": "月",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "越谷市",
      "name": "越谷こども食堂",
      "address": "越谷市越ヶ谷2丁目9-6",
      "lat": 35.891023,
      "lon": 139.7893128,
      "days": "月火水木金",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "蕨市",
      "name": "みんなの食堂「ぽっかぽか」＠錦町",
      "address": "蕨市錦町2-14-8",
      "lat": 35.823487,
      "lon": 139.6727745,
      "days": "木",
      "startTime": "17:00",
      "endTime": "20:00"
    },
    {
      "city": "蕨市",
      "name": "子ども食堂「ぽっかぽか」＠クアッカ",
      "address": "蕨市中央3-13",
      "lat": 35.827292,
      "lon": 139.68675,
      "days": "水",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "入間市",
      "name": "あいくる・みんなの広場",
      "address": "入間市豊岡1-8-39　サイオスパークビル1F",
      "lat": 35.8369621,
      "lon": 139.3869782,
      "days": "火",
      "startTime": "17:30",
      "endTime": "19:00"
    },
    {
      "city": "入間市",
      "name": "ふじさわキッチン（藤沢公民館）",
      "address": "入間市下藤沢846-1（藤沢公民館）",
      "lat": 35.8176911,
      "lon": 139.4033369,
      "days": "日",
      "startTime": "11:00",
      "endTime": "15:00"
    },
    {
      "city": "朝霞市",
      "name": "わ・和・輪の会　子ども食堂",
      "address": "朝霞市本町2-18-1 武蔵野サンハイツ1F",
      "lat": 35.7992665,
      "lon": 139.5962704,
      "days": "月火水木金",
      "startTime": "11:00",
      "endTime": "20:00"
    },
    {
      "city": "朝霞市",
      "name": "おへそ食堂",
      "address": "朝霞市浜崎669-1",
      "lat": 35.8133058,
      "lon": 139.5903984,
      "days": "月火水木金",
      "startTime": "12:00",
      "endTime": "14:00"
    },
    {
      "city": "志木市",
      "name": "志木のまいにちこども食堂",
      "address": "志木市中宗岡4-18-31",
      "lat": 35.8363741,
      "lon": 139.5926669,
      "days": "月火水木金土",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "新座市",
      "name": "まぜこぜ食堂（まぜこぜたい）",
      "address": "新座市栄4-6-8",
      "lat": 35.7755103,
      "lon": 139.5853609,
      "days": "木",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "久喜市",
      "name": "みんなのいえ",
      "address": "久喜市上内886",
      "lat": 36.0887011,
      "lon": 139.6595181,
      "days": "日",
      "startTime": "11:30",
      "endTime": "13:00"
    },
    {
      "city": "富士見市",
      "name": "「ポトフのお弁当(いっしょにたべよ)」・「おうちでたべよ」",
      "address": "富士見市水子1255-12",
      "lat": 35.841247,
      "lon": 139.558815,
      "days": "木土",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "富士見市",
      "name": "カモンミール",
      "address": "富士見市東大久保355-3",
      "lat": 35.8732375,
      "lon": 139.551769,
      "days": "木",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "三郷市",
      "name": "ふれあい子ども食堂",
      "address": "三郷市早稲田3-26-19",
      "lat": 35.853631,
      "lon": 139.888721,
      "days": "日",
      "startTime": "11:00",
      "endTime": "13:00"
    },
    {
      "city": "三郷市",
      "name": "おあしす子ども食堂",
      "address": "三郷市鷹野4-269",
      "lat": 35.799228,
      "lon": 139.882157,
      "days": "土",
      "startTime": "11:00",
      "endTime": "12:00"
    },
    {
      "city": "三郷市",
      "name": "ほっとママ（親子サロン）",
      "address": "三郷市泉2-35（ピアラシティ交流センター）",
      "lat": 35.8436269,
      "lon": 139.8590252,
      "days": "火水木",
      "startTime": "10:00",
      "endTime": "12:00"
    },
    {
      "city": "幸手市",
      "name": "あやめ笑顔食堂",
      "address": "幸手市平野920",
      "lat": 36.06448,
      "lon": 139.753189,
      "days": "土",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "鶴ヶ島市",
      "name": "子ども食堂じゃがいも（鶴ヶ島市西市民センター）",
      "address": "鶴ヶ島市新町4-17-8",
      "lat": 35.9329588,
      "lon": 139.3689182,
      "days": "金",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "日高市",
      "name": "ぬくもりげんき食堂",
      "address": "日高市下鹿山527（たかねサロン）",
      "lat": 35.8877359,
      "lon": 139.3473109,
      "days": "",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "日高市",
      "name": "地域食堂ちゃぶ台　（高麗公民館）",
      "address": "日高市栗坪92-2高麗公民館",
      "lat": 35.886482,
      "lon": 139.316221,
      "days": "水",
      "startTime": "17:00",
      "endTime": "19:00"
    },
    {
      "city": "吉川市",
      "name": "みんなの食堂ころあい",
      "address": "吉川市吉川団地一街区7号棟107",
      "lat": 35.891888,
      "lon": 139.846589,
      "days": "月水",
      "startTime": "16:30",
      "endTime": "18:00"
    },
    {
      "city": "吉川市",
      "name": "よつば食堂",
      "address": "吉川市木売588-2（デイサービス「花びより」）",
      "lat": 35.8787608,
      "lon": 139.8521174,
      "days": "日",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "吉川市",
      "name": "みんな食堂たんぽぽ",
      "address": "吉川市中央3-27-13",
      "lat": 35.892444,
      "lon": 139.8568663,
      "days": "土",
      "startTime": "17:00",
      "endTime": "19:00"
    },
    {
      "city": "ふじみ野市",
      "name": "多世代コミュニティキッチン「おーいココロンくらぶ」",
      "address": "ふじみ野市ふじみ野1-1-15　大井協同診療所内",
      "lat": 35.85996,
      "lon": 139.513176,
      "days": "火",
      "startTime": "16:00",
      "endTime": "17:00"
    },
    {
      "city": "ふじみ野市",
      "name": "わくわく食堂",
      "address": "ふじみ野市上福岡1-13-7パールビル2Ｆ",
      "lat": 35.875616,
      "lon": 139.51479,
      "days": "",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "ふじみ野市",
      "name": "ルミエール・ビバン",
      "address": "ふじみ野市駒林元町1-6-12",
      "lat": 35.8666833,
      "lon": 139.5266591,
      "days": "",
      "startTime": "10:00",
      "endTime": "15:30"
    },
    {
      "city": "三芳町",
      "name": "三芳おなかま食堂",
      "address": "三芳町藤久保817",
      "lat": 35.8376267,
      "lon": 139.5275621,
      "days": "",
      "startTime": "17:30",
      "endTime": "18:45"
    },
    {
      "city": "三芳町",
      "name": "多世代食堂こころ三芳",
      "address": "三芳町北永井946-1",
      "lat": 35.8440369,
      "lon": 139.5134046,
      "days": "火",
      "startTime": "17:30",
      "endTime": "19:00"
    },
    {
      "city": "毛呂山町",
      "name": "茶みせ",
      "address": "毛呂山町中央4-16-3",
      "lat": 35.9402073,
      "lon": 139.3254777,
      "days": "土",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "毛呂山町",
      "name": "毛呂山こども食堂ガーデン（子ども食堂）",
      "address": "毛呂山町中央1-3-4",
      "lat": 35.9423297,
      "lon": 139.3165704,
      "days": "土",
      "startTime": "17:00",
      "endTime": "19:00"
    },
    {
      "city": "滑川町",
      "name": "森もりのハウス",
      "address": "滑川町みなみ野3-10-17",
      "lat": 36.04342912,
      "lon": 139.3758135,
      "days": "日",
      "startTime": "11:30",
      "endTime": "13:00"
    },
    {
      "city": "嵐山町",
      "name": "駅前嵐山こども食堂",
      "address": "嵐山町菅谷135-1",
      "lat": 36.0437181,
      "lon": 139.328381,
      "days": "",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "川島町",
      "name": "みんなの食堂",
      "address": "川島町中山1371-1",
      "lat": 35.989349,
      "lon": 139.446144,
      "days": "金",
      "startTime": "15:00",
      "endTime": "21:00"
    },
    {
      "city": "鳩山町",
      "name": "こども＆おとなのひろば",
      "address": "鳩山町松ヶ丘1-2-4",
      "lat": 35.9878844,
      "lon": 139.354488,
      "days": "",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "宮代町",
      "name": "ゆうやけひろば",
      "address": "宮代町笠原1-1-1コミュニティセンター進修館",
      "lat": 36.0228029,
      "lon": 139.723492,
      "days": "木土",
      "startTime": "17:00",
      "endTime": "19:30"
    },
    {
      "city": "日高市",
      "name": "地域食堂ちゃぶ台（高萩子ども食堂）",
      "address": "日高市高萩605-13ハングアウトかふぇ",
      "lat": 35.900813,
      "lon": 139.371562,
      "days": "金",
      "startTime": "17:00",
      "endTime": "19:00"
    },
    {
      "city": "日高市",
      "name": "地域食堂ちゃぶ台（高麗川南公民館）",
      "address": "日高市中鹿山81-1（高麗川南公民館）",
      "lat": 35.8929751,
      "lon": 139.343465,
      "days": "",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "鶴ヶ島市",
      "name": "子ども食堂じゃがいも（鶴ヶ島市東市民センター）",
      "address": "鶴ヶ島市五味ケ谷202",
      "lat": 35.9455971,
      "lon": 139.4213196,
      "days": "金",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "東松山市",
      "name": "長くつ下のピッピ食堂",
      "address": "東松山市上唐子1461-82",
      "lat": 36.03830039,
      "lon": 139.3361376,
      "days": "金土",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "さいたま市",
      "name": "みな風こども食堂",
      "address": "さいたま市中央区本町西2-2-24",
      "lat": 35.883504,
      "lon": 139.62059,
      "days": "土",
      "startTime": "16:00",
      "endTime": "18:00"
    },
    {
      "city": "三郷市",
      "name": "わせだ子ども食堂",
      "address": "三郷市早稲田2-14-4",
      "lat": 35.848958,
      "lon": 139.882818,
      "days": "金",
      "startTime": "17:00",
      "endTime": "20:00"
    },
    {
      "city": "さいたま市",
      "name": "ジョイフルキッチンみんなの食堂",
      "address": "さいたま市大宮区大城町1-275",
      "lat": 35.910489,
      "lon": 139.61388,
      "days": "",
      "startTime": "11:00",
      "endTime": "12:00"
    },
    {
      "city": "さいたま市",
      "name": "さとちゃんカフェ",
      "address": "さいたま市緑区大牧1484-25（木なり設計内）",
      "lat": 35.874833,
      "lon": 139.702518,
      "days": "火",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "さいたま市",
      "name": "畑こども食堂",
      "address": "さいたま市北区見沼2丁目94番地市民の森見沼グリーンセンター",
      "lat": 35.933089,
      "lon": 139.640606,
      "days": "土",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "川越市",
      "name": "やすらーじゅ広場",
      "address": "川越市大字渋井216",
      "lat": 35.882536,
      "lon": 139.531957,
      "days": "",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "川口市",
      "name": "こども食堂　kitchenおむすび",
      "address": "川口市西川口3-1-2エクセル西川口6号",
      "lat": 35.813963,
      "lon": 139.705517,
      "days": "",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "川口市",
      "name": "みんなの食堂Flat",
      "address": "川口市中青木4-1-20",
      "lat": 35.815936,
      "lon": 139.716151,
      "days": "土",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "川口市",
      "name": "朝日こども食堂",
      "address": "川口市朝日1-7-3 ビジョンチャーチ",
      "lat": 35.809228,
      "lon": 139.733424,
      "days": "水",
      "startTime": "17:00",
      "endTime": "18:30"
    },
    {
      "city": "所沢市",
      "name": "地域内に一人ぼっちを創らない！実行委員会",
      "address": "所沢市東所沢和田3丁目25-9 和田3丁目集会室",
      "lat": 35.795367,
      "lon": 139.505531,
      "days": "金",
      "startTime": "13:00",
      "endTime": "18:00"
    },
    {
      "city": "飯能市",
      "name": "日替わりシェフレストラン",
      "address": "飯能市仲町5-9",
      "lat": 35.853383,
      "lon": 139.31874,
      "days": "",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "飯能市",
      "name": "はんのう・みんな食堂",
      "address": "飯能市東町11-11ヴィラ飯能102",
      "lat": 35.853303,
      "lon": 139.324378,
      "days": "",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "加須市",
      "name": "北小浜みんなで子ども食堂",
      "address": "加須市北小浜1168　県営北小浜団地集会所",
      "lat": 36.135432,
      "lon": 139.612081,
      "days": "土",
      "startTime": "11:00",
      "endTime": "13:00"
    },
    {
      "city": "春日部市",
      "name": "かすかべひつじ食堂",
      "address": "春日部市中央5丁目7-15 カトリック春日部協会",
      "lat": 35.972402,
      "lon": 139.752285,
      "days": "土",
      "startTime": "12:00",
      "endTime": "15:00"
    },
    {
      "city": "春日部市",
      "name": "なごみこども食堂",
      "address": "春日部市米島156-28",
      "lat": 35.976025,
      "lon": 139.803986,
      "days": "日",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "狭山市",
      "name": "ＷＡＫＵ☆ＤＯＫＩはっぴー（広瀬公民館）",
      "address": "狭山市広瀬東3-34-1",
      "lat": 35.862363,
      "lon": 139.396685,
      "days": "土",
      "startTime": "10:00",
      "endTime": "13:00"
    },
    {
      "city": "鴻巣市",
      "name": "こどもレストラン「ゆめ」",
      "address": "鴻巣市八幡田742-2　住宅展示場サイエンスホ-ム内",
      "lat": 36.073512,
      "lon": 139.497601,
      "days": "土",
      "startTime": "11:00",
      "endTime": "12:30"
    },
    {
      "city": "深谷市",
      "name": "深谷はなっ子食堂",
      "address": "深谷市小前田2345-1",
      "lat": 36.133026,
      "lon": 139.226267,
      "days": "水",
      "startTime": "18:00",
      "endTime": "19:00"
    },
    {
      "city": "深谷市",
      "name": "Tハウスおむすびころりん",
      "address": "深谷市東方4284-1　上柴コミュニティセンター",
      "lat": 36.17769277,
      "lon": 139.3164013,
      "days": "土",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "深谷市",
      "name": "ふかやななの木食堂",
      "address": "深谷市上野台3266　八幡台ふれあいセンター",
      "lat": 36.18451832,
      "lon": 139.2687015,
      "days": "金",
      "startTime": "17:30",
      "endTime": "18:30"
    },
    {
      "city": "上尾市",
      "name": "てらこや錦町",
      "address": "上尾市錦町2-18",
      "lat": 35.987637,
      "lon": 139.590338,
      "days": "金",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "上尾市",
      "name": "子ども食堂わんぱーく",
      "address": "上尾市井戸木2-11-8",
      "lat": 35.993429,
      "lon": 139.563182,
      "days": "",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "上尾市",
      "name": "コドモ農業大学",
      "address": "上尾市戸崎353-2",
      "lat": 35.944736,
      "lon": 139.593961,
      "days": "火",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "草加市",
      "name": "こども未来食堂マイカ",
      "address": "草加市瀬崎6-6-22",
      "lat": 35.811498,
      "lon": 139.811255,
      "days": "月",
      "startTime": "16:00",
      "endTime": "19:30"
    },
    {
      "city": "草加市",
      "name": "草加あおはる食堂",
      "address": "草加市青柳6-45-17",
      "lat": 35.853601,
      "lon": 139.822872,
      "days": "土",
      "startTime": "16:00",
      "endTime": "19:00"
    },
    {
      "city": "草加市",
      "name": "子ども食堂結び",
      "address": "草加市住吉2-9-1（草加市立中央公民館）",
      "lat": 35.830514,
      "lon": 139.81014,
      "days": "",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "越谷市",
      "name": "きなり食堂",
      "address": "越谷市東越谷1-1-33",
      "lat": 35.891425,
      "lon": 139.794147,
      "days": "土",
      "startTime": "11:45",
      "endTime": "14:45"
    },
    {
      "city": "越谷市",
      "name": "越ヶ谷こどもかふぇ食堂ぽらむの家",
      "address": "越谷市越ケ谷本町8-3 ぽらむの家(旧夢空間）",
      "lat": 35.894279,
      "lon": 139.785478,
      "days": "月",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "越谷市",
      "name": "れいくのいえ",
      "address": "越谷市レイクタウン9-1-28",
      "lat": 35.878724,
      "lon": 139.815453,
      "days": "",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "春日部市",
      "name": "ベルヴィ越谷食堂",
      "address": "春日部市谷原1-2-1",
      "lat": 35.97304,
      "lon": 139.745916,
      "days": "木",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "入間市",
      "name": "高倉スマイル広場",
      "address": "入間市高倉4-6-20　入間市立高倉公民館",
      "lat": 35.836974,
      "lon": 139.379476,
      "days": "土",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "入間市",
      "name": "ふじさわキッチン（藤の台公民館）",
      "address": "入間市上藤沢406-31",
      "lat": 35.81821,
      "lon": 139.397274,
      "days": "日",
      "startTime": "11:00",
      "endTime": "15:00"
    },
    {
      "city": "朝霞市",
      "name": "おせっかいな食堂",
      "address": "朝霞市朝志ケ丘3-8-29　あさひデイサ-ビス朝霞事業所",
      "lat": 35.822281,
      "lon": 139.58349,
      "days": "日",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "朝霞市",
      "name": "あさかみらい子ども食堂",
      "address": "朝霞市浜崎1-7-27 1F",
      "lat": 35.816808,
      "lon": 139.589502,
      "days": "金",
      "startTime": "16:00",
      "endTime": "17:00"
    },
    {
      "city": "志木市",
      "name": "みんなでごはん",
      "address": "志木市本町1-10-1　いろは遊学館",
      "lat": 35.831173,
      "lon": 139.576564,
      "days": "土",
      "startTime": "17:00",
      "endTime": "19:00"
    },
    {
      "city": "新座市",
      "name": "子ども食堂（子どもカレー）",
      "address": "新座市栄4-5-23（栄中央集会所）",
      "lat": 35.774698,
      "lon": 139.583245,
      "days": "",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "新座市",
      "name": "社協上六支部こども食堂(野火止上六支部)",
      "address": "新座市野火止6-22-12",
      "lat": 35.807371,
      "lon": 139.566483,
      "days": "",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "新座市",
      "name": "新座住宅子ども食堂",
      "address": "新座市新座3-3-12（新座住宅分譲集会所）",
      "lat": 35.8213,
      "lon": 139.55692,
      "days": "",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "新座市",
      "name": "アロハにいざ",
      "address": "新座市道場2-14-12　新座私立中央公民館",
      "lat": 35.770053,
      "lon": 139.562044,
      "days": "日",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "桶川市",
      "name": "みんなの食堂しゃきょう食堂",
      "address": "桶川市末広2-8-29　桶川東公民館2階",
      "lat": 36.00618,
      "lon": 139.571533,
      "days": "金",
      "startTime": "17:30",
      "endTime": "18:30"
    },
    {
      "city": "久喜市",
      "name": "きっちん・こすもす子ども食堂",
      "address": "久喜市桜田3-10-2",
      "lat": 36.092462,
      "lon": 139.685155,
      "days": "土",
      "startTime": "11:30",
      "endTime": "13:00"
    },
    {
      "city": "八潮市",
      "name": "子ども食堂ほっぺ",
      "address": "八潮市新町103",
      "lat": 35.834579,
      "lon": 139.829828,
      "days": "土",
      "startTime": "16:00",
      "endTime": "19:00"
    },
    {
      "city": "八潮市",
      "name": "Yashio　てらこや　cafe",
      "address": "八潮市大瀬1-5-7",
      "lat": 35.807739,
      "lon": 139.84119,
      "days": "日",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "八潮市",
      "name": "7dayちょこっとランチ",
      "address": "八潮市大字鶴ケ曽根414-1",
      "lat": 35.826889,
      "lon": 139.838866,
      "days": "",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "富士見市",
      "name": "たくちゃん食堂",
      "address": "富士見市鶴瀬西2-8-25",
      "lat": 35.845402,
      "lon": 139.534085,
      "days": "土",
      "startTime": "11:30",
      "endTime": "12:30"
    },
    {
      "city": "富士見市",
      "name": "子どもサロン「みつば」",
      "address": "富士見市水谷東3丁目28-9(3丁目集会所)",
      "lat": 35.839116,
      "lon": 139.57836,
      "days": "",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "蓮田市",
      "name": "おたすけこども食堂",
      "address": "蓮田市西新宿1丁目22番地",
      "lat": 36.003543,
      "lon": 139.655273,
      "days": "金",
      "startTime": "13:00",
      "endTime": "16:00"
    },
    {
      "city": "幸手市",
      "name": "きらきら寺子屋こども塾",
      "address": "幸手市惣新田1465",
      "lat": 36.054635,
      "lon": 139.775392,
      "days": "",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "ふじみ",
      "name": "コミュニティ広場にこまる",
      "address": "ふじみ野市大井234　大井中央公民館大井分館",
      "lat": 35.848758,
      "lon": 139.519767,
      "days": "水",
      "startTime": "17:30",
      "endTime": "18:30"
    },
    {
      "city": "三芳町",
      "name": "みよしこども食堂",
      "address": "三芳町藤久保327",
      "lat": 35.838689,
      "lon": 139.534752,
      "days": "月",
      "startTime": "17:30",
      "endTime": "19:30"
    },
    {
      "city": "三芳町",
      "name": "朝ごはんプロジェクト(三芳町社会福祉協議会)",
      "address": "三芳町藤久保3803-5",
      "lat": 35.845066,
      "lon": 139.52798,
      "days": "水金",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "戸田市",
      "name": "TODA夕暮れ子供食堂",
      "address": "戸田市上戸田2丁目21-1",
      "lat": 35.812504,
      "lon": 139.680735,
      "days": "土",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "ふじみ野市",
      "name": "めだか食堂",
      "address": "ふじみ野市上福岡1-5-31(STビル1階めだかクラブ)",
      "lat": 35.874331,
      "lon": 139.514156,
      "days": "日",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "所沢市",
      "name": "みんなのお家（デコボコ子ども食堂）",
      "address": "所沢市中新井3-2-13",
      "lat": 35.816556,
      "lon": 139.469105,
      "days": "金",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "越谷市",
      "name": "ふくろう子ども食堂",
      "address": "越谷市大竹160-2（大袋公民館）",
      "lat": 35.919137,
      "lon": 139.767561,
      "days": "土",
      "startTime": "11:30",
      "endTime": "14:00"
    },
    {
      "city": "川越市",
      "name": "子ども食堂スマイリ（霞ヶ関北公民館）",
      "address": "川越市的場北1丁目18-6　霞ヶ関北公民館",
      "lat": 35.926305,
      "lon": 139.43773,
      "days": "金",
      "startTime": "17:00",
      "endTime": ""
    },
    {
      "city": "川越市",
      "name": "子ども食堂スマイリ（霞ヶ関西公民館）",
      "address": "川越市笠幡3001-12　霞ヶ関西公民館",
      "lat": 35.910948,
      "lon": 139.396543,
      "days": "日",
      "startTime": "11:30",
      "endTime": ""
    },
    {
      "city": "さいたま市",
      "name": "みんなの夢の音楽隊",
      "address": "さいたま市桜区白鍬202-19",
      "lat": 35.878222,
      "lon": 139.604763,
      "days": "",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "川越市",
      "name": "ろっけん食堂",
      "address": "川越市六軒町2-25-7",
      "lat": 35.92039465,
      "lon": 139.4784216,
      "days": "",
      "startTime": "12:00",
      "endTime": "13:00"
    },
    {
      "city": "桶川市",
      "name": "おけがわ子ども食堂輪空（りんく）",
      "address": "桶川市川田谷2914",
      "lat": 35.99010808,
      "lon": 139.5312319,
      "days": "日",
      "startTime": "11:00",
      "endTime": "12:30"
    },
    {
      "city": "富士見市",
      "name": "鶴瀬西・関沢子ども食堂まんぷく",
      "address": "富士見市大字鶴馬3575-1　鶴瀬西交流センター調理室",
      "lat": 35.842125,
      "lon": 139.534829,
      "days": "木",
      "startTime": "15:30",
      "endTime": ""
    },
    {
      "city": "富士見市",
      "name": "あにまーと",
      "address": "富士見市関沢3-23-41",
      "lat": 35.836786,
      "lon": 139.543059,
      "days": "土",
      "startTime": "11:30",
      "endTime": ""
    },
    {
      "city": "越谷市",
      "name": "こども食堂かなう",
      "address": "越谷市柳町1-14",
      "lat": 35.894107,
      "lon": 139.789952,
      "days": "日",
      "startTime": "12:00",
      "endTime": "13:00"
    },
    {
      "city": "所沢市",
      "name": "ぽかぽか広場・山口（椿峰コミュニティ会館）",
      "address": "所沢市小手指南3丁目57-9",
      "lat": 35.785203,
      "lon": 139.433926,
      "days": "木",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "所沢市",
      "name": "ぽかぽか広場・山口（山口公民館　夏休み昼食会）",
      "address": "所沢市山口5004　山口公民館",
      "lat": 35.78428,
      "lon": 139.4391,
      "days": "",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "加須市",
      "name": "光明寺おてら食堂",
      "address": "加須市本町14-43",
      "lat": 36.126703,
      "lon": 139.60087,
      "days": "",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "本庄市",
      "name": "恩むすび",
      "address": "本庄市銀座1-9-23",
      "lat": 36.238937,
      "lon": 139.185435,
      "days": "",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "小川町",
      "name": "小川町みんなの食堂",
      "address": "小川町角山133",
      "lat": 36.059625,
      "lon": 139.26369,
      "days": "土",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "戸田市",
      "name": "スマイルエンジョイプロジェクトとだっ子食堂",
      "address": "戸田市本町2-10-1",
      "lat": 35.809317,
      "lon": 139.677094,
      "days": "土",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "久喜市",
      "name": "子ども食堂ぬくもり",
      "address": "久喜市本町2-4-10",
      "lat": 36.066304,
      "lon": 139.670342,
      "days": "火",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "深谷市",
      "name": "いちご食堂",
      "address": "深谷市菅沼165",
      "lat": 36.143466,
      "lon": 139.287846,
      "days": "土",
      "startTime": "11:00",
      "endTime": "12:30"
    },
    {
      "city": "深谷市",
      "name": "まありのいえこども食堂",
      "address": "深谷市上野台3353-5",
      "lat": 36.185496,
      "lon": 139.269483,
      "days": "金",
      "startTime": "17:30",
      "endTime": "18:30"
    },
    {
      "city": "草加市",
      "name": "こども食堂　～ペンギン村～",
      "address": "草加市高砂1-8-8",
      "lat": 35.825025,
      "lon": 139.806614,
      "days": "日",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "日高市",
      "name": "日高こどな食堂",
      "address": "日高市高萩東2-10-1",
      "lat": 35.9096,
      "lon": 139.380091,
      "days": "日",
      "startTime": "12:00",
      "endTime": ""
    },
    {
      "city": "伊奈町",
      "name": "伊奈こども食堂",
      "address": "伊奈町学園2-196-5",
      "lat": 36.00896,
      "lon": 139.613425,
      "days": "土",
      "startTime": "11:00",
      "endTime": "12:00"
    },
    {
      "city": "ふじみ野市",
      "name": "どん亭子供食堂",
      "address": "ふじみ野市上福岡1-10-2　エーデルビル2F",
      "lat": 35.875984,
      "lon": 139.511914,
      "days": "月",
      "startTime": "17:00",
      "endTime": "19:00"
    },
    {
      "city": "川越市",
      "name": "こども食堂　川越エンゼルトランペット",
      "address": "川越市的場2173-29　ひかり福音協会内",
      "lat": 35.927901,
      "lon": 139.439577,
      "days": "土",
      "startTime": "11:00",
      "endTime": "13:00"
    },
    {
      "city": "所沢市",
      "name": "和田子ども食堂",
      "address": "所沢市東所沢和田2-18-11",
      "lat": 35.794326,
      "lon": 139.507132,
      "days": "火土",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "熊谷市",
      "name": "NPO法人若者支援ひろば三愛",
      "address": "熊谷市宮町2-132 林ビル4階",
      "lat": 36.145872,
      "lon": 139.388055,
      "days": "火金日",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "新座市",
      "name": "栄五丁目支部 子ども食堂",
      "address": "新座市栄5-2-17",
      "lat": 35.773836,
      "lon": 139.58137,
      "days": "",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "滑川町",
      "name": "エシカルライフカフェリーフ",
      "address": "滑川町みなみ野2-6-2",
      "lat": 36.044261,
      "lon": 139.37422,
      "days": "",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "さいたま市",
      "name": "いわつきはるみ子ども食堂",
      "address": "さいたま市岩槻区西町4-4-19",
      "lat": 35.9588,
      "lon": 139.689801,
      "days": "火",
      "startTime": "12:00",
      "endTime": "17:00"
    },
    {
      "city": "秩父市",
      "name": "なの花",
      "address": "秩父市太田895",
      "lat": 36.055695,
      "lon": 139.059729,
      "days": "",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "川口市",
      "name": "安行げんき食堂",
      "address": "川口市安行出羽1-3-24　喫茶　一隅",
      "lat": 35.851356,
      "lon": 139.760295,
      "days": "土",
      "startTime": "11:00",
      "endTime": "13:00"
    },
    {
      "city": "入間市",
      "name": "黒須にじいろ広場",
      "address": "入間市黒須2丁目3-13",
      "lat": 35.844985,
      "lon": 139.384571,
      "days": "",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "入間市",
      "name": "子ども食堂nukunuku",
      "address": "入間市豊岡2-2-8",
      "lat": 35.834502,
      "lon": 139.384992,
      "days": "",
      "startTime": "11:00",
      "endTime": "14:00"
    },
    {
      "city": "久喜市",
      "name": "菖蒲文化会館 こどもCafé Arts ＆ Eats",
      "address": "久喜市菖蒲町菖蒲85-1　久喜市菖蒲文化会館",
      "lat": 36.061608,
      "lon": 139.603219,
      "days": "",
      "startTime": "",
      "endTime": ""
    },
    {
      "city": "所沢市",
      "name": "所沢みんなの食堂　ぬくもり",
      "address": "所沢市東所沢5-1-10　さがみ典礼　東所沢駅前葬斎センター",
      "lat": 35.793539,
      "lon": 139.514381,
      "days": "日",
      "startTime": "11:30",
      "endTime": "12:00"
    },
    {
      "city": "鴻巣市",
      "name": "こどもレストラン「ゆめ」",
      "address": "鴻巣市本町1-1-3　エルミ2　4階",
      "lat": 36.05948,
      "lon": 139.510723,
      "days": "土",
      "startTime": "12:00",
      "endTime": "13:30"
    },
    {
      "city": "坂戸市",
      "name": "Happy-lucky-café",
      "address": "坂戸市西坂戸五丁目34-1（城山公民館）",
      "lat": 35.929506,
      "lon": 139.333792,
      "days": "",
      "startTime": "",
      "endTime": ""
    }
  ];

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
            L.marker([entry.lat, entry.lon]).addTo(map)
                .bindPopup(`<b>${entry.name}</b><br>${entry.city}　${entry.address}<br>${entry.days} ${entry.startTime}-${entry.endTime}`);
        }
    });
}

// 初期表示
filterData();
