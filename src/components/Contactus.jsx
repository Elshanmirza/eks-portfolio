import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contactus = () => {
    // Hook-  hooklari arawdirmag
    // useref- referanslari goturmek ucun istifade olunur
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const SERVICE_ID = 'service_dn1yldp'
        const TEMPLATE_ID = 'template_wwktv3u'
        const USER_ID = 'skowGbhznhmEzA0Bn'
    
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <form ref={form} onSubmit={ sendEmail}>
        <div className='contactus'>
            <div className="col-md-6 col-xs-12">
                <input type="text" name='name' placeholder='adinizi daxil edin' />
                <input type="text" name='phone' placeholder='telefonu daxil edin' />
            </div>
            
            <div className="col-md-6 col-xs-12">
                <textarea name="message" id="" cols="30" rows="10"></textarea>
                <button class="btn btn-outline-warning" type='submit'>mene mesaj gonder</button>
            </div>
        </div>
        

    </form>
  )
}

export default Contactus