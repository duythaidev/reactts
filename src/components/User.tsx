import React, { useEffect, useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps, PaginationProps } from 'antd';
import { Breadcrumb, Layout, Menu, Pagination, Table, Tag, theme } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { TableProps } from 'antd/lib';
import { getUsers, getUsersPaginate } from '../api/api';

const { Header, Content, Sider } = Layout;


interface User {
  id: string,
  userName: string,
  age: number,
  roles: string[]
}


const columns: TableProps<User>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'userName',
    key: 'userName',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Roles',
    key: 'roles',
    dataIndex: 'roles',
    render: (_, { roles }) => (
      <>
        {roles && roles.map((role) => {
          let color = role.length > 5 ? 'geekblue' : 'green';

          return (
            <Tag color={color} key={role}>
              {role.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
];

const User = () => {
  const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();

  const [userList, setUserList] = useState<User[]>([])
  const [page, setPage] = useState<number>(1)

  const [total, setTotal] = useState<number>(0)

  useEffect(() => {
    fetchUsersPaginate(page)
  }, [page])

  const fetchUsersPaginate = async (page: number) => {
    const data = await getUsersPaginate(5, page)
    if (data && data.DT.rows && data.DT.rows.length) {
      const users: User[] = []

      data.DT.rows.forEach((user: any) => {
        users.push({
          id: user.id,
          userName: user.userName,
          age: 10,
          roles: user.Role ? [user.Role.roleName] : []
        })
      });
      setTotal(10 / 5 * data.DT.count)
      setUserList(data.DT.rows)
    }
  }

  const onChange: PaginationProps['onChange'] = (pageNumber) => {
    setPage(pageNumber)
    console.log(pageNumber)
  };

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Layout>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}
            items={[
              {
                title: <Link to={'/'}>Home</Link>,
              },
              {
                title: <Link to={'/users'}>User</Link>,
              },
            ]}
          />
          <Content style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}>

            <Table pagination={false} dataSource={userList} columns={columns} />

            <Pagination className='!mt-5' align='center' showQuickJumper defaultCurrent={1} total={total} onChange={onChange} />

          </Content>

        </Layout>
      </Layout>
    </Layout>
  );
};

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

export default User;