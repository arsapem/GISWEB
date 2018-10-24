var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Terrain',
    'type': 'base',
    source: new ol.source.Stamen({
        layer: 'terrain'
    })
})
]
});
var format_Red_Cloaca_0 = new ol.format.GeoJSON();
var features_Red_Cloaca_0 = format_Red_Cloaca_0.readFeatures(json_Red_Cloaca_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Red_Cloaca_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Red_Cloaca_0.addFeatures(features_Red_Cloaca_0);var lyr_Red_Cloaca_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Red_Cloaca_0, 
                style: style_Red_Cloaca_0,
                title: '<img src="styles/legend/Red_Cloaca_0.png" /> Red_Cloaca'
            });var format_Red_Agua_1 = new ol.format.GeoJSON();
var features_Red_Agua_1 = format_Red_Agua_1.readFeatures(json_Red_Agua_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Red_Agua_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Red_Agua_1.addFeatures(features_Red_Agua_1);var lyr_Red_Agua_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Red_Agua_1, 
                style: style_Red_Agua_1,
                title: '<img src="styles/legend/Red_Agua_1.png" /> Red_Agua'
            });var format_Barrios_2 = new ol.format.GeoJSON();
var features_Barrios_2 = format_Barrios_2.readFeatures(json_Barrios_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Barrios_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Barrios_2.addFeatures(features_Barrios_2);var lyr_Barrios_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Barrios_2, 
                style: style_Barrios_2,
                title: '<img src="styles/legend/Barrios_2.png" /> Barrios'
            });var format_Clientes_3 = new ol.format.GeoJSON();
var features_Clientes_3 = format_Clientes_3.readFeatures(json_Clientes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clientes_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Clientes_3.addFeatures(features_Clientes_3);var lyr_Clientes_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Clientes_3, 
                style: style_Clientes_3,
                title: '<img src="styles/legend/Clientes_3.png" /> Clientes'
            });var format_Calles_4 = new ol.format.GeoJSON();
var features_Calles_4 = format_Calles_4.readFeatures(json_Calles_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Calles_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Calles_4.addFeatures(features_Calles_4);var lyr_Calles_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Calles_4, 
                style: style_Calles_4,
                title: '<img src="styles/legend/Calles_4.png" /> Calles'
            });

lyr_Red_Cloaca_0.setVisible(true);lyr_Red_Agua_1.setVisible(true);lyr_Barrios_2.setVisible(true);lyr_Clientes_3.setVisible(true);lyr_Calles_4.setVisible(true);
var layersList = [baseLayer,lyr_Red_Cloaca_0,lyr_Red_Agua_1,lyr_Barrios_2,lyr_Clientes_3,lyr_Calles_4];
lyr_Red_Cloaca_0.set('fieldAliases', {'id': 'id', 'codigo': 'codigo', 'material': 'material', 'diametro': 'diametro', 'forma': 'forma', 'ubicación': 'ubicación', 'pavimento_': 'pavimento_', 'observacio': 'observacio', 'nodo_ini': 'nodo_ini', 'nodo_fin': 'nodo_fin', 'prof_ini': 'prof_ini', 'reg_prof_i': 'reg_prof_i', 'resp_reg_i': 'resp_reg_i', 'fech_carga_reg_i': 'fech_carga_reg_i', 'prof_fin': 'prof_fin', 'reg_prof_f': 'reg_prof_f', 'resp_reg_f': 'resp_reg_f', 'fech_carga_reg_f': 'fech_carga_reg_f', 'coef_manni': 'coef_manni', 'desn_ini': 'desn_ini', 'desn_fin': 'desn_fin', 'cota_int_i': 'cota_int_i', 'cota_inv_i': 'cota_inv_i', 'cota_int_f': 'cota_int_f', 'cota_inv_f': 'cota_inv_f', 'shape_leng': 'shape_leng', 'enabled': 'enabled', 'fech_inic_': 'fech_inic_', 'fecha_ejec': 'fecha_ejec', 'reg_prof_i2': 'reg_prof_i2', 'fecha_reg_prof_i2': 'fecha_reg_prof_i2', 'reg_prof_f2': 'reg_prof_f2', 'fecha_reg_prof_f2': 'fecha_reg_prof_f2', 'Extr Ventilado': 'Extr Ventilado', });
lyr_Red_Agua_1.set('fieldAliases', {'id': 'id', 'objectid': 'objectid', 'codigo': 'codigo', 'material': 'material', 'dwe_mm': 'dwe_mm', 'di_mm': 'di_mm', 'dn': 'dn', 'lm': 'lm', 'lc': 'lc', 'ubicacion': 'ubicacion', 'pavimento': 'pavimento', 'profundida': 'profundida', 'estado': 'estado', 'puestaserv': 'puestaserv', 'observacio': 'observacio', 'verificado': 'verificado', 'fechaverif': 'fechaverif', 'registro': 'registro', 'respreg': 'respreg', 'enabled': 'enabled', 'shape_leng': 'shape_leng', 'Tipo_Red': 'Tipo_Red', });
lyr_Barrios_2.set('fieldAliases', {'gid': 'gid', 'objectid': 'objectid', 'handle': 'handle', 'text': 'text', 'shape_area': 'shape_area', 'shape_len': 'shape_len', 'ID_BARRIO': 'ID_BARRIO', });
lyr_Clientes_3.set('fieldAliases', {'gid': 'gid', 'objectid': 'objectid', 'unidad': 'unidad', 'lote': 'lote', 'NIS': 'NIS', 'Nombre': 'Nombre', 'Calle': 'Calle', 'Numero': 'Numero', 'Datos_Comp': 'Datos_Comp', 'Telefono': 'Telefono', 'Unificado': 'Unificado', 'Celular': 'Celular', 'Fax': 'Fax', 'Telefono_l': 'Telefono_l', 'EMail': 'EMail', 'Barrio': 'Barrio', 'Codigo_Bar': 'Codigo_Bar', });
lyr_Calles_4.set('fieldAliases', {'gid': 'gid', 'objectid_1': 'objectid_1', 'objectid': 'objectid', 'handle': 'handle', 'text': 'text', 'shape_len': 'shape_len', });
lyr_Red_Cloaca_0.set('fieldImages', {'id': 'TextEdit', 'codigo': 'TextEdit', 'material': 'TextEdit', 'diametro': 'TextEdit', 'forma': 'TextEdit', 'ubicación': 'TextEdit', 'pavimento_': 'TextEdit', 'observacio': 'TextEdit', 'nodo_ini': 'TextEdit', 'nodo_fin': 'TextEdit', 'prof_ini': 'TextEdit', 'reg_prof_i': 'TextEdit', 'resp_reg_i': 'TextEdit', 'fech_carga_reg_i': 'TextEdit', 'prof_fin': 'TextEdit', 'reg_prof_f': 'TextEdit', 'resp_reg_f': 'TextEdit', 'fech_carga_reg_f': 'TextEdit', 'coef_manni': 'TextEdit', 'desn_ini': 'TextEdit', 'desn_fin': 'TextEdit', 'cota_int_i': 'TextEdit', 'cota_inv_i': 'TextEdit', 'cota_int_f': 'TextEdit', 'cota_inv_f': 'TextEdit', 'shape_leng': 'TextEdit', 'enabled': 'TextEdit', 'fech_inic_': 'TextEdit', 'fecha_ejec': 'TextEdit', 'reg_prof_i2': 'TextEdit', 'fecha_reg_prof_i2': 'TextEdit', 'reg_prof_f2': 'TextEdit', 'fecha_reg_prof_f2': 'TextEdit', 'Extr Ventilado': 'TextEdit', });
lyr_Red_Agua_1.set('fieldImages', {'id': 'TextEdit', 'objectid': 'TextEdit', 'codigo': 'TextEdit', 'material': 'TextEdit', 'dwe_mm': 'TextEdit', 'di_mm': 'TextEdit', 'dn': 'TextEdit', 'lm': 'TextEdit', 'lc': 'TextEdit', 'ubicacion': 'TextEdit', 'pavimento': 'TextEdit', 'profundida': 'TextEdit', 'estado': 'TextEdit', 'puestaserv': 'TextEdit', 'observacio': 'TextEdit', 'verificado': 'TextEdit', 'fechaverif': 'TextEdit', 'registro': 'TextEdit', 'respreg': 'TextEdit', 'enabled': 'TextEdit', 'shape_leng': 'TextEdit', 'Tipo_Red': 'TextEdit', });
lyr_Barrios_2.set('fieldImages', {'gid': 'TextEdit', 'objectid': 'TextEdit', 'handle': 'TextEdit', 'text': 'TextEdit', 'shape_area': 'TextEdit', 'shape_len': 'TextEdit', 'ID_BARRIO': 'TextEdit', });
lyr_Clientes_3.set('fieldImages', {'gid': 'TextEdit', 'objectid': 'TextEdit', 'unidad': 'TextEdit', 'lote': 'TextEdit', 'NIS': 'TextEdit', 'Nombre': 'TextEdit', 'Calle': 'TextEdit', 'Numero': 'TextEdit', 'Datos_Comp': 'TextEdit', 'Telefono': 'TextEdit', 'Unificado': 'TextEdit', 'Celular': 'TextEdit', 'Fax': 'TextEdit', 'Telefono_l': 'TextEdit', 'EMail': 'TextEdit', 'Barrio': 'TextEdit', 'Codigo_Bar': 'TextEdit', });
lyr_Calles_4.set('fieldImages', {'gid': 'TextEdit', 'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'handle': 'TextEdit', 'text': 'TextEdit', 'shape_len': 'TextEdit', });
lyr_Red_Cloaca_0.set('fieldLabels', {'id': 'no label', 'codigo': 'no label', 'material': 'no label', 'diametro': 'no label', 'forma': 'no label', 'ubicación': 'no label', 'pavimento_': 'no label', 'observacio': 'no label', 'nodo_ini': 'no label', 'nodo_fin': 'no label', 'prof_ini': 'no label', 'reg_prof_i': 'no label', 'resp_reg_i': 'no label', 'fech_carga_reg_i': 'no label', 'prof_fin': 'no label', 'reg_prof_f': 'no label', 'resp_reg_f': 'no label', 'fech_carga_reg_f': 'no label', 'coef_manni': 'no label', 'desn_ini': 'no label', 'desn_fin': 'no label', 'cota_int_i': 'no label', 'cota_inv_i': 'no label', 'cota_int_f': 'no label', 'cota_inv_f': 'no label', 'shape_leng': 'no label', 'enabled': 'no label', 'fech_inic_': 'no label', 'fecha_ejec': 'no label', 'reg_prof_i2': 'no label', 'fecha_reg_prof_i2': 'no label', 'reg_prof_f2': 'no label', 'fecha_reg_prof_f2': 'no label', 'Extr Ventilado': 'no label', });
lyr_Red_Agua_1.set('fieldLabels', {'id': 'no label', 'objectid': 'no label', 'codigo': 'no label', 'material': 'no label', 'dwe_mm': 'no label', 'di_mm': 'no label', 'dn': 'no label', 'lm': 'no label', 'lc': 'no label', 'ubicacion': 'no label', 'pavimento': 'no label', 'profundida': 'no label', 'estado': 'no label', 'puestaserv': 'no label', 'observacio': 'no label', 'verificado': 'no label', 'fechaverif': 'no label', 'registro': 'no label', 'respreg': 'no label', 'enabled': 'no label', 'shape_leng': 'no label', 'Tipo_Red': 'no label', });
lyr_Barrios_2.set('fieldLabels', {'gid': 'no label', 'objectid': 'no label', 'handle': 'no label', 'text': 'header label', 'shape_area': 'no label', 'shape_len': 'no label', 'ID_BARRIO': 'no label', });
lyr_Clientes_3.set('fieldLabels', {'gid': 'no label', 'objectid': 'no label', 'unidad': 'no label', 'lote': 'no label', 'NIS': 'no label', 'Nombre': 'no label', 'Calle': 'no label', 'Numero': 'no label', 'Datos_Comp': 'no label', 'Telefono': 'no label', 'Unificado': 'no label', 'Celular': 'no label', 'Fax': 'no label', 'Telefono_l': 'no label', 'EMail': 'no label', 'Barrio': 'no label', 'Codigo_Bar': 'no label', });
lyr_Calles_4.set('fieldLabels', {'gid': 'no label', 'objectid_1': 'no label', 'objectid': 'no label', 'handle': 'no label', 'text': 'no label', 'shape_len': 'no label', });
lyr_Calles_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});