import cal from '../calories.png'
const Recipes = ({recipe}) => {
  return ( <div className="card-box">
    {recipe.map((element, index) => {
      return (
        <div key={index} className="card">
            <img className="img" src={element.recipe.image} alt="food" width="250px" height="200px"/>
          <div className="box">
            <div className="card-header">
              <h3>{element.recipe.label}</h3>
              <p className='par'>Easy, fast and healthy! It's good for your family.</p>
                {/* <ul className="list">{(element.recipe.healthLabels).map((item, index) => (
                <li key={index}>{item}</li>
              ))}</ul> */}
            </div>
            <div className="card-end">
              <button className="btn">View recipe</button>
              <p className='par'>{(element.recipe.calories).toFixed()}
              <img src={cal} alt="cal" width="30px"/>
              </p>
            </div>
          </div>
        </div>
      )
    })}
  </div> );
}
 
export default Recipes;