import { useEffect, useState } from "react";
    

const useFetch = (url) =>{
    const [response, setResponse] = useState ({});
    const [error, setError] = useState({});
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState (false);


    useEffect(() =>{
        // (async (urlComplement = "") =>{
        //     const urlGet = `${url}${urlComplement}`;
        //     setLoading (true);
        //     const response  = await fetch(urlGet);
        //     setResponse(response);
        //     const datas = await response.json();
        //     setLoading (false);
        //     setData(datas);
        //     console.log("test");
        // })();


        setLoading(true);
        fetch(url)
          .then((response) => {
            setResponse(response);
            return response.json();
          })
          .then((infoJson) => {
            
            setData(infoJson);
            setLoading(false);
            
          }).catch((_error) => {
            setError(_error);
          });

    }, [url]);

    return {response,data,loading,error};
};

export default useFetch;