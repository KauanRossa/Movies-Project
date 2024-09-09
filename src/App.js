import Header    from "./components/Header";
import Banner    from "./components/Banner";
import Container from "./components/Container";
import Cards     from "./components/Cards";
import Category  from "./components/Category";
import Footer    from "./components/Footer";
import Videos    from "./json/videos.json"

const categories = [
  "Geografia",
  "Como fazer e usar",
  "Astronomia e Geografia",
  "Climatologia, Meteorologia, Vegetação",
  "Geologia e Hidrologia"
]

function filterCategory(id){
    return Videos.filter( video => video.category === categories[id] )
}

function App() {
  return (
    <>
      <Header />
      <Banner image="home" />
      <Container>
        <Category category={ categories[0] }>
          { filterCategory(0).map((Videos) => <Cards id={Videos.id} key={Videos.id}  /> )}  
        </Category>

        <Category category={ categories[1] }>
          { filterCategory(1).map((Videos) => <Cards id={Videos.id} key={Videos.id}  /> )}  
        </Category>

        <Category category={ categories[2] }>
          { filterCategory(2).map((Videos) => <Cards id={Videos.id} key={Videos.id}  /> )}  
        </Category>

        <Category category={ categories[3] }>
          { filterCategory(3).map((Videos) => <Cards id={Videos.id} key={Videos.id}  /> )}  
        </Category>

        <Category category={ categories[4] }>
          { filterCategory(4).map((Videos) => <Cards id={Videos.id} key={Videos.id}  /> )}  
        </Category>

        <Category category={ categories[5] }>
          { filterCategory(5).map((Videos) => <Cards id={Videos.id} key={Videos.id}  /> )}  
        </Category>
      </Container>
      <Footer />
    </>
  );
}

export default App;
