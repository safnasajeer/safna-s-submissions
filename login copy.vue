<template>
  <div classs="background" style="height: auto">
    <Navigation class="navbar flex">
      <div class="navbar-header">
        <!-- <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button> -->
        <a class="navbar-brand" href="#"><img src="../../images/logo-black.png" /></a>
      </div>
      <div id="myNavbar" class="collapse navbar-collapse" style="margin-top: 10px">
        <span class="havAcc">Already have an account?</span>
        <a id="hide-link" href="#" class="signup">Sign in</a>
        <!-- <span class="havAcc">Don’t have an account?<a href="#" id="hide-link" class="signup">Signup</a></span> -->
      </div>
    </Navigation>

    <div class="container background text-center">
      <div class="flex">
        <div class="firstcol">
          <div id="content-to-hide" class="left-sec" style="font-family: 'Roboto'">
            <label class="cAcc leftbox">
              <b>Create an account and start accepting Bitcoin payments now.</b>
            </label>
            <div class="lleftbox 1eftbox1">
              <div class="flex left-flex">
                <div class="col-sm-2 left-sec">
                  <img class="l1" src="../../images/l1.png" alt="" />
                </div>
                <div class="col-sm-10">
                  <div class="flex-col">
                    <span class="left-head"><b>Stablecoin Settlement</b></span>
                    <p class="left-cont">
                      Use our crypto wallet partner to settle your digital fund into stablecoin conveniently.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="leftbox2">
              <div class="left-flex">
                <div class="col-sm-2 left-sec">
                  <img class="l3" src="../../images/l2.png" alt="" />
                </div>
                <div class="col-sm-10">
                  <div class="flex-col">
                    <p class="left-head"><b>Compliant Oversight</b></p>
                    <p class="left-cont">
                      SWe are an MSB member that strictly follows AML, ATF, and other risk control measures to ensure a
                      safe and healthy environment for crypto payments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="leftbox3">
              <div class="left-flex">
                <div class="col-sm-2 left-sec">
                  <img class="l5" src="../../images/l3.svg" alt="" />
                </div>
                <div class="col-sm-10">
                  <div class="flex-col">
                    <p class="left-head"><b>Global Capabilities</b></p>
                    <p class="left-cont">
                      We offer secure, cross-border payment solutions so you can accept Bitcoin payments online in real
                      time, no matter where you’re located. Save 96% gas cost.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="secondcol text-left">
          <div class="box">
            <!-- <div class="bc"> -->
            <div class="inner-box text-center">
              <div class="form text-center login">
                <!-- Log in -->
                <p>Let‘s get started</p>

                <form id="sigupsec" class="signup-form">
                  <div class="flex">
                    <label id="usernm" for="email">Email</label>
                    <input v-model="email" class="email" name="email" placeholder="Your email address" />
                  </div>
                  <div class="flex">
                    <label id="emailcode" for="emailcode">Email Code</label>

                    <div style="position: relative">
                      <input v-model="emailcode" class="emailcode" name="emailcode" placeholder="Enter Email code" />
                      <button id="myButton" type="button">Verify</button>
                    </div>
                  </div>

                  <div class="flex">
                    <label id="pas" for="password" type="text">Password</label>
                    <input v-model="password" name="password" placeholder="Create a password" />
                  </div>
                  <div class="flex">
                    <label id="pas2" for="repassword" type="text">Re-type password</label>

                    <input v-model="repassword" name="repassword" placeholder="Re-type your password" />
                  </div>
                  <button type="submit" style="width: 360px" class="submit">login</button>
                  <p class="message">
                    <!-- <a href="#" >Forgot your password? Reset it now. </a> -->
                    <a href="#"
                      ><input id="term" class="checkbox" type="checkbox" name="term" value="agree" />I agree to the Terms of Service and
                      Privacy Policy.</a
                    >
                  </p>
                </form>
              </div>
            </div>
          </div>
          <hr />
        </div>
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
.background {
  background-color: #ffffff;
  top: 73px;
}
/* Remove the navbar's default margin-bottom and rounded borders */

.navbar {
  margin-bottom: 0;
  border-radius: 0;
  background: #ffffff !important;
  /* margin-top: 11px; */
}

.navbar-brand img {
  height: 35.4375px;
  width: 151.059326171875px;
  left: 0px;
  top: 2.625px;
  border-radius: 0px;
  position: absolute;
  left: 12%;
  right: 2.54%;
  top: 6.25%;
  bottom: 9.38%;
}

.havAcc {
  height: 20px;
  width: 185px;
  left: 1285px;
  top: 41px;
  border-radius: nullpx;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: black;
}

.signup {
  height: 18px;
  width: 60px;
  left: 1481px;
  top: 42px;
  border-radius: nullpx;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: right;
  cursor: pointer;
  z-index: 100;
}

/* Set height of the grid so .sidenav can be 100% (adjust as needed) */
/* .row.content {
  height: 450px;
} */

/* Set gray background color and 100% height */
.sidenav {
  padding-top: 20px;
  height: 100%;
}

.submit {
  position: absolute;
  width: 380px !important;
  height: 60px;
  left: 47px;
  top: 466px;
  background: #2858ff !important;
  opacity: 0.5;
  border-radius: 8px;
}

.flex {
  margin-bottom: 15px !important;
  flex-direction: column !important;
}

.box {
  height: 654px;
  width: 500px;
  position: fixed;
  /* top: 132px; */
  position: relative;
  bottom: 623px;
  right: 420px;
  border-radius: 30px;
  /* border: 1px solid hsl(224, 15%, 74%); */
  background-color: #ffffff !important;
  margin: 0px auto auto auto;
  box-shadow: 0px 10px 60px rgba(0, 0, 0, 0.05);
}

input {
  width: 380px;
}

div {
  font-size: 18px;
  margin-bottom: 0px;
  /* color:#fff; */
}

.flex {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.flex > div {
  flex: 1;
}

.bc {
  color: #fff;
  border-style: solid;
}

.cyan {
  color: hsl(215, 51%, 70%);
}

.inner-box {
  border-radius: 30px !important;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 42px;
  font-family: 'Roboto', sans-serif;
  color: #000000;
  left: 894px;
  top: 210px;
  border-radius: nullpx;
  width: fit-content;
  height: 400px;
  border-radius: 27px;
  margin: 15px 3px 5px 1px;
}

.cyan img {
  margin-left: 20px;
}

main {
  margin-left: 26px;
  margin-top: 46px;
}

.attribution {
  margin-top: 100px;
  margin-left: 20px;
}

.left {
  float: left;
  width: 33%;
  text-align: right;
  margin-left: -9px;
}

.right {
  float: right;
  width: 67%;
  color: white;
  margin-top: 25px;
}
.form {
  height: 627px !important;
  position: relative;
  z-index: 1;
  background: #ffffff;
  /* max-width: 360px; */
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
}

.form button {
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4caf50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}

.form button:hover,
.form button:active,
.form button:focus {
  background: #43a047;
}

#pas,
#usernm {
  text-align: left !important;
}

.footer {
  padding: 20px 20px 20px 20px;
}

.form.text-center {
  font-style: normal;
  font-weight: 500 !important;
  font-size: 42px;
  line-height: 42px;
  font-family: 'Roboto', sans-serif;
  color: #000000;
}

.signup-form {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
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

label {
  /* position: absolute; */

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;

  height: 18px;
  width: 140px;
  left: 762px;
  top: 300px;
  border-radius: nullpx;
  font-size: 15px;
  color: #46496f;
}

.message {
  left: 92px;
  position: absolute;
  width: 290px;
  height: 18px;
  margin-top: 27px;
  top: 517px !important;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  /* identical to box height, or 100% */

  color: #007aff;
}
/* img.l2 {
  margin-top: -10px;
  z-index: -1;
} */
/* img.l4 {
  z-index: -1;
  margin-top: -20px;
} */
/* Set black background color, white text and some padding */

/* On small screens, set height to 'auto' for sidenav and grid */
@media screen and (max-width: 767px) {
  .sidenav {
    height: auto;
    padding: 15px;
  }

  /* .row.content {
    height: auto;
  } */
}
@media (min-width: 768px) and (max-width: 1024px) {
  .left-flex {
    padding-left: 0px !important;
  }
}

.box::after {
  content: '';
  background-image: url('../../images/homerectangle.png');
  background-repeat: no-repeat;
  background-position: top right;
  position: absolute;
  top: 416px;
  left: 326px;
  height: 94px;
  width: 50%;
  z-index: -1;
}

.inner-box::after {
  content: '';
  background-image: url('./homeashRect.png');
  background-repeat: no-repeat;
  background-position: top right;
  position: absolute;
  top: 427px;
  left: 310px;
  height: 94px;
  width: 50%;
  z-index: -1;
}

.inner-box::before {
  content: '';
  background-image: url('./homeashTriangle.png');
  background-repeat: no-repeat;
  background-position: bottom left;
  position: absolute;
  bottom: 775px;
  right: 0px;
  top: 60px;
  left: 103px;
  transform: translateY(50%);
  height: 100%;
  width: 100%;
  z-index: -1;
}

.box::before {
  content: '';
  background-image: url('../../images/hometriangle.png');
  background-repeat: no-repeat;
  background-position: bottom left;
  position: absolute;
  bottom: 775px;
  right: 64px;
  /* left: 81px; */
  transform: translateY(50%);
  height: 100%;
  width: 100%;
  z-index: -1;
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
  /* position: absolute; */
  width: 540px;
  height: 84px;
  left: 0px;
  text-align: left;
  left: 135px;
}

.leftbox1 {
  margin-top: 40px;
}

.leftbox2,
.leftbox3 {
  margin-top: 40px;
}

.left-sec {
  display: flex;
  flex-direction: column;
  padding-right: 2px;
  /* background: white; */
}
#term {
  width: 15px !important;
  margin-right: 2px;
}
.left-head {
  padding-top: 20px;
  position: absolute !important;
  padding: 1px 16px 16px 1px;
  width: 480px;
  height: 18px;
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

.left-flex {
  align-content: space-around;
  padding-left: 21px;
  height: 80px;
}

.left-cont {
  /* position: absolute; */
  width: 480px !important;
  /* height: 52px !important; */
  margin-top: 29px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #46496f;
  text-align: left;
}
.l1,
.l3,
.l5 {
  width: 32.87px !important;
  height: 32.87px !important;
}
/* .l2 {
  width: 32px !important;
  height: 18.26px !important;
} */
/* .l6, */
/* .l4 {
  width: 18.26px !important;
  height: 18.26px !important;
}
.l4 {
  margin-left: -33px;
  margin-bottom: 12px;
}
.l4wrap, */
/* .l6wrap {
  z-index: -1;
} */

input {
  padding: 0px 6px 0px 6px;
  mix-blend-mode: normal;
  opacity: 0.2;
  border: 1px solid #979797;
  border-radius: 8px;
  width: 380px;
  height: 60px;
}
/* .col-sm-2.left-sec {
    width: 480px!important;
    } */
.col-sm-10 {
  padding: 0px;
}
#myButton {
  padding: 0px;
  position: absolute;
  top: 4px;
  right: 0px;
  left: 312px;
  width: 61px;
  height: 36px;
  background: #2858ff;
  opacity: 0.5;
  border-radius: 8px !important;
}
button#myButton {
  font-size: 12px;
  font-weight: 400;
}
/* .container.text-center, */
.navbar {
  position: relative;
}
.secondcol.text-left {
  top: 132px;
  position: relative;
  left: 656px;
}
#myNavbar .row {
  text-align-last: center;
}
input::placeholder {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
}

.firstcol {
  margin-left: 62px;
  width: 500px;
}
/* .row.content {
  margin-top: 60px;
} */
div#myNavbar {
  margin-left: 812px;
}
.background {
  background: white;
}
</style>
