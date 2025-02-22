import './form.module.css';

export default function form () {
    return (
        <div>
            <form action="/form" >
                <label>Enter your name:</label>
                <input type="text" name="name" />
                <input type="submit" value="Ok" />
            </form>
        </div>
    )
}