import './titlebar.css';
import Logo from "/home/thangaakilan/Project/Hackathon/frontend/src/img/logo.jpeg";
const Titlebar = ()=>{
   
    return(
        <>
        <div className="task-main-section">
            <div className="task-left-section" >
                <img id="task-logo" src={Logo} alt="vec logo" style={{cursor:"pointer"}}/>
                <header id="task-header" style={{cursor:"pointer"}}>QP Generator</header>
            </div>
            <div className="task-right-section">
                <h2>Hello</h2>
            </div>
        </div>
        </>
    )
}

export default Titlebar;
