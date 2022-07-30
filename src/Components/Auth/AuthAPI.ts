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


export const logout = () => {
    if(typeof window == 'undefined')  {
        return false
    }

    if (localStorage.getItem('gl_mfs')){
        
        localStorage.removeItem('gl_mfs');
        return true
        
    }else{
        return false;
    }
}