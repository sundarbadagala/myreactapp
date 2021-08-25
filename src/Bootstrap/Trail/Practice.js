import React from 'react'
import Card from './PracticeSub'

const Data =[
    {
        title:'Eswar',
        banner:'https://www.filmibeat.com/img/190x100x237/popcorn/movie_posters/eshwar-4911.jpg',
        rating:6,
    },
    {
        title:'Raghavendra',
        banner:'https://i.pinimg.com/originals/f1/b7/6b/f1b76bd0146061e3811d98234c514833.jpg',
        rating:9,
    },
    {
        title:'Varsham',
        banner:'https://upload.wikimedia.org/wikipedia/en/0/0f/Varsham.jpg',
        rating:4,
    },
    {
        title:'Adavi Ramudu',
        banner:'https://upload.wikimedia.org/wikipedia/en/8/8f/Adavi_Ramudu.jpg',
        rating:5,
    },
    {
        title:'Chakram',
        banner:'https://m.media-amazon.com/images/M/MV5BNzlkMzM4MGItNWQ5My00NzU2LWIwMzEtZWYyZWIyMzcxYmU5XkEyXkFqcGdeQXVyNjU1OTU2NTE@._V1_.jpg',
        rating:5,
    },
    {
        title:'Chatrapathi',
        banner:'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Chhatrapati_movie_poster.jpg/220px-Chhatrapati_movie_poster.jpg',
        rating:5,
    },
    {
        title:'Pournami',
        banner:'https://media.ragalahari.com/posters/2006/pournami-poster.jpg',
        rating:5,
    },
    {
        title:'Yogi',
        banner:'https://m.media-amazon.com/images/M/MV5BZDk4YTg3OGItODI2Ni00NWExLTkxYWEtMTc0NDcyMGE5MjVhXkEyXkFqcGdeQXVyMjk1MjEyNTI@._V1_.jpg',
        rating:5,
    },
    {
        title:'Munna',
        banner:'https://images-na.ssl-images-amazon.com/images/I/71oGsux8UpL._RI_.jpg',
        rating:5,
    },
    {
        title:'Bujjigadu',
        banner:'https://images-na.ssl-images-amazon.com/images/I/61tw-vU9YZL._SY445_.jpg',
        rating:5,
    },
    {
        title:'Billa',
        banner:'https://upload.wikimedia.org/wikipedia/en/6/63/Billa_Telugu_Film_Poster.jpg',
        rating:1,
    },
    {
        title:'Ek Niranjan',
        banner:'https://upload.wikimedia.org/wikipedia/en/thumb/3/31/Ek_Niranjan_poster.jpg/220px-Ek_Niranjan_poster.jpg',
        rating:5,
    },
    {
        title:'Darling',
        banner:'https://filmizest.files.wordpress.com/2010/01/51.jpg?w=584',
        rating:5,
    },
    {
        title:'Mr Perfect',
        banner:'https://www.cinejosh.com/gallereys/movies/normal/mr_perfect_movie_wallpapers/mr_perfect_movie_wallpapers_008.jpg',
        rating:5,
    },
    {
        title:'Rebel',
        banner:'https://www.filmibeat.com/ph-big/2012/08/rebel_13443981711.jpg',
        rating:5,
    },
    {
        title:'Mirchi',
        banner:'https://archive.gulte.com/content/2012/11/news/Prabhas-Realizes-Value-Of-Colors--192.jpg',
        rating:7,
    },
    {
        title:'Bahubali',
        banner:'https://i.pinimg.com/originals/54/db/97/54db97d1f7883e0f4e88b82314b4a9ad.jpg',
        rating:10,
    },
]



function Practice() {
    return (
        <div className='d-flex flex-wrap justify-content-center'>
            {
                Data.map(item =>
                    <Card {...item}/>
                    )
            }
        </div>
    )
}

export default Practice
