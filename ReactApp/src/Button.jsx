
function Button(){

    const styles = {
        backgroundColor: "chocolate",
        color: "beige",
        padding: "10px 20px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
    }
    return(
        // <button className="click">Click me</button>
        <button style={styles}>Click me</button>
    )
}

export default Button