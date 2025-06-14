import MenuItem from "./MenuItem";
const NavBar = () => {
    return <>
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: "5%",
            fontSize: "20px",
            background: "#073b4c",
            color: "white",
            padding: "0px 20px"
        }}>
            <div className="logo" style={{display:"flex", justifyContent: "center", alignItems: "center"}}>
                Company Logo
            </div>
            <MenuItem />
        </div>
    </>
}
export default NavBar;