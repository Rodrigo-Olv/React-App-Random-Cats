export function RandomCat({ imgUrl, fact, getFact }) {
  return (
    <section className="col-lg-6 d-flex flex-column">
      <div className="img-cat">
        {imgUrl && (
          <img
            src={imgUrl}
            alt="random image of a cat with some text"
            className="img-fluid rounded"
          />
        )}
      </div>
      {fact && <p className="fact">{fact}</p>}
      <button onClick={getFact} className="my-button">
        New random image and fact
      </button>
    </section>
  );
}
