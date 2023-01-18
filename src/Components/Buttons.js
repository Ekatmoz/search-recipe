const Buttons = ({setSearch}) => {
  const salad = () => {
    setSearch("salad")
  }
  const soup = () => {
    setSearch("soup")
  }
  const beef = () => {
    setSearch("beef")
  }
  const appetizer = () => {
    setSearch("appetizer")
  }
  const pasta = () => {
    setSearch("pasta")
  }
  const chicken = () => {
    setSearch("chicken")
  }
  const dessert = () => {
    setSearch("dessert")
  }
  return ( <div className="selectors">
    <button className="select" onClick={soup}>Soup</button>
    <button className="select" onClick={salad}>Salad</button>
    <button className="select" onClick={appetizer}>Appetizers</button>
    <button className="select" onClick={pasta}>Pasta</button>
    <button className="select" onClick={beef}>Beef</button>
    <button className="select" onClick={chicken}>Chicken</button>
    <button className="select" onClick={dessert}>Dessert</button>
  </div> );
}
 
export default Buttons;