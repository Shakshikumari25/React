import PropTypes from 'prop-types'

function UserGreeting(props){
    
    // if(props.isLoggedIn){
    //     return (<h2>Welcome {props.username} </h2>);
    // }else{
    //     return <h2>Please log in to continue</h2>
    // }

    // return(props.isLoggedIn ? <h2 className="msg">Welcome {props.username} </h2> :
    //                           <h2 className="login">Please log in to continue</h2>);

    const hello = <h2 className="msg">Welcome {props.username} </h2>
    const please = <h2 className="login">Please log in to continue</h2>
    return(props.isLoggedIn ? hello : please)
}

UserGreeting.PropTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defaultProps = {
    username: "user",
}

export default UserGreeting;