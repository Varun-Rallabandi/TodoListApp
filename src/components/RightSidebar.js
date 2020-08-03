import React, {useState} from  'react';
import ShowTask from './ShowTask';

function RightSidebar(props) {

    const [task, setTask] = useState('');

    function handleInput(e) {
        e.preventDefault();
        setTask(e.target.value);
    }

    return (
        <div className = "right-sidebar-contents">
            {/* show input when clicked on left sidebar create task button else when
            clicked on show tasks show them */}
            {props.toshow === "welcome" ? <h2>Welcome to Todo App</h2> : props.toshow === "create" ? <></> : props.toshow === "show" ? <></> : <></>}
        </div>
    )
}

export default RightSidebar;