import React from 'react'
import PictureSub from './Picture copy'

class Main extends React.Component{
    render(){
        return(
            <React.Fragment>
                <PictureSub banner='https://wallpapercave.com/wp/9ckkguo.jpg'/>
                <PictureSub banner='https://c4.wallpaperflare.com/wallpaper/220/528/905/windows-10-black-wallpaper-preview.jpg'/>
                <PictureSub banner='https://www.wallpapertip.com/wmimgs/76-769507_windows-wallpaper-hd-download.png'/>
            </React.Fragment>
        )
    }
}

export default Main;