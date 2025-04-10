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
  ProFormText,
} from '@ant-design/pro-components';

import { AutoComplete, Button, Divider, Space, Tabs, message, theme } from 'antd';
import type { CSSProperties } from 'react';
type LoginType = 'phone' | 'account';

const iconStyles: CSSProperties = {
  color: 'rgba(0, 0, 0, 0.2)',
  fontSize: '18px',
  verticalAlign: 'middle',
  cursor: 'pointer',
};

interface user {
  id: number,
  userName: string,
  age: number
}

function App() {
  const [users, setUsers] = useState<user[]>([])

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    const { data } = await axios.get('http://localhost:8080/api/v1/users')
    if (data.EC === 0) {
      setUsers(data.DT)
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
          actions={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <Divider plain>
                <span
                  style={{
                    color: token.colorTextPlaceholder,
                    fontWeight: 'normal',
                    fontSize: 14,
                  }}
                >
                  Other login methods
                </span>
              </Divider>
              <Space align="center" size={24}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    height: 40,
                    width: 40,
                    border: '1px solid ' + token.colorPrimaryBorder,
                    borderRadius: '50%',
                  }}
                >
                  <AlipayOutlined style={{ ...iconStyles, color: '#1677FF' }} />
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    height: 40,
                    width: 40,
                    border: '1px solid ' + token.colorPrimaryBorder,
                    borderRadius: '50%',
                  }}
                >
                  <TaobaoOutlined style={{ ...iconStyles, color: '#FF6A10' }} />
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    height: 40,
                    width: 40,
                    border: '1px solid ' + token.colorPrimaryBorder,
                    borderRadius: '50%',
                  }}
                >
                  <WeiboOutlined style={{ ...iconStyles, color: '#1890ff' }} />
                </div>
              </Space>
            </div>
          }
        >
          <Tabs
            centered
            activeKey={loginType}
            onChange={(activeKey) => setLoginType(activeKey as LoginType)}
          >
            <Tabs.TabPane key={'account'} tab={'Username & Password Login'} />
            <Tabs.TabPane key={'phone'} tab={'Phone Number Login'} />
          </Tabs>
          {loginType === 'account' && (
            <>
              <ProFormText name="username"
                fieldProps={{
                  size: 'large',
                }}
                placeholder={'Username: admin or user'}

                rules={[
                  {
                    required: true,
                    message: 'Please enter your username!',
                  },
                ]}

              />
              <ProFormText.Password name="password"

                fieldProps={{
                  size: 'large',
                  "autoComplete" : 'true'
                }}
                placeholder={'Password: ant.design'}
                rules={[
                  {
                    required: true,
                    message: 'Please enter your password!',
                  },
                ]}
              />
            </>
          )}
          {loginType === 'phone' && (
            <>
              <ProFormText
                fieldProps={{
                  autoComplete: 'true',
                  size: 'large',
                  prefix: (
                    <MobileOutlined
                      style={{
                        color: token.colorText,
                      }}
                      className={'prefixIcon'}
                    />
                  ),
                }}
                name="mobile"
                placeholder={'Phone number'}
                rules={[
                  {
                    required: true,
                    message: 'Please enter your phone number!',
                  },
                  {
                    pattern: /^1\d{10}$/,
                    message: 'Invalid phone number format!',
                  },
                ]}
              />
              <ProFormCaptcha
                fieldProps={{
                  size: 'large',
                  prefix: (
                    <LockOutlined
                      style={{
                        color: token.colorText,
                      }}
                      className={'prefixIcon'}
                    />
                  ),
                }}
                captchaProps={{
                  size: 'large',
                }}
                placeholder={'Enter the verification code'}
                captchaTextRender={(timing, count) => {
                  if (timing) {
                    return `${count} seconds to resend`;
                  }
                  return 'Get Verification Code';
                }}
                name="captcha"
                rules={[
                  {
                    required: true,
                    message: 'Please enter the verification code!',
                  },
                ]}
                onGetCaptcha={async () => {
                  message.success('Verification code sent! Code: 1234');
                }}
              />
            </>
          )}
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