
import { useDispatch, useSelector } from 'react-redux'
import axiosApi from '../api/api'

import { errorConsoleCatch, toggleExplorer, 
          editExplorer, finderExplorer, postExplorer,
          paginationExplorer, nextExplorer, deleteExplorer} from '../helpers'

import {defaultEditMode, usersDataPush, userDeleteView, switchUserView, editUserView} from  '../store/slices/usersSlice'
import { somethingWentWrong, somethingWentRigth } from  '../store/slices/alertSlice'






export const useUsers = () => {

  const { users, editMode } = useSelector(state => state.usersSlice)

  const dispatch = useDispatch()
  

  //"warning", "error", "success","info"
  function SweetAlertError(error){
      dispatch(somethingWentWrong(['Something Went Wrong', error?.response?.data?.errors[0]?.msg || 'working', 'error']))
  }

  // let usersLSArr =     JSON.parse(localStorage.UsersArray ) 
  // let fallUsersArr =   JSON.parse(localStorage.fallUsersArr )
  // let UserDeletedArr = JSON.parse(localStorage.UserDeletedArr) 
 
  // function UpDateDB(){
  //     fallUsersArr.length>=1 && reWrite()
  //     UserDeletedArr.length>=1 && reDelete()
  // } 

    





  const dataUsersGet = async (from=0, limit=8) => {

        

          // const { data } = await axiosApi.get(`/usuarios/${from}/${limit}`)
          // //console.log('dataUsers limit 8:', data)
          

           
            // //console.log('typeof Data', data)

            // const alls = await axiosApi.get(`/usuarios/0/${data.total}`)

            //  localStorage.UsersArray = JSON.stringify([...alls.data.usuarios, ...fallUsersArr])  



            // let usersGet = [
            //   {nombre:'juan0', correo:'juan@gmail.com', rol:'user', uid:1234561, estado:true, google:false, toggle:false, img:'https://plus.unsplash.com/premium_photo-1678233035759-89e0ab1062de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JTIwY2F0JUMzJUIzbGljYXxlbnwwfHwwfHx8MA%3D%3D' },
            //   {nombre:'juan1', correo:'juan@gmail.com', rol:'user', uid:1234562, estado:true, google:false, toggle:false, img:'https://images.unsplash.com/photo-1506451778068-985b98c0de18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JTIwY2F0JUMzJUIzbGljYXxlbnwwfHwwfHx8MA%3D%3D' },
            //   {nombre:'juan2', correo:'juan@gmail.com', rol:'user', uid:1234563, estado:true, google:false, toggle:false, img:'https://images.unsplash.com/photo-1528357136257-0c25517acfea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8JTIwY2F0JUMzJUIzbGljYXxlbnwwfHwwfHx8MA%3D%3D' },
            //   {nombre:'juan3', correo:'juan@gmail.com', rol:'user', uid:1234564, estado:true, google:false, toggle:false, img:'https://images.unsplash.com/photo-1594857373854-0314626c18e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8JTIwY2F0JUMzJUIzbGljYXxlbnwwfHwwfHx8MA%3D%3D' },
            //   {nombre:'juan4', correo:'juan@gmail.com', rol:'user', uid:1234565, estado:true, google:false, toggle:false, img:'https://images.unsplash.com/photo-1546718876-2d05e6e23046?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8JTIwY2F0JUMzJUIzbGljYXxlbnwwfHwwfHx8MA%3D%3D' },
            //   {nombre:'juan5', correo:'juan@gmail.com', rol:'user', uid:1234566, estado:true, google:false, toggle:false, img:'https://images.unsplash.com/photo-1470859685138-71dd60ed39b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fCUyMGNhdCVDMyVCM2xpY2F8ZW58MHx8MHx8fDA%3D' },
            //   {nombre:'juan6', correo:'juan@gmail.com', rol:'user', uid:1234567, estado:true, google:false, toggle:false, img:'https://plus.unsplash.com/premium_photo-1677959658600-bbb6fbcc6890?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8JTIwY2F0JUMzJUIzbGljYXxlbnwwfHwwfHx8MA%3D%3D' },
            //   {nombre:'juan7', correo:'juan@gmail.com', rol:'user', uid:1234568, estado:true, google:false, toggle:false, img:'https://images.unsplash.com/photo-1531262549175-6ede6f8a91d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fCUyMGNhdCVDMyVCM2xpY2F8ZW58MHx8MHx8fDA%3D' },
            //   {nombre:'juan8', correo:'juan@gmail.com', rol:'user', uid:1234569, estado:true, google:false, toggle:false, img:'https://plus.unsplash.com/premium_photo-1678233035754-8ea508fb30b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fCUyMGNhdCVDMyVCM2xpY2F8ZW58MHx8MHx8fDA%3D' },
            //   {nombre:'juan9', correo:'juan@gmail.com', rol:'user', uid:1234560, estado:true, google:false, toggle:false, img:'https://images.unsplash.com/photo-1553906451-86e5710d388e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fCUyMGNhdCVDMyVCM2xpY2F8ZW58MHx8MHx8fDA%3D' },
            //   {nombre:'juan10', correo:'juan@gmail.com', rol:'user', uid:12345611, estado:true, google:false, toggle:false, img:'https://images.unsplash.com/photo-1541657160149-b58d4e0d3c83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fCUyMGNhdCVDMyVCM2xpY2F8ZW58MHx8MHx8fDA%3D' },
            //   {nombre:'juan11', correo:'juan@gmail.com', rol:'user', uid:12345612, estado:true, google:false, toggle:false, img:'https://images.unsplash.com/photo-1586015530974-66bba8e530ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fCUyMGNhdCVDMyVCM2xpY2F8ZW58MHx8MHx8fDA%3D' }
            // ]


let workshops = [{"lugar":"Colegio San Jose","calle":"Salamanca 215","colonia":"Las Riberas","dia":"Lunes","hora":"8:00-10:00 AM","informes":"662123 5820","fechaDeInicio":"5 de Febrero del 2025","uid":1738005754639,"para":"Adultos"},{"lugar":"Centro Carlo Acutis","calle":"blvd. Solidaridad y Calle 3","colonia":"4 De Marzo","dia":"lunes","hora":"9:00-11:00 AM","informes":"6623599571","fechaDeInicio":"3 de Febrero del 2025","uid":1738009072459,"para":"Adultos"},{"lugar":"Parroquia Nuestra Señora Del Rosario","calle":"Mazocahui 46 ","colonia":"Villa Dorada","dia":"Jueves","hora":"9:30-11:30 AM","informes":"6622 296959","fechaDeInicio":"3 de Febrero del 2025","uid":1738009215397},{"lugar":"San Pedro Apóstol","calle":"Carretera Ures Km. 3.5","colonia":"San Pedro","dia":"Lunes","hora":"16:30-18:30","informes":"6621 11 1690","fechaDeInicio":"3 de Febrero del 2025","uid":1738009985060},{"lugar":"Domicilio Particular ","calle":"Calle San Inocencio y Timoteo #4","colonia":"Los Angeles","dia":"Lunes","hora":"18:00-20:00","informes":"662 359 9571","fechaDeInicio":"3 de Febrero del 2025","uid":1738010178135},{"lugar":"San Pio De Pietrelcina","calle":"Morelos y Michel Angelo","colonia":"Fracc. Palermo","dia":"Lunes","hora":"19:00 - 21:00","informes":"662 224 0211","fechaDeInicio":"3 de Febrero del 2025","uid":1738010415623},{"lugar":"Centro San Juan Diego","calle":"Carretera a Ures SN","colonia":"Poblado El Tronconal","dia":"Martes","hora":"16:00 - 18:00","informes":"662 183 0211","fechaDeInicio":"4 de Febrero del 2025","uid":1738010567027},{"lugar":"Centro Nuestra Señora De Guadalupe","calle":"Sierra del Sur y Campillo","colonia":"Solidaridad IV","dia":"Martes","hora":"18:00 - 20:00","informes":"662 203 0623","fechaDeInicio":"4 de Febrero del 2025","uid":1738012113475},{"lugar":"Centro San Agustin de Hipona","calle":"Cerrada Villa Paloma # 68","colonia":"Fracc. Villas De Real","dia":"Miercoles","hora":"17:00 - 19:00","informes":"662 143 2357 ","fechaDeInicio":"5 de Febrero del 2025","uid":1738012320465},{"lugar":"Centro San Pedro Apostol","calle":"Sierra Sur","colonia":"Solidaridad","dia":"Miercoles","hora":"18:00 - 20:00","informes":"662 275 9683","fechaDeInicio":"5 de Febrero del 2025","uid":1738012427926},{"lugar":"Centro San Martin","calle":"Leonardo P Gaxiola esq con Cobachi","colonia":"Eusebio Kino","dia":"Miercoles","hora":"18:00 - 20:00","informes":"662 103 1113","fechaDeInicio":"5 de Febrero del 2025","uid":1738012581894},{"lugar":"Centro Nuestra Señora De La Piedad","calle":"Olivares esq. Suaqui Grande","colonia":"Carmen Serdan","dia":"Jueves","hora":"18:00 - 20:00","informes":"662 295 2873","fechaDeInicio":"6 de Febrero del 2025","uid":1738015987188},{"lugar":"Colegio Liseo San Agustin Plantel Reforma","calle":"Blvd. Jose Maria Escriva de Balaguer 143","colonia":"Villa Del Palmar","dia":"Jueves","hora":"19:00 - 21:00","informes":"662 123 5820","fechaDeInicio":"6 de Febrero del 2025","uid":1738016153373},{"lugar":"Centro Nuestra Señora De La Caridad","calle":"Tamazula 30","colonia":"La Caridad","dia":"Viernes","hora":"18:00 - 20:00","informes":"662 149 1162","fechaDeInicio":"7 de Febrero del 2025","uid":1738016246154},{"lugar":"Centro Madre Santísima de la Luz","calle":"Querobabi 286 entre guadalupe Victoria y Reforma","colonia":"Villa Guadalupe","dia":"Lunes ","hora":"19:30 - 21:30 ","informes":"662 425 6142","fechaDeInicio":"3 de Febrero del 2025","uid":1738016421273,"para":"Jovenes"},{"lugar":"Parroquia la Resurrección","calle":"Quinta las Aves # 13","colonia":"Las Quintas ","dia":"Lunes","hora":"10:00 - 12:00 AM","informes":"662 299 0126","fechaDeInicio":"3 de Febrero del 2025","uid":1738018412329},{"lugar":"Parroquia San Juan Capistrano","calle":"San Bernardino Entre Navarrete Y Colosio","colonia":"Residencial ","dia":"Lunes","hora":"18:30 - 20:30","informes":"662 279 5643","fechaDeInicio":"3 de Febrero del 2025","uid":1738018605117},{"lugar":"Templo Divina Providencia","calle":"Calle Del Muro Esq. Con Calle Recodo #35, ","colonia":"Torreon ","dia":"Lunes","hora":"19:00 - 21:00","informes":"662 150 8313","fechaDeInicio":"3 de Febrero del 2025","uid":1738018747115},{"lugar":"Capilla Del Carmen ","calle":"Jesus Garcia #17","colonia":"Del Razo","dia":"Martes","hora":"10:00 - 12:00","informes":"662 256 4815","fechaDeInicio":"4 de Febrero del 2025","uid":1738019095733},{"lugar":"Centro Nuestra Señora Del Rosario","calle":"De Los Mayos #1392","colonia":"Sahuaro","dia":"Martes","hora":"10:00 A 12:00","informes":"662 150 8313","fechaDeInicio":"4 de Febrero del 2025","uid":1738019205939},{"lugar":"Parroquia Nuestra Señora Del Pilar","calle":"Ave. Saturnino Campoy 705 Esq.","colonia":"Sahuaro","dia":"Martes","hora":"17:30 - 19:30","informes":"662 202 9103","fechaDeInicio":"4 de Febrero del 2025","uid":1738019317988},{"lugar":"Templo Santa Teresita Del Niño Jesus ","calle":"Arroyo Los Yaquis","colonia":"Los Arroyos ","dia":"Martes","hora":"18:00 - 20:00","informes":"662 291 5004","fechaDeInicio":"4 de Febrero del 2025","uid":1738019427969},{"lugar":"Catedral Parroquia Nuestra Señora De La Asunción","calle":"Blvd. Miguel Hidalgo","colonia":"Centro","dia":"Martes","hora":"18:00 - 20:00","informes":"662 177 7776","fechaDeInicio":"4 de Febrero del 2025","uid":1738019551599,"para":"Adultos"},{"lugar":"Cuasiparroquia San Juan Maria Vianney","calle":"Blvd. Villa De Los Corceles","colonia":"Corceles Residencial","dia":"Martes","hora":"18:30 - 20:30","informes":"662 191 4674","fechaDeInicio":"4 de Febrero del 2025","uid":1738019664401},{"lugar":"Domicilio Particular","calle":"Paseo Cortes De Cadiz #63","colonia":"Las Provincias","dia":"Miercoles","hora":"10:00 A 12:00","informes":"662 191 4674","fechaDeInicio":"5 de Febrero del 2025","uid":1738019824321},{"lugar":"San Antonio De Padua","calle":"Sahuaripa Y Rio Bravo","colonia":"Centenario","dia":"Miercoles","hora":"16:00 - 18:00","informes":"662 413 1054","fechaDeInicio":"5 de Febrero del 2025","uid":1738019913825},{"lugar":"Parroquia San Peregrino","calle":"Olivares Final Y Solidaridad","colonia":"Fuentes Del Mezquital","dia":"Miercoles","hora":"16:30 - 18:30","informes":"662 282 1351","fechaDeInicio":"5 de Febrero del 2025","uid":1738019992025},{"lugar":"Santuario Divino Niño","calle":"Profr. Rosario C. Moreno # 601","colonia":"Revolucion","dia":"Miercoles","hora":"19:00 - 21:00","informes":"662 155 4007","fechaDeInicio":"5 de Febrero del 2025","uid":1738020106349},{"lugar":"Centro Nuestra Señora De Guadalupe","calle":"Blvd. Fransisco Serna Y Hermenegildo Peña","colonia":"Hacienda De La Flor","dia":"Viernes","hora":"16:00 - 18:00","informes":"662 468 6624","fechaDeInicio":"7 de Febrero del 2025","uid":1738020240438},{"lugar":"Cuasiparroquia Santa Maria De Jesus Sacramentado","calle":"Calle Alejandria 2 ","colonia":"San Bosco","dia":"Viernes","hora":"16:00 - 18:00","informes":"662 327 4269","fechaDeInicio":"7 de Febrero del 2025","uid":1738020339753},{"lugar":"Parroquia San Carlos Borromeo","calle":"Republica De Panama Y Perimetral Norte","colonia":"Alvaro Obregon","dia":"Sabado","hora":"10:00 A 12:00","informes":"662 479 8115","fechaDeInicio":"8 de Febrero del 2025","uid":1738020485892},{"lugar":"Templo San Isidoro Labrador","calle":"Concord Esquina Aeropuerto # 34","colonia":"La Manga","dia":"Sabado","hora":"16:30 - 18:30","informes":"662 467 0793","fechaDeInicio":"8 de Febrero del 2025","uid":1738020672082},{"lugar":"Parroquia Nuestra Señora De La Paz","calle":"Blvd. Carlos Quintero Arce Y Blvd. Villa Bonita","colonia":"Villa Bonita","dia":"Lunes","hora":"5:00 - 7:00 PM","informes":"662 180 4204","fechaDeInicio":"0 de Falto Fecha del ","uid":1738087000554},{"lugar":"Parroquia Cristo Rey","calle":"Herminia Valencia Esq. Blvd. Las Quintas","colonia":"Las Minitas","dia":"Martes","hora":"9:00 - 11:00 AM","informes":"662 184 8208","fechaDeInicio":"4 de Febrero del 2025","uid":1738087182737},{"lugar":"Centro Santa Teresita","calle":"Kikapues Entre Huajirios Y Mina La Carrileña","colonia":"Tirocapes","dia":"Martes","hora":"5:00 - 7:00 PM","informes":"662 112 9961","fechaDeInicio":"4 de Febrero del 2025","uid":1738087362412},{"lugar":"Santa Maria Madre De Dios","calle":"Netzahualcoyotl #100","colonia":"Cuauhtemoc","dia":"Martes","hora":"5:00 - 7:00 PM","informes":"662 450 5600","fechaDeInicio":"4 de Febrero del 2025","uid":1738087524697},{"lugar":"Centro Santa Eduwiges","calle":"Calle San Jorge #5","colonia":"Palo Verde","dia":"Miercoles","hora":"4:30 - 6:30 PM","informes":"662 244 6136","fechaDeInicio":"5 de Febrero del 2025","uid":1738087876384},{"lugar":"San Juan 23","calle":"San Pedro Y San Pablo","colonia":"Las Placitas","dia":"Miercoles","hora":"5:00 - 7:00 PM","informes":"662 171 3268","fechaDeInicio":"5 de Febrero del 2025","uid":1738087991797},{"lugar":"Santo Niño De Atocha","calle":"Emiliano Zapata E Hilario Olea","colonia":"Palo Verde","dia":"Miercoles","hora":"5:00 - 7:00 PM","informes":"662 226 9770","fechaDeInicio":"5 de Febrero del 2025","uid":1738088249065},{"lugar":"Santa Cruz","calle":"Calle Del Cerro Y Labradores","colonia":"Villa Hermosa","dia":"Miercoles","hora":"5:00 - 7:00 PM","informes":"662 221 8989","fechaDeInicio":"5 de Febrero del 2025","uid":1738088353386},{"lugar":"Natividad De Señor","calle":"Alfonso Lopez Riesgo #154","colonia":"Altares","dia":"Miercoles","hora":"9:00 - 11:00 AM","informes":"662 131 6501","fechaDeInicio":"5 de Febrero del 2025","uid":1738088461252},{"lugar":"Nuestra Señora De Los Angeles","calle":"Blvd. San Angel Entre San Pablo Y San Blas","colonia":"San Angel","dia":"Jueves","hora":"6:00 - 8:00 PM","informes":"662 124 2081","fechaDeInicio":"6 de Febrero del 2025","uid":1738090461847},{"lugar":"Centro San Agustin","calle":"Sierra Del Sol S/N","colonia":"Residencial Gala","dia":"VIERNES","hora":"9-11 AM / 6-8 PM","informes":"662 124 2081","fechaDeInicio":"7 de Febrero del 2025","uid":1738090599208},{"lugar":"Parroquia San Jose ","calle":"Blvd. Vildosola 194","colonia":"Piedra Bola","dia":"Viernes","hora":"7:00 - 9:00 PM","informes":"662 171 3268","fechaDeInicio":"22 de Agosto del 2025","uid":1738090674055,"para":"Matrimonios"},{"lugar":"Parroquia San Francisco De Asis","calle":"Gpe Victoria","colonia":"Balderrama","dia":"Lunes","hora":"6 - 8 PM","informes":"662 948 2877","fechaDeInicio":"3 de Febrero del 2025","uid":1738173256224},{"lugar":"Nuestra Señora De Fatima","calle":"Zacatecas 192 ","colonia":"San Benito","dia":"Martes","hora":"10 - 12 AM","informes":"662 244 8622","fechaDeInicio":"4 de Febrero del 2025","uid":1738173477070},{"lugar":"Centro Señor De La Misericordia","calle":"Jardin De Las Montañnas #35 Esq. Veracruz","colonia":"Lomas Del Pitic","dia":"Martes","hora":"4 - 6 PM","informes":"662 282 3297","fechaDeInicio":"4 de Febrero del 2025","uid":1738173595163},{"lugar":"Parroquia De La Sagrada Familia","calle":"Oviachic Y Palmino","colonia":"Ranchito","dia":"Martes","hora":"5 - 7 PM","informes":"662 257 1789","fechaDeInicio":"4 de Febrero del 2025","uid":1738173735520},{"lugar":"Parroquia Santa Eduwiges","calle":"Perimetral Oeste Y Tabasco Norte","colonia":"Modelo","dia":"Miercoles","hora":"10 - 12 HRS","informes":"662 188 2985","fechaDeInicio":"5 de Febrero del 2025","uid":1738173896238},{"lugar":"Parroquia San Juan Bosco","calle":"Calle Othon Almada, Esq. Lopez Del Castillo","colonia":"Olivares","dia":"Miercoles","hora":"10:00 A 12:00 HRS","informes":"662 124 9261","fechaDeInicio":"5 de Febrero del 2025","uid":1738174000279},{"lugar":"Parroquia Sagrado Corazon De Jesus","calle":"Rayon Y Hermenegildo Rangel Lugo","colonia":"5 De Mayo","dia":"Miercoles","hora":"6:30 - 8:30 PM","informes":"662 204 0302","fechaDeInicio":"5 de Febrero del 2025","uid":1738174146889},{"lugar":"Parroquia San Juan Bosco","calle":"Calle Othon Almada, Esq. Lopez Del Castillo","colonia":"Olivares","dia":"Miercoles","hora":"7 - 9 PM","informes":"662 188 2985","fechaDeInicio":"5 de Febrero del 2025","uid":1738174283848},{"lugar":"Centro Nuestra Señora De Los Angeles","calle":"12 De Octubre #302 Esq. Baca Calderon","colonia":"Balderrama","dia":"Miercoles","hora":"5 - 7 PM","informes":"662 368 2514","fechaDeInicio":"5 de Febrero del 2025","uid":1738174451674},{"lugar":"Centro San Pablo Apostol","calle":"Callejon Margarita Maza De Juarez 7","colonia":"Apolo","dia":"Miercoles","hora":"6 - 8 PM","informes":"662 115 3129","fechaDeInicio":"5 de Febrero del 2025","uid":1738174686096},{"lugar":"Casa De La Misericordia","calle":"Alfredo Eguiarte Calle 1 #171","colonia":"Jesus Garcia","dia":"Miercoles","hora":"5 - 7 PM","informes":"662 476 4496","fechaDeInicio":"5 de Febrero del 2025","uid":1738174793387},{"lugar":"Centro San Cristobal Magallanes","calle":"Israel Gonzales Esq. Poder Legislativo","colonia":"Mision Del Sol","dia":"Jueves","hora":"6:30 - 8:30 PM","informes":"662 186 8124","fechaDeInicio":"6 de Febrero del 2025","uid":1738174910783},{"lugar":"Domicilio Particular","calle":"Esteban Baca Calderon #263","colonia":"Balderrama","dia":"Viernes","hora":"10:00 A 12:00 HRS","informes":"662 299 9452","fechaDeInicio":"7 de Febrero del 2025","uid":1738175026748},{"lugar":"Parroquia Sagrado Corazon De Jesus","calle":"Rayon Y Hermegildo Rangel Lugo","colonia":"5 De Mayo","dia":"Martes","hora":"7 - 8:45 PM","informes":"662 103 0363","fechaDeInicio":"11 de Febrero del 2025","uid":1738175198492,"para":"Jovenes"},{"lugar":"Casa Particular","calle":"Jaime Nuno #43 Entre Juan G Cabral Y Juan José Ríos","colonia":"Periodista","dia":"Miércoles","hora":"8 Pm - 9:45 Pm","informes":"662 174 3403","fechaDeInicio":"19 de Febrero del 2025","uid":1738175309665,"para":"Jovenes"},{"lugar":"Centro San Cristobal Magallanes","calle":"Israel Gonzales Esq. Poder Legislativo","colonia":"Mision Del Sol","dia":"Miercoles","hora":"7 - 8:45 PM","informes":"662 223 0168","fechaDeInicio":"12 de Febrero del 2025","uid":1738175446893,"para":"Jovenes"},{"lugar":"Templo Santa Rosa De Lima","calle":"Avenida 7 #50 Entre Calle 1 Y 2","colonia":"Bugambilias","dia":"Martes","hora":"6:30 - 8:15 PM","informes":"642 114 5111","fechaDeInicio":"11 de Febrero del 2025","uid":1738175574279,"para":"Jovenes"},{"lugar":"Casa De La Misericordia","calle":"Alfredo Eguiarte Calle 1 #171","colonia":"Jesus Garcia","dia":"Viernes","hora":"6 - 8 PM","informes":"662 948 2877","fechaDeInicio":"7 de Febrero del 2025","uid":1738175721318,"para":"Matrimonios"},{"lugar":"Catedral Metropolitana","calle":"Blvd. Hidalgo","colonia":"Centenario","dia":"Domingo","hora":"5:00 - 6:30 PM","informes":"662 137 0645","fechaDeInicio":"12 de Enero del 2025","para":"Jovenes","uid":1738706897576}]

            // if(localStorage.UsersArray == undefined){
            //     localStorage.UsersArray = JSON.stringify(workshops)
            //     dispatch(usersDataPush(workshops)) 
            // }  
            
               localStorage.UsersArray = JSON.stringify(workshops) //comentar en desarrollo
               dispatch(usersDataPush(workshops)) // comentar en desarrollo
              
            // localStorage.UsersTotal = JSON.stringify(JSON.parse(localStorage.UsersArray).length)
            // localStorage.step = '8'
        
            dispatch(usersDataPush({usuarios:JSON.parse(localStorage.UsersArray)}))

            // localStorage.UsersTotal = data.total  
            // paginationSelect(8)
      
      try { 
      } catch (error) {
          dispatch(usersDataPush({usuarios: usersLSArr})) 
          paginationSelect(8)
          localStorage.UsersTotal = usersLSArr.length

          SweetAlertError(error)
          errorConsoleCatch('dataUsersGet:',error)
      }
  }



  



/* -=-=-=-=-=-=-=-=-=--=- POST =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- post =-=-=-=-=-=-=-=-=-=-=- */
/* -=-=-=-=-=-=-=-=-=--=- POST =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- post =-=-=-=-=-=-=-=-=-=-=- */
/* -=-=-=-=-=-=-=-=-=--=- POST =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- post =-=-=-=-=-=-=-=-=-=-=- */

// online solo arriba
// offline abajo + arriba 

  const postUser = async ({ lugar,calle,colonia,dia,hora,informes,fechaDeInicio,para }) => {

          let curretUsers = JSON.parse(localStorage.UsersArray)
          

          curretUsers.push({ lugar,calle,colonia,dia,hora,informes,fechaDeInicio,para, uid:Date.now() })
          localStorage.UsersArray = JSON.stringify(curretUsers)
          dispatch(usersDataPush({usuarios:JSON.parse(localStorage.UsersArray)}))

      try {
          // const { newArray } = postExplorer(false, { nombre, correo, password })
          // dispatch(usersDataPush({usuarios:newArray})) 

          // const { data } = await axiosApi.post('/usuarios', { nombre, correo, password })
          // dispatch(usersDataPush({usuarios:[data.usuario]})) 
          // console.log('data', data)
          // UpDateDB()



      } catch (error) {  // aqui se ejecuta cuando esta offline
          const { newArray } = postExplorer(true, { nombre, correo, password })
          dispatch(usersDataPush({usuarios: newArray})) 

          //SweetAlertError(error)
          /* errorConsoleCatch(error) */
      }  
  }




  // function reWrite() {
  //     for (let index = 0; index < fallUsersArr.length; index++) {  
  //         const { nombre, correo, password, uid } = fallUsersArr[index]
  //         reWriteId({ nombre, correo, password, uid })
  //     } 

  //     localStorage.fallUsersArr = '[]'  
  // }



  // function reDelete() {  
  //     for (let index = 0; index < UserDeletedArr.length; index++) {  
  //         const { uid } = UserDeletedArr[index]
  //         reDeleteById({ uid })
  //     } 

  //     localStorage.UserDeletedArr = '[]'
  // }




  // async function reWriteId({ nombre, correo, password, uid }){
  //     try {

  //         if(uid.slice(0,8) === 'frontend'){
  //             const { data } = await axiosApi.post('/usuarios', { nombre, correo, password }) 
  //             console.log('objs with new Mongo Id', data)
  //         }else{
  //           const { data } = await axiosApi.put(`/usuarios/${uid}`, { nombre, correo })
  //           console.log('objs with new Edit save', data)
  //         } 
    
  //     } catch (error) {  // aqui se ejecuta cuando esta offline
  //         console.log('reWriteId error :>>', error)
  //         //SweetAlertError(error)
  //         errorConsoleCatch(error)
  //     } 
  // }




  // async function reDeleteById({ uid }){
  //     try {
  //         if(uid.slice(0,8) === 'frontend'){
  //             console.log('no Delete in DB cose there is not there')
  //         }else{
  //             await axiosApi.delete(`/usuarios/${uid}`) 
  //             console.log('objs Deleted of DB')
  //         } 
  //     } catch (error) {  // aqui se ejecuta cuando esta offline
  //         console.log('reDeleteById error :>>', error)
  //         //SweetAlertError(error)
  //         errorConsoleCatch(error)
  //     } 
  // }


/* -=-=-=-=-=-=-=-=-=--=- POST END =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- post end =-=-=-=-=-=-=-=-=-=-=- */
/* -=-=-=-=-=-=-=-=-=--=- POST END =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- post end =-=-=-=-=-=-=-=-=-=-=- */
/* -=-=-=-=-=-=-=-=-=--=- POST END =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- post end =-=-=-=-=-=-=-=-=-=-=- */














  const setInfoToForm = (el:Object) => {
       dispatch(editUserView(el))
   }





  const newDataEdit = async (lugar,calle,colonia,dia,hora,informes,fechaDeInicio,para, uid) => { 


          let curretUsers = JSON.parse(localStorage.UsersArray)

          let editedUsers = curretUsers.map((el) => (el.uid === uid ? {...editMode, lugar,calle,colonia,dia,hora,informes,fechaDeInicio,para} : el))
         
          localStorage.UsersArray = JSON.stringify(editedUsers)

          dispatch(usersDataPush({usuarios:JSON.parse(localStorage.UsersArray)}))

          dispatch(defaultEditMode()) 

      try {


          // const { objTarget } = editExplorer(false, {uid}, fallUsersArr, usersLSArr, {nombre}, {correo})
          // dispatch( usersDataPush({usuarios:[objTarget]}))
        
          // await axiosApi.put(`/usuarios/${uid}`, { nombre, correo })
          // UpDateDB()
      } catch (error) {
          console.log('newDataEdit error :>>', error)
          const { objTarget } = editExplorer(true, {uid}, fallUsersArr, usersLSArr, {nombre}, {correo})
          dispatch( usersDataPush({usuarios:[objTarget]}))

          dispatch(defaultEditMode()) 
          //SweetAlertError(error)
          errorConsoleCatch(error)
      }
      
  }



  const defaultModeEdith = () => {
      dispatch(defaultEditMode())
  }




  const deleteUser = async (usuario: Object) => {

          let curretUsers = JSON.parse(localStorage.UsersArray)
          let del = curretUsers.filter((el) => el.uid !== usuario.uid)
          localStorage.UsersArray = JSON.stringify(del)
          dispatch(usersDataPush({usuarios:JSON.parse(localStorage.UsersArray)}))
          dispatch(somethingWentRigth(['Taller fue Borrado', usuario.colonia + ' ya no existe ', 'success']))

      try {
          // const { usuarios } = deleteExplorer(usuario.uid, usersLSArr, fallUsersArr)
          // dispatch(userDeleteView({usuarios:usuarios})) 

          // await axiosApi.delete(`/usuarios/${usuario.uid}`) 
          // dispatch(somethingWentRigth(['Usuario fue Borrado', usuario.correo + ' ya no existe ', 'success']))
          // UpDateDB()
      } catch (error) {
          console.log('deleteUser error :>>', error)
          //SweetAlertError(error)
          errorConsoleCatch(error)
      } 
  }




  // const switchUser = async (usuario) => {

  //         let curretUsers = JSON.parse(localStorage.UsersArray)
         
  //         curretUsers.map((el) => (el.uid === usuario.uid ? (el.toggle = !el.toggle) : el))
  //         localStorage.UsersArray = JSON.stringify(curretUsers)

  //         dispatch(switchUserView({usuarios:JSON.parse(localStorage.UsersArray)}))
  //         dispatch(somethingWentRigth(['Usuario switched', usuario.toggle + ' to ' + !usuario.toggle , 'success']))

  //     try {
  //         // const { objTarget } = toggleExplorer(false, {uid}, usuario, 'toggle', usersLSArr, fallUsersArr) 
  //         // dispatch(switchUserView({usuarios:[objTarget]})) 
          
  //         // await axiosApi.patch(`/usuarios/toggle/${usuario.uid}`)
  //         // dispatch(somethingWentRigth(['Usuario switched', usuario.toggle + ' to ' + objTarget.toggle , 'success']))

  //         // UpDateDB()
  //     } catch (error) {
  //         console.log('switchUser error :>>', error)
  //         const { objTarget } = toggleExplorer(true, {uid}, usuario, 'toggle', usersLSArr, fallUsersArr)
  //         dispatch(switchUserView({usuarios:[objTarget]}))  
  //         //SweetAlertError(error) 
  //         errorConsoleCatch(error) 
  //     } 
  // }
  



  // const uploadUserImg = async(uid, file) => {

  //   console.log(file)
  //   localStorage.setItem("urlImgLSRedux", URL.createObjectURL(file));
  //     try {
  //         // const { data } = await axiosApi.put(`/uploads/usuarios/${uid}`, {file},{
  //         // headers: {
  //         //   "Content-Type": "multipart/form-data",
  //         // }})

  //         // dispatch(somethingWentRigth(['Foto fue Actualizada', 'Con Exito!!', 'success']))  

  //         // let img = data.img
  //         // const { objTarget } = editExplorer(false, {uid}, [], users.usuarios, {img})
  //         // dispatch(usersDataPush({ usuarios:[objTarget] })) 
  //         // UpDateDB()  
  //     } catch (error) {
  //         console.log('switchUser error :>>', error)
  //         SweetAlertError(error)
  //         errorConsoleCatch(error)
  //     }
  // }






  const usersFinder = async (v:String, colonia) => {



        if(colonia==='colonia'){

            if(v.length > 3){
                const { upFirstLe, upperCase, lowerCase } = finderExplorer(v, colonia)

                // console.log(upFirstLe, upperCase, lowerCase)
              
                dispatch(usersDataPush( {usuarios:[...upFirstLe, ...upperCase, ...lowerCase ]} ))
 
            }else{
                dispatch(usersDataPush({usuarios:JSON.parse(localStorage.UsersArray)}))
            }


        }else{





                if(colonia==='Jovenes' || colonia==='Matrimonios'){

                            const { upFirstLe } = finderExplorer(v, colonia)

                            dispatch(usersDataPush( {usuarios:upFirstLe} ))

                }else{
                       // LUGAR ============
                    if(v.length > 3){
                        const { upFirstLe, upperCase, lowerCase } = finderExplorer(v)

                            // console.log(upFirstLe, upperCase, lowerCase)

                            // upFirstLe.length>=1 ? dispatch(usersDataPush({usuarios:upFirstLe})): null
                            // upperCase.length>=1 ? dispatch(usersDataPush({usuarios:upperCase})): null
                            // lowerCase.length>=1 ? dispatch(usersDataPush({usuarios:lowerCase})): null
                          // emailFind.length>=1 ? dispatch(usersDataPush({usuarios:emailFind})): null
              
                                dispatch(usersDataPush( {usuarios:[...upFirstLe, ...upperCase, ...lowerCase ]} ))
              
                            /*const {data} = await axiosApi.get(`/buscar/usuarios/${v}`) 
                            dispatch(usersDataPush({usuarios:data.results}))  */ 
                      }else{
                                dispatch(usersDataPush({usuarios:JSON.parse(localStorage.UsersArray)}))
                      }
                }

           


        }

          




      try {

      } catch (error) {
          console.log('usersFinder error :>>', error)
          SweetAlertError(error)
          errorConsoleCatch(error)
      }
  }


  // const paginationSelect=(v:Number)=>{
  //     const { arr } = paginationExplorer(v)
  //     dispatch(usersDataPush({usuarios: arr }) ) 
  //     /*  dataUsersGet(v -8, v) */ 
  // }


  // const paginationNext =(boo:Boolean, n=8)=>{
  //     const { arr } = nextExplorer(boo, n)
  //     dispatch(usersDataPush({usuarios: arr }) )
  //     // let step = localStorage.step
  //     // dataUsersGet(step -n, step) 
  // }






  return {
    dataUsersGet,
    deleteUser,
    // switchUser,
    postUser,

    //edit
    setInfoToForm,
    newDataEdit,
    defaultModeEdith,
    // uploadUserImg,
    //finder
    usersFinder,
    // paginationSelect,
    // paginationNext,


    //states
    editMode,
    users,
  }
}
