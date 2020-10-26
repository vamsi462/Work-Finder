import React, {useState, useEffect} from "react";
import Layout from "./Layout";
import {getCategories, getFilteredWorks} from "./apiCore";
import Checkbox from "./CheckBox";
import  Card from "./Card";

const Shop = () => {
  const [myFilters, setMyFilters] = useState({
    filters: {category: [], price: []},
  });

  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);
  const [limit, setLimit] = useState(6);
  const [skip, setSkip] = useState(0);
  const [size, setSize] = useState(0);
  const[filteredResults, setFilteredResults]= useState([])


  


  const init = () => {
    getCategories().then((data) => {
      if (data.error) {
        setError(
          data.error
        )
      } else {
        setCategories(data);
      }
    });
  };
  const loadFilteredResults = newFilters => {
    //console.log(newFilters);
    getFilteredWorks(skip, limit, newFilters).then(data => {
      if(data.error) {
        setError(data.error);
      } else {
        setFilteredResults(data.data)
        setSize(data.size)
        setSkip(0)
      }
    });
  };

  const loadMore = () => {
        let toSkip = skip + limit;

         getFilteredWorks(toSkip, limit, myFilters.filters).then((data) => {
           if (data.error) {
             setError(data.error);
           } else {
             setFilteredResults([...filteredResults, ...data.data]);
             setSize(data.size);
             setSkip(toSkip);
           }
         });
  }

  const loadMoreButton = () => {
    return (
      size > 0 &&
      size >= limit && (
        <button onClick={loadMore} className="btn btn-warning mb-5">
          Load more
        </button>
      )
    );
  };


  useEffect(() => {
    init();
    loadFilteredResults(skip,limit,myFilters.filters)
  }, []);

  const handleFilters = (filters, filterBy) => {
    const newFilters = {
      ...myFilters,
    };
    newFilters.filters[filterBy] = filters;

    loadFilteredResults(myFilters.filters);
    setMyFilters(newFilters);
  };

  return (
    <Layout
      title="Shop Page"
      description="Search and find  your tasty food "
      className="container-fluid">
      <div className="row">
        <div className="col-4">
          <h4>filter by categories</h4>
          <ul>
            <Checkbox
              categories={categories}
              handleFilters={(filters) => handleFilters(filters, "category")}
              
            />
          </ul>
        </div>

        <div className="col-8">
          <h2 className="mb-4">works</h2>
          <div className="row">
            {filteredResults.map((work, i) => (
              
                <Card key={i} work={work} />
            
            ))}
          </div>
          <hr/>
          {loadMoreButton()}
        </div>
      </div>
    </Layout>
  );
};

export default Shop;

