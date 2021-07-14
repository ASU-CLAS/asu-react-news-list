import { h } from "react";
import "./styles.scss";

const formatAsCard = (item) => {
  return (
    <div className="col col-12 col-lg-4" key={item.nid}>
      <button onClick={() => window.open(item.path, "_blank")}>
        <div className="card card-story card-hover h-100">
          <img
            className="card-img-top"
            src={item.image_url}
            alt={item.image_alt}
            style={{ padding: 0 }}
          />
          <div className="card-header">
            <h4 className="card-title">{item.title}</h4>
          </div>
          <div className="card-body">
            <p className="card-text text-dark">{item.teaser}</p>
          </div>
          <div class="card-tags">
            {item.interests.split("|").map((tagItem, index) => {
              return (
                <span class="btn btn-tag btn-tag-alt-white" href="#">
                  {tagItem}{" "}
                </span>
              );
            })}
          </div>
        </div>
      </button>
    </div>
  );
};

const formatAsCardRow = (item) => {
  return (
    <div className="card card-hover" key={item.nid}>
      <button onClick={() => window.open(item.path, "_blank")}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              className="card-img h-100"
              src={item.image_url}
              alt={item.image_alt}
            />
          </div>
          <div className="col-md-8">
            <div className="list-view card-body">
              <h3 className="list-view card-title">
                {item.title}
                <p className="card-text text-muted">
                  {item.interests.split("|").join(", ")}
                </p>
              </h3>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

const formatAsCarouselCard = (item, index, cardsButtonsColor) => {
  return {
    id: index,
    item: (
      <div className="card card-story carousel-card h-100">
        <div className="card-img-top" style={{ padding: 0 }}>
          <img src={item.image_url} alt={item.image_alt} />
        </div>
        <div className="card-header">
          <h4 className="card-title card-pad-header">{item.title}</h4>
        </div>
        <div className="card-body">
          <p className="card-text text-dark card-pad-text">{item.teaser}</p>
          <a
            className={`btn btn-${cardsButtonsColor || "maroon"} text-white`}
            href={item.path}
          >
            Read more
          </a>
        </div>
      </div>
    ),
  };
};

export { formatAsCard, formatAsCardRow, formatAsCarouselCard };
