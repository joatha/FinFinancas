import axios from "axios"

class UsuarioService{

    async salvar(data){
        return axios({
            url: "http://192.168.0.109:3000/usuario/cadastrar",
            method:"POST",
            timeout:5000,
            data:data,
            headers:{
                Accept:'application/json'
            }
        }).then((response) =>{
            return Promise.resolve(response)

        }).catch((error)=>{
            return Promise.reject(error)

        })
    }

}

const usuarioService = new UsuarioService()
export default usuarioService