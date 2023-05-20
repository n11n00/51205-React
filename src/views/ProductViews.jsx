import ItemComponent from '../components/ItemComponent';
import useFirestore from '../utils/useFirestore';

import { useParams } from 'react-router-dom';
import { useMemo } from 'react';


const nameCollection = "Items";



const ProductViews = (props) => { 
  const {category} = useParams();
  const options = useMemo(() => {
    const _optionWithFilters = {nameCollection, filters: {where: ["category","==", category]}};
    const _optionWithOutFilters = {nameCollection};
    return category ?_optionWithFilters : _optionWithOutFilters ;
  }, [category]);

    
    const [data, loading] = useFirestore(options);
    
    

    

  return (
    <>
      
        <div className="container mt-5">
          <div className="row row-cols-1 row-cols-md-3 g-4">
          {loading ? (
            <h1>Estamos carando los productos...</h1>
          ):(
            data.map((item,index) => {
              return (
                <div className="col" key={index}>
                    <ItemComponent  showInfo data={item} />
                  </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default ProductViews;
