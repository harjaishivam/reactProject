import { useEffect } from 'react';
import '../App.css';

const CardComponent = (props) => {


    useEffect(() => {
        document.querySelectorAll('.btn-close').forEach(elem => {
            elem.addEventListener('click', (e) => {
                elem.parentElement.parentElement.parentElement.style.display = 'none';
            })
        })
    });

    return(
        <div className="col-md-4 fadeOut" >
            <div className="card">
            <div class="modal-header">
                <h5 className="modal-title"></h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
                <img src={props.data.image} className="card-img-top img-css" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.data.name}</h5>
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Height : {props.data.height}</li>
                    <li class="list-group-item">Gender : {props.data.gender}</li>
                    <li class="list-group-item">Eye Color : {props.data.eyeColor}</li>
                </ul>
                <div class="card-body">
                    {/* <a href="#" class="card-link">Card link</a> */}
                    {/* <a href="#" class="card-link">Another link</a> */}
                </div>
            </div>
        </div>
    )
}

export default CardComponent