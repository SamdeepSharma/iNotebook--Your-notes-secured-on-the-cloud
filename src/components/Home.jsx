const Home = () => {
  return (
    <div>
      <h2 className="py-3">Add a Note</h2>
      <form className="py-3">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control w-50" aria-describedby="textHelp" id="title"/>
          </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Description</label>
          <input type="text" className="form-control w-75" id="desc"/>
        </div>
        <button type="submit" className="btn btn-primary my-3">Add Note</button>
      </form>
    </div>
  )
}

export default Home
