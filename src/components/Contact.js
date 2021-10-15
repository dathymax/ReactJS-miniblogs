import React from 'react'

const Contact = () => {
    return (
        <div className="contact">
            <div className="text--heading-big">
                Get in touch
            </div>
            <div className="text--333">
                Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
            </div>
            <div className="text--333">
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
            </div>
            <div className="space__20"></div>

            <p class="text--input">Name</p>
            <div className="space__10"></div>
            <input type="text" name="" id="" placeholder="Enter your name" class="text--input-field"></input>
            <div className="space__20"></div>

            <p class="text--input">Email</p>
            <div className="space__10"></div>
            <input type="text" name="" id="" placeholder="Enter your email" class="text--input-field"></input>
            <div className="space__20"></div>

            <p class="text--input">Message</p>
            <div className="space__10"></div>
            <textarea type="text" rows="5" placeholder="Enter your message" class="text--input-field"></textarea>
            <div className="space__20"></div>

            <input type="submit" value="Submit" className="btn"></input>
            <div className="space__10"></div>
        </div>
    )
}

export default Contact
