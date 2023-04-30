import './App.css';
import Row from "./Row"
import requests from "./requests"
import Banner from "./Banner"
import Nav from "./Nav"
import Youtube from "react-youtube"

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      console.log(process.env.REACT_APP_API_KEY);
      <Row title="NETFLIX TRENDING"  fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title="NETFLIX ORIGINALS"  fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="NETFLIX TOP-RATED"  fetchUrl={requests.fetchTopRated} />
      <Row title="NETFLIX ACTION-MOVIES"  fetchUrl={requests.fetchActionMovies} />
      <Row title="NETFLIX COMEDY-MOVIES"  fetchUrl={requests.fetchComedyMovies} />
      <Row title="NETFLIX HORROR-MOVIES"  fetchUrl={requests.fetchHorrorMovies} />
      <Row title="NETFLIX ROMANCE-MOVIES"  fetchUrl={requests.fetchRomanceMovies} />
      <Row title="NETFLIX DOCUMENTARIES"  fetchUrl={requests.fetchDocumantaries} />
    </div>
  );
}

export default App;
