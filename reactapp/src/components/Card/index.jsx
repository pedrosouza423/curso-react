import './styles.css';

const index = (props) => {

  return (
    <div className="card">
        <strong>{props.name}</strong>
        <small>{props.time}</small>
    </div>
  )
}

export default index