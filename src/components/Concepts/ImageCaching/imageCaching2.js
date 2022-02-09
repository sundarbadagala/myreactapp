import React from 'react'

function App() {
    function preloadImages(array) {
        if (!preloadImages.list) {
            preloadImages.list = [];
        }
        var list = preloadImages.list;
        
        for (var i = 0; i < array.length; i++) {
            var img = new Image();
            img.onload = function() {
                var index = list.indexOf(this);
                
                if (index !== -1) {
                    // remove image from the array once it's loaded
                    // for memory consumption reasons
                    list.splice(index, 1);
                }
            }
            list.push(img);
            img.src = array[i];
        }
    }
    
    preloadImages(["https://cdn.pixabay.com/photo/2021/08/12/10/38/mountains-6540497_1280.jpg", "https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_1280.jpg"]);
    return (
        <div>
            <img src='https://cdn.pixabay.com/photo/2021/08/12/10/38/mountains-6540497_1280.jpg' alt='' style={{width:'200px', height:'200px'}}/>
            <img src='https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267_1280.jpg' alt='' style={{width:'200px', height:'200px'}}/>
            <img src='https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_1280.jpg' alt='' style={{width:'200px', height:'200px'}}/>
        </div>
    )
}

export default App
