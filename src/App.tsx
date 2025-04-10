import { use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios';
import {
  AlipayOutlined,
  LockOutlined,
  MobileOutlined,
  TaobaoOutlined,
  UserOutlined,
  WeiboOutlined,
} from '@ant-design/icons';
import {
  LoginFormPage,
  ProConfigProvider,
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormMoney,
  ProFormText,
} from '@ant-design/pro-components';

import { AutoComplete, Button, Divider, InputNumber, Space, Tabs, message, theme } from 'antd';
import type { CSSProperties } from 'react';
type LoginType = 'phone' | 'account';

const iconStyles: CSSProperties = {
  color: 'rgba(0, 0, 0, 0.2)',
  fontSize: '18px',
  verticalAlign: 'middle',
  cursor: 'pointer',
};

interface user {
  userName: string,
  age: number
}

function App() {
  const [users, setUsers] = useState<user[]>([])

  useEffect(() => {
    // getUsers()
  }, [])
  const getUsers = async () => {
    const { data } = await axios.get('http://localhost:8080/api/v1/users')
    if (data.EC === 0) {
      setUsers(data.DT)
    }
  }
  const createUser = async (userName: string, age: number) => {
    console.log(userName, age)
    if (age !== 0 && userName.length > 0) {
      const { data } = await axios.post('http://localhost:8080/api/v1/create-user', { userName : 'aaa', age:100 })
    }
  }

  const [loginType, setLoginType] = useState<LoginType>('account');
  const { token } = theme.useToken();

  return (
    <>
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

    </>
  )
}

export default () => {
  return (
    <ProConfigProvider dark={true}>
      <App />
    </ProConfigProvider>
  );
};