import React from 'react';

function Meme()
{
    const [memes,setMemes] = React.useState(["a"])
    const [meme, setMeme] = React.useState(
    {
        topText : "",
        bottomText : "",
        url : ""
    });
    
    React.useEffect(() =>
    {
        fetch("https://api.imgflip.com/get_memes").then((res) => {return res.json()}).then((obj) =>
        {
            console.log(obj);
            setMemes(obj.data.memes);
        })
    },[]);


    function buttonClickEvent()
    {
        let randomMemeUrl = memes[Math.floor(Math.random()*memes.length)].url
        setMeme((prevMeme) =>
        {
            return {topText : document.querySelector(".top").value , bottomText : document.querySelector(".bottom").value, url : randomMemeUrl};
        })
    }

    function handleChange(event)
    {
        setMeme(prevMeme =>
        {
            return {...prevMeme, [event.target.name]: event.target.value}
        })
    }
    return(
        <main>
            <div className="form">

                <input type="text" value={meme.topText} name="topText" onChange={handleChange} placeholder='Top Text' className='form__input top' />
                <input type="text" value={meme.bottomText} name="bottomText" onChange={handleChange} placeholder='Bottom Text' className='form__input bottom' />
                <button onClick={buttonClickEvent} className='form__button'>Get a new meme image 📺</button>

            </div>

            <div className="meme__container">
                {meme.topText!=="" && <h3 className="top__text">{meme.topText}</h3>}
                {meme.url!=="" && <img src={meme.url} alt="meme" className="image" />}
                {meme.bottomText!=="" && <h3 className="bottom__text">{meme.bottomText}</h3>}
            </div>
        </main>

    )
}

export default Meme;