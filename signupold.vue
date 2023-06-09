<template>
  <div classs="background flex" style="height: auto">
    <Navigation class="flex fnav" style="padding-top: 13px; padding-left: 50px; padding-right: 166px">
      <div class="navbar-header">
        <!-- <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button> -->
        <a class="navbar-brand" href="#" style="width: 18.39px">
          <img src="../../images/logo-black.png" class="logo"
        /></a>
      </div>
      <div id="myNavbar" class="collapse navbar-collapse grow" style="margin-top: 10px">
        <span class="havAcc sl:hidden"> Already have an account? </span>
        <a id="hide-link" href="#" class="signup">Log in</a>
        <!-- <span class="havAcc ss:hidden sm:hidden sl:hidden md:hidden"
          >Don’t have an account?
          <a id="hide-link" href="#" class="signup ss:hidden sm:hidden sl:hidden md:hidden">Signup</a>
        </span> -->
      </div>
    </Navigation>

    <div class="background text-center flex main-box">
      <div class="firstcol sm:hidden md:hidden flex flex-col lg:flex-col lg:flex-col varheight">
        <div>
          <label class="cAcc lg:cAcc leftbox"> Create an account and start accepting Bitcoin payments now. </label>
        </div>
        <div class="flex mt-10 lg:ml-8">
          <div><img class="l1" src="../../images/l1.png" alt="" /></div>
          <div class="flex flex-col" style="margin-left: 10px">
            <span class="left-head">Stablecoin Settlement</span>
            <p class="left-cont">
              Use our crypto wallet partner to settle your digital fund into stablecoin conveniently.
            </p>
          </div>
        </div>
        <div class="flex mt-10 lg:ml-8">
          <div><img class="l3" src="../../images/l2.png" alt="" /></div>
          <div lass="flex flex-col" style="margin-left: 10px">
            <p class="left-head">Compliant Oversight</p>
            <p class="left-cont">
              SWe are an MSB member that strictly follows AML, ATF, and other risk control measures to ensure a safe and
              healthy environment for crypto payments.
            </p>
          </div>
        </div>
        <div class="flex mt-10 lg:ml-8">
          <div><img class="l3" src="../../images/l3.svg" alt="" /></div>
          <div lass="flex flex-col" style="margin-left: 10px">
            <p class="left-head">Global Capabilities</p>
            <p class="left-cont">
              We offer secure, cross-border payment solutions so you can accept Bitcoin payments online in real time, no
              matter where you’re located. Save 96% gas cost.
            </p>
          </div>
        </div>
      </div>
      <!-- 2xl:ml-50 -->
      <div class="secondcol text-left flex" style="position: relative; padding-bottom: 13px">
        <div class="before lg:right-105"><img src="../../images/blue_triangle.png" alt="blue_triangle" /></div>
        <div class="after"><img src="../../images/homerectangle.png" alt="blue_recangle" /></div>

        <div class="box lg:w-120 lg:ml-10" style="z-index: 1000">
          <div class="inner-box text-center" style="height: 737px">
            <div class="form text-center login">
              <p style="width: 500px">Let's get started</p>
              <form id="sigupsec" class="signup-form">
                <div class="flex flex-col" style="margin-top: 30px">
                  <label id="usernm" for="email">Email</label>
                  <input v-model="email" class="email" name="email" placeholder="Your email address" />
                </div>
                <div class="flex flex-col">
                  <label id="emailcode" for="emailcode">Email Code</label>
                  <div style="position: relative">
                    <input v-model="emailcode" class="emailcode" name="emailcode" placeholder="Enter Email code" />
                    <button id="myButton" type="button" style="outline: auto">Verify</button>
                  </div>
                </div>
                <div class="flex flex-col">
                  <label id="pas" for="password" type="text">Password</label>
                  <input v-model="password" name="password" placeholder="Create a password" />
                </div>
                <div class="flex flex-col">
                  <label id="pas2" for="repassword" type="text">Re-type password</label>
                  <input v-model="repassword" name="repassword" placeholder="Re-type your password" />
                </div>
                <button
                  type="submit"
                  style="
                    margin-top: 35px;
                    width: 381px;
                    outline: auto;
                    font-style: normal;
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 18px;
                  "
                  class="submit">
                  Create Account
                </button>
                <p class="message">
                  <!-- <a href="#" >Forgot your password? Reset it now. </a> -->
                  <input id="term" type="checkbox" name="term" value="agree" /><span>I agree to the</span
                  ><a href="#">Terms of Service </a>and<a href="">Privacy Policy.</a>
                </p>
              </form>
            </div>
          </div>
        </div>

        <!-- <hr /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginCompont'
  // Your component's JavaScript logic goes here
};
</script>

<style scoped>
#term {
  width: 15px !important;
  margin-right: 2px;
  line-height: 20px;
}
.message {
  left: 92px;
  width: 347px;
  height: 18px;
  padding-top: 5px;
  top: 517px !important;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height, or 100% */
  color: black;
  /* color: #007aff; */
}
.submit {
  height: 60px;
  background: #2858ff !important;
  opacity: 0.5;
  border-radius: 8px;
  color: #ffffff;
}
input {
  width: 380px;
}
input {
  padding: 0px 6px 0px 6px;
  mix-blend-mode: normal;
  opacity: 0.2;
  border: 1px solid #979797;
  border-radius: 8px;
  width: 380px;
  height: 60px;
}
input::placeholder {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
}
#myButton {
  padding: 0px;
  position: absolute;
  top: 12px;
  right: 0px;
  left: 302px;
  width: 72px;
  height: 36px;
  background: #2858ff;
  opacity: 0.5;
  color: #ffffff;
  border-radius: 8px !important;
}
button#myButton {
  font-size: 18px;
  font-weight: 400;
}
.signup-form {
  width: 360px;
  /* padding: 7% 0 0; */
  margin: auto;
  height: 537px;
}
.form.text-center.login {
  font-family: 'Roboto', sans-serif !important;
  font-style: normal;
  font-weight: 500 !important;
  font-size: 42px !important;
  line-height: 42px;
  border-radius: 30px;
  color: #000000;
}

.form.text-center.login p {
  padding-top: 26px;
  /* padding-left: 0px; */
  width: 425px;
  /* padding-right: 60px; */
}
input#term {
  border: 4px solid #b0b0b0;
  height: 24px;
  width: 24px !important;
  border-radius: 4px;
  /* position: absolute; */
  bottom: 118px;
  right: 598px;
}
.cAcc {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 42px;
  color: #000000;
  top: 53px;
}

.leftbox {
  width: 540px;
  height: 84px;
  text-align: left;
  left: 135px;
  position: sticky;
  display: block;
  margin-bottom: 20px;
}
.leftbox1 {
  margin-top: 40px;
}
.left-head {
  padding-top: 20px;
  padding: 1px 16px 16px 1px;
  width: 480px;
  height: 18px;
  font-family: 'Roboto', sans-serif !important;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 17px;
  color: #000000;
  text-align: initial;
}

.leftbox2,
.leftbox3 {
  margin-top: 40px;
}
.box {
  height: 737px;
  width: 500px;
  /* top: 132px; */
  bottom: 614px;
  right: 420px;
  /* border: 1px solid hsl(224, 15%, 74%); */
  border-radius: 30px;
  margin: -19px auto auto 69px;
  background-color: #ffffff !important;
  box-shadow: 0px 10px 60px rgba(0, 0, 0, 0.05);
}
.flex.fnav {
  background: white;
}
.background.text-center.flex {
  padding-top: 31px;
  /* padding-right: 178px; */
  padding-right: 420px;
  padding-left: 50px;
}
.fnav {
  justify-content: space-between;
}

.background {
  background-color: #ffffff;
  top: 73px;
}

/* Remove the navbar's default margin-bottom and rounded borders */

.cyan {
  color: hsl(215, 51%, 70%);
}

label {
  /* position: absolute; */
  margin-bottom: 13px;
  margin-top: 13px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  text-align: initial;
  height: 18px;
  width: 140px;
  left: 762px;
  top: 300px;
  border-radius: nullpx;
  font-size: 15px;
  color: #46496f;
}
@media (min-width: 1366px) and (max-width: 2560px) {
  .navbar-header {
    margin-right: 697px;
  }
}
@media (max-width: 1365x) {
  /* .navbar-header[data-v-4ca33632] {
    margin-right: 355px;
} */
}
/* .navbar-header[data-v-4ca33632] {
    margin-right: 355px;
} */
@media (min-width: 769px) and (max-width: 2560px) {
  /* .background.text-center.flex {
    justify-content: center;
  } */
  /* a.navbar-brand {
    padding-left: 115px;
} */
}

@media (min-width: 769px) and (max-width: 1024px) {
  .logo {
    width: 105px;
    height: 25px;
  }
  button#myButton,
  button.submit {
    font-size: 16px;
    font-weight: 300;
  }
  .background.text-center.flex[data-v-4ca33632] {
    padding-right: 116px;
  }
  .flex.fnav {
    padding-left: 18px;
    padding-right: 108px;
  }
  .leftbox[data-v-4ca33632] {
    width: 515px;
    left: 135px;
    margin-bottom: 20px;
  }
  label.cAcc.leftbox {
    font-size: 18px !important;
  }
  .left-cont[data-v-4ca33632] {
    font-size: 15px;
  }
}
@media (min-width: 769px) and (max-width: 1024px) {
  label.cAcc.leftbox {
    height: 12px;
  }
  .form.text-center.login[data-v-4ca33632] {
    font-weight: 400 !important;
    font-size: 36px !important;
    line-height: 42px;
  }
  /* .form.text-center.login p[data-v-4ca33632] {
    padding-right: 123px;
  } */
  .firstcol {
    padding-left: 10px;
  }
  .box {
    margin-left: 4px;
  }
}

@media (min-width: 426px) and (max-width: 768px) {
  .firstcol {
    display: none;
  }

  .background.text-center.flex.main-box {
    flex-direction: column;
  }
  .firstcol.flex.flex-col {
    height: 537px;
  }
}
@media (min-width: 769px) and (max-width: 1024px) {
  .left-flex,
  .background.text-center.flex {
    padding-left: 0px !important;
  }

  .firstcol.flex.flex-col {
    height: 582px;
  }
  .form.text-center.login p[data-v-4ca33632] {
    /* padding-left: 76px !important; */
    width: 425px;
  }
}

.firstcol.flex.flex-col .varheight {
  height: 795px !important;
}
@media (min-width: 426px) and (max-width: 768px) {
  .background.text-center.flex[data-v-4ca33632] {
    padding-top: 35px;
    padding-right: 197px;
    padding-left: 105px;
  }
  p {
    width: 438px !important;
  }
}
@media (min-width: 376px) and (max-width: 425px) {
  p {
    width: 396px;
  }
  .form.text-center.login[data-v-4ca33632] {
    font-weight: 400 !important;
    font-size: 33px !important;
  }
  .background.text-center.flex {
    padding-left: 0px !important;
  }
  .firstcol.flex.flex-col {
    display: none !important;
  }
  .havAcc {
    display: none;
  }
  .form.text-center.login p {
    width: 501px;
  }
}

@media (max-width: 425px) {
  .flex.fnav {
    padding-top: 12px;
    padding-left: 50px;
    padding-right: 38px;
  }
  .havAcc {
    display: none;
  }
  .firstcol.flex.flex-col {
    display: none !important;
  }
}
.left-flex {
  align-content: space-around;
  padding-left: 21px;
  height: 80px;
}
.l1,
.l3,
.l5 {
  width: 32.87px !important;
  height: 32.87px !important;
}
/* .firstcol.flex.flex-col {
  padding-left: 129px;
} */
.navbar-header {
  margin-top: 10px;
}
.logo {
  height: 32px;
}
.left-cont {
  /* position: absolute; */
  width: 480px !important;
  /* height: 52px !important; */
  margin-top: 9px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #46496f;
  text-align: left;
}

.after {
  content: '';
  /* background-image: url('../../images/homerectangle.png'); */
  background-repeat: no-repeat;
  background-position: top right;
  position: absolute;
  /* top: 585px; */
  bottom: 144px;
  right: -88px;
  /* left: 1163px; */
  width: 123px;
  height: 123px;
  z-index: 0;
}

.before {
  content: '';
  /* background-image: url('../../images/blue_triangle.png'); */
  background-repeat: no-repeat;
  background-position: bottom left;
  position: absolute;
  bottom: 538px;
  right: 442.62px;
  transform: translateY(50%);
  height: 123px;
  width: 123px;
  z-index: 0;
}
input#tetermrm {
  width: 25px !important;
  height: 25px !important;
}
</style>
