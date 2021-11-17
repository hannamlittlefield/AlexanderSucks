import './App.css';

export default function GitLink(link, imgSource){
    return(
        <a href={link}>
            <img src={imgSource}/>
        </a>
    )
}