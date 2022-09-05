import React from 'react';
import {FilterValuesType} from "./App";

export type MembersType = {
    id: number
    name: string
    isMaknae: boolean
}

type PropsType = {
    title: string
    members: Array<MembersType>
    removeMember: (id: number) => void
    changeFilter: (value: FilterValuesType) => void
}

export const Todolist = (props: PropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {
                    props.members.map(m => <li><input type="checkbox" checked={m.isMaknae}/>
                            <span>{m.name}</span>
                            <button onClick={() => {props.removeMember(m.id)}}>x</button>
                        </li>
                    )
                }
            </ul>
            <div>
                <button onClick={() => {props.changeFilter("All")}}>All</button>
                <button onClick={() => {props.changeFilter("Maknae")}}>Maknae</button>
                <button onClick={() => {props.changeFilter("Unnie")}}>Unnie</button>
            </div>
        </div>
    );
};