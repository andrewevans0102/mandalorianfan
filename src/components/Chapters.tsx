import React from "react";
import "../styles/styles.scss";
import { MandalorianChapters } from "../constants/Chapters";

const Chapters = (props: MandalorianChapters) => {
  return (
    <>
      {props.chapters &&
        props.chapters.map((chapter) => (
          <article key={chapter.key}>
            <h2>
              <span className="season__title">{chapter.key}</span>
            </h2>
            {!chapter.showFull && (
              <p className="season__value">{chapter.preview}...</p>
            )}
            {chapter.showFull && <p className="season__plot">{chapter.full}</p>}
            <a href={chapter.link}>
              description and summary originally copied from here
            </a>
            <div
              className="season__icons"
              onClick={() => props.showChapter(chapter)}
            >
              {chapter.showFull ? (
                <div>
                  <button className="season__icons--collapse">
                    Less
                    <span className="material-icons season__icons--arrow">
                      keyboard_arrow_up
                    </span>
                  </button>
                </div>
              ) : (
                <button className="season__icons--expand">
                  More
                  <span className="material-icons season__icons--arrow">
                    keyboard_arrow_down
                  </span>
                </button>
              )}
            </div>
          </article>
        ))}
    </>
  );
};

export default Chapters;
