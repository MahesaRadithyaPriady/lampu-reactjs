import { useState } from "react";
const Content = () => {
  const [statusLampu, setStatusLampu] = useState(false);
  return (
    <>
      <div className="d-flex justify-content-center flex-column align-items-center my-3">
        <h1 className="text-center">Lampu React</h1>
        <img
          src={statusLampu ? `img/nyala.png` : `img/mati.png`}
          alt="Lampu Mati"
          width={"220px"}
        />

        <button
          className="btn btn-primary mt-4"
          onClick={() => handleLampu(statusLampu, setStatusLampu)}
        >
          {statusLampu ? `ON` : `OFF`}
        </button>
      </div>
    </>
  );
};

function handleLampu(statusLampu, setStatusLampu) {
  if (!statusLampu) {
    setStatusLampu(true);
  } else {
    setStatusLampu(false);
  }
}

export default Content;
