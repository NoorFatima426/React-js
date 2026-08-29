function Nullish() {
    let user = {
        name: "nOOR",
        bio: "undefined",
        age: "null"
    }
    const score = 0
    return (
        <>
            <p>{user.name ?? "Anonymous"}</p>
            <p>{user.age ?? "Age Unknown"}</p>
            <p>{user.bio ?? "No Bio found"}</p>
            <h6>|| vs ??</h6>
            <p>Score: {score}</p>
            <p>{score || "No score"} </p>
            <p>  {score ?? "No score"}</p>
        </>
    )
}
export default Nullish