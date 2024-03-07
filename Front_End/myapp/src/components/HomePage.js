import {React} from 'react';
import { Link} from 'react-router-dom';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
           
                        {/* Show Login and SignUp buttons only if the user is not authenticated */}
                        {!localStorage.getItem('token') && <div className="px-5 py-2">
                            <Link className="btn btn-lg btn-outline-primary me-3 my-2" to="/login" role="button" >Login</Link>
                            <Link className="btn btn-lg btn-outline-primary me-3 my-2" to="/signup" role="button" >SignUp For Free</Link>
                        </div>
                        }

                    

                  
             
        </>
    )
}

export default Home;