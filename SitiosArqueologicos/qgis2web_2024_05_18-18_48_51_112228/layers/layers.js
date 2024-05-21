var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_raster_columns_1 = new ol.format.GeoJSON();
var features_raster_columns_1 = format_raster_columns_1.readFeatures(json_raster_columns_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_raster_columns_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_raster_columns_1.addFeatures(features_raster_columns_1);
var lyr_raster_columns_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_raster_columns_1, 
                style: style_raster_columns_1,
                popuplayertitle: "raster_columns",
                interactive: true,
    title: 'raster_columns<br />\
    <img style="max-width:16px; max-height:16px;" src="qgis2web_2024_05_18-18_48_51_112228/styles/legend/raster_columns_1_0.png" /> AHUACHAPAN<br />\
    <img style="max-width:16px; max-height:16px;" src="qgis2web_2024_05_18-18_48_51_112228/styles/legend/raster_columns_1_1.png" /> CABAÑAS<br />\
    <img style="max-width:16px; max-height:16px;" src="qgis2web_2024_05_18-18_48_51_112228/styles/legend/raster_columns_1_2.png" /> CHALATENANGO<br />\
    <img style="max-width:16px; max-height:16px;" src="qgis2web_2024_05_18-18_48_51_112228/styles/legend/raster_columns_1_3.png" /> CUSCATLAN<br />\
    <img style="max-width:16px; max-height:16px;" src="qgis2web_2024_05_18-18_48_51_112228/styles/legend/raster_columns_1_4.png" /> LA LIBERTAD<br />\
    <img style="max-width:16px; max-height:16px;" src="qgis2web_2024_05_18-18_48_51_112228/styles/legend/raster_columns_1_5.png" /> LA PAZ<br />\
    <img style="max-width:16px; max-height:16px;" src="qgis2web_2024_05_18-18_48_51_112228/styles/legend/raster_columns_1_6.png" /> LA UNION<br />\
    <img style="max-width:16px; max-height:16px;" src="qgis2web_2024_05_18-18_48_51_112228/styles/legend/raster_columns_1_7.png" /> MORAZAN<br />\
    <img style="max-width:16px; max-height:16px;" src="qgis2web_2024_05_18-18_48_51_112228/styles/legend/raster_columns_1_8.png" /> SAN MIGUEL<br />\
    <img style="max-width:16px; max-height:16px;" src="qgis2web_2024_05_18-18_48_51_112228/styles/legend/raster_columns_1_9.png" /> SAN SALVADOR<br />\
    <img style="max-width:16px; max-height:16px;" src="qgis2web_2024_05_18-18_48_51_112228/styles/legend/raster_columns_1_10.png" /> SAN VICENTE<br />\
    <img style="max-width:16px; max-height:16px;" src="qgis2web_2024_05_18-18_48_51_112228/styles/legend/raster_columns_1_11.png" /> SANTA ANA<br />\
    <img style="max-width:16px; max-height:16px;" src="qgis2web_2024_05_18-18_48_51_112228/styles/legend/raster_columns_1_12.png" /> SONSONATE<br />\
    <img style="max-width:16px; max-height:16px;" src="qgis2web_2024_05_18-18_48_51_112228/styles/legend/raster_columns_1_13.png" /> USULUTAN<br />\
    <img style="max-width:16px; max-height:16px;" src="qgis2web_2024_05_18-18_48_51_112228/styles/legend/raster_columns_1_14.png" /> ZONAS DE FRONTERAS<br />\
    <img style="max-width:16px; max-height:16px;" src="qgis2web_2024_05_18-18_48_51_112228/styles/legend/raster_columns_1_15.png" />'
        });
var format_sitios_2 = new ol.format.GeoJSON();
var features_sitios_2 = format_sitios_2.readFeatures(json_sitios_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sitios_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sitios_2.addFeatures(features_sitios_2);
var lyr_sitios_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sitios_2, 
                style: style_sitios_2,
                popuplayertitle: "sitios",
                interactive: true,
    title: 'sitios<br />\
    <img style="max-width:16px; max-height:16px;" src="qgis2web_2024_05_18-18_48_51_112228/styles/legend/sitios_2_0.png" /> Asayamba<br />\
    <img style="max-width:16px; max-height:16px;" src="qgis2web_2024_05_18-18_48_51_112228/styles/legend/sitios_2_1.png" /> Cara Sucia<br />\
    <img style="max-width:16px; max-height:16px;" src="qgis2web_2024_05_18-18_48_51_112228/styles/legend/sitios_2_2.png" /> Casa Blanca<br />\
    <img style="max-width:16px; max-height:16px;"src="qgis2web_2024_05_18-18_48_51_112228/styles/legend/sitios_2_3.png" /> Chiriquin<br />\
    <img style="max-width:16px; max-height:16px;"src="qgis2web_2024_05_18-18_48_51_112228/styles/legend/sitios_2_4.png" /> Ciudad Vieja<br />\
    <img style="max-width:16px; max-height:16px;"src="qgis2web_2024_05_18-18_48_51_112228/styles/legend/sitios_2_5.png" /> Cuevas de corinto<br />\
    <img style="max-width:16px; max-height:16px;"src="qgis2web_2024_05_18-18_48_51_112228/styles/legend/sitios_2_6.png" /> Finca San Antonio<br />\
    <img style="max-width:16px; max-height:16px;"src="qgis2web_2024_05_18-18_48_51_112228/styles/legend/sitios_2_7.png" /> Iglesia Aguacayo<br />\
    <img style="max-width:16px; max-height:16px;"src="qgis2web_2024_05_18-18_48_51_112228/styles/legend/sitios_2_8.png" /> Iglesia de Ostua<br />\
    <img style="max-width:16px; max-height:16px;"src="qgis2web_2024_05_18-18_48_51_112228/styles/legend/sitios_2_9.png" /> Igualtepeque<br />\
    <img style="max-width:16px; max-height:16px;"src="qgis2web_2024_05_18-18_48_51_112228/styles/legend/sitios_2_10.png" /> Joya de ceren<br />\
    <img style="max-width:16px; max-height:16px;"src="qgis2web_2024_05_18-18_48_51_112228/styles/legend/sitios_2_11.png" /> Las Marias<br />\
    <img style="max-width:16px; max-height:16px;"src="qgis2web_2024_05_18-18_48_51_112228/styles/legend/sitios_2_12.png" /> Quelepa<br />\
    <img style="max-width:16px; max-height:16px;"src="qgis2web_2024_05_18-18_48_51_112228/styles/legend/sitios_2_13.png" /> Rio Titihuapa<br />\
    <img style="max-width:16px; max-height:16px;"src="qgis2web_2024_05_18-18_48_51_112228/styles/legend/sitios_2_14.png" /> San Andres<br />\
    <img style="max-width:16px; max-height:16px;"src="qgis2web_2024_05_18-18_48_51_112228/styles/legend/sitios_2_15.png" /> San Miguel Ingenio SA<br />\
    <img style="max-width:16px; max-height:16px;"src="qgis2web_2024_05_18-18_48_51_112228/styles/legend/sitios_2_16.png" /> Santa Leticia<br />\
    <img style="max-width:16px; max-height:16px;"src="qgis2web_2024_05_18-18_48_51_112228/styles/legend/sitios_2_17.png" /> Santa Maria Magdalena de Tacuba<br />\
    <img style="max-width:16px; max-height:16px;"src="qgis2web_2024_05_18-18_48_51_112228/styles/legend/sitios_2_18.png" /> Tazumal<br />\
    <img style="max-width:16px; max-height:16px;"src="qgis2web_2024_05_18-18_48_51_112228/styles/legend/sitios_2_19.png" /> Tehuacan<br />\
    <img style="max-width:16px; max-height:16px;"src="qgis2web_2024_05_18-18_48_51_112228/styles/legend/sitios_2_20.png" />'
        });
var format_pol_3 = new ol.format.GeoJSON();
var features_pol_3 = format_pol_3.readFeatures(json_pol_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pol_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pol_3.addFeatures(features_pol_3);
var lyr_pol_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pol_3, 
                style: style_pol_3,
                popuplayertitle: "pol",
                interactive: true,
                title: '<img style="max-width:16px; max-height:16px;" src="qgis2web_2024_05_18-18_48_51_112228/styles/red-marker.svg" /> pol'
            });

lyr_OSMStandard_0.setVisible(true);lyr_raster_columns_1.setVisible(true);lyr_sitios_2.setVisible(true);lyr_pol_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_raster_columns_1,lyr_sitios_2,lyr_pol_3];
lyr_raster_columns_1.set('fieldAliases', {'id': 'id', 'fcode': 'fcode', 'uid': 'uid', 'asd': 'asd', 'cod': 'cod', 'ic5': 'ic5', 'na2': 'na2', 'na3': 'na3', 'nam': 'nam', 'acc': 'acc', 'ccn': 'ccn', 'sdv': 'sdv', 'sdp': 'sdp', 'srt': 'srt', 'txt': 'txt', 'area_km': 'area_km', 'perimetro': 'perimetro', });
lyr_sitios_2.set('fieldAliases', {'id': 'id', 'sitio_arq': 'sitio_arq', });
lyr_pol_3.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', 'depto': 'depto', 'municipio': 'municipio', 'coordenadas_x': 'coordenadas_x', 'coordenadas_y': 'coordenadas_y', });
lyr_raster_columns_1.set('fieldImages', {'id': 'TextEdit', 'fcode': 'TextEdit', 'uid': 'TextEdit', 'asd': 'Range', 'cod': 'Range', 'ic5': 'Range', 'na2': 'TextEdit', 'na3': 'TextEdit', 'nam': 'TextEdit', 'acc': 'Range', 'ccn': 'TextEdit', 'sdv': 'TextEdit', 'sdp': 'TextEdit', 'srt': 'Range', 'txt': 'TextEdit', 'area_km': 'TextEdit', 'perimetro': 'TextEdit', });
lyr_sitios_2.set('fieldImages', {'id': 'TextEdit', 'sitio_arq': 'TextEdit', });
lyr_pol_3.set('fieldImages', {'id': 'TextEdit', 'nombre': 'TextEdit', 'depto': 'TextEdit', 'municipio': 'TextEdit', 'coordenadas_x': 'TextEdit', 'coordenadas_y': 'TextEdit', });
lyr_raster_columns_1.set('fieldLabels', {'id': 'no label', 'fcode': 'no label', 'uid': 'no label', 'asd': 'no label', 'cod': 'no label', 'ic5': 'no label', 'na2': 'no label', 'na3': 'no label', 'nam': 'no label', 'acc': 'no label', 'ccn': 'no label', 'sdv': 'no label', 'sdp': 'no label', 'srt': 'no label', 'txt': 'no label', 'area_km': 'no label', 'perimetro': 'no label', });
lyr_sitios_2.set('fieldLabels', {'id': 'hidden field', 'sitio_arq': 'inline label - always visible', });
lyr_pol_3.set('fieldLabels', {'id': 'inline label - always visible', 'nombre': 'inline label - always visible', 'depto': 'inline label - always visible', 'municipio': 'inline label - always visible', 'coordenadas_x': 'no label', 'coordenadas_y': 'header label - visible with data', });
lyr_pol_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});