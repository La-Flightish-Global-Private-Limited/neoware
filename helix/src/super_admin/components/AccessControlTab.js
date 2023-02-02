import { useState } from "react"

export default function AccessControlTab(props) {

    const [emails, setEmails] = useState(
        props.add ? [] :
            [
                {
                    id: 1,
                    email: "admin@test.com"
                },
                {
                    id: 2,
                    email: "admin2@test.com"
                },
                {
                    id: 3,
                    email: "admin3@test.com"
                },
                {
                    id: 4,
                    email: "admin3@test.com"
                },
                {
                    id: 5,
                    email: "admin3@test.com"
                },
                {
                    id: 6,
                    email: "admin3@test.com"
                }
            ])
    const renderEmail = (item) => {
        return (
            <div key={item.id} className="email">
                <p style={{ margin: 0,lineHeight:1 }}>{item.email}</p>
                <p className="delete">Delete</p>
            </div>
        )
    }
    return (
        <div className="acContainer">
            <p>Enter Administrator Email</p>
            <div className="acInputContainer">
                <input type={"email"} placeholder="Email" />
                <div className="addNew">
                    <p style={{ color: "white", textAlign: "center",lineHeight:1 }}><span>+</span> Add new</p>
                </div>
            </div>
            {emails.length !== 0 &&
                <div className="acEmailContainer">
                    <div style={{ padding: 10, backgroundColor: "#005EB8" }}>
                        <p style={{ color: "white", margin: 0,lineHeight:1 }}>Active Administrator List</p>
                    </div>
                    <div className="acEmailSubContainer">
                        {emails.map((email) => renderEmail(email))}
                    </div>
                </div>
            }
        </div>
    )
}