import React, { Component } from 'react'
import './style.css'

export class Caed extends Component {
    render() {
        return (
          <div className="blog-card">
          <input type="radio" name="select" id="tap-1" checked/>
          <input type="radio" name="select" id="tap-2"/>
          <input type="radio" name="select" id="tap-3"/>
          <input type="checkbox" id="imgTap"/>
          <div className="sliders">
            <label for="tap-1" className="tap tap-1"></label>
            <label for="tap-2" className="tap tap-2"></label>
            <label for="tap-3" className="tap tap-3"></label>
          </div>
          <div className="inner-part">
            <label for="imgTap" className="img">
              <img className="img-1" src="profile-1.jpg" alt='' />
            </label>
            <div className="content content-1">
              <span>26 December 2017</span>
              <div className="title">Lorem Ipsum Dolor</div>
              <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo animi atque aliquid pariatur voluptatem numquam, quisquam. Neque est voluptates doloribus!</div>
              <button>Read more</button>
            </div>
          </div>
          <div className="inner-part">
            <label for="imgTap" className="img">
              <img className="img-2" src="profile-2.jpg" alt='' />
            </label>
            <div className="content content-2">
              <span>26 December 2018</span>
              <div className="title">Lorem Ipsum Dolor</div>
              <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum eos ut consectetur numquam ullam fuga animi laudantium nobis rem molestias.</div>
              <button>Read more</button>
            </div>
          </div>
          <div className="inner-part">
            <label for="imgTap" className="img">
              <img className="img-3" src="profile-3.jpg" alt='' />
            </label>
            <div className="content content-3">
              <span>26 December 2019</span>
              <div className="title">Lorem Ipsum Dolor</div>
              <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod excepturi nemo commodi sint eum ipsam odit atque aliquam officia impedit.</div>
              <button>Read more</button>
            </div>
          </div>
        </div>
    
        )
    }
}

export default Caed
