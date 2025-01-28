
import { useEffect } from 'react'
import { PostForm } from './PostForm';
import { useUsers } from '../../hooks'
import logo from '../../assets/logo.png'

export const Users = () => {

    const usersListCSS = {
        display: "block",
        border: "4px solid salmon",
        padding: "10px",
        width: "90%",
        marginLeft: "5%",
        marginBottom: "10px",
        backgroundColor: "white"
    }

    const usersListCSS2 = {
        fontWeight:'200'
    }


    const { dataUsersGet, users, deleteUser, postUser, switchUser, setInfoToForm,
            editMode, newDataEdit, defaultModeEdith, uploadUserImg, usersFinder, 
            paginationSelect, paginationNext } = useUsers()




    useEffect(() => {
        dataUsersGet()
    }, [])


    const handleDelete = (el: Object) => {
        deleteUser(el)
    }

    const handleSwitch = (el) => {
        switchUser(el)
    }

    const handleEdith = (el: String) => {
        //console.log(el)
        setInfoToForm(el)
    }


    const handlePaginationSelect=(ps)=>{
        let step = Number(ps)
        paginationSelect(step)
    }


     


    return (
        <div>

            <div style={{width:'100%', textAlign:'center'}}>
                    <img src={logo} width='200px' />
            </div>




        {/*    <div className='mx-5 my-2'>

                <div>{`Usuarios del: ${localStorage.step-7} para ${localStorage.step}, en Total: ${JSON.parse(localStorage.UsersArray || 0).length}`}</div>

                <input type="button" value='Previous' onClick={()=>paginationNext(false)} className='btn btn-secondary'/>




                {JSON.parse(localStorage.UsersArray || '[]')?.map((el, i) => (
                    i < localStorage.UsersTotal/8 &&
                        <input key={i+'<^>'} type="button" value={i+1} onClick={()=>handlePaginationSelect((i+1)*8)} className='btn btn-secondary'/> 
                ))}
           


                <input type="button" value='Next' onClick={()=>paginationNext(true)} className='btn btn-secondary'/>



                <select className='form-select col-12 my-2' style={{width:'200px'}} onChange={(e)=>handlePaginationSelect(e.target.value)}>
                    {JSON.parse(localStorage.UsersArray || '[]')?.map((el, i) => (
                        i < localStorage.UsersTotal/8 && 
                            <option key={i} value={(i+1)*8}>   {`${(i+1)*8-7} a ${(i+1)*8}`}   </option>
                    ))}
                </select>
            </div>*/}






            {/*<PostForm postUser={postUser} editMode={editMode} newDataEdit={newDataEdit} defaultModeEdith={defaultModeEdith} />*/}




<div style={{width:'100%', textAlign:'center'}}>
            <input type="search" className='form-control col-12 my-4 mx-auto' 
                    style={{width:'90%'}} placeholder='Buscar en Lugares.. Centros... parroquias... etc' 
                    onChange={(e)=> usersFinder(e.target.value.trim())} 
            />

</div>

<div style={{width:'100%', textAlign:'center'}}>
            <input type="search" className='form-control col-12 my-4 mx-auto' 
                    style={{width:'90%'}} placeholder='Buscar por Colonias...' 
                    onChange={(e)=> usersFinder(e.target.value.trim(), 'colonia')} 
            />

</div>

{/*
            {users?.usuarios?.length < 3 &&  
                <div className='mx-5 my-4'>
                    <button onClick={()=>handlePaginationSelect(8)} className='btn btn-info'> Click para Ver todos los Usuarios</button>
                </div>
            }*/}
















      
 


            {users?.usuarios?.map((el, i) => (
                <div key={i + '!@#'} style={usersListCSS}>

                    <h2>{el.lugar}</h2>
                    <p><span style={usersListCSS2}>Calle:</span> {el.calle}</p>

                    <p><span style={usersListCSS2}>Colonia:</span>   {el.colonia}</p>
                    <p><span style={usersListCSS2}>Dia:</span>     {el.dia}</p>

                    <p><span style={usersListCSS2}>Hora:</span>  {el.hora }</p>
                    <p><span style={usersListCSS2}>Inicio:</span> {el.fechaDeInicio} </p>
                    <p><span style={usersListCSS2}>Informes:</span> {el.informes }</p>

                    {/*<img src={el.img} width='100px' />*/}

                    
{/*
                    <button onClick={() => handleDelete(el)}>Eliminar</button>
                    <button onClick={() => handleEdith(el)}>Editar</button>*/}

                    {/*<button onClick={() => handleSwitch(el)}>Toggle</button>*/}
                    {/*<input type="file" id="file-upload" onChange={(e) => uploadUserImg(el.uid, e.target.files[0])} />*/}

                </div>
            ))}







        </div>
    )
}
