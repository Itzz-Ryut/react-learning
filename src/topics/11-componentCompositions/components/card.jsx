// Card component — a reusable styled box
// title  = the card heading (named prop)
// children = whatever you put between <Card> tags

function Card({ title, children }) {
  return (
    <div className='card'>
      {title && <h3 className='card-title'>{title}</h3>}
      <div className='card-body'>{children}</div>
    </div>
  );
}

export default Card;
