import Loadable from 'react-loadable'
import Loading from './components/Loading'
import {DesktopOutlined} from '@ant-design/icons'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    route:{
        path: '/',
        routes:[
          {
              path:'/react',
              name: 'react面试',
              icon: <DesktopOutlined />,
              component: Loadable({
                loader: () => import('./react/index'),
                loading: Loading,
              }),
          }
        ]
    }
}