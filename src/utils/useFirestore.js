import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

const initialState = {
    response: {},
    error: {},
    data: [],
    loading: true,
};




const useFirestore = ({ nameCollection, documentId }) => {
    const [state, setState] = useState (initialState);

    useEffect(() => {
        const db = getFirestore();
        // const biciRef = collection(db,nameCollection) 
        
        if(nameCollection && documentId) {

            getDoc(doc(db,nameCollection,documentId)).then((snapshot)=> {
                if(snapshot.exists()){
                    const _data = snapshot.data();
                    setState({...state, data: _data,loading:false });
                }
            });
        }else if(nameCollection){
            
            getDocs(collection(db,nameCollection)).then((snapshot) => {
                const _data = snapshot.docs.map((doc) => {
                    const item = doc.data();
                    item [ 'id' ] = doc.id;
                    return item;

                });
        
                setState({...state, data: _data,loading:false });
            });
        }


    }, [documentId, nameCollection]);

    return [state.data, state.loading, state.response, state.error];
};

export default useFirestore;