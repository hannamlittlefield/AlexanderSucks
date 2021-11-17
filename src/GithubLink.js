import './App.css';

export default function GitLink(link){
    return(
        <a href={link}>
            <img className="gitImage" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>
        </a>
    )
}