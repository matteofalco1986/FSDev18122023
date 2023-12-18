import logo from './logo.svg';
import './App.css';
import Button from './components/button';
import ButtonClass from './components/ButtonClass';
import Image from './components/image';
import ImageClass from './components/ImageClass';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonClass name="Class component button">Primo bottone</ButtonClass>
        <Image src={"https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"} alt={"Ragazza fotografa"} />
        <ImageClass src={"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"} alt={"Background lago"} />
        <Button name="Functional button">Secondo bottone</Button>
      </header>
    </div>
  );
}

export default App;
