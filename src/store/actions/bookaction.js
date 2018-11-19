export const getProducts = () =>{

    return (dispatch)=>{
        const api="http://5be30d94d53daf0013250ef5.mockapi.io/api/v1/bookstore";
        fetch(api)
        .then(response=>
            response.json()
        ).then(res=>{

  dispatch({
            type:'FETCH_BOOKS',
            payload:res
        })
     
        })
    }
}

