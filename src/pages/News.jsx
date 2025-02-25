import axios from 'axios' ; 

const fetchData = async () => {
  try {
    const response = await axios.get( 'http://127.0.0.1:8000/api/articles') ; 
    const data = response.data 
    console.log( data ) ;
  }
  catch ( error ) {
    console.log( "error" ) ;
  }
};
fetchData() ;
const News = () => {
    return (
      <div className="page-container">
        <h1>Troop News</h1>
        <p>Check back soon for updates and news from our troop!</p>
      </div>
    );
  };
  
  export default News;