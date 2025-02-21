import React from "react";

const DogsPage = (props) => {
  const { allDogs } = props;
  return (
    <>
      <section className="dogs-container">
        {allDogs.map((dog) => {
          return <div key={dog.id}>{dog.name}</div>;
        })}
      </section>
    </>
  );
};

export default DogsPage;
