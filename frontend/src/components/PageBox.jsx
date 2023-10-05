const style = {
    width: '100',
    height: '100%',
    fontFamily: "Crimson Text",
    marginLeft: "2%",
    marginRight: "2%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
}

const PageBox = (props) => {
    return (
        <div style={{borderBottom: "1px solid #B3B3B3", height: "10%"}}>
            <div style={style}>
                <span> {props.name} </span>
                <span style={{color:"#B3B3B3", width: "30%", border: "1px solid #B3B3B3", borderRadius: "20px"}}> Search </span>
            </div>
        </div>
    )
}

export default PageBox;