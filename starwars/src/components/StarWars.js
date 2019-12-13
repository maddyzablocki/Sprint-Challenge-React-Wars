import React, { useState, useEffect } from "react";
import axios from "axios";
import NameList from "./NameList";

function StarWarsNames() {
    const [CharName, setCharName] = useState( [] );

    useEffect(() => {
        axios.get("https://swapi.co/api/people/")
        .then(response => {
            console.log(response);
            setCharName(response.data.results);
        })
        .catch(error =>{
            console.log(error);
        })
    }, [])

    return(
        <div className = "names">
            {CharName.map((character) => {
                return(
                    <NameList
                        name = {character.name}
                        gender = {character.gender}
                        height = {character.height}
                        key = {character.id}
                        hair_color = {character.hair_color}
                        mass = {character.mass}
                        birth_year = {character.birth_year}
                    />
                )}
            )}
        </div>
    );
};

export default StarWarsNames;