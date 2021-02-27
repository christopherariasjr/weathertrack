
export default function Home() {
    let state = {
        location: {
            lat: null,
            lng: null,
            city: '',
            state: '',
            country: ''
        }
    }

    function componentDidMount() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(console.log)
        } else {
          state.location = {
            lat: null,
            lng: null,
            city: '',
            state: '',
            country: ''
          }
        }
      }
      
      componentDidMount();

    return (
        <>
            <div className="container">
                <header>
                    <div className="card">
                        <span className="card-header">{state.location.city}</span>
                        <span className="card-subheader">{state.location.state}, {state.location.country}</span>

                        <div className="temp-container">
        
                        </div>
                    </div>
                </header>
                <div>

                </div>
            </div>
        </>
    )
        
  }