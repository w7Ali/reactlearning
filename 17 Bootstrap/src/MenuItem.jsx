const MenuItem = () => {
    return <>
    <nav style={{
        display: "flex",
        alignItems: "center",
        listStyleType: "none",
        width: "600px",
        height: "50px",
        fontSize: "20px",
     }}>
        <li style={{width: "25%"}}>Home</li>
        <li style={{width: "25%"}}>About</li>
        <li style={{width: "25%"}}>Contact</li>
        <li style={{width: "25%"}}>Career</li>
    </nav>
    </>
}
export default MenuItem;