



export const finderExplorer=(v, colonia='')=>{

    function capitalizeFirstLetter(v) {
        // return v.charAt(0).toUpperCase() + v.slice(1)
        return v.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase());
    }

    let UpFirstLetter = capitalizeFirstLetter(v.toLowerCase())

let upFirstLe = ''
let upperCase = ''
   let lowerCase = ''

      if(colonia==='colonia'){
            let upFirstLe = JSON.parse(localStorage.UsersArray).filter((el) => el.colonia.indexOf(  UpFirstLetter) > -1)
            let upperCase = JSON.parse(localStorage.UsersArray).filter((el) => el.colonia.indexOf(v.toUpperCase()) > -1)
            let lowerCase = JSON.parse(localStorage.UsersArray).filter((el) => el.colonia.indexOf(v.toLowerCase()) > -1)

                 return{ 
        upFirstLe, 
        upperCase,    
        lowerCase,     
        //emailFind   
    }

      }else{
            let upFirstLe = JSON.parse(localStorage.UsersArray).filter((el) => el.lugar.indexOf(  UpFirstLetter) > -1)
            let upperCase = JSON.parse(localStorage.UsersArray).filter((el) => el.lugar.indexOf(v.toUpperCase()) > -1)
            let lowerCase = JSON.parse(localStorage.UsersArray).filter((el) => el.lugar.indexOf(v.toLowerCase()) > -1)

             return{ 
        upFirstLe, 
        upperCase,    
        lowerCase,     
        //emailFind   
    }
      }



    
 


    //let emailFind = JSON.parse(localStorage.UsersArray).filter((el) => el.correo.indexOf(v.toLowerCase()) > -1)
 

    
   
}

