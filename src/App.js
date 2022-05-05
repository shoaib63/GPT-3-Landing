
// Containers
import Footer from "./containers/footer/Footer.js"
import Blog from "./containers/blog/Blog.js"
import Possibility from "./containers/possibility/Possibility.js"
import Features from "./containers/features/Features.js"
import WhatGPT3 from "./containers/whatGPT3/WhatGPT3.js"
import Header from "./containers/header/Header.js"


// Components
import CTA from "./components/cta/CTA.js"
import Brand from "./components/brand/Brand.js"
import Navbar from "./components/navbar/Navbar.js"


// styles
import "./App.css"

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
