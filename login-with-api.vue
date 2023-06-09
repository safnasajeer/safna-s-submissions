<template>
  <div classs="background flex" style="height: auto">
    <Navigation class="header">
      <div class="nav1">
        <a href="#" class="logo" style="margin-left: 108px">
          <img src="../../images/logo-black.png" class="logo" />
        </a>
      </div>
      <div class="nav2">
        <span class="havAcc sl:hidden sm:hidden md:hidden"> Don’t have an account? </span>
        <a id="hide-link" href="#" class="signup">Sign up</a>
      </div>
    </Navigation>
    <div class="contents">
      <el-row class="pcontents" style="justify-content: center; background: white; height: 100vh">
        <el-col :span="4"></el-col>
        <el-col :span="10">
          <div class="second">
            <div
              id="sigupform"
              class="signup-form"
              style="position: relative; height: 483px; margin-bottom: 22px; margin-right: 20px">
              <div class="before">
                <img src="../../images/blue_triangle.png" alt="blue_triangle" />
              </div>
              <div class="after">
                <img src="../../images/homerectangle.png" alt="blue_recangle" />
              </div>
              <div class="formhead">Log in</div>
              <div>
                <el-form
                  ref="loginForm"
                  :model="ruleForm"
                  :rules="rules"
                  class="demo-ruleForm"
                  :size="formSize"
                  status-icon
                  style="padding: 0px 25px 28px 25px">
                  <el-form-item label="Email" prop="username">
                    <el-input
                      v-model="ruleForm.username"
                      class="el"
                      placeholder="Email addres"
                      @keyup.enter="handleClickLogin" />
                  </el-form-item>

                  <el-form-item label="Password" prop="password">
                    <el-input
                      v-model="ruleForm.password"
                      class="el"
                      placeholder="Password"
                      @keyup.enter="handleClickLogin" />
                  </el-form-item>
                  <el-form-item>
                    <!-- @click="submitForm(ruleFormRef)" -->
                    <el-button type="primary" class="submit" @click="handleClickLogin"> Log In </el-button>
                    <el-link type="primary" class="ellabel" href="#">Forgot your password? Reset it now</el-link>
                    <!-- <el-button @click="resetForm(ruleFormRef)">Reset</el-button> -->
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="4"></el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import { login, checkEmail as checkEmailApi } from '@/api/modules/test';
import { injectCSRFTokenToHeaders } from '@/api';
import { MainStore } from '@/store';
import { useRoute, useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';

const mainStore = MainStore();
const route = useRoute();
const router = useRouter();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const formSize = ref('default');
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ruleFormRef = ref<FormInstance>();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ruleForm = reactive({
  username: '',
  password: ''
  // date2: '',
  // delivery: false,
  // type: [],
  // resource: '',
  // desc: ''
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const form = ref({
//   username: '',
//   password: ''
// });
const loginForm = ref(null);
const loginType = ref('login');
const backStack = ref([]);
const disabled = ref(false);

const checkEmail = async () => {
  let response = await checkEmailApi(window.encodeURIComponent(ruleForm.username));
  return !!response;
};

const validateUser = async (rule: unknown, value: string, callback: (error?: string | Error) => void) => {
  if (value === '') {
    callback(new Error('Please input the email!'));
  } else {
    if (ruleForm.username !== '') {
      if (!loginForm.value) return;
      if (!(await checkEmail())) {
        callback(new Error(`Email address not exists.`));
      }
      callback();
    }
    callback();
  }
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const rules = reactive<FormRules>({
  username: [
    { required: true, validator: validateUser, trigger: 'blur' },
    { type: 'email', message: 'Please Enter a Valid Email Address', trigger: 'blur' }
  ],
  password: [
    {
      required: true,
      message: 'Please Enter a Valid Password',
      trigger: 'change'
    }
  ]
});
const handleClickLogin = async () => {
  const { username, password } = ruleForm;

  const check = await loginForm.value.validate();
  if (check) {
    disabled.value = true;
    login({ username: username.trim(), password: password.trim() }, { formData: true })
      .then((res: { access_token: string; expire: number }) => {
        if (res) {
          const { access_token, expire } = res;
          localStorage.setItem('access_token', access_token);
          localStorage.setItem('expire', `${expire * 1000 + new Date().getTime()}`);
          injectCSRFTokenToHeaders();
          mainStore.setLoginStatus(true);
          const path = route.query.cur_url as string;
          router.replace({
            path: path ? path : '/home',
            query: {
              state: route.query.platform ? 'guide' : null,
              platform: route.query.platform
            }
          });
        }
      })
      .catch((error: { message: string }) => {
        ElMessage.error(error.message);
      })
      .finally(() => {
        disabled.value = false;
      });
  }
};
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
.header {
  padding: 21px 50px 71px 50px;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
}
button.el-button.el-button--primary.el-button--default.submit {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 362px;
  margin-left: 11px;
  margin-right: 10px;
}
.header,
.contents {
  background: white;
}
span.el-link__inner {
  padding-left: 36px;
  margin-top: 10px;
}
.verify {
  background: #2858ff !important;
  opacity: 0.5;
  border-radius: 8px;
  color: #ffffff;
  height: 40px;
  width: 70px;
}
.nav1 {
  flex-grow: 189;
}
.nav2 {
  flex-grow: 8;
}
.second {
  position: relative;
  z-index: 3;
  justify-content: center;
  display: grid;
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
#sigupform {
  margin: 0px auto auto 0px;
  background-color: #ffffff !important;
  box-shadow: 0px 10px 60px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
}

div#sigupform {
  width: 400px;
}
.signup {
  color: var(--el-color-primary);
}
.before {
  content: '';
  /* background-image: url('../../images/blue_triangle.png'); */
  background-repeat: no-repeat;
  background-position: bottom left;
  position: absolute;
  right: 342px;
  height: 123px;
  /* transform: translateY(50%); */
  height: 123px;
  width: 123px;
  z-index: -1;
  top: 186px;
}
.after {
  content: '';
  /* background-image: url('../../images/homerectangle.png'); */
  background-repeat: no-repeat;
  background-position: top right;
  position: absolute;
  /* top: 585px; */
  bottom: 12px;
  right: -70px;
  /* left: 1163px; */
  width: 123px;
  height: 123px;
  z-index: -1;
}
img.logo {
  width: 126px;
  height: 28px;
}
.formhead {
  font-size: 2.2rem;
  padding-top: 42px;
  margin-bottom: 24px;
  text-align: center;
  font-weight: 500;
  line-height: 42px;
  font-family: 'Roboto';
  font-style: normal;
}
/* .el-input.el-input--default.el {
  padding: 0px 10px;
} */
.el-input__inner {
  padding: unset;
}
button.el-button.el-button--primary.el-button--default.submit {
  width: 362px;
}
.submit {
  height: 51px;
  background: #2858ff !important;
  opacity: 0.5;
  border-radius: 8px;
  color: #ffffff;
}
::v-deep(.el-form-label) {
  padding: 0 3px 0 0;
}
::v-deep(.el-form-item__label) {
  justify-content: flex-start !important;
  align-items: flex-start !important;
  color: #46496f;
}
el-form-item__label {
  display: block;
  height: 24px;
}
.el-form-item.el-form-item--default.is-required.asterisk-left.el-form-item--feedback {
  flex-direction: column;
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
label.el-checkbox.el-checkbox--large {
  margin-top: 5px;
  margin-bottom: 23px;
}
.el-input.el-input--default.el {
  padding: 0px 10px;
}

button.el-button.el-button--primary.el-button--default.submit {
  width: 362px;
}

.el-input__wrapper {
  height: 46px;
  padding: 0px;
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
@media (min-width: 376px) and (max-width: 425px) {
  .second {
    margin-left: 24px;
  }
  div#sigupform {
    width: 380px;
  }
}
@media (min-width: 280px) and (max-width: 320px) {
  .el-col.el-col-10 {
    max-width: 100%;
    flex: 0 0 100%;
  }
  #signupform {
    margin: 0px -308px auto 2px;
  }
  .el-form[data-v-2534b399] {
    padding-left: 0px;
    padding-right: 0px;
  }
  .contents .el-row {
    justify-content: left;
  }
  .ellabel {
    font-size: 10.6px;
  }
  div#sigupform {
    width: 297px;
  }

  #sigupform {
    margin: 0px auto auto 11px;
    background-color: #ffffff !important;
    box-shadow: 0px 10px 60px rgba(0, 0, 0, 0.05);
    border-radius: 30px;
  }
}
::v-deep(.el-link__inner) {
  text-align: center !important;
  /* padding-left: 60px; */
}
::v-deep(.el-input__inner) {
  padding: 0px;
}
a.el-link.el-link--primary.is-underline.ellabel {
  margin-left: 60px;
}
@media (min-width: 280px) and (max-width: 425px) {
  .header {
    padding: 21px 13px 20px 0px;
  }
  a.logo {
    margin-left: 21px !important;
  }
  img.logo {
    width: 108px;
    height: 24px;
  }
  .formhead[data-v-4ca33632] {
    font-size: 1.7rem;
    padding-top: 30px;
    margin-bottom: 24px;
    text-align: center;
    font-weight: 500;
    line-height: 42px;
    font-family: 'Roboto' !important;
  }
  a.el-link.el-link--primary.is-underline.ellabel {
    margin-left: 38px;
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
}
</style>
