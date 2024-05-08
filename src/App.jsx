import './App.css';
import lake from "./image/lake.JPG";
import GallaryFooter from './components/GallaryFooter';
import ImageData from "./components/ImageData";
import GalleryHeader from './components/GalleryHeader';
import GalleryBody from './components/GalleryBody';


function App() {
  return (
    <div>
      <GalleryHeader />
      <GalleryBody imageData={ImageData} />
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;
