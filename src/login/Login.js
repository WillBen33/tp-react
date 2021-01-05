import './Login.css';

export default function Login() {
    return(
        <div>
            <form>
                <label>
                    Nom : 
                    <input type="text" name="name" />
                </label>
                <br/>
                <label>
                    Mot de passe : 
                    <input type="password" name="password" />
                </label>
                <br/>
                <input type="submit" value="Envoyer" />
            </form>
        </div>
    )
}