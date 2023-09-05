import React, { useContext, useEffect } from 'react';
import { IUser } from '../../DTO/DTOs';
import { UserContext } from '../../Context/UserContext';
import { Button } from 'react-bootstrap';

interface UpdateUserBTNProps
{
    UpdateUser: IUser,
    isDisabled: boolean
}

function UpdateUserBTN(props: UpdateUserBTNProps) {

    const user = useContext(UserContext);

    useEffect(() => {
        console.log(props.UpdateUser);
    }, [props.UpdateUser])

    const handleClick = () =>
    {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', 'Authorization': user.token },
            body: JSON.stringify(props.UpdateUser)
        };
        fetch("https://localhost:44316/api/Client/User/Update", requestOptions).then((res) => res.json()).then(data => {
            if (data[0] !== "E") {
                alert("L'utilisateur a ete mis a jours");
                user.UpdateUser(props.UpdateUser);
            }
            else {
                alert("Error : l'API a renvoyer Null");
            }
        });
    } 

    return (
        <Button onClick={handleClick} style={{ backgroundColor: "#29465c", borderColor: "#000" }} disabled={props.isDisabled}>Mettre a jours l'utilisateur</Button>
    );
}

export default UpdateUserBTN;