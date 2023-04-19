import { useEffect, useState } from "react";
    

const useFetch = (url) =>{
    const [response, setResponse] = useState ({});
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState (false);


    useEffect(() =>{
        (async (urlComplement = "") =>{
            const urlGet = `${url}${urlComplement}`;
            setLoading (true);
            const response  = await fetch(urlGet);
            setResponse(response);
            const datas = await response.json();
            setLoading (false);
            setData(datas);
            console.log("test");
        })();
    }, [url]);

    return {response,data,loading};
};

export default useFetch;