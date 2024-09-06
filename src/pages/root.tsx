import "./root.css";

const HeaderRoot = () => {
    return (
        <div className={"frameParent"}>
            <div className={"rectangleParent"}>
                <div className={"frameChild"} />
                <div className={"ai"}>ai</div>
                <div className={"p"}>P</div>
            </div>
            <div className={"frameItem"} />
        </div>);
}

const Root = () => {
    return <><HeaderRoot/><li>Error.....................</li></>
}

export default Root;