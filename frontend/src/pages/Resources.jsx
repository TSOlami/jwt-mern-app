import Sidebar from "../components/Sidebar"

const divStyle = {
    display: "flex"
}

const mainStyle = {
    width: "60%",
    height: "100",
    backgroundColor: "#FFFFFF",
    borderRight: "1px solid #B3B3B3"
}

const Resources = () => {
    return (
        <div style={divStyle}>
            <Sidebar></Sidebar>
            <main style={mainStyle}></main>
        </div>
    )
}

export default Resources;