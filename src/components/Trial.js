import "../assets/why.css"
function Trial()
{
    return(
      <div className="cards">
      {[...Array(10)].map((_, i) => (
        <div key={i} className="card">
          <div className="card-face">
            <div className="card-label">{i + 1}</div>
          </div>
        </div>
      ))}
    </div>
    )
}

export default Trial;