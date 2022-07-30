import {API} from '../config'



export const getWords = (token:any) => {
    let limit = 20;
    const data = {
        limit
    }
    return fetch (`${API}/words`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': "application/json",
            'Authorization' : `Bearer ${token}`
           
        },
        body:JSON.stringify(data)
    })
    .then(response => {
        return response.json();
    })

    .catch(err => console.log(err))
};

export const getSimilarWords = (word:any,limit:number,token:any) => {
  
    const data = {
        limit , word
    }
    return fetch (`${API}/words/find/similar`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': "application/json",
            'Authorization' : `Bearer ${token}`
           
        },
        body:JSON.stringify(data)
    })
    .then(response => {
        return response.json();
    })

    .catch(err => console.log(err))
};


export const getVector = (word:string,token:any) => {
    return fetch (`${API}/word?word=${word}`, {
        method: "GET",
        headers: {
          
            'Authorization' : `Bearer ${token}`
           
        },
    })
    .then(response => {
        return response.json();
    })

    .catch(err => console.log(err))
};



