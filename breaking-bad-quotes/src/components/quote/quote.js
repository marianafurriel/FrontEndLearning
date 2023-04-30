import './quote.css'

const Quote = ({ data })=>{
  return(
    <div>
      <p>{data[0]}</p>
      <p>{data[1]}</p>
    </div>
  )
}
export default Quote;