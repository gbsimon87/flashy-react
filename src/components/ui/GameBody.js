import React from 'react'

const GameBody = ({ index, data = [], gameType = "" }) => {
  return (
    <section className="section__body">
      {data.map((item, itemIndex) => {
        const { id, name, value, description } = item;

        let position = 'nextSlide';
        if (itemIndex === index) {
          position = 'activeSlide';
        }
        if (
          itemIndex === index - 1 ||
          (index === 0 && itemIndex === item.length - 1)
        ) {
          position = 'lastSlide';
        }

        if (gameType === "colors") {
          return (
            <article className={`${position} article`} key={id}>
              <div
                className="slide-background-color"
                style={{ backgroundColor: `${name}` }}
                />
              <div className="article__controls">
                <h4>{name}</h4>
              </div>
            </article>
          );
        }

        if (gameType ===  "numbers") {
          return (
            <article className={`${position} article`} key={id}>
              <div
                className="slide-background-color"
                >
                  <p>{item.value}</p>
                </div>
                <div className="article__controls">
                  <h4>{name}</h4>
              </div>
            </article>
          );
        }

        if (gameType === "letters") {
          return (
            <article className={`${position} article`} key={id}>
              <div
                className="slide-background-color"
                >
                  <p>{name}</p>
                </div>
                { description && (
                  <div className="article__controls">
                    {description && <h4>{description}</h4>}
                  </div>
                )}
            </article>
          );
        }
        
        if (gameType === "shapes") {
          return (
            <article className={`${position} article`} key={id}>
              <div
                className="slide-background-color"
                >
                  <p>{value}</p>
                </div>
                <div className="article__controls">
                  <h4>{description}</h4>
              </div>
            </article>
          );
        }

        return (
          <article className={`${position} article`} key={id}>
            <p>No Game type</p>
          </article>
        )
      })}
    </section>
  )
}

export default GameBody
