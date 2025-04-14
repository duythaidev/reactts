import { use, useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { connect, useSelector } from 'react-redux';
import { RootState, useAppSelector } from '../store/store';
import { buttonStyle } from '../styles/cssStyle'
import { App, Space, Button, theme, message } from 'antd';
import {
  LoginFormPage,
  ProConfigProvider,
  ProFormCheckbox,
  ProFormMoney,
  ProFormText,
} from '@ant-design/pro-components';
import { getUsers, login, refreshAccount } from '../api/api';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
interface IUser {
  userName: string,
  age: number
}

const Main = () => {
  const nav = useNavigate();
  const { token } = theme.useToken();

  const { account, changeAccount } = useContext(UserContext);

  const handleLogin = async (userName: string, age: number) => {
    try {
      // const res1 = await login('aaa', 100);
      const res = await getUsers();
      console.log(res)
      // console.log(res1)
      // console.log(res);

      if (res && res.EC === 0) {
        console.log('res.DT: ', res.DT)
        message.success('Success!');
        // changeAccount()
        changeAccount(res.DT)
        nav('/users/5/2');
      } else {
        message.error('Wrong user name!');
      }
    } catch (error) {
      message.error('Cannot connect to server!');
    }
  };



  return (
    <>
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
            onFinish={(values: IUser) => {
              handleLogin(values.userName, values.age)
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
                  onClick={() => { }}
                >
                  Check it out
                </Button>
              ),
            }}
          >
            <div>
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
            </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Main)