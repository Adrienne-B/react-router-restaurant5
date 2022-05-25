import{useLocation} from "react-router-dom";
function Home () {
    const {state} = useLocation();
        let value = "not logged in."
      
        if (state) {
            value = "Login" + state.login;
        }
    return (
            <div>
                <h1>React Router Restaurant</h1>
                <h4>Serving up URLs like Momma use to make!</h4>
                <img alt = "man eating" src="https://i0.wp.com/68.media.tumblr.com/159d31bca61108d5bd1a8dedf5c14dfe/tumblr_otlasg917I1ql7xb0o6_1280.gif?"></img>
            {value}
        </div>
    )
}

export default Home;