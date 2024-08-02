import { useContext } from "react";
import MainContext from "../Context/MainContext";

const Illustration = () => {
  const { illustration } = useContext(MainContext);
  const { title, gallery } = illustration;
  const galleryArray = Object.keys(gallery).map((key) => ({
    ...gallery[key],
    key,
  }));
  return (
    <>
      <h1 className="text-center text-2xl font-bold mb-4">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 md:p-0">
        {galleryArray.map((picture) => {
          const { caption, url } = picture;
          return (
            <div className="rounded-xl border relative overflow-hidden hover:scale-105 transition cursor-pointer">
              <h2 className="absolute bottom-0 text-center w-full bg-[#ffffff66] py-2 font-bold">
                {caption}
              </h2>
              <img src={url} alt="" className="object-cover" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Illustration;
