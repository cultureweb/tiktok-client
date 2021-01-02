import "./App.css";
import Video from "./components/Video/Video";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url="https://www.e-real.fr/elfie/IMG_8500.mp4"
          channel="@cultureweb"
          description="This is some description"
          song="I am a song"
          likes={111}
          shares={12}
          messages={250}
        />
        <Video
          url="https://www.e-real.fr/elfie/IMG_8500.mp4"
          channel="@cultureweb"
          description="This is some description"
          song="I am a song"
          likes={111}
          shares={12}
          messages={250}
        />
        {/* <Video url="https://cdn.videvo.net/videvo_files/video/free/2019-04/small_watermarked/190408_01_Alaska_Landscapes1_09_preview.webm" /> */}
      </div>
    </div>
  );
}

export default App;
