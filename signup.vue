<template content="width=device-width">
  <div>
    <Navigation class="header">
      <div class="nav1">
        <a href="#" class="logo" style="margin-left: 108px">
          <img src="../../images/logo-black.png" class="logo" />
        </a>
      </div>
      <div class="nav2">
        <span class="havAcc sl:hidden sm:hidden md:hidden"> Already have an account? </span>
        <a id="hide-link" href="#" class="signup">Log in</a>
      </div>
    </Navigation>
    <div class="contents">
      <el-row style="justify-content: center">
        <el-col :span="14">
          <el-row>
            <el-col :span="4"></el-col>
            <el-col :span="20">
              <div class="first sm:hidden md:hidden">
                <el-row>
                  <el-col :span="18">
                    <div class="heading">Create an account and start accepting Bitcoin payments now.</div>
                  </el-col>
                </el-row>
                <div class="cont1">
                  <el-row>
                    <el-col :span="2">
                      <div class="grid-content ep-bg-purple">
                        <img class="l1" src="../../images/l1.png" alt="cont1" />
                      </div>
                    </el-col>
                    <el-col :span="17">
                      <div class="grid-content ep-bg-purple-light">
                        <div class="conthead">Stablecoin Settlement</div>
                        <div class="content">
                          Use our crypto wallet partner to settle your digital fund into stablecoin conveniently.
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                </div>

                <div class="cont2">
                  <el-row>
                    <el-col :span="2">
                      <div class="grid-content ep-bg-purple">
                        <img class="l3" src="../../images/l2.png" alt="cont2" />
                      </div>
                    </el-col>
                    <el-col :span="17">
                      <div class="grid-content ep-bg-purple-light">
                        <div class="conthead">Compliant Oversight</div>
                        <div class="content">
                          SWe are an MSB member that strictly follows AML, ATF, and other risk control measures to
                          ensure a safe and healthy environment for crypto payments.
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                </div>
                <div class="cont3">
                  <el-row>
                    <el-col :span="2">
                      <div class="grid-content ep-bg-purple">
                        <img class="l3" src="../../images/l3.svg" alt="cont3" />
                      </div>
                    </el-col>
                    <el-col :span="17">
                      <div class="grid-content ep-bg-purple-light">
                        <div class="conthead">Global Capabilities</div>
                        <div class="content">
                          We offer secure, cross-border payment solutions so you can accept Bitcoin payments online in
                          real time, no time, no matter where you’re located. Save 96% gas cost.
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="10">
          <el-row>
            <el-col :span="20">
              <div class="second">
                <div id="sigupform" class="signup-form" style="position: relative; height: 620px">
                  <div class="before">
                    <img src="../../images/blue_triangle.png" alt="blue_triangle" />
                  </div>
                  <div class="after">
                    <img src="../../images/homerectangle.png" alt="blue_recangle" />
                  </div>
                  <div class="formhead">Let's get started</div>
                  <div>
                    <el-form
                      ref="ruleFormRef"
                      :model="ruleForm"
                      :rules="rules"
                      class="demo-ruleForm"
                      :size="formSize"
                      status-icon>
                      <el-form-item label="Email" prop="email">
                        <el-input v-model="ruleForm.email" class="el" placeholder="Your email addres" />
                      </el-form-item>
                      <el-form-item label="Email code" prop="emailcode">
                        <el-input
                          v-model="ruleForm.emailcode"
                          style="position: relative"
                          class="el"
                          placeholder="Enter Email code">
                        </el-input>
                        <button
                          id="myButton"
                          type="button"
                          style="
                            outline: auto;
                            position: absolute;
                            top: 6px;
                            right: 21px;
                            justify-content: center;
                            background: #2858ff !important;
                          "
                          class="verify">
                          Verify
                        </button>
                      </el-form-item>
                      <el-form-item label="Password" prop="password">
                        <el-input v-model="ruleForm.password" class="el" placeholder="Create a password" />
                      </el-form-item>
                      <el-form-item label="Re-type password" prop="repassword">
                        <el-input v-model="ruleForm.repassword" class="el" placeholder="Re-type your password" />
                      </el-form-item>

                      <el-checkbox label="Option 1" size="large"
                        ><span class="ellabel">I agree to the </span> <a class="ellabel" href="#">Terms of Service </a>
                        <span class="ellabel">and</span> <a class="ellabel" href="">Privacy Policy.</a></el-checkbox
                      >
                      <el-form-item>
                        <el-button type="primary" class="submit" @click="submitForm(ruleFormRef)">
                          Create Account
                        </el-button>
                        <!-- <el-button @click="resetForm(ruleFormRef)">Reset</el-button> -->
                      </el-form-item>
                    </el-form>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="4"></el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const formSize = ref('default');
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ruleFormRef = ref<FormInstance>();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ruleForm = reactive({
  email: '',
  emailcode: '',
  password: '',
  repassword: ''
  // date2: '',
  // delivery: false,
  // type: [],
  // resource: '',
  // desc: ''
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const rules = reactive<FormRules>({
  email: [
    { required: true, message: 'Please Enter a Valid Email Address', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
  ],
  emailcode: [
    {
      required: true,
      message: 'Please Enter a Valid Email Code',
      trigger: 'change'
    }
  ],
  password: [
    {
      required: true,
      message: 'Please Enter a Valid Password',
      trigger: 'change'
    }
  ],
  repassword: [
    {
      type: 'date',
      required: true,
      message: 'Please Re-type the same Password',
      trigger: 'change'
    }
  ],
  date2: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a time',
      trigger: 'change'
    }
  ],
  type: [
    {
      type: 'array',
      required: true,
      message: 'Please select at least one activity type',
      trigger: 'change'
    }
  ],
  resource: [
    {
      required: true,
      message: 'Please select activity resource',
      trigger: 'change'
    }
  ],
  desc: [{ required: true, message: 'Please input activity form', trigger: 'blur' }]
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!');
    } else {
      console.log('error submit!', fields);
    }
  });
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`
}));
</script>

<style scoped>
html {
  font-size: 16px;
  background: white !important;
}

.l1,
.l3,
.l5 {
  width: 32.87px !important;
  height: 32.87px !important;
}

.contents {
  display: flex !important;
  flex: 1;
}

.logo {
  height: 32px;
}

.heading {
  font-size: 2rem;
  margin-bottom: 19px;
}

.conthead {
  font-size: 1.5rem;
}

.content {
  font-size: 1.1rem;
}

.first {
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 34px;
}

::v-deep(.el-input__wrapper) {
  height: 54px;
  width: 380px;
  mix-blend-mode: normal;
  opacity: 0.2;
  border: 1px solid #979797;
  border-radius: 8px;
}

::v-deep(#sigupform) {
  margin: 10px;
  background: #ffffff;
  box-shadow: 0px 10px 60px rgba(0, 0, 0, 0.05);
  border-radius: 30px;
  width: 411px;
  /* height: 900px; */
}

::v-deep(.el-form-label) {
  padding: 0 3px 0 0;
}

.el-row {
  display: flex;
  position: unset;
}

.el-col.el-col-2 {
  flex-grow: 1;
}

.el-col.el-col-10 {
  flex-grow: 3;
}

/* .el-col .el-col-10 {
  min-width: 403px;
} */

.header {
  padding: 21px 50px 11px 50px;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
}

.nav1 {
  flex-grow: 189;
}

.nav2 {
  flex-grow: 8;
}

/* .grid-content.ep-bg-purple-light {
  display: flex;
  flex-direction: column;
} */
.cont1.el-row,
.cont2.el-row,
.cont3.el-row {
  display: flex;
}

.formhead {
  font-size: 2rem;
  padding-top: 21px;
  margin-bottom: 10px;
  text-align: center;
}

.el-form-item.el-form-item--default.is-required.asterisk-left.el-form-item--feedback {
  flex-direction: column;
}

::v-deep(.el-form-item__label) {
  justify-content: flex-start !important;
  align-items: flex-start !important;
}

#sigupform {
  margin: 0px auto auto 0px;
  background-color: #ffffff !important;
  box-shadow: 0px 10px 60px rgba(0, 0, 0, 0.05);
  border-radius: 30px;
}

div#sigupform {
  width: 400px;
}

.el-form-item {
  padding: 0px 19px 0px 19px;
}

.el-input__wrapper {
  mix-blend-mode: normal;
  opacity: 0.2;
  border-radius: 8px !important;
  padding: 1px 16px;
  width: 380px;
  /* height: 60px !important; */
}

.el-input__wrapper:hover {
  border-color: unset;
}

.body {
  background: white !important;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
}

.verify {
  background: #2858ff !important;
  opacity: 0.5;
  border-radius: 8px;
  color: #ffffff;
  height: 40px;
  width: 70px;
}

.submit {
  height: 51px;
  background: #2858ff !important;
  opacity: 0.5;
  border-radius: 8px;
  color: #ffffff;
}

.el-checkbox:last-of-type {
  margin-right: 0;
  margin-left: 32px;
}

.after {
  content: '';
  /* background-image: url('../../images/homerectangle.png'); */
  background-repeat: no-repeat;
  background-position: top right;
  position: absolute;
  /* top: 585px; */
  bottom: 144px;
  right: -70px;
  /* left: 1163px; */
  width: 123px;
  height: 123px;
  z-index: -1;
}

el-form-item__label {
  display: block;
  height: 24px;
}

.before {
  content: '';
  /* background-image: url('../../images/blue_triangle.png'); */
  background-repeat: no-repeat;
  background-position: bottom left;
  position: absolute;
  bottom: 413px;
  right: 342.62px;
  /* transform: translateY(50%); */
  height: 123px;
  width: 123px;
  z-index: -1;
}

.content {
  font-size: 1.1rem;
  margin-bottom: 10px;
  margin-top: 10px;
}

/* @media (min-width: 280px) and (max-width: 1412px) {
  .el-col.el-col-14 {
    display: none;
  }
}


*/

/* @media (min-width: 425px) and (max-width: 664px) {
  .logo{
    margin-left: 0px;
  }
  .header {
    padding: 21px 50px 11px 103px;
}
} */

@media (min-width: 280px) and (max-width: 425px) {
  a.logo {
    margin-left: 21px !important;
  }
  .el-checkbox:last-of-type {
    margin-left: 19px;
  }
  .el-col.el-col-14 {
    display: none;
  }

  .header {
    padding: 21px 13px 11px 0px;
  }
}
.second {
  position: relative;
  z-index: 3;
}
@media (min-width: 376px) and (max-width: 425px) {
  .second {
    margin-left: 24px;
  }

  div#sigupform {
    width: 380px;
  }
}

@media (min-width: 321px) and (max-width: 375px) {
  div#sigupform {
    width: 346px;
  }

  #sigupform {
    margin: 1px auto auto 14px;
  }
  ::v-deep(label.el-checkbox.el-checkbox--large) {
    font-size: 10px !important;
    height: 25px;
  }
}

@media (min-width: 280px) and (max-width: 320px) {
  div#sigupform[data-v-2534b399] {
    width: 297px;
  }

  #sigupform[data-v-2534b399] {
    margin: 0px auto auto 11px;
    background-color: #ffffff !important;
    box-shadow: 0px 10px 60px rgba(0, 0, 0, 0.05);
    border-radius: 30px;
  }

  .el-checkbox[data-v-2534b399]:last-of-type {
    margin-left: 21px;
  }
  /* .demo-ruleForm.ellabel {
    font-size: 11px !important;
  } */
  .ellabel {
    font-size: 10.6px;
  }
}

@media (min-width: 320px) and (max-width: 768px) {
  .el-col-10 {
    max-width: 100%;
    flex: 0 0 100%;
  }
}
@media (min-width: 1025px) and (max-width: 1440px) {
  a.logo {
    margin-left: 92px !important;
  }
}
@media (min-width: 769px) and (max-width: 1024px) {
  a.logo {
    margin-left: 50px !important;
  }
}
@media (min-width: 426px) and (max-width: 768px) {
  a.logo {
    margin-left: 56px !important;
  }
  .contents {
    justify-content: center;
  }

  .el-col.el-col-14 {
    display: none;
  }

  /* .el-col.el-col-10 {
    margin-left: 189px;
  } */
}

.el-input.el-input--default.el {
  padding: 0px 10px;
}

button.el-button.el-button--primary.el-button--default.submit {
  width: 362px;
}

.el-input__wrapper {
  height: 46px;
}

.header,
.contents {
  background: white;
}
label.el-checkbox.el-checkbox--large {
  margin-top: 5px;
  margin-bottom: 23px;
}
</style>
