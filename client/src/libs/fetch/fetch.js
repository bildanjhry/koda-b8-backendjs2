export async function api(url, method, token, body){
    try{
        const res = await fetch(url,{
            method:method,
            headers:{
                "Authorization":"Bearer "+token,
                "Content-Type":"application/x-www-form-urlencoded"
            },
            body: body
        })
        if(!res.ok){
            throw new Error(res.error)
        }
        const data = res.json()
        return data

    } catch(err){
      console.error(err.message)
    }
    
}

export async function apiNO_PAY(url, token, method){
    try{
        const res = await fetch(url,{
            method:method,
            headers:{
                "Authorization":"Bearer "+token
            }
        })
        if(!res.ok){
            throw new Error(res.error)
        }
        const data = res.json()
        return data

    } catch(err){
      console.error(err.message)
    }
    
}