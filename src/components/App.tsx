import { use, useEffect, useState } from 'react'
import axios from 'axios';
import { connect, useSelector } from 'react-redux';
import { RootState, useAppSelector } from '../store/store';
import { buttonStyle } from '../styles/cssStyle'
import { Button, theme } from 'antd';
import {
  LoginFormPage,
  ProConfigProvider,
  ProFormCheckbox,
  ProFormMoney,
  ProFormText,
} from '@ant-design/pro-components';
import { useNavigate } from 'react-router-dom';

interface user {
  userName: string,
  age: number
}

const App = ({ count, increase, decrease }: any) => {

  const publicCount: number = useAppSelector(state => state.count)
  const navigate = useNavigate()
  const createUser = async (userName: string, age: number) => {
    console.log(userName, age)
    if (age !== 0 && userName.length > 0) {
      const { data } = await axios.post('http://localhost:8080/api/v1/users/create', { userName: 'aaa', age: 100 })
    }
  }
  const { token } = theme.useToken();
  console.log(publicCount)
  return (
    <>
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={increase} className={buttonStyle} >
          Increase
        </button>
        <button onClick={decrease} className={buttonStyle}>Decrease</button>
      </div>
      <ProConfigProvider dark={true}>
        <div
          style={{
            backgroundColor: 'white',
            height: '100vh',
          }}
        >
          <LoginFormPage
            backgroundImageUrl="https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*y0ZTS6WLwvgAAAAAAAAAAAAADml6AQ/fmt.webp"
            logo="https://github.githubassets.com/favicons/favicon.png"
            backgroundVideoUrl="https://gw.alipayobjects.com/v/huamei_gcee1x/afts/video/jXRBRK_VAwoAAAAAAAAAAAAAK4eUAQBr"
            title="Github"
            onFinish={(values: user) => {
              createUser(values.userName, values.age)
            }}
            submitter={{
              searchConfig: {
                submitText: 'Đăng nhập', // <-- đổi text ở đây
              },
            }}
            containerStyle={{
              backgroundColor: 'rgba(0, 0, 0,0.65)',
              backdropFilter: 'blur(4px)',
            }}
            subTitle="The world's largest code hosting platform"
            activityConfig={{
              style: {
                boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)',
                color: token.colorTextHeading,
                borderRadius: 8,
                backgroundColor: 'rgba(255,255,255,0.25)',
                backdropFilter: 'blur(4px)',
              },
              title: 'Activity Title (configurable image)',
              subTitle: 'Activity description and details',
              action: (
                <Button
                  size="large"
                  style={{
                    borderRadius: 20,
                    background: token.colorBgElevated,
                    color: token.colorPrimary,
                    width: 120,
                  }}
                  onClick={() => navigate('users')}
                >
                  Check it out
                </Button>
              ),
            }}

          >

            <>
              <ProFormText name="userName"
                placeholder={'Username: admin or user'}
                fieldProps={{
                  size: 'large',
                }}
                initialValue={'aaa'}
                rules={[
                  {
                    required: true,
                    message: 'Please enter your username!',
                  },
                ]}

              />
              <ProFormMoney
                name="age"
                initialValue={100}

                fieldProps={{

                  moneySymbol: false,
                  size: 'large',
                }}
                rules={[
                  {
                    required: true,
                    message: 'Please enter your age!',
                  },
                ]}
                placeholder={'Age: Enter your age'}
                locale="en-US"
                min={0}
                max={1000}
                width="lg"
              />
            </>
            <div
              style={{
                marginBlockEnd: 24,
              }}
            >
              <ProFormCheckbox noStyle name="autoLogin">
                Remember me
              </ProFormCheckbox>
              <a
                style={{
                  float: 'right',
                }}
              >
                Forgot password
              </a>
            </div>
          </LoginFormPage>
        </div>
      </ProConfigProvider>
    </>
  )
}

const mapStateToProps = (state: RootState) => ({
  count: state.count,
});
const mapDispatchToProps = {
  increase: () => {
    return { type: 'INCREMENT' }
  },
  decrease: () => {
    return { type: 'DECREMENT' }
  },
};
export default connect(mapStateToProps, mapDispatchToProps)(App)