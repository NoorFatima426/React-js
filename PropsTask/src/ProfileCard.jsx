import "./App.css";

function ProfileCard({userInfo}){
    return(
        <div className="component">
            <p>Name: {userInfo.name}</p>
            <p>Age: {userInfo.age}</p>
            <p>City: {userInfo.city}</p>
        </div>
    )
}
export default ProfileCard;