import jwt_decode from "jwt-decode";
import {API} from '../../config'
export const login = (email:string,password:string) => {
    //console.log(name,email,password)
  
    return fetch(`${API}/auth/token`, {
        method:'POST',
        headers: {
            'Content-Type': "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            'username': email,
            'password': password
        })
    })
    .then(response => {
        
        return response.json()
        
    })
    .catch(err => {
        console.log(err)
    })
  }





export const isAuthenticated = () => {
    if(typeof window == 'undefined')  {
        return false
    }

    if (localStorage.getItem('gl_mfs')){
        
        return JSON.parse( localStorage.getItem('gl_mfs') || '' )
        
    }else{
        return false;
    }
}


export const authenticate = (data:any,next:any) => {
    if(typeof window !== 'undefined') {
        var decoded:any = jwt_decode(data.access_token);
        if(decoded){
            let res = {
                token : data.access_token,
            }
            localStorage.setItem('gl_mfs', JSON.stringify(res))
            next()

        }
        else{
            if (localStorage.getItem('gl_mfs')){
                localStorage.removeItem("gl_mfs");
            }
            next()

        }
        

        
    }

}
