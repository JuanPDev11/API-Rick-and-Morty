
function Character({character}){
  return (
    <div className="card-container">
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
    </div>
  )
}

export default Character