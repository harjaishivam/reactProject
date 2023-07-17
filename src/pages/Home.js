import { useEffect, useState } from 'react';
import '../App.css';
import CardComponent from '../components/cardComponent'
import getList from '../services/list';


function App() {


  const [list, setList] = useState([]);
  const [cardNum, setCardNum] = useState(11);

  
  useEffect(() => {
      let mounted = true;
      getList()
        .then(items => {
          if(mounted) {
            setList(items)
            // console.log(items)
          }
        })
      return () => mounted = false;
  },[])


  useEffect(() => {
      let effect = true;
      if(effect){
          let cards = document.querySelectorAll('.col-md-4');
          for (let i = 0; i < cards.length ; i++) {
            // if(show === false){
              // cards[i].style.display = "none";
            // }
            if(i > cardNum){
              cards[i].style.display = "none";
            } else{
              cards[i].style.display = "block";
            }
          }
      }
      return () => {
        effect = false;
      };
  });

  // const handleChange = event => {
  //   setSelected(event.target.value);
  //   if(event.target.value === ''){
  //     setShow(false);
  //   } else {
  //     setShow(true);
  //   }
  // };


  // useEffect(() => {
  //   document.querySelectorAll('.btn-close').forEach((elem , index) => {
  //     elem.addEventListener('click', () => {
  //         console.log(elem);
  //     })
  //   })
  // })

  // document.querySelectorAll('.btn-close').forEach((elem , index) => {
  //   elem.addEventListener('click', () => {
  //       console.log(elem);
  //   })
  // })

  return (

      <div className="container">
          <div class="row row-cols-2">
            <button className='add-btn btn btn-light col-12 col-md-6 col-lg-6' onClick={() => setCardNum(cardNum + 1)}>Add Card</button>
            {
              list.map((elem, index) => {
                return (
                  <CardComponent key={index} data={elem} />
                )
              })
            }
          </div>
      </div> 
  );
}

export default App;
