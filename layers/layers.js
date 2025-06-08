var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ADMINISTRASIKECAMATAN_AR_25K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_25K_1 = format_ADMINISTRASIKECAMATAN_AR_25K_1.readFeatures(json_ADMINISTRASIKECAMATAN_AR_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_25K_1.addFeatures(features_ADMINISTRASIKECAMATAN_AR_25K_1);
var lyr_ADMINISTRASIKECAMATAN_AR_25K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_25K_1, 
                style: style_ADMINISTRASIKECAMATAN_AR_25K_1,
                popuplayertitle: 'ADMINISTRASIKECAMATAN_AR_25K',
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIKECAMATAN_AR_25K_1.png" /> ADMINISTRASIKECAMATAN_AR_25K'
            });
var format_rsjakselabiss_2 = new ol.format.GeoJSON();
var features_rsjakselabiss_2 = format_rsjakselabiss_2.readFeatures(json_rsjakselabiss_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rsjakselabiss_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rsjakselabiss_2.addFeatures(features_rsjakselabiss_2);
var lyr_rsjakselabiss_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rsjakselabiss_2, 
                style: style_rsjakselabiss_2,
                popuplayertitle: 'rs jaksel abiss',
                interactive: true,
                title: '<img src="styles/legend/rsjakselabiss_2.png" /> rs jaksel abiss'
            });
var format_RSPIPondokIndah_3 = new ol.format.GeoJSON();
var features_RSPIPondokIndah_3 = format_RSPIPondokIndah_3.readFeatures(json_RSPIPondokIndah_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSPIPondokIndah_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSPIPondokIndah_3.addFeatures(features_RSPIPondokIndah_3);
var lyr_RSPIPondokIndah_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSPIPondokIndah_3, 
                style: style_RSPIPondokIndah_3,
                popuplayertitle: 'RSPI Pondok Indah',
                interactive: true,
                title: '<img src="styles/legend/RSPIPondokIndah_3.png" /> RSPI Pondok Indah'
            });
var format_RSUDPasarMinggu_4 = new ol.format.GeoJSON();
var features_RSUDPasarMinggu_4 = format_RSUDPasarMinggu_4.readFeatures(json_RSUDPasarMinggu_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSUDPasarMinggu_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSUDPasarMinggu_4.addFeatures(features_RSUDPasarMinggu_4);
var lyr_RSUDPasarMinggu_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSUDPasarMinggu_4, 
                style: style_RSUDPasarMinggu_4,
                popuplayertitle: 'RSUD Pasar Minggu',
                interactive: true,
                title: '<img src="styles/legend/RSUDPasarMinggu_4.png" /> RSUD Pasar Minggu'
            });
var format_SiloamHospitalsMampang_5 = new ol.format.GeoJSON();
var features_SiloamHospitalsMampang_5 = format_SiloamHospitalsMampang_5.readFeatures(json_SiloamHospitalsMampang_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SiloamHospitalsMampang_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SiloamHospitalsMampang_5.addFeatures(features_SiloamHospitalsMampang_5);
var lyr_SiloamHospitalsMampang_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SiloamHospitalsMampang_5, 
                style: style_SiloamHospitalsMampang_5,
                popuplayertitle: 'Siloam Hospitals Mampang',
                interactive: true,
                title: '<img src="styles/legend/SiloamHospitalsMampang_5.png" /> Siloam Hospitals Mampang'
            });
var format_RumahSakitFatmawati_6 = new ol.format.GeoJSON();
var features_RumahSakitFatmawati_6 = format_RumahSakitFatmawati_6.readFeatures(json_RumahSakitFatmawati_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahSakitFatmawati_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahSakitFatmawati_6.addFeatures(features_RumahSakitFatmawati_6);
var lyr_RumahSakitFatmawati_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahSakitFatmawati_6, 
                style: style_RumahSakitFatmawati_6,
                popuplayertitle: 'Rumah Sakit Fatmawati',
                interactive: true,
                title: '<img src="styles/legend/RumahSakitFatmawati_6.png" /> Rumah Sakit Fatmawati'
            });
var format_RumahsehatuntukjakartaRSUDKebayoranbaru_7 = new ol.format.GeoJSON();
var features_RumahsehatuntukjakartaRSUDKebayoranbaru_7 = format_RumahsehatuntukjakartaRSUDKebayoranbaru_7.readFeatures(json_RumahsehatuntukjakartaRSUDKebayoranbaru_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahsehatuntukjakartaRSUDKebayoranbaru_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahsehatuntukjakartaRSUDKebayoranbaru_7.addFeatures(features_RumahsehatuntukjakartaRSUDKebayoranbaru_7);
var lyr_RumahsehatuntukjakartaRSUDKebayoranbaru_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahsehatuntukjakartaRSUDKebayoranbaru_7, 
                style: style_RumahsehatuntukjakartaRSUDKebayoranbaru_7,
                popuplayertitle: 'Rumah sehat untuk jakarta RSUD Kebayoran baru',
                interactive: true,
                title: '<img src="styles/legend/RumahsehatuntukjakartaRSUDKebayoranbaru_7.png" /> Rumah sehat untuk jakarta RSUD Kebayoran baru'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ADMINISTRASIKECAMATAN_AR_25K_1.setVisible(true);lyr_rsjakselabiss_2.setVisible(true);lyr_RSPIPondokIndah_3.setVisible(true);lyr_RSUDPasarMinggu_4.setVisible(true);lyr_SiloamHospitalsMampang_5.setVisible(true);lyr_RumahSakitFatmawati_6.setVisible(true);lyr_RumahsehatuntukjakartaRSUDKebayoranbaru_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ADMINISTRASIKECAMATAN_AR_25K_1,lyr_rsjakselabiss_2,lyr_RSPIPondokIndah_3,lyr_RSUDPasarMinggu_4,lyr_SiloamHospitalsMampang_5,lyr_RumahSakitFatmawati_6,lyr_RumahsehatuntukjakartaRSUDKebayoranbaru_7];
lyr_ADMINISTRASIKECAMATAN_AR_25K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_rsjakselabiss_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'foto': 'foto', 'Nama': 'Nama', 'Foto_1': 'Foto_1', });
lyr_RSPIPondokIndah_3.set('fieldAliases', {'id': 'id', 'Rs': 'Rs', 'Foto': 'Foto', 'foto_1': 'foto_1', });
lyr_RSUDPasarMinggu_4.set('fieldAliases', {'id': 'id', 'Rs': 'Rs', 'Foto': 'Foto', 'foto_1': 'foto_1', });
lyr_SiloamHospitalsMampang_5.set('fieldAliases', {'id': 'id', 'Rs': 'Rs', 'Foto': 'Foto', });
lyr_RumahSakitFatmawati_6.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Foto': 'Foto', });
lyr_RumahsehatuntukjakartaRSUDKebayoranbaru_7.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Foto': 'Foto', });
lyr_ADMINISTRASIKECAMATAN_AR_25K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_rsjakselabiss_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'ExternalResource', 'foto': '', 'Nama': '', 'Foto_1': '', });
lyr_RSPIPondokIndah_3.set('fieldImages', {'id': 'TextEdit', 'Rs': 'TextEdit', 'Foto': 'ExternalResource', 'foto_1': 'TextEdit', });
lyr_RSUDPasarMinggu_4.set('fieldImages', {'id': 'TextEdit', 'Rs': 'TextEdit', 'Foto': 'ExternalResource', 'foto_1': 'TextEdit', });
lyr_SiloamHospitalsMampang_5.set('fieldImages', {'id': 'TextEdit', 'Rs': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_RumahSakitFatmawati_6.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_RumahsehatuntukjakartaRSUDKebayoranbaru_7.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_ADMINISTRASIKECAMATAN_AR_25K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_rsjakselabiss_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'foto': 'no label', 'Nama': 'no label', 'Foto_1': 'no label', });
lyr_RSPIPondokIndah_3.set('fieldLabels', {'id': 'no label', 'Rs': 'no label', 'Foto': 'no label', 'foto_1': 'no label', });
lyr_RSUDPasarMinggu_4.set('fieldLabels', {'id': 'no label', 'Rs': 'no label', 'Foto': 'no label', 'foto_1': 'no label', });
lyr_SiloamHospitalsMampang_5.set('fieldLabels', {'id': 'no label', 'Rs': 'no label', 'Foto': 'no label', });
lyr_RumahSakitFatmawati_6.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Foto': 'no label', });
lyr_RumahsehatuntukjakartaRSUDKebayoranbaru_7.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Foto': 'no label', });
lyr_RumahsehatuntukjakartaRSUDKebayoranbaru_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});