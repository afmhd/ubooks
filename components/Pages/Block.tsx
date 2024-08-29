export const Block = props => {


    if(!props.state.faves)
    {
        props.state.faves = []
    }
    let book = props.book
    return <f-x style={{
        width: 150, height: 200, flex:0, minWidth: 150,
        position: "relative"
    }}>

        <img
            className={global.styles.hoverzoom_nofade}
            src={props.book.imageLink}
            style={{ width: 200, height: 190, objectFit: "fill", flex: 1, minWidth: 150, borderRadius:25 }}
            onClick={() => {
                props.state.form = "bookspecs"
                props.state.book = props.book
                props.refresh()
                
            }} />

        {props.state.faves.includes(props.book.title) ?
         <img src="https://irmapserver.ir/research/34/vecteezy_mobile-game-golden-star-clipart-design-illustration_9342559.png"
            style={{ height: 25, width: 25, objectFit: "contain", position: "absolute", bottom: 7
             }} /> : null}
    </f-x>
}