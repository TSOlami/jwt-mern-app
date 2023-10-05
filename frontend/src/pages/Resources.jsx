import Sidebar from "../components/Sidebar"
import PageBox from "../components/PageBox"

const divStyle = {
    display: "flex"
}

const mainStyle = {
    width: "60%",
    height: "100",
    backgroundColor: "#FFFFFF",
    borderRight: "1px solid #B3B3B3",
}

const Resources = () => {
    return (
        <div style={divStyle}>
            <Sidebar></Sidebar>
            <div style={mainStyle}>
                <PageBox name="Learning Resources" />
                <main></main>
            </div>
        </div>
    )
}

export default Resources;