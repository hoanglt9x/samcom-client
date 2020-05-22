<template>
  <section id="contact">
    <b-container fluid>
      <div class="section-header">
        <hr />
        <h3>{{ $t('contact.title') }}</h3>
      </div>
      <div class="row wow fadeInUp">
        <div class="col-lg-6">
          <div class="map mb-4 mb-lg-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2166.5888036010883!2d105.78950601429179!3d21.0510340058356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2b747d71d24c1f62!2zQ-G7pWMgQuG6o24gxJDhu5MgUXXDom4gxJDhu5lp!5e0!3m2!1svi!2s!4v1588849529637!5m2!1svi!2s"
              frameBorder="{0}"
              allowFullScreen
            />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="row">
            <div class="col-md-5 info">
              <b-icon icon="building"></b-icon>
              <p>
                {{ $t('contact.Address1') }}<br />
                {{ $t('contact.Address2') }}
              </p>
            </div>
            <div class="col-md-4 info">
              <b-icon icon="envelope-fill"></b-icon>
              <p>samcom@samcom.com.vn</p>
              <b-icon icon="inboxes-fill"></b-icon>
              <p>(+84) 0243.7558.093</p>
            </div>
            <div class="col-md-3 info">
              <i class="material-icons ">call</i>
              <p>(+84) 243.7558.092</p>
              <i class="material-icons ">local_phone</i>
              <p>069573259</p>
            </div>
          </div>
          <div class="form">
            <!-- <div id="sendmessage">Tin nhắn của bạn đã được gửi. Cảm ơn!</div> -->
            <div id="errormessage" />
            <form action method="post" role="form" class="contactForm">
              <div class="form-row">
                <div class="form-group col-lg-6">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    class="form-control"
                    :placeholder="$t('contact.name')"
                    data-rule="minlen:4"
                    data-msg="Tối thiểu 4 ký tự"
                  />
                  <div class="validation" />
                </div>
                <div class="form-group col-lg-6">
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    :placeholder="$t('contact.email')"
                    data-rule="email"
                    data-msg="Vui lòng nhập đúng địa chỉ email của bạn"
                  />
                  <div class="validation" />
                </div>
              </div>
              <div class="form-group">
                <input
                  id="subject"
                  type="text"
                  class="form-control"
                  name="subject"
                  :placeholder="$t('contact.titlemail')"
                  data-rule="minlen:4"
                  data-msg="Tối thiểu 8 ký tự"
                />
                <div class="validation" />
              </div>
              <div class="form-group">
                <textarea
                  class="form-control"
                  name="message"
                  rows="{5}"
                  data-rule="required"
                  data-msg="Vui lòng viết nội dung gì đó cho
                chúng tôi"
                  :placeholder="$t('contact.content')"
                  defaultValue=""
                />
                <div class="validation" />
              </div>
              <div class="text-center">
                <button type="submit" title="Send Message">
                  {{ $t('contact.send') }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </b-container>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
#contact hr {
  margin: 0;
  padding-bottom: 15px;
}
#contact iframe {
  border: 0;
  width: 100%;
  height: 370px;
}
#contact {
  /* box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.1); */
  padding: 0 0;
  overflow: hidden;
}

#contact .section-header {
  padding-bottom: 30px;
}

#contact .contact-about h3 {
  font-size: 36px;
  margin: 0 0 10px 0;
  padding: 0;
  line-height: 1;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #007bff;
}

#contact .contact-about p {
  font-size: 14px;
  line-height: 24px;
  font-family: 'Montserrat', sans-serif;
  color: #888;
}

#contact .social-links {
  padding-bottom: 20px;
}

#contact .social-links a {
  font-size: 18px;
  display: inline-block;
  background: #fff;
  color: #007bff;
  line-height: 1;
  padding: 8px 0;
  margin-right: 4px;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
  border: 1px solid #007bff;
}

#contact .social-links a:hover {
  background: #007bff;
  color: #fff;
}

#contact .info {
  color: #283d50;
}

#contact .info i {
  font-size: 32px;
  color: #007bff;
  float: left;
  line-height: 1;
}

.b-icon {
  font-size: 32px;
  color: #007bff;
  float: left;
  line-height: 1;
}

#contact .info p {
  padding: 0 0 10px 36px;
  line-height: 28px;
  font-size: 14px;
}

#contact .form #sendmessage {
  color: #007bff;
  border: 1px solid #007bff;
  display: none;
  text-align: center;
  padding: 15px;
  font-weight: 600;
  margin-bottom: 15px;
}

#contact .form #errormessage {
  color: red;
  display: none;
  border: 1px solid red;
  text-align: center;
  padding: 15px;
  font-weight: 600;
  margin-bottom: 15px;
}

#contact .form #sendmessage.show,
#contact .form #errormessage.show,
#contact .form .show {
  display: block;
}

#contact .form .validation {
  color: red;
  display: none;
  margin: 0 0 20px;
  font-weight: 400;
  font-size: 13px;
}

#contact .form input,
#contact .form textarea {
  border-radius: 0;
  box-shadow: none;
  font-size: 14px;
}

#contact .form button[type='submit'] {
  background: #007bff;
  border: 0;
  border-radius: 20px;
  padding: 8px 30px;
  color: #fff;
  transition: 0.3s;
}

#contact .form button[type='submit']:hover {
  background: #0067d5;
  cursor: pointer;
}
</style>
