import { useState } from 'react'


const Item = ({img, appName}) => {
    return (
        /*
        add color
        add border
        add card 
        add flex
        */
        <div >
            <div>
                <img src={img}/>
                <p>{appName}</p>
            </div>
            <div>
                {/* delete  */}
            </div>
        </div>
    )
}

const ItemDetails = ({password, email, appName, img}) => {
    const onClick = () => {}
    const onChange = () => {}
    return (
        /*
        add color
        add border
        add card 
        add flex
        */
        <form >
            <div>
                <div>
                    <img src={img}/>
                    <p>{appName}</p>
                </div>
                <div>
                    {/* delete / edit */}
                </div>
            </div>
            <div>
                {
                true ? 
                <>
                    <input name="email" onChange={onChange} type="text"/>
                    <input name="password" onChange={onChange} type="text"/>
                </>
                :
                <>
                    <div>
                        <p>Email :</p>
                        <p>{email}</p>

                    </div>
                    <div>
                        <p>Password :</p>
                        <p>{password}</p>
                    </div>
                </>
                }
            </div>
            <button onClick={onClick}>Save</button>
        </form>
    )
}