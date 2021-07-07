var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
var dataBase = null;

function validar_conexion(){
    if(navigator.onLine){
      return true;
     } else {
      return false;
     }
}

function ajax_login(datos){
    $.ajax({
        // la URL para la petición
        url : '/users',

        // la información a enviar
        // (también es posible utilizar una cadena de datos)
        data : datos,

        // especifica si será una petición POST o GET
        type : 'POST',

        // el tipo de información que se espera de respuesta
        dataType : 'json',

        // código a ejecutar si la petición es satisfactoria;
        // la respuesta es pasada como argumento a la función
        success : function(json) {
            alert("Datos enviados correctamente!");
        },

        // código a ejecutar si la petición falla;
        // son pasados como argumentos a la función
        // el objeto de la petición en crudo y código de estatus de la petición
        error : function(xhr, status) {
            alert("Disculpe, existió un problema!");
        },

        // código a ejecutar sin importar si la petición falló o no
        complete : function(xhr, status) {
            //alert('Petición realizada');
        }
    });
}


function enviar(datos){
    //algo = load(datos)
    event.preventDefault();
    ajax_login(datos);
}

function fechaActual(){
    var hoy = new Date();
    var fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
    var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
    var fechaYHora = fecha + ' ' + hora;
    return fechaYHora;
}


function startDB() {
    
    dataBase = indexedDB.open("object", 1);
    
    dataBase.onupgradeneeded = function (e) {
    
        var active = dataBase.result;                    
        var object = active.createObjectStore('inspeccion', { keyPath : 'id', autoIncrement : true });
        object.createIndex('punto', 'id', { unique : false });
        
    };
    
    dataBase.onsuccess = function (e) {
        loadAll();
    };
    
    dataBase.onerror = function (e) {
        alert('Error loading database');
    };

}

function add() {
    
    var active = dataBase.result;
    var data = active.transaction(["inspeccion"], "readwrite");
    var object = data.objectStore("inspeccion");
    fecha = fechaActual();
    
    //Iluminación
    var iluminacionvalor=document.getElementsByName('iluminacionvalor');
    for(i=0; i<iluminacionvalor.length; i++){
        if(iluminacionvalor[i].checked){
            var valoriluminacion=iluminacionvalor[i].value;
        }
    }

    //Ruido
    var ruidovalor=document.getElementsByName('ruidovalor');
    for(i=0; i<ruidovalor.length; i++){
        if(ruidovalor[i].checked){
            var valorruido=ruidovalor[i].value;
        }
    }

    //Mecánico
    var mecanicovalor=document.getElementsByName('mecanicovalor');
    for(i=0; i<mecanicovalor.length; i++){
        if(mecanicovalor[i].checked){
            var valormecanico=mecanicovalor[i].value;
        }
    }

    //Eléctrico

    //Item 1
    var electrico1valor=document.getElementsByName('electrico1valor');
    for(i=0; i<electrico1valor.length; i++){
        if(electrico1valor[i].checked){
            var valorelectrico1=electrico1valor[i].value;
        }
    }

    //Item 2
    var electrico2valor=document.getElementsByName('electrico2valor');
    for(i=0; i<electrico2valor.length; i++){
        if(electrico2valor[i].checked){
            var valorelectrico2=electrico2valor[i].value;
        }
    }

    //Item 3
    var electrico3valor=document.getElementsByName('electrico3valor');
    for(i=0; i<electrico3valor.length; i++){
        if(electrico3valor[i].checked){
            var valorelectrico3=electrico3valor[i].value;
        }
    }

    //Item 4
    var electrico4valor=document.getElementsByName('electrico4valor');
    for(i=0; i<electrico4valor.length; i++){
        if(electrico4valor[i].checked){
            var valorelectrico4=electrico4valor[i].value;
        }
    }

    //Carga Física

    //Item 1
    var cargafisica1valor=document.getElementsByName('cargafisica1valor');
    for(i=0; i<cargafisica1valor.length; i++){
        if(cargafisica1valor[i].checked){
            var valorcargafisica1=cargafisica1valor[i].value;
        }
    }

    //Item 2
    var cargafisica2valor=document.getElementsByName('cargafisica2valor');
    for(i=0; i<cargafisica2valor.length; i++){
        if(cargafisica2valor[i].checked){
            var valorcargafisica2=cargafisica2valor[i].value;
        }
    }

    //Item 3
    var cargafisica3valor=document.getElementsByName('cargafisica3valor');
    for(i=0; i<cargafisica3valor.length; i++){
        if(cargafisica3valor[i].checked){
            var valorcargafisica3=cargafisica3valor[i].value;
        }
    }

    //Item 4
    var cargafisica4valor=document.getElementsByName('cargafisica4valor');
    for(i=0; i<cargafisica4valor.length; i++){
        if(cargafisica4valor[i].checked){
            var valorcargafisica4=cargafisica4valor[i].value;
        }
    }


    //Orden y Aseo

    //Item 1
    var ordenyaseo1valor=document.getElementsByName('ordenyaseo1valor');
    for(i=0; i<ordenyaseo1valor.length; i++){
        if(ordenyaseo1valor[i].checked){
            var valorordenyaseo1=ordenyaseo1valor[i].value;
        }
    }

    //Item 2
    var ordenyaseo2valor=document.getElementsByName('ordenyaseo2valor');
    for(i=0; i<ordenyaseo2valor.length; i++){
        if(ordenyaseo2valor[i].checked){
            var valorordenyaseo2=ordenyaseo2valor[i].value;
        }
    }

    //Item 3
    var ordenyaseo3valor=document.getElementsByName('ordenyaseo3valor');
    for(i=0; i<ordenyaseo3valor.length; i++){
        if(ordenyaseo3valor[i].checked){
            var valorordenyaseo3=ordenyaseo3valor[i].value;
        }
    }

    //Item 4
    var ordenyaseo4valor=document.getElementsByName('ordenyaseo4valor');
    for(i=0; i<ordenyaseo4valor.length; i++){
        if(ordenyaseo4valor[i].checked){
            var valorordenyaseo4=ordenyaseo4valor[i].value;
        }
    }

    //Item 5
    var ordenyaseo5valor=document.getElementsByName('ordenyaseo5valor');
    for(i=0; i<ordenyaseo5valor.length; i++){
        if(ordenyaseo5valor[i].checked){
            var valorordenyaseo5=ordenyaseo5valor[i].value;
        }
    }

    //Item 6
    var ordenyaseo6valor=document.getElementsByName('ordenyaseo6valor');
    for(i=0; i<ordenyaseo6valor.length; i++){
        if(ordenyaseo6valor[i].checked){
            var valorordenyaseo6=ordenyaseo6valor[i].value;
        }
    }

    //Item 7
    var ordenyaseo7valor=document.getElementsByName('ordenyaseo7valor');
    for(i=0; i<ordenyaseo7valor.length; i++){
        if(ordenyaseo7valor[i].checked){
            var valorordenyaseo7=ordenyaseo7valor[i].value;
        }
    }

    //Item 8
    var ordenyaseo8valor=document.getElementsByName('ordenyaseo8valor');
    for(i=0; i<ordenyaseo8valor.length; i++){
        if(ordenyaseo8valor[i].checked){
            var valorordenyaseo8=ordenyaseo8valor[i].value;
        }
    }

    //Item 9
    var ordenyaseo9valor=document.getElementsByName('ordenyaseo9valor');
    for(i=0; i<ordenyaseo9valor.length; i++){
        if(ordenyaseo9valor[i].checked){
            var valorordenyaseo9=ordenyaseo9valor[i].value;
        }
    }

    //Item 10
    var ordenyaseo10valor=document.getElementsByName('ordenyaseo10valor');
    for(i=0; i<ordenyaseo10valor.length; i++){
        if(ordenyaseo10valor[i].checked){
            var valorordenyaseo10=ordenyaseo10valor[i].value;
        }
    }


    //Emergencias

    //Item 1
    var emergencias1valor=document.getElementsByName('emergencias1valor');
    for(i=0; i<emergencias1valor.length; i++){
        if(emergencias1valor[i].checked){
            var valoremergencias1=emergencias1valor[i].value;
        }
    }

    //Item 2
    var emergencias2valor=document.getElementsByName('emergencias2valor');
    for(i=0; i<emergencias2valor.length; i++){
        if(emergencias2valor[i].checked){
            var valoremergencias2=emergencias2valor[i].value;
        }
    }

    //Item 3
    var emergencias3valor=document.getElementsByName('emergencias3valor');
    for(i=0; i<emergencias3valor.length; i++){
        if(emergencias3valor[i].checked){
            var valoremergencias3=emergencias3valor[i].value;
        }
    }

    //Item 4
    var emergencias4valor=document.getElementsByName('emergencias4valor');
    for(i=0; i<emergencias4valor.length; i++){
        if(emergencias4valor[i].checked){
            var valoremergencias4=emergencias4valor[i].value;
        }
    }

    var request = object.put({
        //Inicial
        punto : document.querySelector("#punto").value,
        municipio : document.querySelector("#municipio").value.toLowerCase(),
        inspector : document.querySelector("#inspector").value, 
        vendedor : document.querySelector("#vendedor").value,
        estado : "Sin Enviar",
        fecha : fecha,
        //Iluminaciòn
        iluminacion_cumplimiento : valoriluminacion,
        iluminacion_observacion : document.querySelector("#iluminacionobs").value,
        //Ruido
        ruido_cumplimiento : valorruido,
        ruido_observacion : document.querySelector("#ruidoobs").value,
        //Mecánico
        mecanico_cumplimiento : valormecanico,
        mecanico_observacion : document.querySelector("#mecanicoobs").value,
        //Eléctrico
        electrico_cumplimiento1 : valorelectrico1,
        electrico_observacion1 : document.querySelector("#electricoobs1").value,

        electrico_cumplimiento2 : valorelectrico2,
        electrico_observacion2 : document.querySelector("#electricoobs2").value,

        electrico_cumplimiento3 : valorelectrico3,
        electrico_observacion3 : document.querySelector("#electricoobs3").value,

        electrico_cumplimiento4 : valorelectrico4,
        electrico_observacion4 : document.querySelector("#electricoobs4").value,
        //Carga Física
        carga_fisica_cumplimiento1 : valorcargafisica1,
        carga_fisica_observacion1 : document.querySelector("#cargafisicaobs1").value,

        carga_fisica_cumplimiento2 : valorcargafisica2,
        carga_fisica_observacion2 : document.querySelector("#cargafisicaobs2").value,

        carga_fisica_cumplimiento3 : valorcargafisica3,
        carga_fisica_observacion3 : document.querySelector("#cargafisicaobs3").value,

        carga_fisica_cumplimiento4 : valorcargafisica4,
        carga_fisica_observacion4 : document.querySelector("#cargafisicaobs4").value,
        //Orden y aseo
        ordenyaseo_cumplimiento1 : valorordenyaseo1,
        ordenyaseo_observacion1 : document.querySelector("#ordenyaseoobs1").value,

        ordenyaseo_cumplimiento2 : valorordenyaseo2,
        ordenyaseo_observacion2 : document.querySelector("#ordenyaseoobs2").value,

        ordenyaseo_cumplimiento3 : valorordenyaseo3,
        ordenyaseo_observacion3 : document.querySelector("#ordenyaseoobs3").value,

        ordenyaseo_cumplimiento4 : valorordenyaseo4,
        ordenyaseo_observacion4 : document.querySelector("#ordenyaseoobs4").value,

        ordenyaseo_cumplimiento5 : valorordenyaseo5,
        ordenyaseo_observacion5 : document.querySelector("#ordenyaseoobs5").value,

        ordenyaseo_cumplimiento6 : valorordenyaseo6,
        ordenyaseo_observacion6 : document.querySelector("#ordenyaseoobs6").value,

        ordenyaseo_cumplimiento7 : valorordenyaseo7,
        ordenyaseo_observacion7 : document.querySelector("#ordenyaseoobs7").value,

        ordenyaseo_cumplimiento8 : valorordenyaseo8,
        ordenyaseo_observacion8 : document.querySelector("#ordenyaseoobs8").value,

        ordenyaseo_cumplimiento9 : valorordenyaseo9,
        ordenyaseo_observacion9 : document.querySelector("#ordenyaseoobs9").value,

        ordenyaseo_cumplimiento10 : valorordenyaseo10,
        ordenyaseo_observacion10 : document.querySelector("#ordenyaseoobs10").value,
        //Emergencias
        emergencias_cumplimiento1 : valoremergencias1,
        emergencias_observacion1 : document.querySelector("#emergenciasobs1").value,

        emergencias_cumplimiento2 : valoremergencias2,
        emergencias_observacion2 : document.querySelector("#emergenciasobs2").value,

        emergencias_cumplimiento3 : valoremergencias3,
        emergencias_observacion3 : document.querySelector("#emergenciasobs3").value,

        emergencias_cumplimiento4 : valoremergencias4,
        emergencias_observacion4 : document.querySelector("#emergenciasobs4").value

    });
    data.onsuccess = function () {
        alert("Datos enviados correctamente!");
    };
    data.onerror = function (e) {
        alert(request.error.municipio + '\n\n' + request.error.message);
    };

    data.oncomplete = function (e) {
        document.querySelector('#punto').value = '';
        document.querySelector('#municipio').value = '';
        document.querySelector('#inspector').value = '';
        document.querySelector('#vendedor').value = '';
        //loadAll();
        //location.href = '/resumen';
        //pop up
        
        if (confirm("¿Deseas diligenciar otro formulario?")) {
            location.href = '/inspeccion';
        } else {
            location.href = '/resumen';
        }
    };
}

function eliminar(id) {
    var active = dataBase.result;
    var data = active.transaction(["inspeccion"], "readwrite");
    var object = data.objectStore("inspeccion");
    
    var request = object.delete(parseInt(id));
    
    request.onsuccess = function () {
        

        //loadAll();
        
    };
    
}

function load(id) {
    var conexion = validar_conexion();
    if(conexion){
        var active = dataBase.result;
        var data = active.transaction(["inspeccion"], "readwrite");
        var object = data.objectStore("inspeccion");
        
        var request = object.get(parseInt(id));
        
        request.onsuccess = function () {
            

            var result = request.result;
            
            if (result !== undefined) {
                let objeto = {
                    id: id,
                    estado: "ENVIADO",
                    inspector: result.inspector,
                    municipio: result.municipio,
                    punto: result.punto,
                    vendedor: result.vendedor,
                    fecha: fechaActual(),
                    iluminacion_cumplimiento : result.iluminacion_cumplimiento,
                    iluminacion_observacion : result.iluminacion_observacion,
                    ruido_cumplimiento : result.ruido_cumplimiento,
                    ruido_observacion : result.ruido_observacion,
                    mecanico_cumplimiento : result.mecanico_cumplimiento,
                    mecanico_observacion : result.mecanico_observacion,
                    electrico_cumplimiento1 : result.electrico_cumplimiento1,
                    electrico_observacion1 : result.electrico_observacion1,
                    electrico_cumplimiento2 : result.electrico_cumplimiento2,
                    electrico_observacion2 : result.electrico_observacion2,
                    electrico_cumplimiento3 : result.electrico_cumplimiento3,
                    electrico_observacion3 : result.electrico_observacion3,
                    electrico_cumplimiento4 : result.electrico_cumplimiento4,
                    electrico_observacion4 : result.electrico_observacion4,
                    carga_fisica_cumplimiento1 : result.carga_fisica_cumplimiento1,
                    carga_fisica_observacion1 : result.carga_fisica_observacion1,
                    carga_fisica_cumplimiento2 : result.carga_fisica_cumplimiento2,
                    carga_fisica_observacion2 : result.carga_fisica_observacion2,
                    carga_fisica_cumplimiento3 : result.carga_fisica_cumplimiento3,
                    carga_fisica_observacion3 : result.carga_fisica_observacion3,
                    carga_fisica_cumplimiento4: result.carga_fisica_cumplimiento4,
                    carga_fisica_observacion4 : result.carga_fisica_observacion4,
                    ordenyaseo_cumplimiento1 : result.ordenyaseo_cumplimiento1,
                    ordenyaseo_observacion1 : result.ordenyaseo_observacion1,
                    ordenyaseo_cumplimiento2 : result.ordenyaseo_cumplimiento2,
                    ordenyaseo_observacion2 : result.ordenyaseo_observacion2,
                    ordenyaseo_cumplimiento3 : result.ordenyaseo_cumplimiento3,
                    ordenyaseo_observacion3 : result.ordenyaseo_observacion3,
                    ordenyaseo_cumplimiento4 : result.ordenyaseo_cumplimiento4,
                    ordenyaseo_observacion4 : result.ordenyaseo_observacion4,
                    ordenyaseo_cumplimiento5 : result.ordenyaseo_cumplimiento5,
                    ordenyaseo_observacion5 : result.ordenyaseo_observacion5,
                    ordenyaseo_cumplimiento6 : result.ordenyaseo_cumplimiento6,
                    ordenyaseo_observacion6 : result.ordenyaseo_observacion6,
                    ordenyaseo_cumplimiento7 : result.ordenyaseo_cumplimiento7,
                    ordenyaseo_observacion7 : result.ordenyaseo_observacion7,
                    ordenyaseo_cumplimiento8 : result.ordenyaseo_cumplimiento8,
                    ordenyaseo_observacion8 : result.ordenyaseo_observacion8,
                    ordenyaseo_cumplimiento9 : result.ordenyaseo_cumplimiento9,
                    ordenyaseo_observacion9 : result.ordenyaseo_observacion9,
                    ordenyaseo_cumplimiento10 : result.ordenyaseo_cumplimiento10,
                    ordenyaseo_observacion10 : result.ordenyaseo_observacion10,
                    emergencias_cumplimiento1 : result.emergencias_cumplimiento1,
                    emergencias_observacion1 : result.emergencias_observacion1,
                    emergencias_cumplimiento2 : result.emergencias_cumplimiento2,
                    emergencias_observacion2 : result.emergencias_observacion2,
                    emergencias_cumplimiento3 : result.emergencias_cumplimiento3,
                    emergencias_observacion3 : result.emergencias_observacion3,
                    emergencias_cumplimiento4 : result.emergencias_cumplimiento4,
                    emergencias_observacion4 : result.emergencias_observacion4

                  };
                var requests = object.put(objeto); //request a put/update
                enviar(objeto)
                loadAll();
            }
        };
    }else{
        alert("Aún no tienes conexión para enviar los datos")
    }
    
}

function loadByDni(dni) {
    
    var active = dataBase.result;
    var data = active.transaction(["inspeccion"], "readonly");
    var object = data.objectStore("inspeccion");
    var index = object.index("botiquin");
    
    var request = index.get(String(dni));
    
    request.onsuccess = function () {
        
        var result = request.result;
        
        if (result !== undefined) {
            alert("ID: " + result.id + "\n\
            DNI: " + result.dni + "\n\
            Name: " + result.name + "\n\
            Surname: " + result.surname);
        }
    };
    
}

function loadAll() {
    var active = dataBase.result;
    var data = active.transaction(["inspeccion"], "readonly");
    var object = data.objectStore("inspeccion");
    
    var elements = [];
    
    object.openCursor().onsuccess = function (e) {
        
        var result = e.target.result;
        
        if (result === null) {
            return;
        }
        
        elements.push(result.value);
        result.continue();
        
    };
    
    data.oncomplete = function() {
        
        var outerHTML = '';
        


        for (var key in elements) {

            
            outerHTML += '\n\
            <tr>\n\
                <td>' + elements[key].id + '</td>\n\
                <td> Oficina </td>\n\
                <td>' + elements[key].punto + '</td>\n\
                <td>' + elements[key].municipio + '</td>\n\
                <td>' + elements[key].inspector + '</td>\n\
                <td>' + elements[key].vendedor + '</td>\n\
                <td>' + elements[key].fecha + '</td>\n\
                <td>' + elements[key].estado + '</td>\n\
                ';
                if (elements[key].estado != "ENVIADO") {
                    outerHTML += '<td><button type="button" onclick="load(' + elements[key].id + ');">Enviar</button>\n\
                    <button type="button" onclick="eliminar(' + elements[key].id + ');">Eliminar</button>\n\
                    </td>\n\
                    </tr>\n\
                    <table>'; 
                }else{
                    outerHTML += '<td><button type="button" onclick="#" disabled>Enviar</button>\n\
                    <button type="button" onclick="eliminar(' + elements[key].id + ');">Eliminar</button>\n\
                    </td>\n\
                    </tr>'; 
                }                       
        }
        
        elements = [];
        document.querySelector("#elementsList").innerHTML = outerHTML;
    };
    
}
       