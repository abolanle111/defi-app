import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import FeatureOne from './Components/FeatureOne';
import Stats from './Components/Stats';
import { Card } from './Components/Card';
import insurance1 from "./Assets/insurance1.svg";
import wallet1 from "./Assets/wallet1.svg";
import profit1 from "./Assets/profit1.svg";
import SocialMedia from './Components/SocialMedia';
import DevSection from './Components/DevSection';
import { BlogSection } from './Components/BlogSection';
import Footer from './Components/Footer';


function App() {
    const features = [
      {
        src: wallet1,
        title: "Value",
        description:
          "Swap from your own wallet. Be your own bank. No centralized bridges or wrapping assets",
      },
      {
        src: profit1,
        title: "Yield",
        description:
          "Provide Liquidity and Earn Yield on your Native Assets with Impermanent Loss Protection",
      },
      {
        src: insurance1,
        title: "Insurance",
        description: "Get Impermanent Loss Protection on your Liquidity Pools",
      },
      {
        src: wallet1,
        title: "Staking",
        description:
          "Earn Yield on your Native Assets with Impermanent Loss Protection",
      },
    ];
  return (
    <div className="home">
      <Header />
      <Hero />
      <Stats />
      <FeatureOne />
      <div className='features-list-container'>
        {
          features.map((feature, index) => {
            return (
              <Card key={index} title={feature.title} imgUrl={feature.src}>{<p>{feature.description}</p>}</Card>
            )
          })
        }
      </div>
      <DevSection />
      <SocialMedia />
      <BlogSection />
      <Footer />
    </div>
  );
};
export default App;
