import React, { useEffect, useState } from 'react';
import ProfileStatusForm from './ProfileStatusForm';


const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deActivateEditMode = (newStatus) => {
        props.updateStatus(newStatus);
        setEditMode(false)
    }


    return <div>
        {editMode
            ? <ProfileStatusForm
                deActivateEditMode={deActivateEditMode}
                status={status}
            />
            : <span onDoubleClick={activateEditMode}> {status || '-----'}</span>
        }
    </div>


}
export default ProfileStatus;