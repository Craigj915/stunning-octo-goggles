"use client";

import Movie from "@/components/cards/Movie";
import Title from "@/components/typography/Title";
import AddMovie from "@/components/forms/AddMovie";
import Message from "@/components/typography/Message";
import { useState, useEffect } from "react";

export default function Home() {
  // const movies = [
  //   {
  //     id: '1',
  //     name: "The Lord of the Rings: Fellowship of the Ring",
  //     image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/b4XZizlvqQkZno8cT3VPBYTGudB.jpg",
  //     summary: "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed."
  //   },
  //   {
  //     id: '2',
  //     name: "The Lord of the Rings: The Return of the King",
  //     image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wNB551TsEb7KFU3an5LwOrgvUpn.jpg",
  //     summary: "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam take the ring closer to the heart of Mordor, the dark lord's realm."
  //   },
  //   {
  //     id: '3',
  //     name: "The Lord of the Rings: The Two Towers",
  //     image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pcXIJt2E09eI3FFxcxjOY0beCxY.jpg",
  //     summary: "Frodo and Sam are trekking to Mordor to destroy the One Ring of Power while Gimli, Legolas and Aragorn search for the orc-captured Merry and Pippin. All along, nefarious wizard Saruman awaits the Fellowship members at the Orthanc Tower in Isengard."
  //   }
  // ]

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const addMovieHandler = (movie) => {
    const isValidMovie = movie.name && movie.image && movie.summary;
    if (!isValidMovie) {
      setError("Please fill all of the fields");
      setTimeout(() => {
        setError(null);
      }, 3000);
      return;
    } else {
      setMovies([...movies, movie]);
      setSuccess("Movie added successfully");
      setTimeout(() => {
        setSuccess(null);
      }, 3000);
      localStorage.setItem("movies", JSON.stringify([...movies, movie]));
    }
  };

  useEffect(() => {
    setMovies(JSON.parse(localStorage.getItem("movies")) || []);
  }, [])

  return (
    <>
      {error && <Message messageType="error" messageContent={error} />}
      {success && <Message messageType="success" messageContent={success} />}
      <main className="flex min-h-screen flex-col items-center justify-between p-16 bg-gray-700">
        <Title text="A bunch of movies and series i`ve watched" />
        <AddMovie
          addMovieInParent={(movie) => {
            addMovieHandler(movie);
          }}
        />
        <div className="flex flex-wrap gap-2 mx-auto">
          {movies?.map((movie) => {
            return <Movie {...movie} key={movie.id} />;
          })}
        </div>

      </main>
    </>
  );
}
