import MainPage from "./pages/MainPage/index";
import Playbar from "./components/Playbar";
import style from "./style.module.scss";

const App = () => (
  <div className={style.wrapper}>
    <MainPage />
    <Playbar />
  </div>
);

export default App;
