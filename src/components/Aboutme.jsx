import React from 'react'

const Aboutme = () => {
  return (
    <div className="container py-5">
        <div className="row">
            <div className="col-lg-6 col-xm-12">
                <div className="photo-wrap">
                    <img src="https://source.unsplash.com/random" alt="Elshan Mirzayev" className='profile-img' />
                </div>
            </div>    

            <div className="col-lg-6 col-xm-12">
                <h1 className='about-heading mb-5'>About me</h1>
                <p className='t-a-j'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quas reprehenderit tenetur quisquam inventore! Porro amet eaque nobis fugit est beatae. Quo nesciunt repellendus perferendis et beatae aperiam mollitia tempora!</p>
            </div>
        </div>
    </div>
  )
}

export default Aboutme