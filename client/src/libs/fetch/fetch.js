export async function api(url, method, body){
    try{
        const res = await fetch(url,{
            method:method,
            headers:{
                "Authorization":"Allow",
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

export async function apiDELETE(url, method) {
    try{
        const res = await fetch(url, {
            method:method,
            headers: {
                "Authorization":"Allow",
            }
        })

        if(!res.ok){
            throw new Error (res.error)
        }
        const data = res.json()
        return data
    } catch(err){
        console.error(err.message)
    }
}

export async function apiGET(url){
    try{
        const res = await fetch(url,{
            headers:{
                "Authorization":"Allow"
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