
export default function Footer(){
    const date = new Date().getFullYear();
    return(
        <footer>
            <div style={{textAlign:'center'}}>
                <p>Copyright ©{date}</p>
            </div>
        </footer>
    )
}

