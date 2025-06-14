const Random = ({ num }) => {
    let ran = Math.round(Math.random() * 100);
    return <p style={{ 
        background: "#073b4c",
        color: "white",
        width: "400px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid #ccc",
        borderRadius: "50px"
        }}
        >
        Random Number {num}: {ran}
    </p>
}

export default Random;