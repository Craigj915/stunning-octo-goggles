"use client";

import { useState } from "react";

const AddMovie = ({
  addMovieInParent
}) => {
  const [movieObject, setMovieObject] = useState({
    name: "",
    image: "",
    summary: ""
  });

  return (
    <form className="flex m-6 justify-center p-4 gap-2 bg-gray-600 rounded-xl"
    onSubmit={(event) => {
      event.preventDefault();
      addMovieInParent(movieObject);
      setMovieObject({
        name: "",
        image: "",
        summary: ""
      });
    }}
    >
      <input
        type="text"
        placeholder="Name"
        className="p-2 rounded-xl border-2 border-gray-600"
        onChange={(event) => {
          setMovieObject({ ...movieObject, name: event.target.value });
        }}
        value={movieObject.name}
      />
      <input
        type="text"
        placeholder="Image"
        className="p-2 rounded-xl border-2 border-gray-600"
        onChange={(event) => {
          setMovieObject({ ...movieObject, image: event.target.value });
        }}
        value={movieObject.image}
      />
      <input
        type="text"
        placeholder="Summary"
        className="p-2 rounded-xl border-2 border-gray-600"
        onChange={(event) => {
          setMovieObject({ ...movieObject, summary: event.target.value });
        }}
        value={movieObject.summary}
      />
      <div className="flex justify-center">
      <button className="bg-blue-300 p-2 rounded-full w-fit">
        Add
      </button>
      </div>
    </form>
  );
};

export default AddMovie;
