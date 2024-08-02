import { useContext } from "react";
import MainContext from "../Context/MainContext";

const Home = () => {
  const { home } = useContext(MainContext);
  const { title, gallery } = home;
  const galleryArray = Object.keys(gallery).map((key) => ({
    ...gallery[key],
    key,
  }));
  console.log(home);
  return (
    <>
      <h1>{title}</h1>
      <div className="grid grid-cols-4 gap-4">
        {galleryArray.map((picture) => {
          const { caption, url } = picture;
          return (
            <div>
              <h2>{caption}</h2>
              <img src={url} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
