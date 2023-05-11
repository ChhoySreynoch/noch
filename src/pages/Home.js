import Card from "../components/Card";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
const Home = () => {
   
    return (
        <>
            <Nav />
            <main>
                <h1>This is home page</h1>
                <div className="container mt-4">
                    <div className="row g-3">
                        <div className="col-12 col-sm-6 col-md-3 col-lg-4 col-xxl-2">
                            <Card />
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 col-lg-4 col-xxl-2">
                            <Card />
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 col-lg-4 col-xxl-2">
                            <Card />
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 col-lg-4 col-xxl-2">
                            <Card />
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 col-lg-4 col-xxl-2">
                            <Card />
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 col-lg-4 col-xxl-2">
                            <Card />
                        </div>
                    </div>
                </div>
    
            </main>
            <div className="container">
                <Footer />
            </div>
        </>
    )
}
export default Home;