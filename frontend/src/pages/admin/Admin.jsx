import './Admin.css'

export default function Admin() {

     return (
        <div className="admin-page">
            Hello this is the admin page
            <form>
                Create a new item:
                <label>
                    Name:
                    <input type="text" />
                </label>
                <label>
                    quantity:
                    <input type="number" />
                </label>
                <label>
                    type:
                    <input type="text" />
                </label>
                <button>Submit</button>
            </form>
        </div>
     )
}