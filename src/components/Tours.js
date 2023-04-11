import Card from './Card';



const Tours = ({tours,removeTour}) => {
    // console.log(tours);
    
    return (
        <div className='container'>
          <div>
            <h1 className='title'>Plan with shanawaz</h1>
          </div>

          <div className='cards'>
            {
                tours.map((tour) => {
                    return <Card {...tour} removeTour={removeTour}></Card>
                  
                    })
                    
                
            }
         
          </div>
        </div>
        );

        };
        export default Tours;