import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { projectPageAnimation, 
    frameTrans, 
} from "../animation"
import ScrollTop from "../components/ScrollTop";
import Particle from "../components/Particle";
import ProjectElements from "../components/ProjectElements";
import "react-vertical-timeline-component/style.min.css"

const ProgrammingProjects = () => {
 
    const [filters, setFilters] = useState([
        {id: 0, name:"Web Projects", isSet: false},
        {id: 1, name:"Clients' Projects", isSet: false},
        {id: 2, name:"Extraneous Projects", isSet: false},
      ]);

    let isAll = false;

    const Filters = () =>
        <form>
            <ul>
            <li onClick={() => allCards()} >
                    <input 
                    id={10}
                    type="checkbox" 
                    checked={isAll}
                    onChange={e => {}}
                    />
                    <label htmlFor="all">All</label>
                </li>
            {filters.map(
                (filter, i)=>
                <li  key={i} data-index={i} onClick={() => onFilter(i)} >
                    <input 
                    id={filters.id}
                    type="checkbox" 
                    checked={filter.isSet}
                    onChange={e => {}}
                    />
                    <label htmlFor={filter.name}>{filter.name}</label>
                </li>)}
            </ul>
        </form>
        
    const onFilter = (index) => {
        setFilters(
            filters.map((item) => 
            item.id === index
                ? {...item, isSet: !item.isSet }
                : {...item}
        ))
    }

    const allCards = () => {
        setFilters(
            filters.map((item) => 
            ({...item, isSet: true })
        ))
        isAll = true;
        }

    const Cards = () => {
        let cardArray = [];

        ProjectElements.forEach((card, cardKey) => {
            filters.forEach((filter, filterKey)=> {  
                if((card.tag===filter.name)&&(filter.isSet===true)){
                  cardArray.push(card);
                }
            })
            })

        return(
        <ul>
        {cardArray.map(
            (card, i)=>
            <li  key={i}>
            <figure>
                <img src={card.img} alt={card.title}/>
                <figcaption> 
                <span>{card.title}</span>
                <div className="description">{card.description}</div>
                <a href={card.link}><button>Check it Out!</button></a>
                </figcaption>
            </figure>
            </li>)}
        </ul>
        )}


    return(
        
        <Projects        
        exit="exit"
        variants={projectPageAnimation}
        initial="hidden"
        animate="show"
        >
            <ScrollTop />
                <div>
                    <Filters />
                    <Cards />
                    
                </div>
            <Particle />
        </Projects>
        
    )
}

const Projects = styled(motion.div)`
    overflow: hidden;
        
    body{

    display: block;
    position: absolute;

    top: -120px;
    right: -120px;
    width: 300px;
    height: 300px;
    background: #faa7b730;
    }

    form{
    display: flex;
    justify-content: center;
    margin: 30px 0 30px 0;
    }

    input{
    display: none;
    }

    label{
    background: linear-gradient(to bottom right, #fff, #ccc);
    color: #150000;
    font-weight: 700;
    padding: 8px 10px;
    border: #aaa solid;
    border-width: 1px;
    border-radius: 8px;
    transition: .2s;
    cursor: pointer;
    }

    input:checked~label{
    background: linear-gradient(to bottom right, #ffaaaa, #ff6666);
    padding: 5px 10px;
    border-radius: 6px;
    border: #daa solid;
    border-width: 1px;
    box-shadow: 2px 2px 5px #bb5555;
    }

    ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    padding: 0;
    }

    li{
    margin: 10px 10px;
    }

    @keyframes show {
    0% {
        opacity: 0;
     }
    100% {
        opacity: 1;
        }
    }

    figure{
    z-index: 1;
    background-color: #aaa;
    border: outset;
    border-radius: 20px;
    box-shadow: 0 2px 8px 5px #ffffff25;
    color: #212121;
    font-style: italic;
    padding: 2px;
    text-align: center;
    width: 400px;
    overflow: hidden;
    animation: show .5s ease-in-out;
    }

    img{
    width: 300px;
    height: 250px;
    left: 0;
    border: solid;
    object-fit: cover;
    border-radius: 20px;
    animation: show .5s ease-in-out;
    }

    figcaption{
    font-size: 18px;
    background: white;
    border-radius: 10px  10px 20px 20px;
    border: #444 solid;
    padding: 30px 0 20px 0;
    animation: show .5s ease-in-out;
    }

    figure figcaption{
    margin: 0;
    position: relative;
    }
    figure button{
        color: #200000;
        &:hover{
            background-color: #950101;
            color: white;
        }
    }
    

`

const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    width: 100%;
    height: 300vh;
    background: #fffebf;
    z-index: 2;
`


export default ProgrammingProjects;