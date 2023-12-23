function MYButtton(){
    return(
    <div>
    <button type="button" class="btn btn-success">Sign in</button>    
    </div>
    )
}

function UserEntry(){
    return(
    <div>
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
        <br/>
        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>

    )
}


export default function App(){
    return(
        <div>
            <h1>Sign In</h1>
            <UserEntry/>
            <br/>
            <MYButtton/>
        </div>

    )
        

    

}
        
    
