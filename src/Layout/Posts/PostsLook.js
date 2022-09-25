function PostsLook(props) {
  const openUrl = (url) => {
    window.open(url, "_self");
  };

  const data = props.data;

  return (
    <>
      <div className="card border-0 m-3 shadow">
        <img src={data.imageUrl} alt={data.name} className="card-img-top" />
        <div className="border border-1 fw-lighter text bg-light rounded-3 col-6 m-2 p-1">
          ID: {data.id}
        </div>
        <div className="card-body ">
          <div className="card-title h4">{data.name}</div>
          <div className="card-text text-secondary mb-3">
            {data.description}
          </div>
          <div>
            <i className="bi bi-telephone"></i>: {data.phone}
          </div>
          <div>
            <i className="bi bi-house"></i>: {data.address}
          </div>
          <button
            onClick={() => openUrl(data.url)}
            className="mt-3 btn btn-primary"
          >
            Visit Website
          </button>
        </div>
      </div>
    </>
  );
}

export default PostsLook;
