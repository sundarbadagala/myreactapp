import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function Bootstrap() {
    return (
        <div>
            <button type="button" class="btn btn-primary">Primary</button>
            <button type="button" class="btn btn-secondary">Secondary</button>
            <button type="button" class="btn btn-success">Success</button>
            <button type="button" class="btn btn-danger">Danger</button>
            <button type="button" class="btn btn-warning">Warning</button>
            <button type="button" class="btn btn-info">Info</button>
            <button type="button" class="btn btn-light">Light</button>
            <button type="button" class="btn btn-dark">Dark</button>
            
            <button type="button" class="btn btn-link">Link</button>


            <div class="card" style={{width: '18rem'}}>
                <img src="https://www.indianhealthyrecipes.com/wp-content/uploads/2019/09/gutti-vankaya-kura-curry-recipe.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
            </div>
            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked/>
                <label class="btn btn-outline-primary" for="btnradio1">Radio 1</label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
                <label class="btn btn-outline-primary" for="btnradio2">Radio 2</label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off"/>
                <label class="btn btn-outline-primary" for="btnradio3">Radio 3</label>
            </div>
        </div>
    )
}

export default Bootstrap
