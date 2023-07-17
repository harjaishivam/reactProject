import '../App.css';

const CardComponents = (props) => {
  console.log(props.items.id);
    return(
  
    <div class="col-3">
        <div class="card">
            <img
            src={props.items.image}
            alt="Amish Cyborg"
            class="card-img-top"
            />
            <div class="card-body">
            <h3 class="card-title">{props.items.name}</h3>
            <p>Origin: {props.items.origin.name}</p>
            </div>
        </div>
    </div>
    );
}

export default CardComponents