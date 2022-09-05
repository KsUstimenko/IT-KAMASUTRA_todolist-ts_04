import React, {useState} from 'react';
import './App.css';
import {MembersType, Todolist} from "./Todolist";

export type FilterValuesType = "All" | "Unnie" | "Maknae";

function App() {

    let [blackpinkMembers, setMembers] = useState<Array<MembersType>>( [
        {id: 1, name: "Jisoo", isMaknae: false},
        {id: 2, name: "Jennie", isMaknae: false},
        {id: 3, name: "Rosé", isMaknae: true},
        {id: 4, name: "Lisa", isMaknae: true}
    ]);

    let [filter, setFilter] = useState<FilterValuesType>("Unnie");

    function removeMember(id: number) {
        let filteredBlackpinkMembers = blackpinkMembers.filter(m => m.id !== id)
        setMembers(filteredBlackpinkMembers);
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value)
    }

    let blackpinkMembersMaknaeOrUnnie = blackpinkMembers;
    if(filter === "Maknae") {
        blackpinkMembersMaknaeOrUnnie = blackpinkMembers.filter(m => m.isMaknae === true);
    }
    if(filter === "Unnie") {
        blackpinkMembersMaknaeOrUnnie = blackpinkMembers.filter(m => m.isMaknae === false);
    }

    return (
        <div>
            <Todolist title="Blackpink members"
                      members={blackpinkMembersMaknaeOrUnnie}
                      removeMember={removeMember}
                      changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;