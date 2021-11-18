import './App.css';
import GithubLogo from '.\src\img\GithubLogo.png'



export default function GitLink(link){
    return(
        <a href={link}>
            <img src={GithubLogo} alt="github logo"/>
        </a>
    )
}